# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================
"""Unit tests for IngestGcsPubSubHandler."""

from __future__ import annotations

import json
import os
import shutil
from typing import FrozenSet, List, Mapping, MutableMapping, Optional
from unittest import mock

from absl.testing import absltest
from absl.testing import flagsaver
from absl.testing import parameterized
import google.auth
from google.cloud import pubsub_v1
import pydicom

from shared_libs.logging_lib import cloud_logging_client_instance
from shared_libs.test_utils.dicom_store_mock import dicom_store_mock
from transformation_pipeline import ingest_flags
from transformation_pipeline.ingestion_lib import cloud_storage_client
from transformation_pipeline.ingestion_lib import gen_test_util
from transformation_pipeline.ingestion_lib import ingest_const
from transformation_pipeline.ingestion_lib.dicom_gen import abstract_dicom_generation
from transformation_pipeline.ingestion_lib.dicom_gen import dicom_store_client
from transformation_pipeline.ingestion_lib.dicom_gen import uid_generator
from transformation_pipeline.ingestion_lib.dicom_gen import wsi_dicom_file_ref
from transformation_pipeline.ingestion_lib.dicom_gen.wsi_to_dicom import ingest_base
from transformation_pipeline.ingestion_lib.dicom_gen.wsi_to_dicom import ingest_gcs_handler
from transformation_pipeline.ingestion_lib.dicom_util import dicom_test_util
from transformation_pipeline.ingestion_lib.pubsub_msgs import ingestion_complete_pubsub


_OOF_TRIGGER = 'mock_oof_trigger'


def _wsiref_dict_from_files(
    file_paths: List[str],
) -> List[MutableMapping[str, str]]:
  return [
      wsi_dicom_file_ref.init_wsi_dicom_file_ref_from_file(filepath).dict()
      for filepath in file_paths
  ]


def _create_test_pubsub_msg(
    name: str, bucket: str = 'bogus'
) -> pubsub_v1.types.ReceivedMessage:
  data = json.dumps({'name': name, 'bucket': bucket})
  message = pubsub_v1.types.PubsubMessage(
      attributes={'eventType': 'OBJECT_FINALIZE'},
      data=data.encode('utf-8'),
      message_id='test',
  )
  return pubsub_v1.types.ReceivedMessage(
      ack_id='5', message=message, delivery_attempt=1
  )


class IngestGcsPubSubHandlerTest(parameterized.TestCase):
  """Tests for IngestGcsPubSubHandler."""

  def assert_ingested_list(
      self,
      expected_ingestion: List[Mapping[str, str]],
      actual_ingestion: List[wsi_dicom_file_ref.WSIDicomFileRef],
  ) -> None:
    # Tests that contents of list match, ignoring order.
    expected = {json.dumps(val, sort_keys=True) for val in expected_ingestion}
    ingested = {
        json.dumps(wsiref.dict(), sort_keys=True) for wsiref in actual_ingestion
    }
    self.assertEqual(
        expected, ingested, f'\n\nExpected: {expected}\n\nIngested: {ingested}'
    )

  def assert_ingested(
      self,
      ingested: List[Mapping[str, str]],
      prev_ingested: List[Mapping[str, str]],
      dicom_store_ingest_results: dicom_store_client.UploadSlideToDicomStoreResults,
  ) -> None:
    self.assert_ingested_list(ingested, dicom_store_ingest_results.ingested)
    self.assert_ingested_list(
        prev_ingested, dicom_store_ingest_results.previously_ingested
    )

  def assert_oof_trigger(
      self,
      oof_trigger_msg: ingestion_complete_pubsub.PubSubMsg,
      dicomweb_url: str,
      ingest_results: dicom_store_client.UploadSlideToDicomStoreResults,
      source_in_main_store: bool,
  ) -> None:
    self.assertEqual(
        oof_trigger_msg,
        ingestion_complete_pubsub.create_ingest_complete_pubsub_msg(
            dicomweb_url,
            _OOF_TRIGGER,
            ingest_results.ingested,
            ingest_results.previously_ingested,
            {
                ingest_const.OofPassThroughKeywords.SOURCE_DICOM_IN_MAIN_STORE: (
                    source_in_main_store
                ),
                ingest_const.OofPassThroughKeywords.DISABLE_TFEXAMPLE_WRITE: (
                    True
                ),
                ingest_const.OofPassThroughKeywords.DPAS_INGESTION_TRACE_ID: (
                    ingest_const.MISSING_INGESTION_TRACE_ID
                ),
            },
        ),
    )

  def _create_inference_trigger_config(
      self,
      dicom_store_web_path: str = 'oof_dicom_store',
      pubsub_topic: str = _OOF_TRIGGER,
      use_oof_legacy_pipeline: bool = True,
      inference_config_path: str = '',
  ) -> ingest_gcs_handler.InferenceTriggerConfig:
    return ingest_gcs_handler.InferenceTriggerConfig(
        dicom_store_web_path=dicom_store_web_path,
        pubsub_topic=pubsub_topic,
        use_oof_legacy_pipeline=use_oof_legacy_pipeline,
        inference_config_path=inference_config_path,
    )

  @flagsaver.flagsaver(
      pod_hostname='1234',
      dicom_guid_prefix=uid_generator.TEST_UID_PREFIX,
      gcs_ingest_study_instance_uid_source=ingest_flags.UidSource.METADATA,
  )
  def _create_ingestion_handler(
      self,
      ingest_succeeded_uri: str = 'bar',
      ingest_failed_uri: str = 'foo',
      dicom_store_web_path: str = 'dstore',
      ingest_ignore_root_dirs: FrozenSet[str] = frozenset(['bad-food']),
      oof_trigger_config: Optional[
          ingest_gcs_handler.InferenceTriggerConfig
      ] = None,
  ) -> ingest_gcs_handler.IngestGcsPubSubHandler:
    return ingest_gcs_handler.IngestGcsPubSubHandler(
        ingest_succeeded_uri=ingest_succeeded_uri,
        ingest_failed_uri=ingest_failed_uri,
        dicom_store_web_path=dicom_store_web_path,
        ingest_ignore_root_dirs=ingest_ignore_root_dirs,
        oof_trigger_config=oof_trigger_config,
    )

  @mock.patch.object(cloud_logging_client_instance, '_absl_log')
  @flagsaver.flagsaver(gcs_upload_ignore_file_exts=['json'])
  def test_gcs_upload_ignore_file_config_contains_ext_not_start_with_period(
      self, mock_log
  ):
    self.assertEmpty(ingest_gcs_handler._get_ignored_gcs_upload_file_exts())
    self.assertIn(
        'extension that does not start with a "."', mock_log.call_args[0][0]
    )

  @mock.patch.object(cloud_logging_client_instance, '_absl_log')
  @flagsaver.flagsaver(gcs_upload_ignore_file_exts='')
  def test_gcs_upload_ignore_file_config_default(self, mock_log):
    self.assertEmpty(ingest_gcs_handler._get_ignored_gcs_upload_file_exts())
    mock_log.assert_not_called()

  @parameterized.parameters([
      ([' " " ', ' " .json " '],),
      ([" ' ' ", ' ".json" '],),
  ])
  def test_gcs_upload_ignore_file_config_user_defined_succeeds(
      self, config_test: List[str]
  ):
    with flagsaver.flagsaver(gcs_upload_ignore_file_exts=config_test):
      self.assertEqual(
          ingest_gcs_handler._get_ignored_gcs_upload_file_exts(), {'', '.json'}
      )

  @flagsaver.flagsaver(
      pod_hostname='1234',
      dicom_guid_prefix=uid_generator.TEST_UID_PREFIX,
  )
  def test_init_invalid_gcs_ingest_study_instance_uid_source(self):
    with self.assertRaisesRegex(
        ValueError, 'Unsupported StudyInstanceUID source value'
    ):
      _ = ingest_gcs_handler.IngestGcsPubSubHandler(
          ingest_succeeded_uri='bar',
          ingest_failed_uri='foo',
          dicom_store_web_path='dstore',
          ingest_ignore_root_dirs=frozenset(),
      )

  def test_verify_success_and_failure_buckets_missing_success(self):
    with self.assertRaises(ingest_gcs_handler.StorageBucketNotSpecifiedError):
      _ = self._create_ingestion_handler(ingest_succeeded_uri='')

  def test_verify_success_and_failure_buckets_missing_failure(self):
    with self.assertRaises(ingest_gcs_handler.StorageBucketNotSpecifiedError):
      _ = self._create_ingestion_handler(ingest_failed_uri='')

  def test_verify_success_and_failure_buckets(self):
    ingest = self._create_ingestion_handler()
    self.assertEqual(
        ingest._verify_success_and_failure_buckets('bar', 'foo'),
        ingest_base.GcsIngestionBuckets(success_uri='bar', failure_uri='foo'),
    )

  def test_failure_bucket_exception_path(self):
    ingest = self._create_ingestion_handler(
        ingest_failed_uri='gs://failure-bucket'
    )
    self.assertEqual(
        ingest.failure_bucket_exception_path('error_msg'),
        'gs://failure-bucket/error_msg',
    )

  @parameterized.named_parameters([
      ('dicom_1', 'test.dicom', '.dicom', False),
      ('dicom_2', 'test.dcm', '.dcm', False),
      ('jpg', 'test.jpg', '.jpg', False),
      ('jpeg', 'test.jpeg', '.jpeg', False),
      ('message_read', 'good-food/img.svs', '.svs', False),
      ('png', 'test.png', '.png', False),
      ('svs', 'test.svs', '.svs', False),
      ('tif', 'test.TIF', '.tif', False),
      ('tiff', 'test.TIFF', '.tiff', False),
      ('unknown', 'test.unknown', '.unknown', False),
      ('valid_file_1', 'test.ZIP', '.zip', False),
      ('zip_file', 'test.ZiP', '.zip', False),
      ('json_file', 'foo.JSON', '.json', True),
      ('no_ext', 'foo', '', True),
  ])
  @flagsaver.flagsaver(gcs_upload_ignore_file_exts=['', ' ".JsOn "'])
  def test_decode_pubsub_msg(self, name: str, extension: str, ignored: bool):
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(_create_test_pubsub_msg(name))
    self.assertEqual(msg.ignore, ignored)
    self.assertEqual(ingest.decoded_file_ext, extension)

  @parameterized.named_parameters([
      ('message_written_to_ignored_dir_1', 'bad-food/img.svs', '.svs'),
      ('message_written_to_ignored_dir_2', 'bad-food/test.ZIP', '.zip'),
      ('no_file_name', '', None),
  ])
  def test_decode_pubsub_msg_ignore_msg_message_ignored(
      self, name: str, extension: Optional[str]
  ):
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(_create_test_pubsub_msg(name))
    self.assertTrue(msg.ignore)
    self.assertEqual(ingest.decoded_file_ext, extension)

  def test_decode_pubsub_msg_ignore_msg_no_bucket_name(self):
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(
        _create_test_pubsub_msg('good-food/img.svs', '')
    )
    self.assertTrue(msg.ignore)
    self.assertIsNone(ingest.decoded_file_ext)

  def test_decode_pubsubmsg_no_data(self):
    pubsub_msg = pubsub_v1.types.ReceivedMessage(
        ack_id='5',
        message=pubsub_v1.types.PubsubMessage(
            attributes={'eventType': 'OBJECT_FINALIZE'},
            data=None,
            message_id='test',
        ),
        delivery_attempt=1,
    )
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(pubsub_msg)
    self.assertTrue(msg.ignore)
    self.assertIsNone(ingest.decoded_file_ext)

  def test_decode_pubsubmsg_missing_event_type(self):
    pubsub_msg = pubsub_v1.types.ReceivedMessage(
        ack_id='5',
        message=pubsub_v1.types.PubsubMessage(
            data=json.dumps({'name': 'foo', 'bucket': 'bar'}), message_id='test'
        ),
        delivery_attempt=1,
    )
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(pubsub_msg)
    self.assertTrue(msg.ignore)
    self.assertIsNone(ingest.decoded_file_ext)

  def test_decode_pubsubmsg_invalid_event_type(self):
    pubsub_msg = pubsub_v1.types.ReceivedMessage(
        ack_id='5',
        message=pubsub_v1.types.PubsubMessage(
            attributes={'eventType': 'OTHER'},
            data=json.dumps({'name': 'foo', 'bucket': 'bar'}),
            message_id='test',
        ),
        delivery_attempt=1,
    )
    ingest = self._create_ingestion_handler()
    msg = ingest.decode_pubsub_msg(pubsub_msg)
    self.assertTrue(msg.ignore)
    self.assertIsNone(ingest.decoded_file_ext)

  @parameterized.parameters([
      ('invalid.dcm', 'IngestDicom'),
      ('test_slide_coordinates.dcm', 'IngestDicom'),
      ('google.jpg', 'IngestFlatImage'),
      ('google.png', 'IngestFlatImage'),
      ('google_tif_flat.tif', 'IngestFlatImage'),
      ('debug.svs', 'IngestSVS'),
      ('debug.unknown', 'IngestSVS'),
      ('google_tif_multi.tif', 'IngestSVS'),
      ('google_tif_tags.tif', 'IngestSVS'),
      ('invalidpath.tif', 'IngestSVS'),
      ('test.ndpi', 'IngestSVS'),
      ('test_jpeg_dicom.dcm', 'IngestWsiDicom'),
      ('test_wsi.zip', 'IngestWsiDicom'),
  ])
  def test_get_message_dicom_handler(
      self, test_file: str, expected_handler: str
  ):
    ingest = self._create_ingestion_handler()
    ingest.decode_pubsub_msg(_create_test_pubsub_msg(test_file))
    self.assertEqual(
        ingest._get_message_dicom_handler(
            abstract_dicom_generation.GeneratedDicomFiles(
                gen_test_util.test_file_path(test_file), None
            )
        ).name,
        expected_handler,
    )

  def test_get_message_dicom_handler_default_handler(self):
    ingest = self._create_ingestion_handler()
    self.assertEqual(
        ingest._get_message_dicom_handler(
            abstract_dicom_generation.GeneratedDicomFiles('', None)
        ).name,
        'IngestSVS',
    )

  @mock.patch.object(
      cloud_storage_client,
      'download_to_container',
      return_value=True,
      autospec=True,
  )
  def test_get_pubsub_file_from_gcs_succeeds(self, _):
    ingest = self._create_ingestion_handler()
    uri = 'gs://mock/file.zip'
    download_filepath = '/some/path/file.svs'
    dcm_file = ingest.get_pubsub_file(uri, download_filepath)
    self.assertEqual(dcm_file.localfile, download_filepath)
    self.assertEqual(dcm_file.source_uri, uri)

  def test_handle_unexpected_exception_no_ingest_file(self):
    ingest = self._create_ingestion_handler()
    ingest.handle_unexpected_exception(mock.Mock(), None, RuntimeError())

  @mock.patch.object(
      cloud_storage_client, 'blob_exists', return_value=False, autospec=True
  )
  def test_handle_unexpected_exception_source_missing(self, _):
    ingest_file = abstract_dicom_generation.GeneratedDicomFiles(
        localfile='path/to/original.dcm', source_uri='dicom_store_uri'
    )
    ingest = self._create_ingestion_handler()
    ingest.handle_unexpected_exception(mock.Mock(), ingest_file, RuntimeError())

  @mock.patch.object(
      cloud_storage_client, 'blob_exists', return_value=True, autospec=True
  )
  @mock.patch.object(
      cloud_storage_client,
      'copy_blob_to_uri',
      return_value=False,
      autospec=True,
  )
  def test_handle_unexpected_exception_copy_fails(self, unused_mk1, unused_mk2):
    ingest_file = abstract_dicom_generation.GeneratedDicomFiles(
        localfile='path/to/original.dcm', source_uri='dicom_store_uri'
    )
    ingest = self._create_ingestion_handler()
    ingest.handle_unexpected_exception(mock.Mock(), ingest_file, RuntimeError())

  @mock.patch.object(
      cloud_storage_client, 'blob_exists', return_value=True, autospec=True
  )
  @mock.patch.object(
      cloud_storage_client, 'copy_blob_to_uri', return_value=True, autospec=True
  )
  @mock.patch.object(
      cloud_storage_client, 'del_blob', return_value=False, autospec=True
  )
  def test_handle_unexpected_exception_delete_fails(
      self, unused_mk1, unused_mk2, unused_mk3
  ):
    ingest_file = abstract_dicom_generation.GeneratedDicomFiles(
        localfile='path/to/original.dcm', source_uri='dicom_store_uri'
    )
    ingest = self._create_ingestion_handler()
    ingest.handle_unexpected_exception(mock.Mock(), ingest_file, RuntimeError())

  @mock.patch.object(
      cloud_storage_client, 'blob_exists', return_value=True, autospec=True
  )
  @mock.patch.object(
      cloud_storage_client, 'copy_blob_to_uri', return_value=True, autospec=True
  )
  @mock.patch.object(
      cloud_storage_client, 'del_blob', return_value=True, autospec=True
  )
  def test_handle_unexpected_exception_succeeds(
      self, unused_mk1, unused_mk2, unused_mk3
  ):
    ingest_file = abstract_dicom_generation.GeneratedDicomFiles(
        localfile='path/to/original.dcm', source_uri='dicom_store_uri'
    )
    ingest = self._create_ingestion_handler()
    ingest.handle_unexpected_exception(mock.Mock(), ingest_file, RuntimeError())

  def test_create_ingest_complete_pubsub_msg_no_instances(self):
    ingest = self._create_ingestion_handler()
    results = dicom_store_client.UploadSlideToDicomStoreResults([], [])
    self.assertIsNone(ingest._create_ingest_complete_pubsub_msg(results, None))

  @mock.patch.object(
      google.auth,
      'default',
      autospec=True,
      return_value=(
          mock.create_autospec(
              google.auth.credentials.Credentials, instance=True
          ),
          'mock-gcp-project',
      ),
  )
  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_create_ingest_complete_pubsub_msg_default_dicom_store(
      self, unused_mock1, unused_mock2
  ):
    pubsub_topic_name = 'OOFPubSubTopic'
    ingest_handler = self._create_ingestion_handler(
        oof_trigger_config=self._create_inference_trigger_config(
            pubsub_topic=pubsub_topic_name
        )
    )
    dicomweb_path = ingest_handler.dcm_store_client.dicomweb_path
    ingest = [
        dicom_test_util.create_mock_dicom_fref(
            {ingest_const.DICOMTagKeywords.SERIES_INSTANCE_UID: '1'}
        )
    ]
    previous = [
        dicom_test_util.create_mock_dicom_fref(
            {ingest_const.DICOMTagKeywords.SERIES_INSTANCE_UID: '2'}
        )
    ]
    results = dicom_store_client.UploadSlideToDicomStoreResults(
        ingest, previous
    )

    self.assertEqual(
        ingest_handler._create_ingest_complete_pubsub_msg(results, None),
        ingestion_complete_pubsub.create_ingest_complete_pubsub_msg(
            dicomweb_path,
            pubsub_topic_name,
            ingest,
            previous,
            {
                ingest_const.OofPassThroughKeywords.SOURCE_DICOM_IN_MAIN_STORE: (
                    True
                ),
                ingest_const.OofPassThroughKeywords.DISABLE_TFEXAMPLE_WRITE: (
                    True
                ),
                ingest_const.OofPassThroughKeywords.DPAS_INGESTION_TRACE_ID: (
                    ingest_const.MISSING_INGESTION_TRACE_ID
                ),
            },
        ),
    )

  @mock.patch.object(
      google.auth,
      'default',
      autospec=True,
      return_value=(
          mock.create_autospec(
              google.auth.credentials.Credentials, instance=True
          ),
          'mock-gcp-project',
      ),
  )
  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_create_ingest_complete_pubsub_msg_alternative_dicom_store(
      self, unused_mock1, unused_mock2
  ):
    dicomweb_path = 'Alternative_DICOM_Store'
    pubsub_topic_name = 'OOFPubSubTopic'
    ingest_handler = self._create_ingestion_handler(
        oof_trigger_config=self._create_inference_trigger_config(
            pubsub_topic=pubsub_topic_name
        )
    )
    ingest = [
        dicom_test_util.create_mock_dicom_fref(
            {ingest_const.DICOMTagKeywords.SERIES_INSTANCE_UID: '1'}
        )
    ]
    previous = [
        dicom_test_util.create_mock_dicom_fref(
            {ingest_const.DICOMTagKeywords.SERIES_INSTANCE_UID: '2'}
        )
    ]
    results = dicom_store_client.UploadSlideToDicomStoreResults(
        ingest, previous
    )
    alter_client = dicom_store_client.DicomStoreClient(dicomweb_path)

    self.assertEqual(
        ingest_handler._create_ingest_complete_pubsub_msg(
            results, alter_client
        ),
        ingestion_complete_pubsub.create_ingest_complete_pubsub_msg(
            dicomweb_path,
            pubsub_topic_name,
            ingest,
            previous,
            {
                ingest_const.OofPassThroughKeywords.SOURCE_DICOM_IN_MAIN_STORE: (
                    False
                ),
                ingest_const.OofPassThroughKeywords.DISABLE_TFEXAMPLE_WRITE: (
                    True
                ),
                ingest_const.OofPassThroughKeywords.DPAS_INGESTION_TRACE_ID: (
                    ingest_const.MISSING_INGESTION_TRACE_ID
                ),
            },
        ),
    )

  @parameterized.named_parameters([
      ('oof triggering pubsub topic defined', _OOF_TRIGGER),
      ('oof triggering pubsub topic undefined', ''),
  ])
  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_upload_to_main_dicom_store_only(
      self, oof_pubsub_topic, unused_mk_get_topic
  ):
    mock_dicom_store_url = 'https://mock.dicom.store.com/dicomWeb'
    wikipedia_wsi = gen_test_util.test_file_path('test_wikipedia.dcm')
    expected_ingested = _wsiref_dict_from_files([wikipedia_wsi])
    with dicom_store_mock.MockDicomStores(
        mock_dicom_store_url
    ) as mock_dicom_store:
      handler = self._create_ingestion_handler(
          dicom_store_web_path=mock_dicom_store_url,
          oof_trigger_config=self._create_inference_trigger_config(
              pubsub_topic=oof_pubsub_topic
          ),
      )
      result = handler._upload_to_dicom_stores(
          ingest_base.DicomInstanceIngestionSets([wikipedia_wsi], None),
          dicom_store_client.DiscoverExistingSeriesOptions.USE_HASH,
          None,
      )

    self.assert_ingested(expected_ingested, [], result.main_store_results)
    self.assertIsNone(result.oof_ingest_results)
    if not oof_pubsub_topic:
      self.assertIsNone(result.ingest_complete_oof_trigger_msg)
    else:
      self.assert_oof_trigger(
          result.ingest_complete_oof_trigger_msg,
          mock_dicom_store_url,
          result.main_store_results,
          True,
      )
    mock_dicom_store[mock_dicom_store_url].assert_uid_in_store(
        self, result.main_store_results.slide_instances_in_dicom_store
    )

  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_upload_to_dicom_store_dicom_exists_seriesuid_internal_gen(
      self, unused_mk_get_topic
  ):
    mock_dicom_store_url = 'https://mock.dicom.store.com/dicomWeb'
    test_wsi_dcm_file = gen_test_util.test_file_path('wsi_private_tags.dcm')
    expected_ingested = _wsiref_dict_from_files([test_wsi_dcm_file])
    with dicom_store_mock.MockDicomStores(
        mock_dicom_store_url
    ) as mock_dicom_store:
      handler = self._create_ingestion_handler(
          dicom_store_web_path=mock_dicom_store_url,
          oof_trigger_config=self._create_inference_trigger_config(),
      )
      with pydicom.dcmread(test_wsi_dcm_file) as dcm:
        # Change series uid for mock previously ingested DICOM
        # Previously ingested DICOM should be found based on common private
        # tag hash value. With instance being ingested.
        dcm.SeriesInstanceUID = '92329.92392'
        mock_dicom_store[mock_dicom_store_url].add_instance(dcm)
        # expected previous ingestion should match previously ingested DICOM.
        expected_ingested[0]['SeriesInstanceUID'] = dcm.SeriesInstanceUID

      result = handler._upload_to_dicom_stores(
          ingest_base.DicomInstanceIngestionSets([test_wsi_dcm_file], None),
          dicom_store_client.DiscoverExistingSeriesOptions.USE_HASH,
          None,
      )

    self.assert_ingested([], expected_ingested, result.main_store_results)
    self.assertIsNone(result.oof_ingest_results)
    self.assert_oof_trigger(
        result.ingest_complete_oof_trigger_msg,
        mock_dicom_store_url,
        result.main_store_results,
        True,
    )
    mock_dicom_store[mock_dicom_store_url].assert_uid_in_store(
        self, result.main_store_results.slide_instances_in_dicom_store
    )

  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_upload_to_main_dicom_store_dicom_exists_seriesuid_externally_gen(
      self, unused_mk_get_topic
  ):
    mock_dicom_store_url = 'https://mock.dicom.store.com/dicomWeb'
    test_wsi_dcm_file = gen_test_util.test_file_path('test_wikipedia.dcm')
    expected_ingested = _wsiref_dict_from_files([test_wsi_dcm_file])
    with dicom_store_mock.MockDicomStores(
        mock_dicom_store_url
    ) as mock_dicom_store:
      handler = self._create_ingestion_handler(
          dicom_store_web_path=mock_dicom_store_url,
          oof_trigger_config=self._create_inference_trigger_config(),
      )
      mock_dicom_store[mock_dicom_store_url].add_instance(test_wsi_dcm_file)

      result = handler._upload_to_dicom_stores(
          ingest_base.DicomInstanceIngestionSets([test_wsi_dcm_file], None),
          dicom_store_client.DiscoverExistingSeriesOptions.USE_STUDY_AND_SERIES,
          None,
      )

    self.assert_ingested([], expected_ingested, result.main_store_results)
    self.assertIsNone(result.oof_ingest_results)
    self.assert_oof_trigger(
        result.ingest_complete_oof_trigger_msg,
        mock_dicom_store_url,
        result.main_store_results,
        True,
    )
    mock_dicom_store[mock_dicom_store_url].assert_uid_in_store(
        self, result.main_store_results.slide_instances_in_dicom_store
    )

  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  def test_upload_to_main_dicom_store_and_oof(self, unused_mk_get_topic):
    mock_main_dicom_store_url = 'https://mock.dicom.store.com/dicomWeb'
    mock_oof_dicom_store_url = 'http://mock.oof.dicom.com/dcmWeb'

    dsample_1 = gen_test_util.test_file_path('downsample-1-in.dcm')
    dsample_32 = gen_test_util.test_file_path('downsample-32-in.dcm')
    # In Test dicom store util will change series of dsample_8 in unit test.
    # assumes its can write to instance.
    tempdir = self.create_tempdir()
    dsample_8 = os.path.join(tempdir, 'downsample-8-in.dcm')
    shutil.copyfile(
        gen_test_util.test_file_path('downsample-8-in.dcm'), dsample_8
    )

    # Note on dsample_32 main ingestion automatically includes largest and
    # and smallest ingestion, even if not included in WsiDownsampleLayers.
    # Largest and smallest determined via downsampling value in the generated
    # DICOM filenames.
    expected_main_ingested = _wsiref_dict_from_files([dsample_1, dsample_32])
    expected_oof_ingested = _wsiref_dict_from_files([dsample_8])
    expected_oof_ingested[0]['SeriesInstanceUID'] = expected_main_ingested[0][
        'SeriesInstanceUID'
    ]

    with dicom_store_mock.MockDicomStores(
        mock_main_dicom_store_url, mock_oof_dicom_store_url
    ) as mock_dicom_stores:
      handler = self._create_ingestion_handler(
          dicom_store_web_path=mock_main_dicom_store_url,
          oof_trigger_config=self._create_inference_trigger_config(
              dicom_store_web_path=mock_oof_dicom_store_url
          ),
      )
      result = handler._upload_to_dicom_stores(
          ingest_base.DicomInstanceIngestionSets(
              [dsample_1, dsample_8, dsample_32],
              ingest_base.WsiDownsampleLayers({1}, {8}),
          ),
          dicom_store_client.DiscoverExistingSeriesOptions.USE_HASH,
          None,
      )
    self.assert_ingested(expected_main_ingested, [], result.main_store_results)
    self.assert_ingested(expected_oof_ingested, [], result.oof_ingest_results)
    self.assert_oof_trigger(
        result.ingest_complete_oof_trigger_msg,
        mock_oof_dicom_store_url,
        result.oof_ingest_results,
        False,
    )
    mock_dicom_stores[mock_main_dicom_store_url].assert_uid_in_store(
        self, result.main_store_results.slide_instances_in_dicom_store
    )
    mock_dicom_stores[mock_oof_dicom_store_url].assert_uid_in_store(
        self, result.oof_ingest_results.slide_instances_in_dicom_store
    )

  @parameterized.named_parameters([
      dict(
          testcase_name='enabled_legacy_oof_pipeline',
          oof_dicomweb_url='http://mock.oof.dicom.com/dcmWeb',
          oof_trigger=_OOF_TRIGGER,
          oof_legacy_pipeline=True,
          oof_inference_config='',
          expected=True,
      ),
      dict(
          testcase_name='enabled_inference_pipeline',
          oof_dicomweb_url='http://mock.oof.dicom.com/dcmWeb',
          oof_trigger=_OOF_TRIGGER,
          oof_legacy_pipeline=False,
          oof_inference_config='inference_config.json',
          expected=True,
      ),
      dict(
          testcase_name='disabled_missing_oof_dicom_store',
          oof_dicomweb_url='',
          oof_trigger=_OOF_TRIGGER,
          oof_legacy_pipeline=True,
          oof_inference_config='',
          expected=False,
      ),
      dict(
          testcase_name='disabled_missing_oof_topic',
          oof_dicomweb_url='http://mock.oof.dicom.com/dcmWeb',
          oof_trigger='',
          oof_legacy_pipeline=True,
          oof_inference_config='',
          expected=False,
      ),
      dict(
          testcase_name='disabled_missing_inference_config',
          oof_dicomweb_url='http://mock.oof.dicom.com/dcmWeb',
          oof_trigger=_OOF_TRIGGER,
          oof_legacy_pipeline=False,
          oof_inference_config='',
          expected=False,
      ),
  ])
  @mock.patch.object(
      google.auth,
      'default',
      autospec=True,
      return_value=(
          mock.create_autospec(
              google.auth.credentials.Credentials, instance=True
          ),
          'mock-gcp-project',
      ),
  )
  @mock.patch.object(pubsub_v1.PublisherClient, 'get_topic', autospec=True)
  @mock.patch.object(
      ingestion_complete_pubsub,
      'read_inference_pipeline_config_from_json',
      autospec=True,
  )
  def test_is_oof_ingestion_enabled(
      self,
      unused_read_config_mk,
      unused_get_topic_mk,
      unused_cred_mk,
      oof_dicomweb_url,
      oof_trigger,
      oof_legacy_pipeline,
      oof_inference_config,
      expected,
  ):
    handler = self._create_ingestion_handler(
        dicom_store_web_path='https://mock.dicom.store.com/dicomWeb',
        oof_trigger_config=self._create_inference_trigger_config(
            dicom_store_web_path=oof_dicomweb_url,
            pubsub_topic=oof_trigger,
            use_oof_legacy_pipeline=oof_legacy_pipeline,
            inference_config_path=oof_inference_config,
        ),
    )
    self.assertEqual(handler.is_oof_ingestion_enabled, expected)

  @mock.patch.object(
      dicom_store_client.UploadSlideToDicomStoreResults,
      'slide_has_instances_in_dicom_store',
      autospec=True,
      return_value=True,
  )
  def test_create_ingest_complete_pubsub_msg_returns_none_if_invalid_pubsub_msg(
      self,
      unused_mock,
  ):
    ingest = self._create_ingestion_handler()
    results = dicom_store_client.UploadSlideToDicomStoreResults([], [])
    self.assertIsNone(ingest._create_ingest_complete_pubsub_msg(results, None))


if __name__ == '__main__':
  absltest.main()
