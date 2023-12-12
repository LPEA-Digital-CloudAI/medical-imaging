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
"""Tests metadata storage client."""
import json
import os

from absl import flags
from absl.testing import absltest
from absl.testing import flagsaver
from absl.testing import parameterized

from transformation_pipeline.ingestion_lib import csv_util
from transformation_pipeline.ingestion_lib.dicom_gen import dicom_schema_util
from transformation_pipeline.ingestion_lib.dicom_gen.wsi_to_dicom import metadata_storage_client

FLAGS = flags.FLAGS

TESTDATA_DIR = (
    'transformation_pipeline/testdata'
)


class MetadataStorageClientTest(parameterized.TestCase):
  """Tests metadata storage client."""

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_wsi_dicom_schema_loader(self):
    """Tests loading WSI Schema."""
    wsi_json_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'example_schema_wsi.json'
    )
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_client = metadata_storage_client.MetadataStorageClient()
    meta_client.set_debug_metadata([metadata_filename, wsi_json_filename])
    schema_filter = {
        'SOPClassUID_Name': 'VL Whole Slide Microscopy Image IOD Modules'
    }
    schema = meta_client.get_dicom_schema(schema_filter)
    schema = json.dumps(schema)

    with open(wsi_json_filename, 'rt') as infile:
      expected_schema_json = infile.read()
    expected_schema = json.loads(expected_schema_json)
    del expected_schema['DICOMSchemaDef']
    expected_schema_json = json.dumps(expected_schema)
    self.assertEqual(schema, expected_schema_json)

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_invalid_named_schema_loader(self):
    """Tests MetadataStorageClient raises exception if schema not found."""

    wsi_json_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'example_schema_wsi.json'
    )
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_client = metadata_storage_client.MetadataStorageClient()
    meta_client.set_debug_metadata([metadata_filename, wsi_json_filename])

    schema_filter = {'SOPClassUID_Name': 'Invalid Image Storage'}

    with self.assertRaises(
        metadata_storage_client.MetadataSchemaExceptionError
    ):
      meta_client.get_dicom_schema(schema_filter)

  @parameterized.named_parameters([
      dict(
          testcase_name='bar_code_value_primary_key',
          primary_key='MD-03-3-A1-2',
          metadata_column_name='Bar Code Value',
          expected_column_values='expected_metadata_column_values.json',
      ),
      dict(
          testcase_name='person_name_primary_key',
          primary_key='Test^Person',
          metadata_column_name='Patient Name',
          expected_column_values=(
              'expected_test_person_metadata_column_values.json'
          ),
      ),
  ])
  @flagsaver.flagsaver(metadata_bucket='test')
  def test_get_slide_metadata_from_csv(
      self, primary_key, metadata_column_name, expected_column_values
  ):
    """Test CSV Metadata reader/row data extractor for valid barcode value."""
    wsi_json_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'example_schema_wsi.json'
    )
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_client = metadata_storage_client.MetadataStorageClient()
    meta_client.set_debug_metadata([metadata_filename, wsi_json_filename])
    with flagsaver.flagsaver(
        metadata_primary_key_column_name=metadata_column_name
    ):
      meta_data = meta_client.get_slide_metadata_from_csv(primary_key)

    # test returned metadata has expected shape
    self.assertEqual(meta_data.shape, (1, 43))

    # test returned metadata has expected column names
    column_names = json.dumps(list(meta_data.columns))
    with open(
        os.path.join(
            FLAGS.test_srcdir,
            TESTDATA_DIR,
            'expected_metadata_column_names.json',
        ),
        'rt',
    ) as infile:
      expected_column_names = infile.read()
    self.assertEqual(column_names.strip(), expected_column_names.strip())

    # test returned metadata has expected column values
    with open(
        os.path.join(
            FLAGS.test_srcdir,
            TESTDATA_DIR,
            expected_column_values,
        ),
        'rt',
    ) as infile:
      expected_row_values = infile.read()
    row_values = json.dumps(meta_data.values[0].tolist())
    self.assertEqual(row_values.strip(), expected_row_values.strip())

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_get_slide_metadata_from_csv_for_invalid_barcode(self):
    """invalid barcode raises execption ."""
    barcode = 'Invalid_barcode'
    wsi_json_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'example_schema_wsi.json'
    )
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_client = metadata_storage_client.MetadataStorageClient()
    meta_client.set_debug_metadata([metadata_filename, wsi_json_filename])

    with self.assertRaises(
        metadata_storage_client.MetadataNotFoundExceptionError
    ):
      meta_client.get_slide_metadata_from_csv(barcode)

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_get_slide_metadata_from_csv_for_duplicate_barcode(self):
    """invalid barcode raises execption ."""
    barcode = 'MD-03-3-A1-2'
    wsi_json_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'example_schema_wsi.json'
    )
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata_duplicate.csv'
    )
    meta_client = metadata_storage_client.MetadataStorageClient()
    meta_client.set_debug_metadata([metadata_filename, wsi_json_filename])

    with self.assertRaises(
        metadata_storage_client.MetadataDefinedOnMultipleRowError
    ):
      meta_client.get_slide_metadata_from_csv(barcode)

  def test_norm_column_name(self):
    """Test function which normalizes csv column names."""
    norm_name = dicom_schema_util.norm_column_name(
        '\n\n test column  name   \n\n'
    )
    self.assertEqual(norm_name, 'TESTCOLUMNNAME')

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_find_data_frame_column_name(self):
    """Test finds column name in pandas data frame."""
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_data = csv_util.read_csv(metadata_filename)
    name = dicom_schema_util.find_data_frame_column_name(
        meta_data, '\n\n Bar C o d e Value \n\n'
    )
    self.assertEqual(name, 'Bar Code Value')
    name = dicom_schema_util.find_data_frame_column_name(
        meta_data, '\n\n Specimen UID \n\n'
    )
    self.assertEqual(name, 'Specimen UID')

  @flagsaver.flagsaver(metadata_bucket='test')
  def test_find_invalid_data_frame_column_name(self):
    """Test find non existent column name in pandas data frame."""
    metadata_filename = os.path.join(
        FLAGS.test_srcdir, TESTDATA_DIR, 'metadata.csv'
    )
    meta_data = csv_util.read_csv(metadata_filename)
    name = dicom_schema_util.find_data_frame_column_name(
        meta_data, 'Invalid column name'
    )
    self.assertIsNone(name)


if __name__ == '__main__':
  absltest.main()
