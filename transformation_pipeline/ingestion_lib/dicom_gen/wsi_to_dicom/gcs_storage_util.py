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
"""GCS Storage utilitys used by WSI-to-DICOM."""
from typing import Mapping, Optional

from transformation_pipeline.ingestion_lib import cloud_storage_client
from transformation_pipeline.ingestion_lib.dicom_gen import abstract_dicom_generation
from transformation_pipeline.ingestion_lib.pubsub_msgs import ingestion_complete_pubsub


class CloudStorageBlobMoveError(Exception):
  pass


def move_ingested_dicom_and_publish_ingest_complete(
    destination_uri: str,
    dicom_gen: abstract_dicom_generation.GeneratedDicomFiles,
    dst_metadata: Mapping[str, str],
    files_copied_msg: Optional[ingestion_complete_pubsub.PubSubMsg],
    delete_file_in_ingestion_bucket_at_ingest_success_or_failure: bool = True,
):
  """Move input svs to destination_uri.

  Args:
    destination_uri: Destination uri to move input file to.
    dicom_gen: Input DICOM gen file to move.
    dst_metadata: Metadata to tags to add to destination blob.
    files_copied_msg: Pub/Sub message to publish after files copied.
    delete_file_in_ingestion_bucket_at_ingest_success_or_failure: Delete file in
      ingestion bucket following successful or failed ingestion. Regardless of
      value imaging will be copied as to the sucess or failure bucket.

  Raises:
      CloudStorageBlobMoveError: if file copy or delete fails.
  """
  if not cloud_storage_client.copy_blob_to_uri(
      source_uri=dicom_gen.source_uri,
      local_source=dicom_gen.localfile,
      dst_uri=destination_uri,
      dst_metadata=dst_metadata,
  ):
    raise CloudStorageBlobMoveError()
  if files_copied_msg is not None:
    # files converted and pushed to dicom store or already in store
    # publish pub/sub msg
    ingestion_complete_pubsub.publish_pubsubmsg(files_copied_msg)
  # very last step is to delete blob from ingest bucket.
  if (
      delete_file_in_ingestion_bucket_at_ingest_success_or_failure
      and not cloud_storage_client.del_blob(
          uri=dicom_gen.source_uri, ignore_file_not_found=True
      )
  ):
    raise CloudStorageBlobMoveError()
