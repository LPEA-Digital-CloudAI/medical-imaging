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
"""Tests abstract_dicom_generation_test."""
import os
import typing
from unittest import mock

from absl.testing import absltest
from absl.testing import flagsaver
from absl.testing import parameterized
import pydicom

from shared_libs.logging_lib import cloud_logging_client
from transformation_pipeline.ingestion_lib import cloud_storage_client
from transformation_pipeline.ingestion_lib import gen_test_util
from transformation_pipeline.ingestion_lib import ingest_const
from transformation_pipeline.ingestion_lib.dicom_gen import abstract_dicom_generation
from transformation_pipeline.ingestion_lib.dicom_gen import uid_generator
from transformation_pipeline.ingestion_lib.dicom_gen import wsi_dicom_file_ref
from transformation_pipeline.ingestion_lib.dicom_util import dicom_test_util


class AbstractDicomGenerationForTest(
    abstract_dicom_generation.AbstractDicomGeneration
):
  """AbstractDicomGeneration with abstract methods implemented."""

  def generate_dicom_and_push_to_store(self, ingest_file_list, polling_client):
    pass

  def decode_pubsub_msg(self, msg):
    return None

  def handle_unexpected_exception(self, polling_client, ingest_file, exp):
    pass


class AbstractDicomGenerationTest(parameterized.TestCase):
  """Tests abstract_dicom_generation_test."""

  def setUp(self):
    super().setUp()
    self._dcm_path = gen_test_util.test_file_path('test_jpeg_dicom.dcm')

  def test_get_private_tags_for_gen_dicoms(self):
    out_dir = self.create_tempdir()
    dcm = typing.cast(
        pydicom.FileDataset,
        dicom_test_util.create_test_dicom_instance(
            dcm_json=dicom_test_util.create_metadata_dict()
        ),
    )
    dcm_file_path = os.path.join(out_dir, 'test.dcm')
    dcm.save_as(dcm_file_path, write_like_original=False)
    hash_value = 'abcdef12345689'
    pubsub_msgid = 'TestPubSubMsgID_1234'
    gen_dicom = abstract_dicom_generation.GeneratedDicomFiles('local.svs', '')
    gen_dicom.generated_dicom_files = [dcm_file_path]
    gen_dicom.hash = hash_value
    private_tag_list = (
        abstract_dicom_generation.get_private_tags_for_gen_dicoms(
            gen_dicom, pubsub_msgid
        )
    )
    self.assertLen(private_tag_list, 3)
    self.assertEqual(
        (
            private_tag_list[0].address,
            private_tag_list[0].vr,
            private_tag_list[0].value,
        ),
        (
            ingest_const.DICOMTagKeywords.PUBSUB_MESSAGE_ID_TAG,
            'LT',
            pubsub_msgid,
        ),
    )
    self.assertEqual(
        (
            private_tag_list[1].address,
            private_tag_list[1].vr,
            private_tag_list[1].value,
        ),
        (ingest_const.DICOMTagKeywords.INGEST_FILENAME_TAG, 'LT', 'local.svs'),
    )

    self.assertEqual(
        (
            private_tag_list[2].address,
            private_tag_list[2].vr,
            private_tag_list[2].value,
        ),
        (ingest_const.DICOMTagKeywords.HASH_PRIVATE_TAG, 'LT', gen_dicom.hash),
    )

  def test_get_private_tags_for_gen_dicoms_no_hash(self):
    out_dir = self.create_tempdir()
    dcm = typing.cast(
        pydicom.FileDataset,
        dicom_test_util.create_test_dicom_instance(
            dcm_json=dicom_test_util.create_metadata_dict()
        ),
    )
    dcm_file_path = os.path.join(out_dir, 'test.dcm')
    dcm.save_as(dcm_file_path, write_like_original=False)
    hash_value = ''
    pubsub_msgid = 'TestPubSubMsgID_1234'
    gen_dicom = abstract_dicom_generation.GeneratedDicomFiles('local.svs', '')
    gen_dicom.generated_dicom_files = [dcm_file_path]
    gen_dicom.hash = hash_value
    private_tag_list = (
        abstract_dicom_generation.get_private_tags_for_gen_dicoms(
            gen_dicom, pubsub_msgid
        )
    )
    self.assertLen(private_tag_list, 2)
    self.assertEqual(
        (
            private_tag_list[0].address,
            private_tag_list[0].vr,
            private_tag_list[0].value,
        ),
        (
            ingest_const.DICOMTagKeywords.PUBSUB_MESSAGE_ID_TAG,
            'LT',
            pubsub_msgid,
        ),
    )
    self.assertEqual(
        (
            private_tag_list[1].address,
            private_tag_list[1].vr,
            private_tag_list[1].value,
        ),
        (ingest_const.DICOMTagKeywords.INGEST_FILENAME_TAG, 'LT', 'local.svs'),
    )

  def test_check_filename_with_valid_chars_succeeds(self):
    self.assertIsNone(
        abstract_dicom_generation._check_filename_for_invalid_chars('test.tst')
    )

  param_list1 = [chr(ch) for ch in range(0, 32)]
  param_list1.extend([chr(ch) for ch in range(127, 256)])
  param_list1.extend(
      ['?', '#', '@', ':', '&', '/', '`', '$', '~', '"', "'", '\\']
  )

  @parameterized.parameters(param_list1)
  def test_check_filename_with_invalid_chars_throws_error(self, char: str):
    with self.assertRaises(
        abstract_dicom_generation.FileNameContainsInvalidCharError
    ):
      abstract_dicom_generation._check_filename_for_invalid_chars(
          f'test{char}.tst'
      )

  param_list2 = set([chr(ch) for ch in range(32, 126)])
  param_list2 -= set(
      ['?', '#', '@', ':', '&', '/', '`', '$', '~', '"', "'", '\\']
  )

  @parameterized.parameters(param_list2)
  def test_check_filename_with_valid_chars(self, char: str):
    self.assertIsNone(
        abstract_dicom_generation._check_filename_for_invalid_chars(
            f'test{char}.tst'
        )
    )

  @mock.patch.object(uid_generator, 'validate_uid_prefix', autospec=True)
  def test_get_download_filepath_fails(self, _):
    handler = AbstractDicomGenerationForTest('')
    with self.assertRaises(
        abstract_dicom_generation.FileNameContainsInvalidCharError
    ):
      _ = handler._get_download_filepath('/invalid/$filename.svs')

  @mock.patch.object(uid_generator, 'validate_uid_prefix', autospec=True)
  def test_get_download_filepath_succeeds(self, _):
    handler = AbstractDicomGenerationForTest('')
    handler.root_working_dir = '/path/root'
    self.assertEqual(
        handler._get_download_filepath('/valid/filename.svs'),
        '/path/root/img_dir/filename.svs',
    )

  @mock.patch.object(uid_generator, 'validate_uid_prefix', autospec=True)
  @mock.patch.object(
      cloud_storage_client,
      'download_to_container',
      return_value=False,
      autospec=True,
  )
  def test_get_pubsub_file_fails(self, unused_m1, unused_m2):
    handler = AbstractDicomGenerationForTest('')
    uri = 'gs://mock/file.zip'
    download_filepath = '/some/path/file.zip'
    with self.assertRaises(abstract_dicom_generation.FileDownloadError):
      _ = handler.get_pubsub_file(uri, download_filepath)

  @mock.patch.object(uid_generator, 'validate_uid_prefix', autospec=True)
  @mock.patch.object(
      cloud_storage_client,
      'download_to_container',
      return_value=True,
      autospec=True,
  )
  def test_get_pubsub_file_succeeds(self, unused_m1, unused_m2):
    handler = AbstractDicomGenerationForTest('')
    uri = 'gs://mock/file.zip'
    download_filepath = '/some/path/file.zip'
    dcm_file = handler.get_pubsub_file(uri, download_filepath)
    self.assertEqual(dcm_file.localfile, download_filepath)
    self.assertEqual(dcm_file.source_uri, uri)

  @flagsaver.flagsaver(viewer_debug_url='http://dpas/.../dicomWeb')
  @mock.patch.object(uid_generator, 'validate_uid_prefix', autospec=True)
  @mock.patch.object(
      cloud_logging_client.CloudLoggingClient, 'debug', autospec=True
  )
  def test_log_debug_url(self, log_mk, _):
    handler = AbstractDicomGenerationForTest('')
    dcm = wsi_dicom_file_ref.init_wsi_dicom_file_ref_from_file(self._dcm_path)
    handler.log_debug_url(
        viewer_debug_url='http://other/dicomWeb', ingested_dicom=dcm
    )
    log_mk.assert_called_once_with(
        mock.ANY,
        'Debug_Link',
        {
            'url': (
                f'http://other/dicomWeb/studies/{dcm.study_instance_uid}/'
                f'series/{dcm.series_instance_uid}'
            )
        },
    )


class GeneratedDicomFilesTest(absltest.TestCase):
  """Tests for dicom_generation.GeneratedDicomFiles."""

  def test_generateddicomfiles_constructor(self) -> None:
    result = abstract_dicom_generation.GeneratedDicomFiles('abc', '123')
    self.assertEmpty(result.generated_dicom_files)
    self.assertEqual(result.localfile, 'abc')
    self.assertIsNone(result.hash)
    self.assertEqual(result.source_uri, '123')

  def test_generateddicomfiles_set_gen_dicomfiles(self) -> None:
    result = abstract_dicom_generation.GeneratedDicomFiles('abc', '123')
    result.generated_dicom_files = ['1', '2', '3']
    self.assertEqual(result.localfile, 'abc')
    self.assertEqual(result.source_uri, '123')
    self.assertIsNone(result.hash)
    self.assertEqual(result.generated_dicom_files, ['1', '2', '3'])

  def test_generateddicomfiles_set_hash(self) -> None:
    result = abstract_dicom_generation.GeneratedDicomFiles('abc', '123')
    result.hash = '567'
    self.assertEqual(result.localfile, 'abc')
    self.assertEqual(result.source_uri, '123')
    self.assertEqual(result.hash, '567')
    self.assertEmpty(result.generated_dicom_files)


if __name__ == '__main__':
  absltest.main()
