/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DICOM tags specification.
 *
 * This is a copy of the DICOM tags specification from the
 * https://dicom.nema.org/medical/dicom/current/output/html/part06.html
 *
 * The specification is used to generate the DICOM tags documentation.
 * 
 * The copyright for the text of the DICOM Standard is held by the
 * National Electrical Manufacturers Association on behalf of the
 * DICOM Standards Committee and is subject to Fair Use.
 */
export const DICOM_TAGS_SPEC: unknown = {
  'header': {'dicom_standard_version': {'Version': '2023e'}},

  'dicom_tags': {
    'main': {
      '0x00000000': {
        'keyword': 'CommandGroupLength',
        'vr': 'UL',
        'vm': '1',
        'name':
            'Command Group Length The even number of bytes from the end of the value field to the beginning of the next group.',
        'retired': ''
      },
      '0x00000001': {
        'keyword': 'CommandLengthToEnd',
        'vr': 'UL',
        'vm': '1',
        'name': 'Command Length to End',
        'retired': 'Retired'
      },
      '0x00000002': {
        'keyword': 'AffectedSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name':
            'Affected SOP Class UID The affected SOP Class UID associated with the operation.',
        'retired': ''
      },
      '0x00000003': {
        'keyword': 'RequestedSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name':
            'Requested SOP Class UID The requested SOP Class UID associated with the operation.',
        'retired': ''
      },
      '0x00000010': {
        'keyword': 'CommandRecognitionCode',
        'vr': 'SH',
        'vm': '1',
        'name': 'Command Recognition Code',
        'retired': 'Retired'
      },
      '0x00000100': {
        'keyword': 'CommandField',
        'vr': 'US',
        'vm': '1',
        'name':
            'Command Field This field distinguishes the DIMSE operation conveyed by this Message. This field shall be set to one of the following values:0001H C-STORE-RQ8001H C-STORE-RSP0010H C-GET-RQ8010H C-GET-RSP0020H C-FIND-RQ8020H C-FIND-RSP0021HC-MOVE-RQ8021H C-MOVE-RSP0030H C-ECHO-RQ8030H C-ECHO-RSP0100H N-EVENT-REPORT-RQ8100H N-EVENT-REPORT-RSP0110H N-GET-RQ8110H N-GET-RSP0120H N-SET-RQ8120H N-SET-RSP0130H N-ACTION-RQ8130H N-ACTION-RSP0140H N-CREATE-RQ8140H N-CREATE-RSP0150H N-DELETE-RQ8150H N-DELETE-RSP0FFFH C-CANCEL-RQ',
        'retired': ''
      },
      '0x00000110': {
        'keyword': 'MessageID',
        'vr': 'US',
        'vm': '1',
        'name':
            'Message ID Implementation-specific value that distinguishes this Message from other Messages.',
        'retired': ''
      },
      '0x00000120': {
        'keyword': 'MessageIDBeingRespondedTo',
        'vr': 'US',
        'vm': '1',
        'name':
            'Message ID Being Responded To Shall be set to the value of the Message ID (0000,0110) field used in associated request Message.',
        'retired': ''
      },
      '0x00000200': {
        'keyword': 'Initiator',
        'vr': 'AE',
        'vm': '1',
        'name': 'Initiator',
        'retired': 'Retired'
      },
      '0x00000300': {
        'keyword': 'Receiver',
        'vr': 'AE',
        'vm': '1',
        'name': 'Receiver',
        'retired': 'Retired'
      },
      '0x00000400': {
        'keyword': 'FindLocation',
        'vr': 'AE',
        'vm': '1',
        'name': 'Find Location',
        'retired': 'Retired'
      },
      '0x00000600': {
        'keyword': 'MoveDestination',
        'vr': 'AE',
        'vm': '1',
        'name':
            'Move Destination Shall be set to the DICOM AE Title of the destination DICOM AE to which the C-STORE sub-operations are being performed.',
        'retired': ''
      },
      '0x00000700': {
        'keyword': 'Priority',
        'vr': 'US',
        'vm': '1',
        'name':
            'Priority The priority shall be set to one of the following values:LOW = 0002HMEDIUM = 0000HHIGH = 0001H',
        'retired': ''
      },
      '0x00000800': {
        'keyword': 'CommandDataSetType',
        'vr': 'US',
        'vm': '1',
        'name':
            'Command Data Set Type This field indicates if a Data Set is present in the Message. This field shall be set to the value of 0101H if no Data Set is present; any other value indicates a Data Set is included in the Message.',
        'retired': ''
      },
      '0x00000850': {
        'keyword': 'NumberOfMatches',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Matches',
        'retired': 'Retired'
      },
      '0x00000860': {
        'keyword': 'ResponseSequenceNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Response Sequence Number',
        'retired': 'Retired'
      },
      '0x00000900': {
        'keyword': 'Status',
        'vr': 'US',
        'vm': '1',
        'name': 'Status chapter_C',
        'retired': ''
      },
      '0x00000901': {
        'keyword': 'OffendingElement',
        'vr': 'AT',
        'vm': '1-n',
        'name':
            'Offending Element If status is Cxxx, then this field contains a list of the elements in which the error was detected.',
        'retired': ''
      },
      '0x00000902': {
        'keyword': 'ErrorComment',
        'vr': 'LO',
        'vm': '1',
        'name':
            'Error Comment This field contains an application-specific text description of the error detected.',
        'retired': ''
      },
      '0x00000903': {
        'keyword': 'ErrorID',
        'vr': 'US',
        'vm': '1',
        'name':
            'Error ID This field shall optionally contain an application-specific error code.',
        'retired': ''
      },
      '0x00001000': {
        'keyword': 'AffectedSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name':
            'Affected SOP Instance UID Contains the UID of the SOP Instance for which this operation occurred.',
        'retired': ''
      },
      '0x00001001': {
        'keyword': 'RequestedSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name':
            'Requested SOP Instance UID Contains the UID of the SOP Instance for which this operation occurred.',
        'retired': ''
      },
      '0x00001002': {
        'keyword': 'EventTypeID',
        'vr': 'US',
        'vm': '1',
        'name': 'Event Type ID Values for this field are application-specific.',
        'retired': ''
      },
      '0x00001005': {
        'keyword': 'AttributeIdentifierList',
        'vr': 'AT',
        'vm': '1-n',
        'name':
            'Attribute Identifier List This field contains an Attribute Tag for each of the n Attributes applicable.',
        'retired': ''
      },
      '0x00001008': {
        'keyword': 'ActionTypeID',
        'vr': 'US',
        'vm': '1',
        'name':
            'Action Type ID Values for this field are application-specific.',
        'retired': ''
      },
      '0x00001020': {
        'keyword': 'NumberOfRemainingSuboperations',
        'vr': 'US',
        'vm': '1',
        'name':
            'Number of Remaining Sub-operations The number of remaining C-STORE sub-operations to be invoked for the operation.',
        'retired': ''
      },
      '0x00001021': {
        'keyword': 'NumberOfCompletedSuboperations',
        'vr': 'US',
        'vm': '1',
        'name':
            'Number of Completed Sub-operations The number of C-STORE sub-operations associated with this operation that have completed successfully.',
        'retired': ''
      },
      '0x00001022': {
        'keyword': 'NumberOfFailedSuboperations',
        'vr': 'US',
        'vm': '1',
        'name':
            'Number of Failed Sub-operations The number of C-STORE sub-operations associated with this operation that have failed.',
        'retired': ''
      },
      '0x00001023': {
        'keyword': 'NumberOfWarningSuboperations',
        'vr': 'US',
        'vm': '1',
        'name':
            'Number of Warning Sub-operations The number of C-STORE sub-operations associated with this operation that generated warning responses.',
        'retired': ''
      },
      '0x00001030': {
        'keyword': 'MoveOriginatorApplicationEntityTitle',
        'vr': 'AE',
        'vm': '1',
        'name':
            'Move Originator Application Entity Title Contains the DICOM AE Title of the DICOM AE that invoked the C-MOVE operation from which this C-STORE sub-operation is being performed.',
        'retired': ''
      },
      '0x00001031': {
        'keyword': 'MoveOriginatorMessageID',
        'vr': 'US',
        'vm': '1',
        'name':
            'Move Originator Message ID Contains the Message ID (0000,0110) of the C-MOVE-RQ Message from which this C-STORE sub-operation is being performed.',
        'retired': ''
      },
      '0x00004000': {
        'keyword': 'DialogReceiver',
        'vr': 'LT',
        'vm': '1',
        'name': 'Dialog Receiver',
        'retired': 'Retired'
      },
      '0x00004010': {
        'keyword': 'TerminalType',
        'vr': 'LT',
        'vm': '1',
        'name': 'Terminal Type',
        'retired': 'Retired'
      },
      '0x00005010': {
        'keyword': 'MessageSetID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Message Set ID',
        'retired': 'Retired'
      },
      '0x00005020': {
        'keyword': 'EndMessageID',
        'vr': 'SH',
        'vm': '1',
        'name': 'End Message ID',
        'retired': 'Retired'
      },
      '0x00005110': {
        'keyword': 'DisplayFormat',
        'vr': 'LT',
        'vm': '1',
        'name': 'Display Format',
        'retired': 'Retired'
      },
      '0x00005120': {
        'keyword': 'PagePositionID',
        'vr': 'LT',
        'vm': '1',
        'name': 'Page Position ID',
        'retired': 'Retired'
      },
      '0x00005130': {
        'keyword': 'TextFormatID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Text Format ID',
        'retired': 'Retired'
      },
      '0x00005140': {
        'keyword': 'NormalReverse',
        'vr': 'CS',
        'vm': '1',
        'name': 'Normal/Reverse',
        'retired': 'Retired'
      },
      '0x00005150': {
        'keyword': 'AddGrayScale',
        'vr': 'CS',
        'vm': '1',
        'name': 'Add Gray Scale',
        'retired': 'Retired'
      },
      '0x00005160': {
        'keyword': 'Borders',
        'vr': 'CS',
        'vm': '1',
        'name': 'Borders',
        'retired': 'Retired'
      },
      '0x00005170': {
        'keyword': 'Copies',
        'vr': 'IS',
        'vm': '1',
        'name': 'Copies',
        'retired': 'Retired'
      },
      '0x00005180': {
        'keyword': 'CommandMagnificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Command Magnification Type',
        'retired': 'Retired'
      },
      '0x00005190': {
        'keyword': 'Erase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Erase',
        'retired': 'Retired'
      },
      '0x000051A0': {
        'keyword': 'Print',
        'vr': 'CS',
        'vm': '1',
        'name': 'Print',
        'retired': 'Retired'
      },
      '0x000051B0': {
        'keyword': 'Overlays',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Overlays',
        'retired': 'Retired'
      },
      '0x00020000': {
        'keyword': 'FileMetaInformationGroupLength',
        'vr': 'UL',
        'vm': '1',
        'name': 'File Meta Information Group Length',
        'retired': ''
      },
      '0x00020001': {
        'keyword': 'FileMetaInformationVersion',
        'vr': 'OB',
        'vm': '1',
        'name': 'File Meta Information Version',
        'retired': ''
      },
      '0x00020002': {
        'keyword': 'MediaStorageSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Media Storage SOP Class UID',
        'retired': ''
      },
      '0x00020003': {
        'keyword': 'MediaStorageSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Media Storage SOP Instance UID',
        'retired': ''
      },
      '0x00020010': {
        'keyword': 'TransferSyntaxUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Transfer Syntax UID',
        'retired': ''
      },
      '0x00020012': {
        'keyword': 'ImplementationClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Implementation Class UID',
        'retired': ''
      },
      '0x00020013': {
        'keyword': 'ImplementationVersionName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Implementation Version Name',
        'retired': ''
      },
      '0x00020016': {
        'keyword': 'SourceApplicationEntityTitle',
        'vr': 'AE',
        'vm': '1',
        'name': 'Source Application Entity Title',
        'retired': ''
      },
      '0x00020017': {
        'keyword': 'SendingApplicationEntityTitle',
        'vr': 'AE',
        'vm': '1',
        'name': 'Sending Application Entity Title',
        'retired': ''
      },
      '0x00020018': {
        'keyword': 'ReceivingApplicationEntityTitle',
        'vr': 'AE',
        'vm': '1',
        'name': 'Receiving Application Entity Title',
        'retired': ''
      },
      '0x00020026': {
        'keyword': 'SourcePresentationAddress',
        'vr': 'UR',
        'vm': '1',
        'name': 'Source Presentation Address',
        'retired': ''
      },
      '0x00020027': {
        'keyword': 'SendingPresentationAddress',
        'vr': 'UR',
        'vm': '1',
        'name': 'Sending Presentation Address',
        'retired': ''
      },
      '0x00020028': {
        'keyword': 'ReceivingPresentationAddress',
        'vr': 'UR',
        'vm': '1',
        'name': 'Receiving Presentation Address',
        'retired': ''
      },
      '0x00020031': {
        'keyword': 'RTVMetaInformationVersion',
        'vr': 'OB',
        'vm': '1',
        'name': 'RTV Meta Information Version',
        'retired': ''
      },
      '0x00020032': {
        'keyword': 'RTVCommunicationSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'RTV Communication SOP Class UID',
        'retired': ''
      },
      '0x00020033': {
        'keyword': 'RTVCommunicationSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'RTV Communication SOP Instance UID',
        'retired': ''
      },
      '0x00020035': {
        'keyword': 'RTVSourceIdentifier',
        'vr': 'OB',
        'vm': '1',
        'name': 'RTV Source Identifier',
        'retired': ''
      },
      '0x00020036': {
        'keyword': 'RTVFlowIdentifier',
        'vr': 'OB',
        'vm': '1',
        'name': 'RTV Flow Identifier',
        'retired': ''
      },
      '0x00020037': {
        'keyword': 'RTVFlowRTPSamplingRate',
        'vr': 'UL',
        'vm': '1',
        'name': 'RTV Flow RTP Sampling Rate',
        'retired': ''
      },
      '0x00020038': {
        'keyword': 'RTVFlowActualFrameDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'RTV Flow Actual Frame Duration',
        'retired': ''
      },
      '0x00020100': {
        'keyword': 'PrivateInformationCreatorUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Private Information Creator UID',
        'retired': ''
      },
      '0x00020102': {
        'keyword': 'PrivateInformation',
        'vr': 'OB',
        'vm': '1',
        'name': 'Private Information',
        'retired': ''
      },
      '0x00041130': {
        'keyword': 'FileSetID',
        'vr': 'CS',
        'vm': '1',
        'name': 'File-set ID',
        'retired': ''
      },
      '0x00041141': {
        'keyword': 'FileSetDescriptorFileID',
        'vr': 'CS',
        'vm': '1-8',
        'name': 'File-set Descriptor File ID',
        'retired': ''
      },
      '0x00041142': {
        'keyword': 'SpecificCharacterSetOfFileSetDescriptorFile',
        'vr': 'CS',
        'vm': '1',
        'name': 'Specific Character Set of File-set Descriptor File',
        'retired': ''
      },
      '0x00041200': {
        'keyword': 'OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity',
        'vr': 'UL',
        'vm': '1',
        'name':
            'Offset of the First Directory Record of the Root Directory Entity',
        'retired': ''
      },
      '0x00041202': {
        'keyword': 'OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity',
        'vr': 'UL',
        'vm': '1',
        'name':
            'Offset of the Last Directory Record of the Root Directory Entity',
        'retired': ''
      },
      '0x00041212': {
        'keyword': 'FileSetConsistencyFlag',
        'vr': 'US',
        'vm': '1',
        'name': 'File-set Consistency Flag',
        'retired': ''
      },
      '0x00041220': {
        'keyword': 'DirectoryRecordSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Directory Record Sequence',
        'retired': ''
      },
      '0x00041400': {
        'keyword': 'OffsetOfTheNextDirectoryRecord',
        'vr': 'UL',
        'vm': '1',
        'name': 'Offset of the Next Directory Record',
        'retired': ''
      },
      '0x00041410': {
        'keyword': 'RecordInUseFlag',
        'vr': 'US',
        'vm': '1',
        'name': 'Record In-use Flag',
        'retired': ''
      },
      '0x00041420': {
        'keyword': 'OffsetOfReferencedLowerLevelDirectoryEntity',
        'vr': 'UL',
        'vm': '1',
        'name': 'Offset of Referenced Lower-Level Directory Entity',
        'retired': ''
      },
      '0x00041430': {
        'keyword': 'DirectoryRecordType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Directory Record Type',
        'retired': ''
      },
      '0x00041432': {
        'keyword': 'PrivateRecordUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Private Record UID',
        'retired': ''
      },
      '0x00041500': {
        'keyword': 'ReferencedFileID',
        'vr': 'CS',
        'vm': '1-8',
        'name': 'Referenced File ID',
        'retired': ''
      },
      '0x00041504': {
        'keyword': 'MRDRDirectoryRecordOffset',
        'vr': 'UL',
        'vm': '1',
        'name': 'MRDR Directory Record Offset',
        'retired': 'Retired'
      },
      '0x00041510': {
        'keyword': 'ReferencedSOPClassUIDInFile',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced SOP Class UID in File',
        'retired': ''
      },
      '0x00041511': {
        'keyword': 'ReferencedSOPInstanceUIDInFile',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced SOP Instance UID in File',
        'retired': ''
      },
      '0x00041512': {
        'keyword': 'ReferencedTransferSyntaxUIDInFile',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Transfer Syntax UID in File',
        'retired': ''
      },
      '0x0004151A': {
        'keyword': 'ReferencedRelatedGeneralSOPClassUIDInFile',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Referenced Related General SOP Class UID in File',
        'retired': ''
      },
      '0x00041600': {
        'keyword': 'NumberOfReferences',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of References',
        'retired': 'Retired'
      },
      '0x00060001': {
        'keyword': 'CurrentFrameFunctionalGroupsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Current Frame Functional Groups Sequence',
        'retired': ''
      },
      '0x00080001': {
        'keyword': 'LengthToEnd',
        'vr': 'UL',
        'vm': '1',
        'name': 'Length to End',
        'retired': 'Retired'
      },
      '0x00080005': {
        'keyword': 'SpecificCharacterSet',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Specific Character Set',
        'retired': ''
      },
      '0x00080006': {
        'keyword': 'LanguageCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Language Code Sequence',
        'retired': ''
      },
      '0x00080008': {
        'keyword': 'ImageType',
        'vr': 'CS',
        'vm': '2-n',
        'name': 'Image Type',
        'retired': ''
      },
      '0x00080010': {
        'keyword': 'RecognitionCode',
        'vr': 'SH',
        'vm': '1',
        'name': 'Recognition Code',
        'retired': 'Retired'
      },
      '0x00080012': {
        'keyword': 'InstanceCreationDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Instance Creation Date',
        'retired': ''
      },
      '0x00080013': {
        'keyword': 'InstanceCreationTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Instance Creation Time',
        'retired': ''
      },
      '0x00080014': {
        'keyword': 'InstanceCreatorUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Instance Creator UID',
        'retired': ''
      },
      '0x00080015': {
        'keyword': 'InstanceCoercionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Instance Coercion DateTime',
        'retired': ''
      },
      '0x00080016': {
        'keyword': 'SOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'SOP Class UID',
        'retired': ''
      },
      '0x00080017': {
        'keyword': 'AcquisitionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Acquisition UID',
        'retired': ''
      },
      '0x00080018': {
        'keyword': 'SOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'SOP Instance UID',
        'retired': ''
      },
      '0x00080019': {
        'keyword': 'PyramidUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Pyramid UID',
        'retired': ''
      },
      '0x0008001A': {
        'keyword': 'RelatedGeneralSOPClassUID',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Related General SOP Class UID',
        'retired': ''
      },
      '0x0008001B': {
        'keyword': 'OriginalSpecializedSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Original Specialized SOP Class UID',
        'retired': ''
      },
      '0x00080020': {
        'keyword': 'StudyDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Study Date',
        'retired': ''
      },
      '0x00080021': {
        'keyword': 'SeriesDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Series Date',
        'retired': ''
      },
      '0x00080022': {
        'keyword': 'AcquisitionDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Acquisition Date',
        'retired': ''
      },
      '0x00080023': {
        'keyword': 'ContentDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Content Date',
        'retired': ''
      },
      '0x00080024': {
        'keyword': 'OverlayDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Overlay Date',
        'retired': 'Retired'
      },
      '0x00080025': {
        'keyword': 'CurveDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Curve Date',
        'retired': 'Retired'
      },
      '0x0008002A': {
        'keyword': 'AcquisitionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Acquisition DateTime',
        'retired': ''
      },
      '0x00080030': {
        'keyword': 'StudyTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Study Time',
        'retired': ''
      },
      '0x00080031': {
        'keyword': 'SeriesTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Series Time',
        'retired': ''
      },
      '0x00080032': {
        'keyword': 'AcquisitionTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Acquisition Time',
        'retired': ''
      },
      '0x00080033': {
        'keyword': 'ContentTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Content Time',
        'retired': ''
      },
      '0x00080034': {
        'keyword': 'OverlayTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Overlay Time',
        'retired': 'Retired'
      },
      '0x00080035': {
        'keyword': 'CurveTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Curve Time',
        'retired': 'Retired'
      },
      '0x00080040': {
        'keyword': 'DataSetType',
        'vr': 'US',
        'vm': '1',
        'name': 'Data Set Type',
        'retired': 'Retired'
      },
      '0x00080041': {
        'keyword': 'DataSetSubtype',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Set Subtype',
        'retired': 'Retired'
      },
      '0x00080042': {
        'keyword': 'NuclearMedicineSeriesType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Nuclear Medicine Series Type',
        'retired': 'Retired'
      },
      '0x00080050': {
        'keyword': 'AccessionNumber',
        'vr': 'SH',
        'vm': '1',
        'name': 'Accession Number',
        'retired': ''
      },
      '0x00080051': {
        'keyword': 'IssuerOfAccessionNumberSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of Accession Number Sequence',
        'retired': ''
      },
      '0x00080052': {
        'keyword': 'QueryRetrieveLevel',
        'vr': 'CS',
        'vm': '1',
        'name': 'Query/Retrieve Level',
        'retired': ''
      },
      '0x00080053': {
        'keyword': 'QueryRetrieveView',
        'vr': 'CS',
        'vm': '1',
        'name': 'Query/Retrieve View',
        'retired': ''
      },
      '0x00080054': {
        'keyword': 'RetrieveAETitle',
        'vr': 'AE',
        'vm': '1-n',
        'name': 'Retrieve AE Title',
        'retired': ''
      },
      '0x00080055': {
        'keyword': 'StationAETitle',
        'vr': 'AE',
        'vm': '1',
        'name': 'Station AE Title',
        'retired': ''
      },
      '0x00080056': {
        'keyword': 'InstanceAvailability',
        'vr': 'CS',
        'vm': '1',
        'name': 'Instance Availability',
        'retired': ''
      },
      '0x00080058': {
        'keyword': 'FailedSOPInstanceUIDList',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Failed SOP Instance UID List',
        'retired': ''
      },
      '0x00080060': {
        'keyword': 'Modality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modality',
        'retired': ''
      },
      '0x00080061': {
        'keyword': 'ModalitiesInStudy',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Modalities in Study',
        'retired': ''
      },
      '0x00080062': {
        'keyword': 'SOPClassesInStudy',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'SOP Classes in Study',
        'retired': ''
      },
      '0x00080063': {
        'keyword': 'AnatomicRegionsInStudyCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Regions in Study Code Sequence',
        'retired': ''
      },
      '0x00080064': {
        'keyword': 'ConversionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Conversion Type',
        'retired': ''
      },
      '0x00080068': {
        'keyword': 'PresentationIntentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation Intent Type',
        'retired': ''
      },
      '0x00080070': {
        'keyword': 'Manufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Manufacturer',
        'retired': ''
      },
      '0x00080080': {
        'keyword': 'InstitutionName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Institution Name',
        'retired': ''
      },
      '0x00080081': {
        'keyword': 'InstitutionAddress',
        'vr': 'ST',
        'vm': '1',
        'name': 'Institution Address',
        'retired': ''
      },
      '0x00080082': {
        'keyword': 'InstitutionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Institution Code Sequence',
        'retired': ''
      },
      '0x00080090': {
        'keyword': 'ReferringPhysicianName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Referring Physician\'s Name',
        'retired': ''
      },
      '0x00080092': {
        'keyword': 'ReferringPhysicianAddress',
        'vr': 'ST',
        'vm': '1',
        'name': 'Referring Physician\'s Address',
        'retired': ''
      },
      '0x00080094': {
        'keyword': 'ReferringPhysicianTelephoneNumbers',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Referring Physician\'s Telephone Numbers',
        'retired': ''
      },
      '0x00080096': {
        'keyword': 'ReferringPhysicianIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referring Physician Identification Sequence',
        'retired': ''
      },
      '0x0008009C': {
        'keyword': 'ConsultingPhysicianName',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Consulting Physician\'s Name',
        'retired': ''
      },
      '0x0008009D': {
        'keyword': 'ConsultingPhysicianIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Consulting Physician Identification Sequence',
        'retired': ''
      },
      '0x00080100': {
        'keyword': 'CodeValue',
        'vr': 'SH',
        'vm': '1',
        'name': 'Code Value',
        'retired': ''
      },
      '0x00080101': {
        'keyword': 'ExtendedCodeValue',
        'vr': 'LO',
        'vm': '1',
        'name': 'Extended Code Value',
        'retired': ''
      },
      '0x00080102': {
        'keyword': 'CodingSchemeDesignator',
        'vr': 'SH',
        'vm': '1',
        'name': 'Coding Scheme Designator',
        'retired': ''
      },
      '0x00080103': {
        'keyword': 'CodingSchemeVersion',
        'vr': 'SH',
        'vm': '1',
        'name': 'Coding Scheme Version',
        'retired': ''
      },
      '0x00080104': {
        'keyword': 'CodeMeaning',
        'vr': 'LO',
        'vm': '1',
        'name': 'Code Meaning',
        'retired': ''
      },
      '0x00080105': {
        'keyword': 'MappingResource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Mapping Resource',
        'retired': ''
      },
      '0x00080106': {
        'keyword': 'ContextGroupVersion',
        'vr': 'DT',
        'vm': '1',
        'name': 'Context Group Version',
        'retired': ''
      },
      '0x00080107': {
        'keyword': 'ContextGroupLocalVersion',
        'vr': 'DT',
        'vm': '1',
        'name': 'Context Group Local Version',
        'retired': ''
      },
      '0x00080108': {
        'keyword': 'ExtendedCodeMeaning',
        'vr': 'LT',
        'vm': '1',
        'name': 'Extended Code Meaning',
        'retired': ''
      },
      '0x00080109': {
        'keyword': 'CodingSchemeResourcesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coding Scheme Resources Sequence',
        'retired': ''
      },
      '0x0008010A': {
        'keyword': 'CodingSchemeURLType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coding Scheme URL Type',
        'retired': ''
      },
      '0x0008010B': {
        'keyword': 'ContextGroupExtensionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Context Group Extension Flag',
        'retired': ''
      },
      '0x0008010C': {
        'keyword': 'CodingSchemeUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Coding Scheme UID',
        'retired': ''
      },
      '0x0008010D': {
        'keyword': 'ContextGroupExtensionCreatorUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Context Group Extension Creator UID',
        'retired': ''
      },
      '0x0008010E': {
        'keyword': 'CodingSchemeURL',
        'vr': 'UR',
        'vm': '1',
        'name': 'Coding Scheme URL',
        'retired': ''
      },
      '0x0008010F': {
        'keyword': 'ContextIdentifier',
        'vr': 'CS',
        'vm': '1',
        'name': 'Context Identifier',
        'retired': ''
      },
      '0x00080110': {
        'keyword': 'CodingSchemeIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coding Scheme Identification Sequence',
        'retired': ''
      },
      '0x00080112': {
        'keyword': 'CodingSchemeRegistry',
        'vr': 'LO',
        'vm': '1',
        'name': 'Coding Scheme Registry',
        'retired': ''
      },
      '0x00080114': {
        'keyword': 'CodingSchemeExternalID',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coding Scheme External ID',
        'retired': ''
      },
      '0x00080115': {
        'keyword': 'CodingSchemeName',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coding Scheme Name',
        'retired': ''
      },
      '0x00080116': {
        'keyword': 'CodingSchemeResponsibleOrganization',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coding Scheme Responsible Organization',
        'retired': ''
      },
      '0x00080117': {
        'keyword': 'ContextUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Context UID',
        'retired': ''
      },
      '0x00080118': {
        'keyword': 'MappingResourceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Mapping Resource UID',
        'retired': ''
      },
      '0x00080119': {
        'keyword': 'LongCodeValue',
        'vr': 'UC',
        'vm': '1',
        'name': 'Long Code Value',
        'retired': ''
      },
      '0x00080120': {
        'keyword': 'URNCodeValue',
        'vr': 'UR',
        'vm': '1',
        'name': 'URN Code Value',
        'retired': ''
      },
      '0x00080121': {
        'keyword': 'EquivalentCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equivalent Code Sequence',
        'retired': ''
      },
      '0x00080122': {
        'keyword': 'MappingResourceName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Mapping Resource Name',
        'retired': ''
      },
      '0x00080123': {
        'keyword': 'ContextGroupIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Context Group Identification Sequence',
        'retired': ''
      },
      '0x00080124': {
        'keyword': 'MappingResourceIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mapping Resource Identification Sequence',
        'retired': ''
      },
      '0x00080201': {
        'keyword': 'TimezoneOffsetFromUTC',
        'vr': 'SH',
        'vm': '1',
        'name': 'Timezone Offset From UTC',
        'retired': ''
      },
      '0x00080202': {
        'keyword': '',
        'vr': 'OB',
        'vm': '1',
        'name': 'Retired-blank',
        'retired': 'Retired'
      },
      '0x00080220': {
        'keyword': 'ResponsibleGroupCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Responsible Group Code Sequence',
        'retired': ''
      },
      '0x00080221': {
        'keyword': 'EquipmentModality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Equipment Modality',
        'retired': ''
      },
      '0x00080222': {
        'keyword': 'ManufacturerRelatedModelGroup',
        'vr': 'LO',
        'vm': '1',
        'name': 'Manufacturer\'s Related Model Group',
        'retired': ''
      },
      '0x00080300': {
        'keyword': 'PrivateDataElementCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Private Data Element Characteristics Sequence',
        'retired': ''
      },
      '0x00080301': {
        'keyword': 'PrivateGroupReference',
        'vr': 'US',
        'vm': '1',
        'name': 'Private Group Reference',
        'retired': ''
      },
      '0x00080302': {
        'keyword': 'PrivateCreatorReference',
        'vr': 'LO',
        'vm': '1',
        'name': 'Private Creator Reference',
        'retired': ''
      },
      '0x00080303': {
        'keyword': 'BlockIdentifyingInformationStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Block Identifying Information Status',
        'retired': ''
      },
      '0x00080304': {
        'keyword': 'NonidentifyingPrivateElements',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Nonidentifying Private Elements',
        'retired': ''
      },
      '0x00080305': {
        'keyword': 'DeidentificationActionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Deidentification Action Sequence',
        'retired': ''
      },
      '0x00080306': {
        'keyword': 'IdentifyingPrivateElements',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Identifying Private Elements',
        'retired': ''
      },
      '0x00080307': {
        'keyword': 'DeidentificationAction',
        'vr': 'CS',
        'vm': '1',
        'name': 'Deidentification Action',
        'retired': ''
      },
      '0x00080308': {
        'keyword': 'PrivateDataElement',
        'vr': 'US',
        'vm': '1',
        'name': 'Private Data Element',
        'retired': ''
      },
      '0x00080309': {
        'keyword': 'PrivateDataElementValueMultiplicity',
        'vr': 'UL',
        'vm': '1-3',
        'name': 'Private Data Element Value Multiplicity',
        'retired': ''
      },
      '0x0008030A': {
        'keyword': 'PrivateDataElementValueRepresentation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Private Data Element Value Representation',
        'retired': ''
      },
      '0x0008030B': {
        'keyword': 'PrivateDataElementNumberOfItems',
        'vr': 'UL',
        'vm': '1-2',
        'name': 'Private Data Element Number of Items',
        'retired': ''
      },
      '0x0008030C': {
        'keyword': 'PrivateDataElementName',
        'vr': 'UC',
        'vm': '1',
        'name': 'Private Data Element Name',
        'retired': ''
      },
      '0x0008030D': {
        'keyword': 'PrivateDataElementKeyword',
        'vr': 'UC',
        'vm': '1',
        'name': 'Private Data Element Keyword',
        'retired': ''
      },
      '0x0008030E': {
        'keyword': 'PrivateDataElementDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Private Data Element Description',
        'retired': ''
      },
      '0x0008030F': {
        'keyword': 'PrivateDataElementEncoding',
        'vr': 'UT',
        'vm': '1',
        'name': 'Private Data Element Encoding',
        'retired': ''
      },
      '0x00080310': {
        'keyword': 'PrivateDataElementDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Private Data Element Definition Sequence',
        'retired': ''
      },
      '0x00080400': {
        'keyword': 'ScopeOfInventorySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scope of Inventory Sequence',
        'retired': ''
      },
      '0x00080401': {
        'keyword': 'InventoryPurpose',
        'vr': 'LT',
        'vm': '1',
        'name': 'Inventory Purpose',
        'retired': ''
      },
      '0x00080402': {
        'keyword': 'InventoryInstanceDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Inventory Instance Description',
        'retired': ''
      },
      '0x00080403': {
        'keyword': 'InventoryLevel',
        'vr': 'CS',
        'vm': '1',
        'name': 'Inventory Level',
        'retired': ''
      },
      '0x00080404': {
        'keyword': 'ItemInventoryDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Item Inventory DateTime',
        'retired': ''
      },
      '0x00080405': {
        'keyword': 'RemovedFromOperationalUse',
        'vr': 'CS',
        'vm': '1',
        'name': 'Removed from Operational Use',
        'retired': ''
      },
      '0x00080406': {
        'keyword': 'ReasonForRemovalCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reason for Removal Code Sequence',
        'retired': ''
      },
      '0x00080407': {
        'keyword': 'StoredInstanceBaseURI',
        'vr': 'UR',
        'vm': '1',
        'name': 'Stored Instance Base URI',
        'retired': ''
      },
      '0x00080408': {
        'keyword': 'FolderAccessURI',
        'vr': 'UR',
        'vm': '1',
        'name': 'Folder Access URI',
        'retired': ''
      },
      '0x00080409': {
        'keyword': 'FileAccessURI',
        'vr': 'UR',
        'vm': '1',
        'name': 'File Access URI',
        'retired': ''
      },
      '0x0008040A': {
        'keyword': 'ContainerFileType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Container File Type',
        'retired': ''
      },
      '0x0008040B': {
        'keyword': 'FilenameInContainer',
        'vr': 'UR',
        'vm': '1',
        'name': 'Filename in Container',
        'retired': ''
      },
      '0x0008040C': {
        'keyword': 'FileOffsetInContainer',
        'vr': 'UV',
        'vm': '1',
        'name': 'File Offset in Container',
        'retired': ''
      },
      '0x0008040D': {
        'keyword': 'FileLengthInContainer',
        'vr': 'UV',
        'vm': '1',
        'name': 'File Length in Container',
        'retired': ''
      },
      '0x0008040E': {
        'keyword': 'StoredInstanceTransferSyntaxUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Stored Instance Transfer Syntax UID',
        'retired': ''
      },
      '0x0008040F': {
        'keyword': 'ExtendedMatchingMechanisms',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Extended Matching Mechanisms',
        'retired': ''
      },
      '0x00080410': {
        'keyword': 'RangeMatchingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Range Matching Sequence',
        'retired': ''
      },
      '0x00080411': {
        'keyword': 'ListOfUIDMatchingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'List of UID Matching Sequence',
        'retired': ''
      },
      '0x00080412': {
        'keyword': 'EmptyValueMatchingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Empty Value Matching Sequence',
        'retired': ''
      },
      '0x00080413': {
        'keyword': 'GeneralMatchingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'General Matching Sequence',
        'retired': ''
      },
      '0x00080414': {
        'keyword': 'RequestedStatusInterval',
        'vr': 'US',
        'vm': '1',
        'name': 'Requested Status Interval',
        'retired': ''
      },
      '0x00080415': {
        'keyword': 'RetainInstances',
        'vr': 'CS',
        'vm': '1',
        'name': 'Retain Instances',
        'retired': ''
      },
      '0x00080416': {
        'keyword': 'ExpirationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Expiration DateTime',
        'retired': ''
      },
      '0x00080417': {
        'keyword': 'TransactionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transaction Status',
        'retired': ''
      },
      '0x00080418': {
        'keyword': 'TransactionStatusComment',
        'vr': 'LT',
        'vm': '1',
        'name': 'Transaction Status Comment',
        'retired': ''
      },
      '0x00080419': {
        'keyword': 'FileSetAccessSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'File Set Access Sequence',
        'retired': ''
      },
      '0x0008041A': {
        'keyword': 'FileAccessSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'File Access Sequence',
        'retired': ''
      },
      '0x0008041B': {
        'keyword': 'RecordKey',
        'vr': 'OB',
        'vm': '1',
        'name': 'Record Key',
        'retired': ''
      },
      '0x0008041C': {
        'keyword': 'PriorRecordKey',
        'vr': 'OB',
        'vm': '1',
        'name': 'Prior Record Key',
        'retired': ''
      },
      '0x0008041D': {
        'keyword': 'MetadataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Metadata Sequence',
        'retired': ''
      },
      '0x0008041E': {
        'keyword': 'UpdatedMetadataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Updated Metadata Sequence',
        'retired': ''
      },
      '0x0008041F': {
        'keyword': 'StudyUpdateDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Study Update DateTime',
        'retired': ''
      },
      '0x00080420': {
        'keyword': 'InventoryAccessEndPointsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Inventory Access End Points Sequence',
        'retired': ''
      },
      '0x00080421': {
        'keyword': 'StudyAccessEndPointsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Study Access End Points Sequence',
        'retired': ''
      },
      '0x00080422': {
        'keyword': 'IncorporatedInventoryInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Incorporated Inventory Instance Sequence',
        'retired': ''
      },
      '0x00080423': {
        'keyword': 'InventoriedStudiesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Inventoried Studies Sequence',
        'retired': ''
      },
      '0x00080424': {
        'keyword': 'InventoriedSeriesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Inventoried Series Sequence',
        'retired': ''
      },
      '0x00080425': {
        'keyword': 'InventoriedInstancesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Inventoried Instances Sequence',
        'retired': ''
      },
      '0x00080426': {
        'keyword': 'InventoryCompletionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Inventory Completion Status',
        'retired': ''
      },
      '0x00080427': {
        'keyword': 'NumberOfStudyRecordsInInstance',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Study Records in Instance',
        'retired': ''
      },
      '0x00080428': {
        'keyword': 'TotalNumberOfStudyRecords',
        'vr': 'UV',
        'vm': '1',
        'name': 'Total Number of Study Records',
        'retired': ''
      },
      '0x00080429': {
        'keyword': 'MaximumNumberOfRecords',
        'vr': 'UV',
        'vm': '1',
        'name': 'Maximum Number of Records',
        'retired': ''
      },
      '0x00081000': {
        'keyword': 'NetworkID',
        'vr': 'AE',
        'vm': '1',
        'name': 'Network ID',
        'retired': 'Retired'
      },
      '0x00081010': {
        'keyword': 'StationName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Station Name',
        'retired': ''
      },
      '0x00081030': {
        'keyword': 'StudyDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Study Description',
        'retired': ''
      },
      '0x00081032': {
        'keyword': 'ProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Code Sequence',
        'retired': ''
      },
      '0x0008103E': {
        'keyword': 'SeriesDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Series Description',
        'retired': ''
      },
      '0x0008103F': {
        'keyword': 'SeriesDescriptionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Series Description Code Sequence',
        'retired': ''
      },
      '0x00081040': {
        'keyword': 'InstitutionalDepartmentName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Institutional Department Name',
        'retired': ''
      },
      '0x00081041': {
        'keyword': 'InstitutionalDepartmentTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Institutional Department Type Code Sequence',
        'retired': ''
      },
      '0x00081048': {
        'keyword': 'PhysiciansOfRecord',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Physician(s) of Record',
        'retired': ''
      },
      '0x00081049': {
        'keyword': 'PhysiciansOfRecordIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Physician(s) of Record Identification Sequence',
        'retired': ''
      },
      '0x00081050': {
        'keyword': 'PerformingPhysicianName',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Performing Physician\'s Name',
        'retired': ''
      },
      '0x00081052': {
        'keyword': 'PerformingPhysicianIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performing Physician Identification Sequence',
        'retired': ''
      },
      '0x00081060': {
        'keyword': 'NameOfPhysiciansReadingStudy',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Name of Physician(s) Reading Study',
        'retired': ''
      },
      '0x00081062': {
        'keyword': 'PhysiciansReadingStudyIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Physician(s) Reading Study Identification Sequence',
        'retired': ''
      },
      '0x00081070': {
        'keyword': 'OperatorsName',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Operators\' Name',
        'retired': ''
      },
      '0x00081072': {
        'keyword': 'OperatorIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Operator Identification Sequence',
        'retired': ''
      },
      '0x00081080': {
        'keyword': 'AdmittingDiagnosesDescription',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Admitting Diagnoses Description',
        'retired': ''
      },
      '0x00081084': {
        'keyword': 'AdmittingDiagnosesCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Admitting Diagnoses Code Sequence',
        'retired': ''
      },
      '0x00081088': {
        'keyword': 'PyramidDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Pyramid Description',
        'retired': ''
      },
      '0x00081090': {
        'keyword': 'ManufacturerModelName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Manufacturer\'s Model Name',
        'retired': ''
      },
      '0x00081100': {
        'keyword': 'ReferencedResultsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Results Sequence',
        'retired': 'Retired'
      },
      '0x00081110': {
        'keyword': 'ReferencedStudySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Study Sequence',
        'retired': ''
      },
      '0x00081111': {
        'keyword': 'ReferencedPerformedProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Performed Procedure Step Sequence',
        'retired': ''
      },
      '0x00081115': {
        'keyword': 'ReferencedSeriesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Series Sequence',
        'retired': ''
      },
      '0x00081120': {
        'keyword': 'ReferencedPatientSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Patient Sequence',
        'retired': ''
      },
      '0x00081125': {
        'keyword': 'ReferencedVisitSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Visit Sequence',
        'retired': ''
      },
      '0x00081130': {
        'keyword': 'ReferencedOverlaySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Overlay Sequence',
        'retired': 'Retired'
      },
      '0x00081134': {
        'keyword': 'ReferencedStereometricInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Stereometric Instance Sequence',
        'retired': ''
      },
      '0x0008113A': {
        'keyword': 'ReferencedWaveformSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Waveform Sequence',
        'retired': ''
      },
      '0x00081140': {
        'keyword': 'ReferencedImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Sequence',
        'retired': ''
      },
      '0x00081145': {
        'keyword': 'ReferencedCurveSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Curve Sequence',
        'retired': 'Retired'
      },
      '0x0008114A': {
        'keyword': 'ReferencedInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Instance Sequence',
        'retired': ''
      },
      '0x0008114B': {
        'keyword': 'ReferencedRealWorldValueMappingInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Real World Value Mapping Instance Sequence',
        'retired': ''
      },
      '0x00081150': {
        'keyword': 'ReferencedSOPClassUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced SOP Class UID',
        'retired': ''
      },
      '0x00081155': {
        'keyword': 'ReferencedSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced SOP Instance UID',
        'retired': ''
      },
      '0x00081156': {
        'keyword': 'DefinitionSourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Definition Source Sequence',
        'retired': ''
      },
      '0x0008115A': {
        'keyword': 'SOPClassesSupported',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'SOP Classes Supported',
        'retired': ''
      },
      '0x00081160': {
        'keyword': 'ReferencedFrameNumber',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Referenced Frame Number',
        'retired': ''
      },
      '0x00081161': {
        'keyword': 'SimpleFrameList',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Simple Frame List',
        'retired': ''
      },
      '0x00081162': {
        'keyword': 'CalculatedFrameList',
        'vr': 'UL',
        'vm': '3-3n',
        'name': 'Calculated Frame List',
        'retired': ''
      },
      '0x00081163': {
        'keyword': 'TimeRange',
        'vr': 'FD',
        'vm': '2',
        'name': 'Time Range',
        'retired': ''
      },
      '0x00081164': {
        'keyword': 'FrameExtractionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Extraction Sequence',
        'retired': ''
      },
      '0x00081167': {
        'keyword': 'MultiFrameSourceSOPInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Multi-frame Source SOP Instance UID',
        'retired': ''
      },
      '0x00081190': {
        'keyword': 'RetrieveURL',
        'vr': 'UR',
        'vm': '1',
        'name': 'Retrieve URL',
        'retired': ''
      },
      '0x00081195': {
        'keyword': 'TransactionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Transaction UID',
        'retired': ''
      },
      '0x00081196': {
        'keyword': 'WarningReason',
        'vr': 'US',
        'vm': '1',
        'name': 'Warning Reason',
        'retired': ''
      },
      '0x00081197': {
        'keyword': 'FailureReason',
        'vr': 'US',
        'vm': '1',
        'name': 'Failure Reason',
        'retired': ''
      },
      '0x00081198': {
        'keyword': 'FailedSOPSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Failed SOP Sequence',
        'retired': ''
      },
      '0x00081199': {
        'keyword': 'ReferencedSOPSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced SOP Sequence',
        'retired': ''
      },
      '0x0008119A': {
        'keyword': 'OtherFailuresSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Other Failures Sequence',
        'retired': ''
      },
      '0x00081200': {
        'keyword': 'StudiesContainingOtherReferencedInstancesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Studies Containing Other Referenced Instances Sequence',
        'retired': ''
      },
      '0x00081250': {
        'keyword': 'RelatedSeriesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related Series Sequence',
        'retired': ''
      },
      '0x00082110': {
        'keyword': 'LossyImageCompressionRetired',
        'vr': 'CS',
        'vm': '1',
        'name': 'Lossy Image Compression (Retired)',
        'retired': 'Retired'
      },
      '0x00082111': {
        'keyword': 'DerivationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Derivation Description',
        'retired': ''
      },
      '0x00082112': {
        'keyword': 'SourceImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Image Sequence',
        'retired': ''
      },
      '0x00082120': {
        'keyword': 'StageName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Stage Name',
        'retired': ''
      },
      '0x00082122': {
        'keyword': 'StageNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Stage Number',
        'retired': ''
      },
      '0x00082124': {
        'keyword': 'NumberOfStages',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Stages',
        'retired': ''
      },
      '0x00082127': {
        'keyword': 'ViewName',
        'vr': 'SH',
        'vm': '1',
        'name': 'View Name',
        'retired': ''
      },
      '0x00082128': {
        'keyword': 'ViewNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'View Number',
        'retired': ''
      },
      '0x00082129': {
        'keyword': 'NumberOfEventTimers',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Event Timers',
        'retired': ''
      },
      '0x0008212A': {
        'keyword': 'NumberOfViewsInStage',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Views in Stage',
        'retired': ''
      },
      '0x00082130': {
        'keyword': 'EventElapsedTimes',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Event Elapsed Time(s)',
        'retired': ''
      },
      '0x00082132': {
        'keyword': 'EventTimerNames',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Event Timer Name(s)',
        'retired': ''
      },
      '0x00082133': {
        'keyword': 'EventTimerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Event Timer Sequence',
        'retired': ''
      },
      '0x00082134': {
        'keyword': 'EventTimeOffset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Event Time Offset',
        'retired': ''
      },
      '0x00082135': {
        'keyword': 'EventCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Event Code Sequence',
        'retired': ''
      },
      '0x00082142': {
        'keyword': 'StartTrim',
        'vr': 'IS',
        'vm': '1',
        'name': 'Start Trim',
        'retired': ''
      },
      '0x00082143': {
        'keyword': 'StopTrim',
        'vr': 'IS',
        'vm': '1',
        'name': 'Stop Trim',
        'retired': ''
      },
      '0x00082144': {
        'keyword': 'RecommendedDisplayFrameRate',
        'vr': 'IS',
        'vm': '1',
        'name': 'Recommended Display Frame Rate',
        'retired': ''
      },
      '0x00082200': {
        'keyword': 'TransducerPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transducer Position',
        'retired': 'Retired'
      },
      '0x00082204': {
        'keyword': 'TransducerOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transducer Orientation',
        'retired': 'Retired'
      },
      '0x00082208': {
        'keyword': 'AnatomicStructure',
        'vr': 'CS',
        'vm': '1',
        'name': 'Anatomic Structure',
        'retired': 'Retired'
      },
      '0x00082218': {
        'keyword': 'AnatomicRegionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Region Sequence',
        'retired': ''
      },
      '0x00082220': {
        'keyword': 'AnatomicRegionModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Region Modifier Sequence',
        'retired': ''
      },
      '0x00082228': {
        'keyword': 'PrimaryAnatomicStructureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Primary Anatomic Structure Sequence',
        'retired': ''
      },
      '0x00082229': {
        'keyword': 'AnatomicStructureSpaceOrRegionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Structure, Space or Region Sequence',
        'retired': 'Retired'
      },
      '0x00082230': {
        'keyword': 'PrimaryAnatomicStructureModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Primary Anatomic Structure Modifier Sequence',
        'retired': ''
      },
      '0x00082240': {
        'keyword': 'TransducerPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Position Sequence',
        'retired': 'Retired'
      },
      '0x00082242': {
        'keyword': 'TransducerPositionModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Position Modifier Sequence',
        'retired': 'Retired'
      },
      '0x00082244': {
        'keyword': 'TransducerOrientationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Orientation Sequence',
        'retired': 'Retired'
      },
      '0x00082246': {
        'keyword': 'TransducerOrientationModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Orientation Modifier Sequence',
        'retired': 'Retired'
      },
      '0x00082251': {
        'keyword': 'AnatomicStructureSpaceOrRegionCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Structure Space Or Region Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00082253': {
        'keyword': 'AnatomicPortalOfEntranceCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Portal Of Entrance Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00082255': {
        'keyword': 'AnatomicApproachDirectionCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Approach Direction Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00082256': {
        'keyword': 'AnatomicPerspectiveDescriptionTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Anatomic Perspective Description (Trial)',
        'retired': 'Retired'
      },
      '0x00082257': {
        'keyword': 'AnatomicPerspectiveCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anatomic Perspective Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00082258': {
        'keyword': 'AnatomicLocationOfExaminingInstrumentDescriptionTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Anatomic Location Of Examining Instrument Description (Trial)',
        'retired': 'Retired'
      },
      '0x00082259': {
        'keyword': 'AnatomicLocationOfExaminingInstrumentCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Anatomic Location Of Examining Instrument Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0008225A': {
        'keyword': 'AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Anatomic Structure Space Or Region Modifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0008225C': {
        'keyword': 'OnAxisBackgroundAnatomicStructureCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'On Axis Background Anatomic Structure Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00083001': {
        'keyword': 'AlternateRepresentationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Alternate Representation Sequence',
        'retired': ''
      },
      '0x00083002': {
        'keyword': 'AvailableTransferSyntaxUID',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Available Transfer Syntax UID',
        'retired': ''
      },
      '0x00083010': {
        'keyword': 'IrradiationEventUID',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Irradiation Event UID',
        'retired': ''
      },
      '0x00083011': {
        'keyword': 'SourceIrradiationEventSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Irradiation Event Sequence',
        'retired': ''
      },
      '0x00083012': {
        'keyword': 'RadiopharmaceuticalAdministrationEventUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Radiopharmaceutical Administration Event UID',
        'retired': ''
      },
      '0x00084000': {
        'keyword': 'IdentifyingComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Identifying Comments',
        'retired': 'Retired'
      },
      '0x00089007': {
        'keyword': 'FrameType',
        'vr': 'CS',
        'vm': '4-5',
        'name': 'Frame Type',
        'retired': ''
      },
      '0x00089092': {
        'keyword': 'ReferencedImageEvidenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Evidence Sequence',
        'retired': ''
      },
      '0x00089121': {
        'keyword': 'ReferencedRawDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Raw Data Sequence',
        'retired': ''
      },
      '0x00089123': {
        'keyword': 'CreatorVersionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Creator-Version UID',
        'retired': ''
      },
      '0x00089124': {
        'keyword': 'DerivationImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Image Sequence',
        'retired': ''
      },
      '0x00089154': {
        'keyword': 'SourceImageEvidenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Image Evidence Sequence',
        'retired': ''
      },
      '0x00089205': {
        'keyword': 'PixelPresentation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pixel Presentation',
        'retired': ''
      },
      '0x00089206': {
        'keyword': 'VolumetricProperties',
        'vr': 'CS',
        'vm': '1',
        'name': 'Volumetric Properties',
        'retired': ''
      },
      '0x00089207': {
        'keyword': 'VolumeBasedCalculationTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Volume Based Calculation Technique',
        'retired': ''
      },
      '0x00089208': {
        'keyword': 'ComplexImageComponent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Complex Image Component',
        'retired': ''
      },
      '0x00089209': {
        'keyword': 'AcquisitionContrast',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Contrast',
        'retired': ''
      },
      '0x00089215': {
        'keyword': 'DerivationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Code Sequence',
        'retired': ''
      },
      '0x00089237': {
        'keyword': 'ReferencedPresentationStateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Presentation State Sequence',
        'retired': ''
      },
      '0x00089410': {
        'keyword': 'ReferencedOtherPlaneSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Other Plane Sequence',
        'retired': ''
      },
      '0x00089458': {
        'keyword': 'FrameDisplaySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Display Sequence',
        'retired': ''
      },
      '0x00089459': {
        'keyword': 'RecommendedDisplayFrameRateInFloat',
        'vr': 'FL',
        'vm': '1',
        'name': 'Recommended Display Frame Rate in Float',
        'retired': ''
      },
      '0x00089460': {
        'keyword': 'SkipFrameRangeFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Skip Frame Range Flag',
        'retired': ''
      },
      '0x00100010': {
        'keyword': 'PatientName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Patient\'s Name',
        'retired': ''
      },
      '0x00100020': {
        'keyword': 'PatientID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient ID',
        'retired': ''
      },
      '0x00100021': {
        'keyword': 'IssuerOfPatientID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Issuer of Patient ID',
        'retired': ''
      },
      '0x00100022': {
        'keyword': 'TypeOfPatientID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Patient ID',
        'retired': ''
      },
      '0x00100024': {
        'keyword': 'IssuerOfPatientIDQualifiersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of Patient ID Qualifiers Sequence',
        'retired': ''
      },
      '0x00100026': {
        'keyword': 'SourcePatientGroupIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Patient Group Identification Sequence',
        'retired': ''
      },
      '0x00100027': {
        'keyword': 'GroupOfPatientsIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Group of Patients Identification Sequence',
        'retired': ''
      },
      '0x00100028': {
        'keyword': 'SubjectRelativePositionInImage',
        'vr': 'US',
        'vm': '3',
        'name': 'Subject Relative Position in Image',
        'retired': ''
      },
      '0x00100030': {
        'keyword': 'PatientBirthDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Patient\'s Birth Date',
        'retired': ''
      },
      '0x00100032': {
        'keyword': 'PatientBirthTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Patient\'s Birth Time',
        'retired': ''
      },
      '0x00100033': {
        'keyword': 'PatientBirthDateInAlternativeCalendar',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient\'s Birth Date in Alternative Calendar',
        'retired': ''
      },
      '0x00100034': {
        'keyword': 'PatientDeathDateInAlternativeCalendar',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient\'s Death Date in Alternative Calendar',
        'retired': ''
      },
      '0x00100035': {
        'keyword': 'PatientAlternativeCalendar',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient\'s Alternative Calendar',
        'retired': ''
      },
      '0x00100040': {
        'keyword': 'PatientSex',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient\'s Sex',
        'retired': ''
      },
      '0x00100050': {
        'keyword': 'PatientInsurancePlanCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient\'s Insurance Plan Code Sequence',
        'retired': ''
      },
      '0x00100101': {
        'keyword': 'PatientPrimaryLanguageCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient\'s Primary Language Code Sequence',
        'retired': ''
      },
      '0x00100102': {
        'keyword': 'PatientPrimaryLanguageModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient\'s Primary Language Modifier Code Sequence',
        'retired': ''
      },
      '0x00100200': {
        'keyword': 'QualityControlSubject',
        'vr': 'CS',
        'vm': '1',
        'name': 'Quality Control Subject',
        'retired': ''
      },
      '0x00100201': {
        'keyword': 'QualityControlSubjectTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Quality Control Subject Type Code Sequence',
        'retired': ''
      },
      '0x00100212': {
        'keyword': 'StrainDescription',
        'vr': 'UC',
        'vm': '1',
        'name': 'Strain Description',
        'retired': ''
      },
      '0x00100213': {
        'keyword': 'StrainNomenclature',
        'vr': 'LO',
        'vm': '1',
        'name': 'Strain Nomenclature',
        'retired': ''
      },
      '0x00100214': {
        'keyword': 'StrainStockNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Strain Stock Number',
        'retired': ''
      },
      '0x00100215': {
        'keyword': 'StrainSourceRegistryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Strain Source Registry Code Sequence',
        'retired': ''
      },
      '0x00100216': {
        'keyword': 'StrainStockSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Strain Stock Sequence',
        'retired': ''
      },
      '0x00100217': {
        'keyword': 'StrainSource',
        'vr': 'LO',
        'vm': '1',
        'name': 'Strain Source',
        'retired': ''
      },
      '0x00100218': {
        'keyword': 'StrainAdditionalInformation',
        'vr': 'UT',
        'vm': '1',
        'name': 'Strain Additional Information',
        'retired': ''
      },
      '0x00100219': {
        'keyword': 'StrainCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Strain Code Sequence',
        'retired': ''
      },
      '0x00100221': {
        'keyword': 'GeneticModificationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Genetic Modifications Sequence',
        'retired': ''
      },
      '0x00100222': {
        'keyword': 'GeneticModificationsDescription',
        'vr': 'UC',
        'vm': '1',
        'name': 'Genetic Modifications Description',
        'retired': ''
      },
      '0x00100223': {
        'keyword': 'GeneticModificationsNomenclature',
        'vr': 'LO',
        'vm': '1',
        'name': 'Genetic Modifications Nomenclature',
        'retired': ''
      },
      '0x00100229': {
        'keyword': 'GeneticModificationsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Genetic Modifications Code Sequence',
        'retired': ''
      },
      '0x00101000': {
        'keyword': 'OtherPatientIDs',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Other Patient IDs',
        'retired': 'Retired'
      },
      '0x00101001': {
        'keyword': 'OtherPatientNames',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Other Patient Names',
        'retired': ''
      },
      '0x00101002': {
        'keyword': 'OtherPatientIDsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Other Patient IDs Sequence',
        'retired': ''
      },
      '0x00101005': {
        'keyword': 'PatientBirthName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Patient\'s Birth Name',
        'retired': ''
      },
      '0x00101010': {
        'keyword': 'PatientAge',
        'vr': 'AS',
        'vm': '1',
        'name': 'Patient\'s Age',
        'retired': ''
      },
      '0x00101020': {
        'keyword': 'PatientSize',
        'vr': 'DS',
        'vm': '1',
        'name': 'Patient\'s Size',
        'retired': ''
      },
      '0x00101021': {
        'keyword': 'PatientSizeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient\'s Size Code Sequence',
        'retired': ''
      },
      '0x00101022': {
        'keyword': 'PatientBodyMassIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Patient\'s Body Mass Index',
        'retired': ''
      },
      '0x00101023': {
        'keyword': 'MeasuredAPDimension',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured AP Dimension',
        'retired': ''
      },
      '0x00101024': {
        'keyword': 'MeasuredLateralDimension',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Lateral Dimension',
        'retired': ''
      },
      '0x00101030': {
        'keyword': 'PatientWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Patient\'s Weight',
        'retired': ''
      },
      '0x00101040': {
        'keyword': 'PatientAddress',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient\'s Address',
        'retired': ''
      },
      '0x00101050': {
        'keyword': 'InsurancePlanIdentification',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Insurance Plan Identification',
        'retired': 'Retired'
      },
      '0x00101060': {
        'keyword': 'PatientMotherBirthName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Patient\'s Mother\'s Birth Name',
        'retired': ''
      },
      '0x00101080': {
        'keyword': 'MilitaryRank',
        'vr': 'LO',
        'vm': '1',
        'name': 'Military Rank',
        'retired': ''
      },
      '0x00101081': {
        'keyword': 'BranchOfService',
        'vr': 'LO',
        'vm': '1',
        'name': 'Branch of Service',
        'retired': ''
      },
      '0x00101090': {
        'keyword': 'MedicalRecordLocator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Medical Record Locator',
        'retired': 'Retired'
      },
      '0x00101100': {
        'keyword': 'ReferencedPatientPhotoSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Patient Photo Sequence',
        'retired': ''
      },
      '0x00102000': {
        'keyword': 'MedicalAlerts',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Medical Alerts',
        'retired': ''
      },
      '0x00102110': {
        'keyword': 'Allergies',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Allergies',
        'retired': ''
      },
      '0x00102150': {
        'keyword': 'CountryOfResidence',
        'vr': 'LO',
        'vm': '1',
        'name': 'Country of Residence',
        'retired': ''
      },
      '0x00102152': {
        'keyword': 'RegionOfResidence',
        'vr': 'LO',
        'vm': '1',
        'name': 'Region of Residence',
        'retired': ''
      },
      '0x00102154': {
        'keyword': 'PatientTelephoneNumbers',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Patient\'s Telephone Numbers',
        'retired': ''
      },
      '0x00102155': {
        'keyword': 'PatientTelecomInformation',
        'vr': 'LT',
        'vm': '1',
        'name': 'Patient\'s Telecom Information',
        'retired': ''
      },
      '0x00102160': {
        'keyword': 'EthnicGroup',
        'vr': 'SH',
        'vm': '1',
        'name': 'Ethnic Group',
        'retired': ''
      },
      '0x00102180': {
        'keyword': 'Occupation',
        'vr': 'SH',
        'vm': '1',
        'name': 'Occupation',
        'retired': ''
      },
      '0x001021A0': {
        'keyword': 'SmokingStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Smoking Status',
        'retired': ''
      },
      '0x001021B0': {
        'keyword': 'AdditionalPatientHistory',
        'vr': 'LT',
        'vm': '1',
        'name': 'Additional Patient History',
        'retired': ''
      },
      '0x001021C0': {
        'keyword': 'PregnancyStatus',
        'vr': 'US',
        'vm': '1',
        'name': 'Pregnancy Status',
        'retired': ''
      },
      '0x001021D0': {
        'keyword': 'LastMenstrualDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Last Menstrual Date',
        'retired': ''
      },
      '0x001021F0': {
        'keyword': 'PatientReligiousPreference',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient\'s Religious Preference',
        'retired': ''
      },
      '0x00102201': {
        'keyword': 'PatientSpeciesDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Species Description',
        'retired': ''
      },
      '0x00102202': {
        'keyword': 'PatientSpeciesCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Species Code Sequence',
        'retired': ''
      },
      '0x00102203': {
        'keyword': 'PatientSexNeutered',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient\'s Sex Neutered',
        'retired': ''
      },
      '0x00102210': {
        'keyword': 'AnatomicalOrientationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Anatomical Orientation Type',
        'retired': ''
      },
      '0x00102292': {
        'keyword': 'PatientBreedDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Breed Description',
        'retired': ''
      },
      '0x00102293': {
        'keyword': 'PatientBreedCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Breed Code Sequence',
        'retired': ''
      },
      '0x00102294': {
        'keyword': 'BreedRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Breed Registration Sequence',
        'retired': ''
      },
      '0x00102295': {
        'keyword': 'BreedRegistrationNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Breed Registration Number',
        'retired': ''
      },
      '0x00102296': {
        'keyword': 'BreedRegistryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Breed Registry Code Sequence',
        'retired': ''
      },
      '0x00102297': {
        'keyword': 'ResponsiblePerson',
        'vr': 'PN',
        'vm': '1',
        'name': 'Responsible Person',
        'retired': ''
      },
      '0x00102298': {
        'keyword': 'ResponsiblePersonRole',
        'vr': 'CS',
        'vm': '1',
        'name': 'Responsible Person Role',
        'retired': ''
      },
      '0x00102299': {
        'keyword': 'ResponsibleOrganization',
        'vr': 'LO',
        'vm': '1',
        'name': 'Responsible Organization',
        'retired': ''
      },
      '0x00104000': {
        'keyword': 'PatientComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Patient Comments',
        'retired': ''
      },
      '0x00109431': {
        'keyword': 'ExaminedBodyThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Examined Body Thickness',
        'retired': ''
      },
      '0x00120010': {
        'keyword': 'ClinicalTrialSponsorName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Sponsor Name',
        'retired': ''
      },
      '0x00120020': {
        'keyword': 'ClinicalTrialProtocolID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Protocol ID',
        'retired': ''
      },
      '0x00120021': {
        'keyword': 'ClinicalTrialProtocolName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Protocol Name',
        'retired': ''
      },
      '0x00120030': {
        'keyword': 'ClinicalTrialSiteID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Site ID',
        'retired': ''
      },
      '0x00120031': {
        'keyword': 'ClinicalTrialSiteName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Site Name',
        'retired': ''
      },
      '0x00120040': {
        'keyword': 'ClinicalTrialSubjectID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Subject ID',
        'retired': ''
      },
      '0x00120042': {
        'keyword': 'ClinicalTrialSubjectReadingID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Subject Reading ID',
        'retired': ''
      },
      '0x00120050': {
        'keyword': 'ClinicalTrialTimePointID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Time Point ID',
        'retired': ''
      },
      '0x00120051': {
        'keyword': 'ClinicalTrialTimePointDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Clinical Trial Time Point Description',
        'retired': ''
      },
      '0x00120052': {
        'keyword': 'LongitudinalTemporalOffsetFromEvent',
        'vr': 'FD',
        'vm': '1',
        'name': 'Longitudinal Temporal Offset from Event',
        'retired': ''
      },
      '0x00120053': {
        'keyword': 'LongitudinalTemporalEventType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Longitudinal Temporal Event Type',
        'retired': ''
      },
      '0x00120054': {
        'keyword': 'ClinicalTrialTimePointTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Clinical Trial Time Point Type Code Sequence',
        'retired': ''
      },
      '0x00120060': {
        'keyword': 'ClinicalTrialCoordinatingCenterName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Coordinating Center Name',
        'retired': ''
      },
      '0x00120062': {
        'keyword': 'PatientIdentityRemoved',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Identity Removed',
        'retired': ''
      },
      '0x00120063': {
        'keyword': 'DeidentificationMethod',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'De-identification Method',
        'retired': ''
      },
      '0x00120064': {
        'keyword': 'DeidentificationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'De-identification Method Code Sequence',
        'retired': ''
      },
      '0x00120071': {
        'keyword': 'ClinicalTrialSeriesID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Series ID',
        'retired': ''
      },
      '0x00120072': {
        'keyword': 'ClinicalTrialSeriesDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Series Description',
        'retired': ''
      },
      '0x00120081': {
        'keyword': 'ClinicalTrialProtocolEthicsCommitteeName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Protocol Ethics Committee Name',
        'retired': ''
      },
      '0x00120082': {
        'keyword': 'ClinicalTrialProtocolEthicsCommitteeApprovalNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Clinical Trial Protocol Ethics Committee Approval Number',
        'retired': ''
      },
      '0x00120083': {
        'keyword': 'ConsentForClinicalTrialUseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Consent for Clinical Trial Use Sequence',
        'retired': ''
      },
      '0x00120084': {
        'keyword': 'DistributionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Distribution Type',
        'retired': ''
      },
      '0x00120085': {
        'keyword': 'ConsentForDistributionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Consent for Distribution Flag',
        'retired': ''
      },
      '0x00120086': {
        'keyword': 'EthicsCommitteeApprovalEffectivenessStartDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Ethics Committee Approval Effectiveness Start Date',
        'retired': ''
      },
      '0x00120087': {
        'keyword': 'EthicsCommitteeApprovalEffectivenessEndDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Ethics Committee Approval Effectiveness End Date',
        'retired': ''
      },
      '0x00140023': {
        'keyword': 'CADFileFormat',
        'vr': 'ST',
        'vm': '1',
        'name': 'CAD File Format',
        'retired': 'Retired'
      },
      '0x00140024': {
        'keyword': 'ComponentReferenceSystem',
        'vr': 'ST',
        'vm': '1',
        'name': 'Component Reference System',
        'retired': 'Retired'
      },
      '0x00140025': {
        'keyword': 'ComponentManufacturingProcedure',
        'vr': 'ST',
        'vm': '1',
        'name': 'Component Manufacturing Procedure',
        'retired': ''
      },
      '0x00140028': {
        'keyword': 'ComponentManufacturer',
        'vr': 'ST',
        'vm': '1',
        'name': 'Component Manufacturer',
        'retired': ''
      },
      '0x00140030': {
        'keyword': 'MaterialThickness',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Material Thickness',
        'retired': ''
      },
      '0x00140032': {
        'keyword': 'MaterialPipeDiameter',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Material Pipe Diameter',
        'retired': ''
      },
      '0x00140034': {
        'keyword': 'MaterialIsolationDiameter',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Material Isolation Diameter',
        'retired': ''
      },
      '0x00140042': {
        'keyword': 'MaterialGrade',
        'vr': 'ST',
        'vm': '1',
        'name': 'Material Grade',
        'retired': ''
      },
      '0x00140044': {
        'keyword': 'MaterialPropertiesDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Material Properties Description',
        'retired': ''
      },
      '0x00140045': {
        'keyword': 'MaterialPropertiesFileFormatRetired',
        'vr': 'ST',
        'vm': '1',
        'name': 'Material Properties File Format (Retired)',
        'retired': 'Retired'
      },
      '0x00140046': {
        'keyword': 'MaterialNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Material Notes',
        'retired': ''
      },
      '0x00140050': {
        'keyword': 'ComponentShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Component Shape',
        'retired': ''
      },
      '0x00140052': {
        'keyword': 'CurvatureType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Curvature Type',
        'retired': ''
      },
      '0x00140054': {
        'keyword': 'OuterDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Outer Diameter',
        'retired': ''
      },
      '0x00140056': {
        'keyword': 'InnerDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Inner Diameter',
        'retired': ''
      },
      '0x00140100': {
        'keyword': 'ComponentWelderIDs',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Component Welder IDs',
        'retired': ''
      },
      '0x00140101': {
        'keyword': 'SecondaryApprovalStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Secondary Approval Status',
        'retired': ''
      },
      '0x00140102': {
        'keyword': 'SecondaryReviewDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Secondary Review Date',
        'retired': ''
      },
      '0x00140103': {
        'keyword': 'SecondaryReviewTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Secondary Review Time',
        'retired': ''
      },
      '0x00140104': {
        'keyword': 'SecondaryReviewerName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Secondary Reviewer Name',
        'retired': ''
      },
      '0x00140105': {
        'keyword': 'RepairID',
        'vr': 'ST',
        'vm': '1',
        'name': 'Repair ID',
        'retired': ''
      },
      '0x00140106': {
        'keyword': 'MultipleComponentApprovalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multiple Component Approval Sequence',
        'retired': ''
      },
      '0x00140107': {
        'keyword': 'OtherApprovalStatus',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Other Approval Status',
        'retired': ''
      },
      '0x00140108': {
        'keyword': 'OtherSecondaryApprovalStatus',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Other Secondary Approval Status',
        'retired': ''
      },
      '0x00140200': {
        'keyword': 'DataElementLabelSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Data Element Label Sequence',
        'retired': ''
      },
      '0x00140201': {
        'keyword': 'DataElementLabelItemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Data Element Label Item Sequence',
        'retired': ''
      },
      '0x00140202': {
        'keyword': 'DataElement',
        'vr': 'AT',
        'vm': '1',
        'name': 'Data Element',
        'retired': ''
      },
      '0x00140203': {
        'keyword': 'DataElementName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Element Name',
        'retired': ''
      },
      '0x00140204': {
        'keyword': 'DataElementDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Element Description',
        'retired': ''
      },
      '0x00140205': {
        'keyword': 'DataElementConditionality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Data Element Conditionality',
        'retired': ''
      },
      '0x00140206': {
        'keyword': 'DataElementMinimumCharacters',
        'vr': 'IS',
        'vm': '1',
        'name': 'Data Element Minimum Characters',
        'retired': ''
      },
      '0x00140207': {
        'keyword': 'DataElementMaximumCharacters',
        'vr': 'IS',
        'vm': '1',
        'name': 'Data Element Maximum Characters',
        'retired': ''
      },
      '0x00141010': {
        'keyword': 'ActualEnvironmentalConditions',
        'vr': 'ST',
        'vm': '1',
        'name': 'Actual Environmental Conditions',
        'retired': ''
      },
      '0x00141020': {
        'keyword': 'ExpiryDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Expiry Date',
        'retired': ''
      },
      '0x00141040': {
        'keyword': 'EnvironmentalConditions',
        'vr': 'ST',
        'vm': '1',
        'name': 'Environmental Conditions',
        'retired': ''
      },
      '0x00142002': {
        'keyword': 'EvaluatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Evaluator Sequence',
        'retired': ''
      },
      '0x00142004': {
        'keyword': 'EvaluatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Evaluator Number',
        'retired': ''
      },
      '0x00142006': {
        'keyword': 'EvaluatorName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Evaluator Name',
        'retired': ''
      },
      '0x00142008': {
        'keyword': 'EvaluationAttempt',
        'vr': 'IS',
        'vm': '1',
        'name': 'Evaluation Attempt',
        'retired': ''
      },
      '0x00142012': {
        'keyword': 'IndicationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Indication Sequence',
        'retired': ''
      },
      '0x00142014': {
        'keyword': 'IndicationNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Indication Number',
        'retired': ''
      },
      '0x00142016': {
        'keyword': 'IndicationLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Indication Label',
        'retired': ''
      },
      '0x00142018': {
        'keyword': 'IndicationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Indication Description',
        'retired': ''
      },
      '0x0014201A': {
        'keyword': 'IndicationType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Indication Type',
        'retired': ''
      },
      '0x0014201C': {
        'keyword': 'IndicationDisposition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Indication Disposition',
        'retired': ''
      },
      '0x0014201E': {
        'keyword': 'IndicationROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Indication ROI Sequence',
        'retired': ''
      },
      '0x00142030': {
        'keyword': 'IndicationPhysicalPropertySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Indication Physical Property Sequence',
        'retired': ''
      },
      '0x00142032': {
        'keyword': 'PropertyLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Property Label',
        'retired': ''
      },
      '0x00142202': {
        'keyword': 'CoordinateSystemNumberOfAxes',
        'vr': 'IS',
        'vm': '1',
        'name': 'Coordinate System Number of Axes',
        'retired': ''
      },
      '0x00142204': {
        'keyword': 'CoordinateSystemAxesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coordinate System Axes Sequence',
        'retired': ''
      },
      '0x00142206': {
        'keyword': 'CoordinateSystemAxisDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coordinate System Axis Description',
        'retired': ''
      },
      '0x00142208': {
        'keyword': 'CoordinateSystemDataSetMapping',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coordinate System Data Set Mapping',
        'retired': ''
      },
      '0x0014220A': {
        'keyword': 'CoordinateSystemAxisNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Coordinate System Axis Number',
        'retired': ''
      },
      '0x0014220C': {
        'keyword': 'CoordinateSystemAxisType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coordinate System Axis Type',
        'retired': ''
      },
      '0x0014220E': {
        'keyword': 'CoordinateSystemAxisUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coordinate System Axis Units',
        'retired': ''
      },
      '0x00142210': {
        'keyword': 'CoordinateSystemAxisValues',
        'vr': 'OB',
        'vm': '1',
        'name': 'Coordinate System Axis Values',
        'retired': ''
      },
      '0x00142220': {
        'keyword': 'CoordinateSystemTransformSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coordinate System Transform Sequence',
        'retired': ''
      },
      '0x00142222': {
        'keyword': 'TransformDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Transform Description',
        'retired': ''
      },
      '0x00142224': {
        'keyword': 'TransformNumberOfAxes',
        'vr': 'IS',
        'vm': '1',
        'name': 'Transform Number of Axes',
        'retired': ''
      },
      '0x00142226': {
        'keyword': 'TransformOrderOfAxes',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Transform Order of Axes',
        'retired': ''
      },
      '0x00142228': {
        'keyword': 'TransformedAxisUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transformed Axis Units',
        'retired': ''
      },
      '0x0014222A': {
        'keyword': 'CoordinateSystemTransformRotationAndScaleMatrix',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Coordinate System Transform Rotation and Scale Matrix',
        'retired': ''
      },
      '0x0014222C': {
        'keyword': 'CoordinateSystemTransformTranslationMatrix',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Coordinate System Transform Translation Matrix',
        'retired': ''
      },
      '0x00143011': {
        'keyword': 'InternalDetectorFrameTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Internal Detector Frame Time',
        'retired': ''
      },
      '0x00143012': {
        'keyword': 'NumberOfFramesIntegrated',
        'vr': 'DS',
        'vm': '1',
        'name': 'Number of Frames Integrated',
        'retired': ''
      },
      '0x00143020': {
        'keyword': 'DetectorTemperatureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Detector Temperature Sequence',
        'retired': ''
      },
      '0x00143022': {
        'keyword': 'SensorName',
        'vr': 'ST',
        'vm': '1',
        'name': 'Sensor Name',
        'retired': ''
      },
      '0x00143024': {
        'keyword': 'HorizontalOffsetOfSensor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Horizontal Offset of Sensor',
        'retired': ''
      },
      '0x00143026': {
        'keyword': 'VerticalOffsetOfSensor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Vertical Offset of Sensor',
        'retired': ''
      },
      '0x00143028': {
        'keyword': 'SensorTemperature',
        'vr': 'DS',
        'vm': '1',
        'name': 'Sensor Temperature',
        'retired': ''
      },
      '0x00143040': {
        'keyword': 'DarkCurrentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dark Current Sequence',
        'retired': ''
      },
      '0x00143050': {
        'keyword': 'DarkCurrentCounts',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Dark Current Counts',
        'retired': ''
      },
      '0x00143060': {
        'keyword': 'GainCorrectionReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Gain Correction Reference Sequence',
        'retired': ''
      },
      '0x00143070': {
        'keyword': 'AirCounts',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Air Counts',
        'retired': ''
      },
      '0x00143071': {
        'keyword': 'KVUsedInGainCalibration',
        'vr': 'DS',
        'vm': '1',
        'name': 'KV Used in Gain Calibration',
        'retired': ''
      },
      '0x00143072': {
        'keyword': 'MAUsedInGainCalibration',
        'vr': 'DS',
        'vm': '1',
        'name': 'MA Used in Gain Calibration',
        'retired': ''
      },
      '0x00143073': {
        'keyword': 'NumberOfFramesUsedForIntegration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Number of Frames Used for Integration',
        'retired': ''
      },
      '0x00143074': {
        'keyword': 'FilterMaterialUsedInGainCalibration',
        'vr': 'LO',
        'vm': '1',
        'name': 'Filter Material Used in Gain Calibration',
        'retired': ''
      },
      '0x00143075': {
        'keyword': 'FilterThicknessUsedInGainCalibration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Filter Thickness Used in Gain Calibration',
        'retired': ''
      },
      '0x00143076': {
        'keyword': 'DateOfGainCalibration',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Gain Calibration',
        'retired': ''
      },
      '0x00143077': {
        'keyword': 'TimeOfGainCalibration',
        'vr': 'TM',
        'vm': '1',
        'name': 'Time of Gain Calibration',
        'retired': ''
      },
      '0x00143080': {
        'keyword': 'BadPixelImage',
        'vr': 'OB',
        'vm': '1',
        'name': 'Bad Pixel Image',
        'retired': ''
      },
      '0x00143099': {
        'keyword': 'CalibrationNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Calibration Notes',
        'retired': ''
      },
      '0x00143100': {
        'keyword': 'LinearityCorrectionTechnique',
        'vr': 'LT',
        'vm': '1',
        'name': 'Linearity Correction Technique',
        'retired': ''
      },
      '0x00143101': {
        'keyword': 'BeamHardeningCorrectionTechnique',
        'vr': 'LT',
        'vm': '1',
        'name': 'Beam Hardening Correction Technique',
        'retired': ''
      },
      '0x00144002': {
        'keyword': 'PulserEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pulser Equipment Sequence',
        'retired': ''
      },
      '0x00144004': {
        'keyword': 'PulserType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pulser Type',
        'retired': ''
      },
      '0x00144006': {
        'keyword': 'PulserNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Pulser Notes',
        'retired': ''
      },
      '0x00144008': {
        'keyword': 'ReceiverEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Receiver Equipment Sequence',
        'retired': ''
      },
      '0x0014400A': {
        'keyword': 'AmplifierType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Amplifier Type',
        'retired': ''
      },
      '0x0014400C': {
        'keyword': 'ReceiverNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Receiver Notes',
        'retired': ''
      },
      '0x0014400E': {
        'keyword': 'PreAmplifierEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pre-Amplifier Equipment Sequence',
        'retired': ''
      },
      '0x0014400F': {
        'keyword': 'PreAmplifierNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Pre-Amplifier Notes',
        'retired': ''
      },
      '0x00144010': {
        'keyword': 'TransmitTransducerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transmit Transducer Sequence',
        'retired': ''
      },
      '0x00144011': {
        'keyword': 'ReceiveTransducerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Receive Transducer Sequence',
        'retired': ''
      },
      '0x00144012': {
        'keyword': 'NumberOfElements',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Elements',
        'retired': ''
      },
      '0x00144013': {
        'keyword': 'ElementShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Element Shape',
        'retired': ''
      },
      '0x00144014': {
        'keyword': 'ElementDimensionA',
        'vr': 'DS',
        'vm': '1',
        'name': 'Element Dimension A',
        'retired': ''
      },
      '0x00144015': {
        'keyword': 'ElementDimensionB',
        'vr': 'DS',
        'vm': '1',
        'name': 'Element Dimension B',
        'retired': ''
      },
      '0x00144016': {
        'keyword': 'ElementPitchA',
        'vr': 'DS',
        'vm': '1',
        'name': 'Element Pitch A',
        'retired': ''
      },
      '0x00144017': {
        'keyword': 'MeasuredBeamDimensionA',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Beam Dimension A',
        'retired': ''
      },
      '0x00144018': {
        'keyword': 'MeasuredBeamDimensionB',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Beam Dimension B',
        'retired': ''
      },
      '0x00144019': {
        'keyword': 'LocationOfMeasuredBeamDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Location of Measured Beam Diameter',
        'retired': ''
      },
      '0x0014401A': {
        'keyword': 'NominalFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Frequency',
        'retired': ''
      },
      '0x0014401B': {
        'keyword': 'MeasuredCenterFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Center Frequency',
        'retired': ''
      },
      '0x0014401C': {
        'keyword': 'MeasuredBandwidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Bandwidth',
        'retired': ''
      },
      '0x0014401D': {
        'keyword': 'ElementPitchB',
        'vr': 'DS',
        'vm': '1',
        'name': 'Element Pitch B',
        'retired': ''
      },
      '0x00144020': {
        'keyword': 'PulserSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pulser Settings Sequence',
        'retired': ''
      },
      '0x00144022': {
        'keyword': 'PulseWidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Pulse Width',
        'retired': ''
      },
      '0x00144024': {
        'keyword': 'ExcitationFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Excitation Frequency',
        'retired': ''
      },
      '0x00144026': {
        'keyword': 'ModulationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modulation Type',
        'retired': ''
      },
      '0x00144028': {
        'keyword': 'Damping',
        'vr': 'DS',
        'vm': '1',
        'name': 'Damping',
        'retired': ''
      },
      '0x00144030': {
        'keyword': 'ReceiverSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Receiver Settings Sequence',
        'retired': ''
      },
      '0x00144031': {
        'keyword': 'AcquiredSoundpathLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Acquired Soundpath Length',
        'retired': ''
      },
      '0x00144032': {
        'keyword': 'AcquisitionCompressionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Compression Type',
        'retired': ''
      },
      '0x00144033': {
        'keyword': 'AcquisitionSampleSize',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisition Sample Size',
        'retired': ''
      },
      '0x00144034': {
        'keyword': 'RectifierSmoothing',
        'vr': 'DS',
        'vm': '1',
        'name': 'Rectifier Smoothing',
        'retired': ''
      },
      '0x00144035': {
        'keyword': 'DACSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DAC Sequence',
        'retired': ''
      },
      '0x00144036': {
        'keyword': 'DACType',
        'vr': 'CS',
        'vm': '1',
        'name': 'DAC Type',
        'retired': ''
      },
      '0x00144038': {
        'keyword': 'DACGainPoints',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'DAC Gain Points',
        'retired': ''
      },
      '0x0014403A': {
        'keyword': 'DACTimePoints',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'DAC Time Points',
        'retired': ''
      },
      '0x0014403C': {
        'keyword': 'DACAmplitude',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'DAC Amplitude',
        'retired': ''
      },
      '0x00144040': {
        'keyword': 'PreAmplifierSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pre-Amplifier Settings Sequence',
        'retired': ''
      },
      '0x00144050': {
        'keyword': 'TransmitTransducerSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transmit Transducer Settings Sequence',
        'retired': ''
      },
      '0x00144051': {
        'keyword': 'ReceiveTransducerSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Receive Transducer Settings Sequence',
        'retired': ''
      },
      '0x00144052': {
        'keyword': 'IncidentAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Incident Angle',
        'retired': ''
      },
      '0x00144054': {
        'keyword': 'CouplingTechnique',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coupling Technique',
        'retired': ''
      },
      '0x00144056': {
        'keyword': 'CouplingMedium',
        'vr': 'ST',
        'vm': '1',
        'name': 'Coupling Medium',
        'retired': ''
      },
      '0x00144057': {
        'keyword': 'CouplingVelocity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Coupling Velocity',
        'retired': ''
      },
      '0x00144058': {
        'keyword': 'ProbeCenterLocationX',
        'vr': 'DS',
        'vm': '1',
        'name': 'Probe Center Location X',
        'retired': ''
      },
      '0x00144059': {
        'keyword': 'ProbeCenterLocationZ',
        'vr': 'DS',
        'vm': '1',
        'name': 'Probe Center Location Z',
        'retired': ''
      },
      '0x0014405A': {
        'keyword': 'SoundPathLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Sound Path Length',
        'retired': ''
      },
      '0x0014405C': {
        'keyword': 'DelayLawIdentifier',
        'vr': 'ST',
        'vm': '1',
        'name': 'Delay Law Identifier',
        'retired': ''
      },
      '0x00144060': {
        'keyword': 'GateSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Gate Settings Sequence',
        'retired': ''
      },
      '0x00144062': {
        'keyword': 'GateThreshold',
        'vr': 'DS',
        'vm': '1',
        'name': 'Gate Threshold',
        'retired': ''
      },
      '0x00144064': {
        'keyword': 'VelocityOfSound',
        'vr': 'DS',
        'vm': '1',
        'name': 'Velocity of Sound',
        'retired': ''
      },
      '0x00144070': {
        'keyword': 'CalibrationSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Calibration Settings Sequence',
        'retired': ''
      },
      '0x00144072': {
        'keyword': 'CalibrationProcedure',
        'vr': 'ST',
        'vm': '1',
        'name': 'Calibration Procedure',
        'retired': ''
      },
      '0x00144074': {
        'keyword': 'ProcedureVersion',
        'vr': 'SH',
        'vm': '1',
        'name': 'Procedure Version',
        'retired': ''
      },
      '0x00144076': {
        'keyword': 'ProcedureCreationDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Procedure Creation Date',
        'retired': ''
      },
      '0x00144078': {
        'keyword': 'ProcedureExpirationDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Procedure Expiration Date',
        'retired': ''
      },
      '0x0014407A': {
        'keyword': 'ProcedureLastModifiedDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Procedure Last Modified Date',
        'retired': ''
      },
      '0x0014407C': {
        'keyword': 'CalibrationTime',
        'vr': 'TM',
        'vm': '1-n',
        'name': 'Calibration Time',
        'retired': ''
      },
      '0x0014407E': {
        'keyword': 'CalibrationDate',
        'vr': 'DA',
        'vm': '1-n',
        'name': 'Calibration Date',
        'retired': ''
      },
      '0x00144080': {
        'keyword': 'ProbeDriveEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Probe Drive Equipment Sequence',
        'retired': ''
      },
      '0x00144081': {
        'keyword': 'DriveType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Drive Type',
        'retired': ''
      },
      '0x00144082': {
        'keyword': 'ProbeDriveNotes',
        'vr': 'LT',
        'vm': '1',
        'name': 'Probe Drive Notes',
        'retired': ''
      },
      '0x00144083': {
        'keyword': 'DriveProbeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Drive Probe Sequence',
        'retired': ''
      },
      '0x00144084': {
        'keyword': 'ProbeInductance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Probe Inductance',
        'retired': ''
      },
      '0x00144085': {
        'keyword': 'ProbeResistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Probe Resistance',
        'retired': ''
      },
      '0x00144086': {
        'keyword': 'ReceiveProbeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Receive Probe Sequence',
        'retired': ''
      },
      '0x00144087': {
        'keyword': 'ProbeDriveSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Probe Drive Settings Sequence',
        'retired': ''
      },
      '0x00144088': {
        'keyword': 'BridgeResistors',
        'vr': 'DS',
        'vm': '1',
        'name': 'Bridge Resistors',
        'retired': ''
      },
      '0x00144089': {
        'keyword': 'ProbeOrientationAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Probe Orientation Angle',
        'retired': ''
      },
      '0x0014408B': {
        'keyword': 'UserSelectedGainY',
        'vr': 'DS',
        'vm': '1',
        'name': 'User Selected Gain Y',
        'retired': ''
      },
      '0x0014408C': {
        'keyword': 'UserSelectedPhase',
        'vr': 'DS',
        'vm': '1',
        'name': 'User Selected Phase',
        'retired': ''
      },
      '0x0014408D': {
        'keyword': 'UserSelectedOffsetX',
        'vr': 'DS',
        'vm': '1',
        'name': 'User Selected Offset X',
        'retired': ''
      },
      '0x0014408E': {
        'keyword': 'UserSelectedOffsetY',
        'vr': 'DS',
        'vm': '1',
        'name': 'User Selected Offset Y',
        'retired': ''
      },
      '0x00144091': {
        'keyword': 'ChannelSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Settings Sequence',
        'retired': ''
      },
      '0x00144092': {
        'keyword': 'ChannelThreshold',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Threshold',
        'retired': ''
      },
      '0x0014409A': {
        'keyword': 'ScannerSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scanner Settings Sequence',
        'retired': ''
      },
      '0x0014409B': {
        'keyword': 'ScanProcedure',
        'vr': 'ST',
        'vm': '1',
        'name': 'Scan Procedure',
        'retired': ''
      },
      '0x0014409C': {
        'keyword': 'TranslationRateX',
        'vr': 'DS',
        'vm': '1',
        'name': 'Translation Rate X',
        'retired': ''
      },
      '0x0014409D': {
        'keyword': 'TranslationRateY',
        'vr': 'DS',
        'vm': '1',
        'name': 'Translation Rate Y',
        'retired': ''
      },
      '0x0014409F': {
        'keyword': 'ChannelOverlap',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Overlap',
        'retired': ''
      },
      '0x001440A0': {
        'keyword': 'ImageQualityIndicatorType',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Image Quality Indicator Type',
        'retired': ''
      },
      '0x001440A1': {
        'keyword': 'ImageQualityIndicatorMaterial',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Image Quality Indicator Material',
        'retired': ''
      },
      '0x001440A2': {
        'keyword': 'ImageQualityIndicatorSize',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Image Quality Indicator Size',
        'retired': ''
      },
      '0x00145002': {
        'keyword': 'LINACEnergy',
        'vr': 'IS',
        'vm': '1',
        'name': 'LINAC Energy',
        'retired': ''
      },
      '0x00145004': {
        'keyword': 'LINACOutput',
        'vr': 'IS',
        'vm': '1',
        'name': 'LINAC Output',
        'retired': ''
      },
      '0x00145100': {
        'keyword': 'ActiveAperture',
        'vr': 'US',
        'vm': '1',
        'name': 'Active Aperture',
        'retired': ''
      },
      '0x00145101': {
        'keyword': 'TotalAperture',
        'vr': 'DS',
        'vm': '1',
        'name': 'Total Aperture',
        'retired': ''
      },
      '0x00145102': {
        'keyword': 'ApertureElevation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Aperture Elevation',
        'retired': ''
      },
      '0x00145103': {
        'keyword': 'MainLobeAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Main Lobe Angle',
        'retired': ''
      },
      '0x00145104': {
        'keyword': 'MainRoofAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Main Roof Angle',
        'retired': ''
      },
      '0x00145105': {
        'keyword': 'ConnectorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Connector Type',
        'retired': ''
      },
      '0x00145106': {
        'keyword': 'WedgeModelNumber',
        'vr': 'SH',
        'vm': '1',
        'name': 'Wedge Model Number',
        'retired': ''
      },
      '0x00145107': {
        'keyword': 'WedgeAngleFloat',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Angle Float',
        'retired': ''
      },
      '0x00145108': {
        'keyword': 'WedgeRoofAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Roof Angle',
        'retired': ''
      },
      '0x00145109': {
        'keyword': 'WedgeElement1Position',
        'vr': 'CS',
        'vm': '1',
        'name': 'Wedge Element 1 Position',
        'retired': ''
      },
      '0x0014510A': {
        'keyword': 'WedgeMaterialVelocity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Material Velocity',
        'retired': ''
      },
      '0x0014510B': {
        'keyword': 'WedgeMaterial',
        'vr': 'SH',
        'vm': '1',
        'name': 'Wedge Material',
        'retired': ''
      },
      '0x0014510C': {
        'keyword': 'WedgeOffsetZ',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Offset Z',
        'retired': ''
      },
      '0x0014510D': {
        'keyword': 'WedgeOriginOffsetX',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Origin Offset X',
        'retired': ''
      },
      '0x0014510E': {
        'keyword': 'WedgeTimeDelay',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Time Delay',
        'retired': ''
      },
      '0x0014510F': {
        'keyword': 'WedgeName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Wedge Name',
        'retired': ''
      },
      '0x00145110': {
        'keyword': 'WedgeManufacturerName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Wedge Manufacturer Name',
        'retired': ''
      },
      '0x00145111': {
        'keyword': 'WedgeDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Wedge Description',
        'retired': ''
      },
      '0x00145112': {
        'keyword': 'NominalBeamAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Beam Angle',
        'retired': ''
      },
      '0x00145113': {
        'keyword': 'WedgeOffsetX',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Offset X',
        'retired': ''
      },
      '0x00145114': {
        'keyword': 'WedgeOffsetY',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Offset Y',
        'retired': ''
      },
      '0x00145115': {
        'keyword': 'WedgeTotalLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Total Length',
        'retired': ''
      },
      '0x00145116': {
        'keyword': 'WedgeInContactLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge In Contact Length',
        'retired': ''
      },
      '0x00145117': {
        'keyword': 'WedgeFrontGap',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Front Gap',
        'retired': ''
      },
      '0x00145118': {
        'keyword': 'WedgeTotalHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Total Height',
        'retired': ''
      },
      '0x00145119': {
        'keyword': 'WedgeFrontHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Front Height',
        'retired': ''
      },
      '0x0014511A': {
        'keyword': 'WedgeRearHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Rear Height',
        'retired': ''
      },
      '0x0014511B': {
        'keyword': 'WedgeTotalWidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Total Width',
        'retired': ''
      },
      '0x0014511C': {
        'keyword': 'WedgeInContactWidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge In Contact Width',
        'retired': ''
      },
      '0x0014511D': {
        'keyword': 'WedgeChamferHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Chamfer Height',
        'retired': ''
      },
      '0x0014511E': {
        'keyword': 'WedgeCurve',
        'vr': 'CS',
        'vm': '1',
        'name': 'Wedge Curve',
        'retired': ''
      },
      '0x0014511F': {
        'keyword': 'RadiusAlongWedge',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radius Along the Wedge',
        'retired': ''
      },
      '0x00160001': {
        'keyword': 'WhitePoint',
        'vr': 'DS',
        'vm': '1',
        'name': 'White Point',
        'retired': ''
      },
      '0x00160002': {
        'keyword': 'PrimaryChromaticities',
        'vr': 'DS',
        'vm': '3',
        'name': 'Primary Chromaticities',
        'retired': ''
      },
      '0x00160003': {
        'keyword': 'BatteryLevel',
        'vr': 'UT',
        'vm': '1',
        'name': 'Battery Level',
        'retired': ''
      },
      '0x00160004': {
        'keyword': 'ExposureTimeInSeconds',
        'vr': 'DS',
        'vm': '1',
        'name': 'Exposure Time in Seconds',
        'retired': ''
      },
      '0x00160005': {
        'keyword': 'FNumber',
        'vr': 'DS',
        'vm': '1',
        'name': 'F-Number',
        'retired': ''
      },
      '0x00160006': {
        'keyword': 'OECFRows',
        'vr': 'IS',
        'vm': '1',
        'name': 'OECF Rows',
        'retired': ''
      },
      '0x00160007': {
        'keyword': 'OECFColumns',
        'vr': 'IS',
        'vm': '1',
        'name': 'OECF Columns',
        'retired': ''
      },
      '0x00160008': {
        'keyword': 'OECFColumnNames',
        'vr': 'UC',
        'vm': '1-n',
        'name': 'OECF Column Names',
        'retired': ''
      },
      '0x00160009': {
        'keyword': 'OECFValues',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'OECF Values',
        'retired': ''
      },
      '0x0016000A': {
        'keyword': 'SpatialFrequencyResponseRows',
        'vr': 'IS',
        'vm': '1',
        'name': 'Spatial Frequency Response Rows',
        'retired': ''
      },
      '0x0016000B': {
        'keyword': 'SpatialFrequencyResponseColumns',
        'vr': 'IS',
        'vm': '1',
        'name': 'Spatial Frequency Response Columns',
        'retired': ''
      },
      '0x0016000C': {
        'keyword': 'SpatialFrequencyResponseColumnNames',
        'vr': 'UC',
        'vm': '1-n',
        'name': 'Spatial Frequency Response Column Names',
        'retired': ''
      },
      '0x0016000D': {
        'keyword': 'SpatialFrequencyResponseValues',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Spatial Frequency Response Values',
        'retired': ''
      },
      '0x0016000E': {
        'keyword': 'ColorFilterArrayPatternRows',
        'vr': 'IS',
        'vm': '1',
        'name': 'Color Filter Array Pattern Rows',
        'retired': ''
      },
      '0x0016000F': {
        'keyword': 'ColorFilterArrayPatternColumns',
        'vr': 'IS',
        'vm': '1',
        'name': 'Color Filter Array Pattern Columns',
        'retired': ''
      },
      '0x00160010': {
        'keyword': 'ColorFilterArrayPatternValues',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Color Filter Array Pattern Values',
        'retired': ''
      },
      '0x00160011': {
        'keyword': 'FlashFiringStatus',
        'vr': 'US',
        'vm': '1',
        'name': 'Flash Firing Status',
        'retired': ''
      },
      '0x00160012': {
        'keyword': 'FlashReturnStatus',
        'vr': 'US',
        'vm': '1',
        'name': 'Flash Return Status',
        'retired': ''
      },
      '0x00160013': {
        'keyword': 'FlashMode',
        'vr': 'US',
        'vm': '1',
        'name': 'Flash Mode',
        'retired': ''
      },
      '0x00160014': {
        'keyword': 'FlashFunctionPresent',
        'vr': 'US',
        'vm': '1',
        'name': 'Flash Function Present',
        'retired': ''
      },
      '0x00160015': {
        'keyword': 'FlashRedEyeMode',
        'vr': 'US',
        'vm': '1',
        'name': 'Flash Red Eye Mode',
        'retired': ''
      },
      '0x00160016': {
        'keyword': 'ExposureProgram',
        'vr': 'US',
        'vm': '1',
        'name': 'Exposure Program',
        'retired': ''
      },
      '0x00160017': {
        'keyword': 'SpectralSensitivity',
        'vr': 'UT',
        'vm': '1',
        'name': 'Spectral Sensitivity',
        'retired': ''
      },
      '0x00160018': {
        'keyword': 'PhotographicSensitivity',
        'vr': 'IS',
        'vm': '1',
        'name': 'Photographic Sensitivity',
        'retired': ''
      },
      '0x00160019': {
        'keyword': 'SelfTimerMode',
        'vr': 'IS',
        'vm': '1',
        'name': 'Self Timer Mode',
        'retired': ''
      },
      '0x0016001A': {
        'keyword': 'SensitivityType',
        'vr': 'US',
        'vm': '1',
        'name': 'Sensitivity Type',
        'retired': ''
      },
      '0x0016001B': {
        'keyword': 'StandardOutputSensitivity',
        'vr': 'IS',
        'vm': '1',
        'name': 'Standard Output Sensitivity',
        'retired': ''
      },
      '0x0016001C': {
        'keyword': 'RecommendedExposureIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Recommended Exposure Index',
        'retired': ''
      },
      '0x0016001D': {
        'keyword': 'ISOSpeed',
        'vr': 'IS',
        'vm': '1',
        'name': 'ISO Speed',
        'retired': ''
      },
      '0x0016001E': {
        'keyword': 'ISOSpeedLatitudeyyy',
        'vr': 'IS',
        'vm': '1',
        'name': 'ISO Speed Latitude yyy',
        'retired': ''
      },
      '0x0016001F': {
        'keyword': 'ISOSpeedLatitudezzz',
        'vr': 'IS',
        'vm': '1',
        'name': 'ISO Speed Latitude zzz',
        'retired': ''
      },
      '0x00160020': {
        'keyword': 'EXIFVersion',
        'vr': 'UT',
        'vm': '1',
        'name': 'EXIF Version',
        'retired': ''
      },
      '0x00160021': {
        'keyword': 'ShutterSpeedValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Shutter Speed Value',
        'retired': ''
      },
      '0x00160022': {
        'keyword': 'ApertureValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Aperture Value',
        'retired': ''
      },
      '0x00160023': {
        'keyword': 'BrightnessValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Brightness Value',
        'retired': ''
      },
      '0x00160024': {
        'keyword': 'ExposureBiasValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Exposure Bias Value',
        'retired': ''
      },
      '0x00160025': {
        'keyword': 'MaxApertureValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Max Aperture Value',
        'retired': ''
      },
      '0x00160026': {
        'keyword': 'SubjectDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Subject Distance',
        'retired': ''
      },
      '0x00160027': {
        'keyword': 'MeteringMode',
        'vr': 'US',
        'vm': '1',
        'name': 'Metering Mode',
        'retired': ''
      },
      '0x00160028': {
        'keyword': 'LightSource',
        'vr': 'US',
        'vm': '1',
        'name': 'Light Source',
        'retired': ''
      },
      '0x00160029': {
        'keyword': 'FocalLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Focal Length',
        'retired': ''
      },
      '0x0016002A': {
        'keyword': 'SubjectArea',
        'vr': 'IS',
        'vm': '2-4',
        'name': 'Subject Area',
        'retired': ''
      },
      '0x0016002B': {
        'keyword': 'MakerNote',
        'vr': 'OB',
        'vm': '1',
        'name': 'Maker Note',
        'retired': ''
      },
      '0x00160030': {
        'keyword': 'Temperature',
        'vr': 'DS',
        'vm': '1',
        'name': 'Temperature',
        'retired': ''
      },
      '0x00160031': {
        'keyword': 'Humidity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Humidity',
        'retired': ''
      },
      '0x00160032': {
        'keyword': 'Pressure',
        'vr': 'DS',
        'vm': '1',
        'name': 'Pressure',
        'retired': ''
      },
      '0x00160033': {
        'keyword': 'WaterDepth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Water Depth',
        'retired': ''
      },
      '0x00160034': {
        'keyword': 'Acceleration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Acceleration',
        'retired': ''
      },
      '0x00160035': {
        'keyword': 'CameraElevationAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Camera Elevation Angle',
        'retired': ''
      },
      '0x00160036': {
        'keyword': 'FlashEnergy',
        'vr': 'DS',
        'vm': '1-2',
        'name': 'Flash Energy',
        'retired': ''
      },
      '0x00160037': {
        'keyword': 'SubjectLocation',
        'vr': 'IS',
        'vm': '2',
        'name': 'Subject Location',
        'retired': ''
      },
      '0x00160038': {
        'keyword': 'PhotographicExposureIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Photographic Exposure Index',
        'retired': ''
      },
      '0x00160039': {
        'keyword': 'SensingMethod',
        'vr': 'US',
        'vm': '1',
        'name': 'Sensing Method',
        'retired': ''
      },
      '0x0016003A': {
        'keyword': 'FileSource',
        'vr': 'US',
        'vm': '1',
        'name': 'File Source',
        'retired': ''
      },
      '0x0016003B': {
        'keyword': 'SceneType',
        'vr': 'US',
        'vm': '1',
        'name': 'Scene Type',
        'retired': ''
      },
      '0x00160041': {
        'keyword': 'CustomRendered',
        'vr': 'US',
        'vm': '1',
        'name': 'Custom Rendered',
        'retired': ''
      },
      '0x00160042': {
        'keyword': 'ExposureMode',
        'vr': 'US',
        'vm': '1',
        'name': 'Exposure Mode',
        'retired': ''
      },
      '0x00160043': {
        'keyword': 'WhiteBalance',
        'vr': 'US',
        'vm': '1',
        'name': 'White Balance',
        'retired': ''
      },
      '0x00160044': {
        'keyword': 'DigitalZoomRatio',
        'vr': 'DS',
        'vm': '1',
        'name': 'Digital Zoom Ratio',
        'retired': ''
      },
      '0x00160045': {
        'keyword': 'FocalLengthIn35mmFilm',
        'vr': 'IS',
        'vm': '1',
        'name': 'Focal Length In 35mm Film',
        'retired': ''
      },
      '0x00160046': {
        'keyword': 'SceneCaptureType',
        'vr': 'US',
        'vm': '1',
        'name': 'Scene Capture Type',
        'retired': ''
      },
      '0x00160047': {
        'keyword': 'GainControl',
        'vr': 'US',
        'vm': '1',
        'name': 'Gain Control',
        'retired': ''
      },
      '0x00160048': {
        'keyword': 'Contrast',
        'vr': 'US',
        'vm': '1',
        'name': 'Contrast',
        'retired': ''
      },
      '0x00160049': {
        'keyword': 'Saturation',
        'vr': 'US',
        'vm': '1',
        'name': 'Saturation',
        'retired': ''
      },
      '0x0016004A': {
        'keyword': 'Sharpness',
        'vr': 'US',
        'vm': '1',
        'name': 'Sharpness',
        'retired': ''
      },
      '0x0016004B': {
        'keyword': 'DeviceSettingDescription',
        'vr': 'OB',
        'vm': '1',
        'name': 'Device Setting Description',
        'retired': ''
      },
      '0x0016004C': {
        'keyword': 'SubjectDistanceRange',
        'vr': 'US',
        'vm': '1',
        'name': 'Subject Distance Range',
        'retired': ''
      },
      '0x0016004D': {
        'keyword': 'CameraOwnerName',
        'vr': 'UT',
        'vm': '1',
        'name': 'Camera Owner Name',
        'retired': ''
      },
      '0x0016004E': {
        'keyword': 'LensSpecification',
        'vr': 'DS',
        'vm': '4',
        'name': 'Lens Specification',
        'retired': ''
      },
      '0x0016004F': {
        'keyword': 'LensMake',
        'vr': 'UT',
        'vm': '1',
        'name': 'Lens Make',
        'retired': ''
      },
      '0x00160050': {
        'keyword': 'LensModel',
        'vr': 'UT',
        'vm': '1',
        'name': 'Lens Model',
        'retired': ''
      },
      '0x00160051': {
        'keyword': 'LensSerialNumber',
        'vr': 'UT',
        'vm': '1',
        'name': 'Lens Serial Number',
        'retired': ''
      },
      '0x00160061': {
        'keyword': 'InteroperabilityIndex',
        'vr': 'CS',
        'vm': '1',
        'name': 'Interoperability Index',
        'retired': ''
      },
      '0x00160062': {
        'keyword': 'InteroperabilityVersion',
        'vr': 'OB',
        'vm': '1',
        'name': 'Interoperability Version',
        'retired': ''
      },
      '0x00160070': {
        'keyword': 'GPSVersionID',
        'vr': 'OB',
        'vm': '1',
        'name': 'GPS Version ID',
        'retired': ''
      },
      '0x00160071': {
        'keyword': 'GPSLatitudeRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Latitude Ref',
        'retired': ''
      },
      '0x00160072': {
        'keyword': 'GPSLatitude',
        'vr': 'DS',
        'vm': '3',
        'name': 'GPS Latitude',
        'retired': ''
      },
      '0x00160073': {
        'keyword': 'GPSLongitudeRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Longitude Ref',
        'retired': ''
      },
      '0x00160074': {
        'keyword': 'GPSLongitude',
        'vr': 'DS',
        'vm': '3',
        'name': 'GPS Longitude',
        'retired': ''
      },
      '0x00160075': {
        'keyword': 'GPSAltitudeRef',
        'vr': 'US',
        'vm': '1',
        'name': 'GPS Altitude Ref',
        'retired': ''
      },
      '0x00160076': {
        'keyword': 'GPSAltitude',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Altitude',
        'retired': ''
      },
      '0x00160077': {
        'keyword': 'GPSTimeStamp',
        'vr': 'DT',
        'vm': '1',
        'name': 'GPS Time Stamp',
        'retired': ''
      },
      '0x00160078': {
        'keyword': 'GPSSatellites',
        'vr': 'UT',
        'vm': '1',
        'name': 'GPS Satellites',
        'retired': ''
      },
      '0x00160079': {
        'keyword': 'GPSStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Status',
        'retired': ''
      },
      '0x0016007A': {
        'keyword': 'GPSMeasureMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Measure Mode',
        'retired': ''
      },
      '0x0016007B': {
        'keyword': 'GPSDOP',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS DOP',
        'retired': ''
      },
      '0x0016007C': {
        'keyword': 'GPSSpeedRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Speed Ref',
        'retired': ''
      },
      '0x0016007D': {
        'keyword': 'GPSSpeed',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Speed',
        'retired': ''
      },
      '0x0016007E': {
        'keyword': 'GPSTrackRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Track Ref',
        'retired': ''
      },
      '0x0016007F': {
        'keyword': 'GPSTrack',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Track',
        'retired': ''
      },
      '0x00160080': {
        'keyword': 'GPSImgDirectionRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Img Direction Ref',
        'retired': ''
      },
      '0x00160081': {
        'keyword': 'GPSImgDirection',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Img Direction',
        'retired': ''
      },
      '0x00160082': {
        'keyword': 'GPSMapDatum',
        'vr': 'UT',
        'vm': '1',
        'name': 'GPS Map Datum',
        'retired': ''
      },
      '0x00160083': {
        'keyword': 'GPSDestLatitudeRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Dest Latitude Ref',
        'retired': ''
      },
      '0x00160084': {
        'keyword': 'GPSDestLatitude',
        'vr': 'DS',
        'vm': '3',
        'name': 'GPS Dest Latitude',
        'retired': ''
      },
      '0x00160085': {
        'keyword': 'GPSDestLongitudeRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Dest Longitude Ref',
        'retired': ''
      },
      '0x00160086': {
        'keyword': 'GPSDestLongitude',
        'vr': 'DS',
        'vm': '3',
        'name': 'GPS Dest Longitude',
        'retired': ''
      },
      '0x00160087': {
        'keyword': 'GPSDestBearingRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Dest Bearing Ref',
        'retired': ''
      },
      '0x00160088': {
        'keyword': 'GPSDestBearing',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Dest Bearing',
        'retired': ''
      },
      '0x00160089': {
        'keyword': 'GPSDestDistanceRef',
        'vr': 'CS',
        'vm': '1',
        'name': 'GPS Dest Distance Ref',
        'retired': ''
      },
      '0x0016008A': {
        'keyword': 'GPSDestDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'GPS Dest Distance',
        'retired': ''
      },
      '0x0016008B': {
        'keyword': 'GPSProcessingMethod',
        'vr': 'OB',
        'vm': '1',
        'name': 'GPS Processing Method',
        'retired': ''
      },
      '0x0016008C': {
        'keyword': 'GPSAreaInformation',
        'vr': 'OB',
        'vm': '1',
        'name': 'GPS Area Information',
        'retired': ''
      },
      '0x0016008D': {
        'keyword': 'GPSDateStamp',
        'vr': 'DT',
        'vm': '1',
        'name': 'GPS Date Stamp',
        'retired': ''
      },
      '0x0016008E': {
        'keyword': 'GPSDifferential',
        'vr': 'IS',
        'vm': '1',
        'name': 'GPS Differential',
        'retired': ''
      },
      '0x00161001': {
        'keyword': 'LightSourcePolarization',
        'vr': 'CS',
        'vm': '1',
        'name': 'Light Source Polarization',
        'retired': ''
      },
      '0x00161002': {
        'keyword': 'EmitterColorTemperature',
        'vr': 'DS',
        'vm': '1',
        'name': 'Emitter Color Temperature',
        'retired': ''
      },
      '0x00161003': {
        'keyword': 'ContactMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contact Method',
        'retired': ''
      },
      '0x00161004': {
        'keyword': 'ImmersionMedia',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Immersion Media',
        'retired': ''
      },
      '0x00161005': {
        'keyword': 'OpticalMagnificationFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Optical Magnification Factor',
        'retired': ''
      },
      '0x00180010': {
        'keyword': 'ContrastBolusAgent',
        'vr': 'LO',
        'vm': '1',
        'name': 'Contrast/Bolus Agent',
        'retired': ''
      },
      '0x00180012': {
        'keyword': 'ContrastBolusAgentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contrast/Bolus Agent Sequence',
        'retired': ''
      },
      '0x00180013': {
        'keyword': 'ContrastBolusT1Relaxivity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Contrast/Bolus T1 Relaxivity',
        'retired': ''
      },
      '0x00180014': {
        'keyword': 'ContrastBolusAdministrationRouteSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contrast/Bolus Administration Route Sequence',
        'retired': ''
      },
      '0x00180015': {
        'keyword': 'BodyPartExamined',
        'vr': 'CS',
        'vm': '1',
        'name': 'Body Part Examined',
        'retired': ''
      },
      '0x00180020': {
        'keyword': 'ScanningSequence',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Scanning Sequence',
        'retired': ''
      },
      '0x00180021': {
        'keyword': 'SequenceVariant',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Sequence Variant',
        'retired': ''
      },
      '0x00180022': {
        'keyword': 'ScanOptions',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Scan Options',
        'retired': ''
      },
      '0x00180023': {
        'keyword': 'MRAcquisitionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'MR Acquisition Type',
        'retired': ''
      },
      '0x00180024': {
        'keyword': 'SequenceName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Sequence Name',
        'retired': ''
      },
      '0x00180025': {
        'keyword': 'AngioFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Angio Flag',
        'retired': ''
      },
      '0x00180026': {
        'keyword': 'InterventionDrugInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intervention Drug Information Sequence',
        'retired': ''
      },
      '0x00180027': {
        'keyword': 'InterventionDrugStopTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Intervention Drug Stop Time',
        'retired': ''
      },
      '0x00180028': {
        'keyword': 'InterventionDrugDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Intervention Drug Dose',
        'retired': ''
      },
      '0x00180029': {
        'keyword': 'InterventionDrugCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intervention Drug Code Sequence',
        'retired': ''
      },
      '0x0018002A': {
        'keyword': 'AdditionalDrugSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Additional Drug Sequence',
        'retired': ''
      },
      '0x00180030': {
        'keyword': 'Radionuclide',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Radionuclide',
        'retired': 'Retired'
      },
      '0x00180031': {
        'keyword': 'Radiopharmaceutical',
        'vr': 'LO',
        'vm': '1',
        'name': 'Radiopharmaceutical',
        'retired': ''
      },
      '0x00180032': {
        'keyword': 'EnergyWindowCenterline',
        'vr': 'DS',
        'vm': '1',
        'name': 'Energy Window Centerline',
        'retired': 'Retired'
      },
      '0x00180033': {
        'keyword': 'EnergyWindowTotalWidth',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Energy Window Total Width',
        'retired': 'Retired'
      },
      '0x00180034': {
        'keyword': 'InterventionDrugName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Intervention Drug Name',
        'retired': ''
      },
      '0x00180035': {
        'keyword': 'InterventionDrugStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Intervention Drug Start Time',
        'retired': ''
      },
      '0x00180036': {
        'keyword': 'InterventionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intervention Sequence',
        'retired': ''
      },
      '0x00180037': {
        'keyword': 'TherapyType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Therapy Type',
        'retired': 'Retired'
      },
      '0x00180038': {
        'keyword': 'InterventionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Intervention Status',
        'retired': ''
      },
      '0x00180039': {
        'keyword': 'TherapyDescription',
        'vr': 'CS',
        'vm': '1',
        'name': 'Therapy Description',
        'retired': 'Retired'
      },
      '0x0018003A': {
        'keyword': 'InterventionDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Intervention Description',
        'retired': ''
      },
      '0x00180040': {
        'keyword': 'CineRate',
        'vr': 'IS',
        'vm': '1',
        'name': 'Cine Rate',
        'retired': ''
      },
      '0x00180042': {
        'keyword': 'InitialCineRunState',
        'vr': 'CS',
        'vm': '1',
        'name': 'Initial Cine Run State',
        'retired': ''
      },
      '0x00180050': {
        'keyword': 'SliceThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Slice Thickness',
        'retired': ''
      },
      '0x00180060': {
        'keyword': 'KVP',
        'vr': 'DS',
        'vm': '1',
        'name': 'KVP',
        'retired': ''
      },
      '0x00180061': {
        'keyword': '',
        'vr': 'DS',
        'vm': '1',
        'name': '',
        'retired': 'Retired'
      },
      '0x00180070': {
        'keyword': 'CountsAccumulated',
        'vr': 'IS',
        'vm': '1',
        'name': 'Counts Accumulated',
        'retired': ''
      },
      '0x00180071': {
        'keyword': 'AcquisitionTerminationCondition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Termination Condition',
        'retired': ''
      },
      '0x00180072': {
        'keyword': 'EffectiveDuration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Effective Duration',
        'retired': ''
      },
      '0x00180073': {
        'keyword': 'AcquisitionStartCondition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Start Condition',
        'retired': ''
      },
      '0x00180074': {
        'keyword': 'AcquisitionStartConditionData',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisition Start Condition Data',
        'retired': ''
      },
      '0x00180075': {
        'keyword': 'AcquisitionTerminationConditionData',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisition Termination Condition Data',
        'retired': ''
      },
      '0x00180080': {
        'keyword': 'RepetitionTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Repetition Time',
        'retired': ''
      },
      '0x00180081': {
        'keyword': 'EchoTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Echo Time',
        'retired': ''
      },
      '0x00180082': {
        'keyword': 'InversionTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Inversion Time',
        'retired': ''
      },
      '0x00180083': {
        'keyword': 'NumberOfAverages',
        'vr': 'DS',
        'vm': '1',
        'name': 'Number of Averages',
        'retired': ''
      },
      '0x00180084': {
        'keyword': 'ImagingFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Imaging Frequency',
        'retired': ''
      },
      '0x00180085': {
        'keyword': 'ImagedNucleus',
        'vr': 'SH',
        'vm': '1',
        'name': 'Imaged Nucleus',
        'retired': ''
      },
      '0x00180086': {
        'keyword': 'EchoNumbers',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Echo Number(s)',
        'retired': ''
      },
      '0x00180087': {
        'keyword': 'MagneticFieldStrength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Magnetic Field Strength',
        'retired': ''
      },
      '0x00180088': {
        'keyword': 'SpacingBetweenSlices',
        'vr': 'DS',
        'vm': '1',
        'name': 'Spacing Between Slices',
        'retired': ''
      },
      '0x00180089': {
        'keyword': 'NumberOfPhaseEncodingSteps',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Phase Encoding Steps',
        'retired': ''
      },
      '0x00180090': {
        'keyword': 'DataCollectionDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Data Collection Diameter',
        'retired': ''
      },
      '0x00180091': {
        'keyword': 'EchoTrainLength',
        'vr': 'IS',
        'vm': '1',
        'name': 'Echo Train Length',
        'retired': ''
      },
      '0x00180093': {
        'keyword': 'PercentSampling',
        'vr': 'DS',
        'vm': '1',
        'name': 'Percent Sampling',
        'retired': ''
      },
      '0x00180094': {
        'keyword': 'PercentPhaseFieldOfView',
        'vr': 'DS',
        'vm': '1',
        'name': 'Percent Phase Field of View',
        'retired': ''
      },
      '0x00180095': {
        'keyword': 'PixelBandwidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Pixel Bandwidth',
        'retired': ''
      },
      '0x00181000': {
        'keyword': 'DeviceSerialNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Device Serial Number',
        'retired': ''
      },
      '0x00181002': {
        'keyword': 'DeviceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Device UID',
        'retired': ''
      },
      '0x00181003': {
        'keyword': 'DeviceID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Device ID',
        'retired': ''
      },
      '0x00181004': {
        'keyword': 'PlateID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Plate ID',
        'retired': ''
      },
      '0x00181005': {
        'keyword': 'GeneratorID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Generator ID',
        'retired': ''
      },
      '0x00181006': {
        'keyword': 'GridID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Grid ID',
        'retired': ''
      },
      '0x00181007': {
        'keyword': 'CassetteID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Cassette ID',
        'retired': ''
      },
      '0x00181008': {
        'keyword': 'GantryID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Gantry ID',
        'retired': ''
      },
      '0x00181009': {
        'keyword': 'UniqueDeviceIdentifier',
        'vr': 'UT',
        'vm': '1',
        'name': 'Unique Device Identifier',
        'retired': ''
      },
      '0x0018100A': {
        'keyword': 'UDISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'UDI Sequence',
        'retired': ''
      },
      '0x0018100B': {
        'keyword': 'ManufacturerDeviceClassUID',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Manufacturer\'s Device Class UID',
        'retired': ''
      },
      '0x00181010': {
        'keyword': 'SecondaryCaptureDeviceID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Secondary Capture Device ID',
        'retired': ''
      },
      '0x00181011': {
        'keyword': 'HardcopyCreationDeviceID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hardcopy Creation Device ID',
        'retired': 'Retired'
      },
      '0x00181012': {
        'keyword': 'DateOfSecondaryCapture',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Secondary Capture',
        'retired': ''
      },
      '0x00181014': {
        'keyword': 'TimeOfSecondaryCapture',
        'vr': 'TM',
        'vm': '1',
        'name': 'Time of Secondary Capture',
        'retired': ''
      },
      '0x00181016': {
        'keyword': 'SecondaryCaptureDeviceManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Secondary Capture Device Manufacturer',
        'retired': ''
      },
      '0x00181017': {
        'keyword': 'HardcopyDeviceManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hardcopy Device Manufacturer',
        'retired': 'Retired'
      },
      '0x00181018': {
        'keyword': 'SecondaryCaptureDeviceManufacturerModelName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Secondary Capture Device Manufacturer\'s Model Name',
        'retired': ''
      },
      '0x00181019': {
        'keyword': 'SecondaryCaptureDeviceSoftwareVersions',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Secondary Capture Device Software Versions',
        'retired': ''
      },
      '0x0018101A': {
        'keyword': 'HardcopyDeviceSoftwareVersion',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Hardcopy Device Software Version',
        'retired': 'Retired'
      },
      '0x0018101B': {
        'keyword': 'HardcopyDeviceManufacturerModelName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hardcopy Device Manufacturer\'s Model Name',
        'retired': 'Retired'
      },
      '0x00181020': {
        'keyword': 'SoftwareVersions',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Software Versions',
        'retired': ''
      },
      '0x00181022': {
        'keyword': 'VideoImageFormatAcquired',
        'vr': 'SH',
        'vm': '1',
        'name': 'Video Image Format Acquired',
        'retired': ''
      },
      '0x00181023': {
        'keyword': 'DigitalImageFormatAcquired',
        'vr': 'LO',
        'vm': '1',
        'name': 'Digital Image Format Acquired',
        'retired': ''
      },
      '0x00181030': {
        'keyword': 'ProtocolName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Protocol Name',
        'retired': ''
      },
      '0x00181040': {
        'keyword': 'ContrastBolusRoute',
        'vr': 'LO',
        'vm': '1',
        'name': 'Contrast/Bolus Route',
        'retired': ''
      },
      '0x00181041': {
        'keyword': 'ContrastBolusVolume',
        'vr': 'DS',
        'vm': '1',
        'name': 'Contrast/Bolus Volume',
        'retired': ''
      },
      '0x00181042': {
        'keyword': 'ContrastBolusStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Contrast/Bolus Start Time',
        'retired': ''
      },
      '0x00181043': {
        'keyword': 'ContrastBolusStopTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Contrast/Bolus Stop Time',
        'retired': ''
      },
      '0x00181044': {
        'keyword': 'ContrastBolusTotalDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Contrast/Bolus Total Dose',
        'retired': ''
      },
      '0x00181045': {
        'keyword': 'SyringeCounts',
        'vr': 'IS',
        'vm': '1',
        'name': 'Syringe Counts',
        'retired': ''
      },
      '0x00181046': {
        'keyword': 'ContrastFlowRate',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Contrast Flow Rate',
        'retired': ''
      },
      '0x00181047': {
        'keyword': 'ContrastFlowDuration',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Contrast Flow Duration',
        'retired': ''
      },
      '0x00181048': {
        'keyword': 'ContrastBolusIngredient',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Ingredient',
        'retired': ''
      },
      '0x00181049': {
        'keyword': 'ContrastBolusIngredientConcentration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Contrast/Bolus Ingredient Concentration',
        'retired': ''
      },
      '0x00181050': {
        'keyword': 'SpatialResolution',
        'vr': 'DS',
        'vm': '1',
        'name': 'Spatial Resolution',
        'retired': ''
      },
      '0x00181060': {
        'keyword': 'TriggerTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Trigger Time',
        'retired': ''
      },
      '0x00181061': {
        'keyword': 'TriggerSourceOrType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Trigger Source or Type',
        'retired': ''
      },
      '0x00181062': {
        'keyword': 'NominalInterval',
        'vr': 'IS',
        'vm': '1',
        'name': 'Nominal Interval',
        'retired': ''
      },
      '0x00181063': {
        'keyword': 'FrameTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Frame Time',
        'retired': ''
      },
      '0x00181064': {
        'keyword': 'CardiacFramingType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Cardiac Framing Type',
        'retired': ''
      },
      '0x00181065': {
        'keyword': 'FrameTimeVector',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Frame Time Vector',
        'retired': ''
      },
      '0x00181066': {
        'keyword': 'FrameDelay',
        'vr': 'DS',
        'vm': '1',
        'name': 'Frame Delay',
        'retired': ''
      },
      '0x00181067': {
        'keyword': 'ImageTriggerDelay',
        'vr': 'DS',
        'vm': '1',
        'name': 'Image Trigger Delay',
        'retired': ''
      },
      '0x00181068': {
        'keyword': 'MultiplexGroupTimeOffset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Multiplex Group Time Offset',
        'retired': ''
      },
      '0x00181069': {
        'keyword': 'TriggerTimeOffset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Trigger Time Offset',
        'retired': ''
      },
      '0x0018106A': {
        'keyword': 'SynchronizationTrigger',
        'vr': 'CS',
        'vm': '1',
        'name': 'Synchronization Trigger',
        'retired': ''
      },
      '0x0018106C': {
        'keyword': 'SynchronizationChannel',
        'vr': 'US',
        'vm': '2',
        'name': 'Synchronization Channel',
        'retired': ''
      },
      '0x0018106E': {
        'keyword': 'TriggerSamplePosition',
        'vr': 'UL',
        'vm': '1',
        'name': 'Trigger Sample Position',
        'retired': ''
      },
      '0x00181070': {
        'keyword': 'RadiopharmaceuticalRoute',
        'vr': 'LO',
        'vm': '1',
        'name': 'Radiopharmaceutical Route',
        'retired': ''
      },
      '0x00181071': {
        'keyword': 'RadiopharmaceuticalVolume',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radiopharmaceutical Volume',
        'retired': ''
      },
      '0x00181072': {
        'keyword': 'RadiopharmaceuticalStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Radiopharmaceutical Start Time',
        'retired': ''
      },
      '0x00181073': {
        'keyword': 'RadiopharmaceuticalStopTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Radiopharmaceutical Stop Time',
        'retired': ''
      },
      '0x00181074': {
        'keyword': 'RadionuclideTotalDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radionuclide Total Dose',
        'retired': ''
      },
      '0x00181075': {
        'keyword': 'RadionuclideHalfLife',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radionuclide Half Life',
        'retired': ''
      },
      '0x00181076': {
        'keyword': 'RadionuclidePositronFraction',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radionuclide Positron Fraction',
        'retired': ''
      },
      '0x00181077': {
        'keyword': 'RadiopharmaceuticalSpecificActivity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radiopharmaceutical Specific Activity',
        'retired': ''
      },
      '0x00181078': {
        'keyword': 'RadiopharmaceuticalStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Radiopharmaceutical Start DateTime',
        'retired': ''
      },
      '0x00181079': {
        'keyword': 'RadiopharmaceuticalStopDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Radiopharmaceutical Stop DateTime',
        'retired': ''
      },
      '0x00181080': {
        'keyword': 'BeatRejectionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beat Rejection Flag',
        'retired': ''
      },
      '0x00181081': {
        'keyword': 'LowRRValue',
        'vr': 'IS',
        'vm': '1',
        'name': 'Low R-R Value',
        'retired': ''
      },
      '0x00181082': {
        'keyword': 'HighRRValue',
        'vr': 'IS',
        'vm': '1',
        'name': 'High R-R Value',
        'retired': ''
      },
      '0x00181083': {
        'keyword': 'IntervalsAcquired',
        'vr': 'IS',
        'vm': '1',
        'name': 'Intervals Acquired',
        'retired': ''
      },
      '0x00181084': {
        'keyword': 'IntervalsRejected',
        'vr': 'IS',
        'vm': '1',
        'name': 'Intervals Rejected',
        'retired': ''
      },
      '0x00181085': {
        'keyword': 'PVCRejection',
        'vr': 'LO',
        'vm': '1',
        'name': 'PVC Rejection',
        'retired': ''
      },
      '0x00181086': {
        'keyword': 'SkipBeats',
        'vr': 'IS',
        'vm': '1',
        'name': 'Skip Beats',
        'retired': ''
      },
      '0x00181088': {
        'keyword': 'HeartRate',
        'vr': 'IS',
        'vm': '1',
        'name': 'Heart Rate',
        'retired': ''
      },
      '0x00181090': {
        'keyword': 'CardiacNumberOfImages',
        'vr': 'IS',
        'vm': '1',
        'name': 'Cardiac Number of Images',
        'retired': ''
      },
      '0x00181094': {
        'keyword': 'TriggerWindow',
        'vr': 'IS',
        'vm': '1',
        'name': 'Trigger Window',
        'retired': ''
      },
      '0x00181100': {
        'keyword': 'ReconstructionDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Reconstruction Diameter',
        'retired': ''
      },
      '0x00181110': {
        'keyword': 'DistanceSourceToDetector',
        'vr': 'DS',
        'vm': '1',
        'name': 'Distance Source to Detector',
        'retired': ''
      },
      '0x00181111': {
        'keyword': 'DistanceSourceToPatient',
        'vr': 'DS',
        'vm': '1',
        'name': 'Distance Source to Patient',
        'retired': ''
      },
      '0x00181114': {
        'keyword': 'EstimatedRadiographicMagnificationFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Estimated Radiographic Magnification Factor',
        'retired': ''
      },
      '0x00181120': {
        'keyword': 'GantryDetectorTilt',
        'vr': 'DS',
        'vm': '1',
        'name': 'Gantry/Detector Tilt',
        'retired': ''
      },
      '0x00181121': {
        'keyword': 'GantryDetectorSlew',
        'vr': 'DS',
        'vm': '1',
        'name': 'Gantry/Detector Slew',
        'retired': ''
      },
      '0x00181130': {
        'keyword': 'TableHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Height',
        'retired': ''
      },
      '0x00181131': {
        'keyword': 'TableTraverse',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Traverse',
        'retired': ''
      },
      '0x00181134': {
        'keyword': 'TableMotion',
        'vr': 'CS',
        'vm': '1',
        'name': 'Table Motion',
        'retired': ''
      },
      '0x00181135': {
        'keyword': 'TableVerticalIncrement',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Table Vertical Increment',
        'retired': ''
      },
      '0x00181136': {
        'keyword': 'TableLateralIncrement',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Table Lateral Increment',
        'retired': ''
      },
      '0x00181137': {
        'keyword': 'TableLongitudinalIncrement',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Table Longitudinal Increment',
        'retired': ''
      },
      '0x00181138': {
        'keyword': 'TableAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Angle',
        'retired': ''
      },
      '0x0018113A': {
        'keyword': 'TableType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Table Type',
        'retired': ''
      },
      '0x00181140': {
        'keyword': 'RotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Rotation Direction',
        'retired': ''
      },
      '0x00181141': {
        'keyword': 'AngularPosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Angular Position',
        'retired': 'Retired'
      },
      '0x00181142': {
        'keyword': 'RadialPosition',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Radial Position',
        'retired': ''
      },
      '0x00181143': {
        'keyword': 'ScanArc',
        'vr': 'DS',
        'vm': '1',
        'name': 'Scan Arc',
        'retired': ''
      },
      '0x00181144': {
        'keyword': 'AngularStep',
        'vr': 'DS',
        'vm': '1',
        'name': 'Angular Step',
        'retired': ''
      },
      '0x00181145': {
        'keyword': 'CenterOfRotationOffset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Center of Rotation Offset',
        'retired': ''
      },
      '0x00181146': {
        'keyword': 'RotationOffset',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Rotation Offset',
        'retired': 'Retired'
      },
      '0x00181147': {
        'keyword': 'FieldOfViewShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Field of View Shape',
        'retired': ''
      },
      '0x00181149': {
        'keyword': 'FieldOfViewDimensions',
        'vr': 'IS',
        'vm': '1-2',
        'name': 'Field of View Dimension(s)',
        'retired': ''
      },
      '0x00181150': {
        'keyword': 'ExposureTime',
        'vr': 'IS',
        'vm': '1',
        'name': 'Exposure Time',
        'retired': ''
      },
      '0x00181151': {
        'keyword': 'XRayTubeCurrent',
        'vr': 'IS',
        'vm': '1',
        'name': 'X-Ray Tube Current',
        'retired': ''
      },
      '0x00181152': {
        'keyword': 'Exposure',
        'vr': 'IS',
        'vm': '1',
        'name': 'Exposure',
        'retired': ''
      },
      '0x00181153': {
        'keyword': 'ExposureInuAs',
        'vr': 'IS',
        'vm': '1',
        'name': 'Exposure in uAs',
        'retired': ''
      },
      '0x00181154': {
        'keyword': 'AveragePulseWidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Average Pulse Width',
        'retired': ''
      },
      '0x00181155': {
        'keyword': 'RadiationSetting',
        'vr': 'CS',
        'vm': '1',
        'name': 'Radiation Setting',
        'retired': ''
      },
      '0x00181156': {
        'keyword': 'RectificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Rectification Type',
        'retired': ''
      },
      '0x0018115A': {
        'keyword': 'RadiationMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Radiation Mode',
        'retired': ''
      },
      '0x0018115E': {
        'keyword': 'ImageAndFluoroscopyAreaDoseProduct',
        'vr': 'DS',
        'vm': '1',
        'name': 'Image and Fluoroscopy Area Dose Product',
        'retired': ''
      },
      '0x00181160': {
        'keyword': 'FilterType',
        'vr': 'SH',
        'vm': '1',
        'name': 'Filter Type',
        'retired': ''
      },
      '0x00181161': {
        'keyword': 'TypeOfFilters',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Type of Filters',
        'retired': ''
      },
      '0x00181162': {
        'keyword': 'IntensifierSize',
        'vr': 'DS',
        'vm': '1',
        'name': 'Intensifier Size',
        'retired': ''
      },
      '0x00181164': {
        'keyword': 'ImagerPixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Imager Pixel Spacing',
        'retired': ''
      },
      '0x00181166': {
        'keyword': 'Grid',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Grid',
        'retired': ''
      },
      '0x00181170': {
        'keyword': 'GeneratorPower',
        'vr': 'IS',
        'vm': '1',
        'name': 'Generator Power',
        'retired': ''
      },
      '0x00181180': {
        'keyword': 'CollimatorGridName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Collimator/grid Name',
        'retired': ''
      },
      '0x00181181': {
        'keyword': 'CollimatorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Collimator Type',
        'retired': ''
      },
      '0x00181182': {
        'keyword': 'FocalDistance',
        'vr': 'IS',
        'vm': '1-2',
        'name': 'Focal Distance',
        'retired': ''
      },
      '0x00181183': {
        'keyword': 'XFocusCenter',
        'vr': 'DS',
        'vm': '1-2',
        'name': 'X Focus Center',
        'retired': ''
      },
      '0x00181184': {
        'keyword': 'YFocusCenter',
        'vr': 'DS',
        'vm': '1-2',
        'name': 'Y Focus Center',
        'retired': ''
      },
      '0x00181190': {
        'keyword': 'FocalSpots',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Focal Spot(s)',
        'retired': ''
      },
      '0x00181191': {
        'keyword': 'AnodeTargetMaterial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Anode Target Material',
        'retired': ''
      },
      '0x001811A0': {
        'keyword': 'BodyPartThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Body Part Thickness',
        'retired': ''
      },
      '0x001811A2': {
        'keyword': 'CompressionForce',
        'vr': 'DS',
        'vm': '1',
        'name': 'Compression Force',
        'retired': ''
      },
      '0x001811A3': {
        'keyword': 'CompressionPressure',
        'vr': 'DS',
        'vm': '1',
        'name': 'Compression Pressure',
        'retired': ''
      },
      '0x001811A4': {
        'keyword': 'PaddleDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Paddle Description',
        'retired': ''
      },
      '0x001811A5': {
        'keyword': 'CompressionContactArea',
        'vr': 'DS',
        'vm': '1',
        'name': 'Compression Contact Area',
        'retired': ''
      },
      '0x001811B0': {
        'keyword': 'AcquisitionMode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Acquisition Mode',
        'retired': ''
      },
      '0x001811B1': {
        'keyword': 'DoseModeName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Dose Mode Name',
        'retired': ''
      },
      '0x001811B2': {
        'keyword': 'AcquiredSubtractionMaskFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquired Subtraction Mask Flag',
        'retired': ''
      },
      '0x001811B3': {
        'keyword': 'FluoroscopyPersistenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fluoroscopy Persistence Flag',
        'retired': ''
      },
      '0x001811B4': {
        'keyword': 'FluoroscopyLastImageHoldPersistenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fluoroscopy Last Image Hold Persistence Flag',
        'retired': ''
      },
      '0x001811B5': {
        'keyword': 'UpperLimitNumberOfPersistentFluoroscopyFrames',
        'vr': 'IS',
        'vm': '1',
        'name': 'Upper Limit Number Of Persistent Fluoroscopy Frames',
        'retired': ''
      },
      '0x001811B6': {
        'keyword': 'ContrastBolusAutoInjectionTriggerFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Auto Injection Trigger Flag',
        'retired': ''
      },
      '0x001811B7': {
        'keyword': 'ContrastBolusInjectionDelay',
        'vr': 'FD',
        'vm': '1',
        'name': 'Contrast/Bolus Injection Delay',
        'retired': ''
      },
      '0x001811B8': {
        'keyword': 'XAAcquisitionPhaseDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'XA Acquisition Phase Details Sequence',
        'retired': ''
      },
      '0x001811B9': {
        'keyword': 'XAAcquisitionFrameRate',
        'vr': 'FD',
        'vm': '1',
        'name': 'XA Acquisition Frame Rate',
        'retired': ''
      },
      '0x001811BA': {
        'keyword': 'XAPlaneDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'XA Plane Details Sequence',
        'retired': ''
      },
      '0x001811BB': {
        'keyword': 'AcquisitionFieldOfViewLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Acquisition Field of View Label',
        'retired': ''
      },
      '0x001811BC': {
        'keyword': 'XRayFilterDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray Filter Details Sequence',
        'retired': ''
      },
      '0x001811BD': {
        'keyword': 'XAAcquisitionDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'XA Acquisition Duration',
        'retired': ''
      },
      '0x001811BE': {
        'keyword': 'ReconstructionPipelineType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reconstruction Pipeline Type',
        'retired': ''
      },
      '0x001811BF': {
        'keyword': 'ImageFilterDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Filter Details Sequence',
        'retired': ''
      },
      '0x001811C0': {
        'keyword': 'AppliedMaskSubtractionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Applied Mask Subtraction Flag',
        'retired': ''
      },
      '0x001811C1': {
        'keyword': 'RequestedSeriesDescriptionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requested Series Description Code Sequence',
        'retired': ''
      },
      '0x00181200': {
        'keyword': 'DateOfLastCalibration',
        'vr': 'DA',
        'vm': '1-n',
        'name': 'Date of Last Calibration',
        'retired': ''
      },
      '0x00181201': {
        'keyword': 'TimeOfLastCalibration',
        'vr': 'TM',
        'vm': '1-n',
        'name': 'Time of Last Calibration',
        'retired': ''
      },
      '0x00181202': {
        'keyword': 'DateTimeOfLastCalibration',
        'vr': 'DT',
        'vm': '1',
        'name': 'DateTime of Last Calibration',
        'retired': ''
      },
      '0x00181203': {
        'keyword': 'CalibrationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Calibration DateTime',
        'retired': ''
      },
      '0x00181204': {
        'keyword': 'DateOfManufacture',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Manufacture',
        'retired': ''
      },
      '0x00181205': {
        'keyword': 'DateOfInstallation',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Installation',
        'retired': ''
      },
      '0x00181210': {
        'keyword': 'ConvolutionKernel',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Convolution Kernel',
        'retired': ''
      },
      '0x00181240': {
        'keyword': 'UpperLowerPixelValues',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Upper/Lower Pixel Values',
        'retired': 'Retired'
      },
      '0x00181242': {
        'keyword': 'ActualFrameDuration',
        'vr': 'IS',
        'vm': '1',
        'name': 'Actual Frame Duration',
        'retired': ''
      },
      '0x00181243': {
        'keyword': 'CountRate',
        'vr': 'IS',
        'vm': '1',
        'name': 'Count Rate',
        'retired': ''
      },
      '0x00181244': {
        'keyword': 'PreferredPlaybackSequencing',
        'vr': 'US',
        'vm': '1',
        'name': 'Preferred Playback Sequencing',
        'retired': ''
      },
      '0x00181250': {
        'keyword': 'ReceiveCoilName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Receive Coil Name',
        'retired': ''
      },
      '0x00181251': {
        'keyword': 'TransmitCoilName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Transmit Coil Name',
        'retired': ''
      },
      '0x00181260': {
        'keyword': 'PlateType',
        'vr': 'SH',
        'vm': '1',
        'name': 'Plate Type',
        'retired': ''
      },
      '0x00181261': {
        'keyword': 'PhosphorType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Phosphor Type',
        'retired': ''
      },
      '0x00181271': {
        'keyword': 'WaterEquivalentDiameter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Water Equivalent Diameter',
        'retired': ''
      },
      '0x00181272': {
        'keyword': 'WaterEquivalentDiameterCalculationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Water Equivalent Diameter Calculation Method Code Sequence',
        'retired': ''
      },
      '0x00181300': {
        'keyword': 'ScanVelocity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Scan Velocity',
        'retired': ''
      },
      '0x00181301': {
        'keyword': 'WholeBodyTechnique',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Whole Body Technique',
        'retired': ''
      },
      '0x00181302': {
        'keyword': 'ScanLength',
        'vr': 'IS',
        'vm': '1',
        'name': 'Scan Length',
        'retired': ''
      },
      '0x00181310': {
        'keyword': 'AcquisitionMatrix',
        'vr': 'US',
        'vm': '4',
        'name': 'Acquisition Matrix',
        'retired': ''
      },
      '0x00181312': {
        'keyword': 'InPlanePhaseEncodingDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'In-plane Phase Encoding Direction',
        'retired': ''
      },
      '0x00181314': {
        'keyword': 'FlipAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Flip Angle',
        'retired': ''
      },
      '0x00181315': {
        'keyword': 'VariableFlipAngleFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Variable Flip Angle Flag',
        'retired': ''
      },
      '0x00181316': {
        'keyword': 'SAR',
        'vr': 'DS',
        'vm': '1',
        'name': 'SAR',
        'retired': ''
      },
      '0x00181318': {
        'keyword': 'dBdt',
        'vr': 'DS',
        'vm': '1',
        'name': 'dB/dt',
        'retired': ''
      },
      '0x00181320': {
        'keyword': 'B1rms',
        'vr': 'FL',
        'vm': '1',
        'name': 'B1rms',
        'retired': ''
      },
      '0x00181400': {
        'keyword': 'AcquisitionDeviceProcessingDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Acquisition Device Processing Description',
        'retired': ''
      },
      '0x00181401': {
        'keyword': 'AcquisitionDeviceProcessingCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Acquisition Device Processing Code',
        'retired': ''
      },
      '0x00181402': {
        'keyword': 'CassetteOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cassette Orientation',
        'retired': ''
      },
      '0x00181403': {
        'keyword': 'CassetteSize',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cassette Size',
        'retired': ''
      },
      '0x00181404': {
        'keyword': 'ExposuresOnPlate',
        'vr': 'US',
        'vm': '1',
        'name': 'Exposures on Plate',
        'retired': ''
      },
      '0x00181405': {
        'keyword': 'RelativeXRayExposure',
        'vr': 'IS',
        'vm': '1',
        'name': 'Relative X-Ray Exposure',
        'retired': ''
      },
      '0x00181411': {
        'keyword': 'ExposureIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Exposure Index',
        'retired': ''
      },
      '0x00181412': {
        'keyword': 'TargetExposureIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Target Exposure Index',
        'retired': ''
      },
      '0x00181413': {
        'keyword': 'DeviationIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Deviation Index',
        'retired': ''
      },
      '0x00181450': {
        'keyword': 'ColumnAngulation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Column Angulation',
        'retired': ''
      },
      '0x00181460': {
        'keyword': 'TomoLayerHeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Tomo Layer Height',
        'retired': ''
      },
      '0x00181470': {
        'keyword': 'TomoAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Tomo Angle',
        'retired': ''
      },
      '0x00181480': {
        'keyword': 'TomoTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Tomo Time',
        'retired': ''
      },
      '0x00181490': {
        'keyword': 'TomoType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tomo Type',
        'retired': ''
      },
      '0x00181491': {
        'keyword': 'TomoClass',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tomo Class',
        'retired': ''
      },
      '0x00181495': {
        'keyword': 'NumberOfTomosynthesisSourceImages',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Tomosynthesis Source Images',
        'retired': ''
      },
      '0x00181500': {
        'keyword': 'PositionerMotion',
        'vr': 'CS',
        'vm': '1',
        'name': 'Positioner Motion',
        'retired': ''
      },
      '0x00181508': {
        'keyword': 'PositionerType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Positioner Type',
        'retired': ''
      },
      '0x00181510': {
        'keyword': 'PositionerPrimaryAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Positioner Primary Angle',
        'retired': ''
      },
      '0x00181511': {
        'keyword': 'PositionerSecondaryAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Positioner Secondary Angle',
        'retired': ''
      },
      '0x00181520': {
        'keyword': 'PositionerPrimaryAngleIncrement',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Positioner Primary Angle Increment',
        'retired': ''
      },
      '0x00181521': {
        'keyword': 'PositionerSecondaryAngleIncrement',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Positioner Secondary Angle Increment',
        'retired': ''
      },
      '0x00181530': {
        'keyword': 'DetectorPrimaryAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Primary Angle',
        'retired': ''
      },
      '0x00181531': {
        'keyword': 'DetectorSecondaryAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Secondary Angle',
        'retired': ''
      },
      '0x00181600': {
        'keyword': 'ShutterShape',
        'vr': 'CS',
        'vm': '1-3',
        'name': 'Shutter Shape',
        'retired': ''
      },
      '0x00181602': {
        'keyword': 'ShutterLeftVerticalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Shutter Left Vertical Edge',
        'retired': ''
      },
      '0x00181604': {
        'keyword': 'ShutterRightVerticalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Shutter Right Vertical Edge',
        'retired': ''
      },
      '0x00181606': {
        'keyword': 'ShutterUpperHorizontalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Shutter Upper Horizontal Edge',
        'retired': ''
      },
      '0x00181608': {
        'keyword': 'ShutterLowerHorizontalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Shutter Lower Horizontal Edge',
        'retired': ''
      },
      '0x00181610': {
        'keyword': 'CenterOfCircularShutter',
        'vr': 'IS',
        'vm': '2',
        'name': 'Center of Circular Shutter',
        'retired': ''
      },
      '0x00181612': {
        'keyword': 'RadiusOfCircularShutter',
        'vr': 'IS',
        'vm': '1',
        'name': 'Radius of Circular Shutter',
        'retired': ''
      },
      '0x00181620': {
        'keyword': 'VerticesOfThePolygonalShutter',
        'vr': 'IS',
        'vm': '2-2n',
        'name': 'Vertices of the Polygonal Shutter',
        'retired': ''
      },
      '0x00181622': {
        'keyword': 'ShutterPresentationValue',
        'vr': 'US',
        'vm': '1',
        'name': 'Shutter Presentation Value',
        'retired': ''
      },
      '0x00181623': {
        'keyword': 'ShutterOverlayGroup',
        'vr': 'US',
        'vm': '1',
        'name': 'Shutter Overlay Group',
        'retired': ''
      },
      '0x00181624': {
        'keyword': 'ShutterPresentationColorCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Shutter Presentation Color CIELab Value',
        'retired': ''
      },
      '0x00181630': {
        'keyword': 'OutlineShapeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Outline Shape Type',
        'retired': ''
      },
      '0x00181631': {
        'keyword': 'OutlineLeftVerticalEdge',
        'vr': 'FD',
        'vm': '1',
        'name': 'Outline Left Vertical Edge',
        'retired': ''
      },
      '0x00181632': {
        'keyword': 'OutlineRightVerticalEdge',
        'vr': 'FD',
        'vm': '1',
        'name': 'Outline Right Vertical Edge',
        'retired': ''
      },
      '0x00181633': {
        'keyword': 'OutlineUpperHorizontalEdge',
        'vr': 'FD',
        'vm': '1',
        'name': 'Outline Upper Horizontal Edge',
        'retired': ''
      },
      '0x00181634': {
        'keyword': 'OutlineLowerHorizontalEdge',
        'vr': 'FD',
        'vm': '1',
        'name': 'Outline Lower Horizontal Edge',
        'retired': ''
      },
      '0x00181635': {
        'keyword': 'CenterOfCircularOutline',
        'vr': 'FD',
        'vm': '2',
        'name': 'Center of Circular Outline',
        'retired': ''
      },
      '0x00181636': {
        'keyword': 'DiameterOfCircularOutline',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diameter of Circular Outline',
        'retired': ''
      },
      '0x00181637': {
        'keyword': 'NumberOfPolygonalVertices',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Polygonal Vertices',
        'retired': ''
      },
      '0x00181638': {
        'keyword': 'VerticesOfThePolygonalOutline',
        'vr': 'OF',
        'vm': '1',
        'name': 'Vertices of the Polygonal Outline',
        'retired': ''
      },
      '0x00181700': {
        'keyword': 'CollimatorShape',
        'vr': 'CS',
        'vm': '1-3',
        'name': 'Collimator Shape',
        'retired': ''
      },
      '0x00181702': {
        'keyword': 'CollimatorLeftVerticalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Collimator Left Vertical Edge',
        'retired': ''
      },
      '0x00181704': {
        'keyword': 'CollimatorRightVerticalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Collimator Right Vertical Edge',
        'retired': ''
      },
      '0x00181706': {
        'keyword': 'CollimatorUpperHorizontalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Collimator Upper Horizontal Edge',
        'retired': ''
      },
      '0x00181708': {
        'keyword': 'CollimatorLowerHorizontalEdge',
        'vr': 'IS',
        'vm': '1',
        'name': 'Collimator Lower Horizontal Edge',
        'retired': ''
      },
      '0x00181710': {
        'keyword': 'CenterOfCircularCollimator',
        'vr': 'IS',
        'vm': '2',
        'name': 'Center of Circular Collimator',
        'retired': ''
      },
      '0x00181712': {
        'keyword': 'RadiusOfCircularCollimator',
        'vr': 'IS',
        'vm': '1',
        'name': 'Radius of Circular Collimator',
        'retired': ''
      },
      '0x00181720': {
        'keyword': 'VerticesOfThePolygonalCollimator',
        'vr': 'IS',
        'vm': '2-2n',
        'name': 'Vertices of the Polygonal Collimator',
        'retired': ''
      },
      '0x00181800': {
        'keyword': 'AcquisitionTimeSynchronized',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Time Synchronized',
        'retired': ''
      },
      '0x00181801': {
        'keyword': 'TimeSource',
        'vr': 'SH',
        'vm': '1',
        'name': 'Time Source',
        'retired': ''
      },
      '0x00181802': {
        'keyword': 'TimeDistributionProtocol',
        'vr': 'CS',
        'vm': '1',
        'name': 'Time Distribution Protocol',
        'retired': ''
      },
      '0x00181803': {
        'keyword': 'NTPSourceAddress',
        'vr': 'LO',
        'vm': '1',
        'name': 'NTP Source Address',
        'retired': ''
      },
      '0x00182001': {
        'keyword': 'PageNumberVector',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Page Number Vector',
        'retired': ''
      },
      '0x00182002': {
        'keyword': 'FrameLabelVector',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Frame Label Vector',
        'retired': ''
      },
      '0x00182003': {
        'keyword': 'FramePrimaryAngleVector',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Frame Primary Angle Vector',
        'retired': ''
      },
      '0x00182004': {
        'keyword': 'FrameSecondaryAngleVector',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Frame Secondary Angle Vector',
        'retired': ''
      },
      '0x00182005': {
        'keyword': 'SliceLocationVector',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Slice Location Vector',
        'retired': ''
      },
      '0x00182006': {
        'keyword': 'DisplayWindowLabelVector',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Display Window Label Vector',
        'retired': ''
      },
      '0x00182010': {
        'keyword': 'NominalScannedPixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Nominal Scanned Pixel Spacing',
        'retired': ''
      },
      '0x00182020': {
        'keyword': 'DigitizingDeviceTransportDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Digitizing Device Transport Direction',
        'retired': ''
      },
      '0x00182030': {
        'keyword': 'RotationOfScannedFilm',
        'vr': 'DS',
        'vm': '1',
        'name': 'Rotation of Scanned Film',
        'retired': ''
      },
      '0x00182041': {
        'keyword': 'BiopsyTargetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Biopsy Target Sequence',
        'retired': ''
      },
      '0x00182042': {
        'keyword': 'TargetUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Target UID',
        'retired': ''
      },
      '0x00182043': {
        'keyword': 'LocalizingCursorPosition',
        'vr': 'FL',
        'vm': '2',
        'name': 'Localizing Cursor Position',
        'retired': ''
      },
      '0x00182044': {
        'keyword': 'CalculatedTargetPosition',
        'vr': 'FL',
        'vm': '3',
        'name': 'Calculated Target Position',
        'retired': ''
      },
      '0x00182045': {
        'keyword': 'TargetLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Target Label',
        'retired': ''
      },
      '0x00182046': {
        'keyword': 'DisplayedZValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Displayed Z Value',
        'retired': ''
      },
      '0x00183100': {
        'keyword': 'IVUSAcquisition',
        'vr': 'CS',
        'vm': '1',
        'name': 'IVUS Acquisition',
        'retired': ''
      },
      '0x00183101': {
        'keyword': 'IVUSPullbackRate',
        'vr': 'DS',
        'vm': '1',
        'name': 'IVUS Pullback Rate',
        'retired': ''
      },
      '0x00183102': {
        'keyword': 'IVUSGatedRate',
        'vr': 'DS',
        'vm': '1',
        'name': 'IVUS Gated Rate',
        'retired': ''
      },
      '0x00183103': {
        'keyword': 'IVUSPullbackStartFrameNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'IVUS Pullback Start Frame Number',
        'retired': ''
      },
      '0x00183104': {
        'keyword': 'IVUSPullbackStopFrameNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'IVUS Pullback Stop Frame Number',
        'retired': ''
      },
      '0x00183105': {
        'keyword': 'LesionNumber',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Lesion Number',
        'retired': ''
      },
      '0x00184000': {
        'keyword': 'AcquisitionComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Acquisition Comments',
        'retired': 'Retired'
      },
      '0x00185000': {
        'keyword': 'OutputPower',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Output Power',
        'retired': ''
      },
      '0x00185010': {
        'keyword': 'TransducerData',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Transducer Data',
        'retired': ''
      },
      '0x00185011': {
        'keyword': 'TransducerIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Identification Sequence',
        'retired': ''
      },
      '0x00185012': {
        'keyword': 'FocusDepth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Focus Depth',
        'retired': ''
      },
      '0x00185020': {
        'keyword': 'ProcessingFunction',
        'vr': 'LO',
        'vm': '1',
        'name': 'Processing Function',
        'retired': ''
      },
      '0x00185021': {
        'keyword': 'PostprocessingFunction',
        'vr': 'LO',
        'vm': '1',
        'name': 'Postprocessing Function',
        'retired': 'Retired'
      },
      '0x00185022': {
        'keyword': 'MechanicalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Mechanical Index',
        'retired': ''
      },
      '0x00185024': {
        'keyword': 'BoneThermalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Bone Thermal Index',
        'retired': ''
      },
      '0x00185026': {
        'keyword': 'CranialThermalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Cranial Thermal Index',
        'retired': ''
      },
      '0x00185027': {
        'keyword': 'SoftTissueThermalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Soft Tissue Thermal Index',
        'retired': ''
      },
      '0x00185028': {
        'keyword': 'SoftTissueFocusThermalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Soft Tissue-focus Thermal Index',
        'retired': ''
      },
      '0x00185029': {
        'keyword': 'SoftTissueSurfaceThermalIndex',
        'vr': 'DS',
        'vm': '1',
        'name': 'Soft Tissue-surface Thermal Index',
        'retired': ''
      },
      '0x00185030': {
        'keyword': 'DynamicRange',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dynamic Range',
        'retired': 'Retired'
      },
      '0x00185040': {
        'keyword': 'TotalGain',
        'vr': 'DS',
        'vm': '1',
        'name': 'Total Gain',
        'retired': 'Retired'
      },
      '0x00185050': {
        'keyword': 'DepthOfScanField',
        'vr': 'IS',
        'vm': '1',
        'name': 'Depth of Scan Field',
        'retired': ''
      },
      '0x00185100': {
        'keyword': 'PatientPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Position',
        'retired': ''
      },
      '0x00185101': {
        'keyword': 'ViewPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'View Position',
        'retired': ''
      },
      '0x00185104': {
        'keyword': 'ProjectionEponymousNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Projection Eponymous Name Code Sequence',
        'retired': ''
      },
      '0x00185210': {
        'keyword': 'ImageTransformationMatrix',
        'vr': 'DS',
        'vm': '6',
        'name': 'Image Transformation Matrix',
        'retired': 'Retired'
      },
      '0x00185212': {
        'keyword': 'ImageTranslationVector',
        'vr': 'DS',
        'vm': '3',
        'name': 'Image Translation Vector',
        'retired': 'Retired'
      },
      '0x00186000': {
        'keyword': 'Sensitivity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Sensitivity',
        'retired': ''
      },
      '0x00186011': {
        'keyword': 'SequenceOfUltrasoundRegions',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Sequence of Ultrasound Regions',
        'retired': ''
      },
      '0x00186012': {
        'keyword': 'RegionSpatialFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Region Spatial Format',
        'retired': ''
      },
      '0x00186014': {
        'keyword': 'RegionDataType',
        'vr': 'US',
        'vm': '1',
        'name': 'Region Data Type',
        'retired': ''
      },
      '0x00186016': {
        'keyword': 'RegionFlags',
        'vr': 'UL',
        'vm': '1',
        'name': 'Region Flags',
        'retired': ''
      },
      '0x00186018': {
        'keyword': 'RegionLocationMinX0',
        'vr': 'UL',
        'vm': '1',
        'name': 'Region Location Min X0',
        'retired': ''
      },
      '0x0018601A': {
        'keyword': 'RegionLocationMinY0',
        'vr': 'UL',
        'vm': '1',
        'name': 'Region Location Min Y0',
        'retired': ''
      },
      '0x0018601C': {
        'keyword': 'RegionLocationMaxX1',
        'vr': 'UL',
        'vm': '1',
        'name': 'Region Location Max X1',
        'retired': ''
      },
      '0x0018601E': {
        'keyword': 'RegionLocationMaxY1',
        'vr': 'UL',
        'vm': '1',
        'name': 'Region Location Max Y1',
        'retired': ''
      },
      '0x00186020': {
        'keyword': 'ReferencePixelX0',
        'vr': 'SL',
        'vm': '1',
        'name': 'Reference Pixel X0',
        'retired': ''
      },
      '0x00186022': {
        'keyword': 'ReferencePixelY0',
        'vr': 'SL',
        'vm': '1',
        'name': 'Reference Pixel Y0',
        'retired': ''
      },
      '0x00186024': {
        'keyword': 'PhysicalUnitsXDirection',
        'vr': 'US',
        'vm': '1',
        'name': 'Physical Units X Direction',
        'retired': ''
      },
      '0x00186026': {
        'keyword': 'PhysicalUnitsYDirection',
        'vr': 'US',
        'vm': '1',
        'name': 'Physical Units Y Direction',
        'retired': ''
      },
      '0x00186028': {
        'keyword': 'ReferencePixelPhysicalValueX',
        'vr': 'FD',
        'vm': '1',
        'name': 'Reference Pixel Physical Value X',
        'retired': ''
      },
      '0x0018602A': {
        'keyword': 'ReferencePixelPhysicalValueY',
        'vr': 'FD',
        'vm': '1',
        'name': 'Reference Pixel Physical Value Y',
        'retired': ''
      },
      '0x0018602C': {
        'keyword': 'PhysicalDeltaX',
        'vr': 'FD',
        'vm': '1',
        'name': 'Physical Delta X',
        'retired': ''
      },
      '0x0018602E': {
        'keyword': 'PhysicalDeltaY',
        'vr': 'FD',
        'vm': '1',
        'name': 'Physical Delta Y',
        'retired': ''
      },
      '0x00186030': {
        'keyword': 'TransducerFrequency',
        'vr': 'UL',
        'vm': '1',
        'name': 'Transducer Frequency',
        'retired': ''
      },
      '0x00186031': {
        'keyword': 'TransducerType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transducer Type',
        'retired': ''
      },
      '0x00186032': {
        'keyword': 'PulseRepetitionFrequency',
        'vr': 'UL',
        'vm': '1',
        'name': 'Pulse Repetition Frequency',
        'retired': ''
      },
      '0x00186034': {
        'keyword': 'DopplerCorrectionAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Doppler Correction Angle',
        'retired': ''
      },
      '0x00186036': {
        'keyword': 'SteeringAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Steering Angle',
        'retired': ''
      },
      '0x00186038': {
        'keyword': 'DopplerSampleVolumeXPositionRetired',
        'vr': 'UL',
        'vm': '1',
        'name': 'Doppler Sample Volume X Position (Retired)',
        'retired': 'Retired'
      },
      '0x00186039': {
        'keyword': 'DopplerSampleVolumeXPosition',
        'vr': 'SL',
        'vm': '1',
        'name': 'Doppler Sample Volume X Position',
        'retired': ''
      },
      '0x0018603A': {
        'keyword': 'DopplerSampleVolumeYPositionRetired',
        'vr': 'UL',
        'vm': '1',
        'name': 'Doppler Sample Volume Y Position (Retired)',
        'retired': 'Retired'
      },
      '0x0018603B': {
        'keyword': 'DopplerSampleVolumeYPosition',
        'vr': 'SL',
        'vm': '1',
        'name': 'Doppler Sample Volume Y Position',
        'retired': ''
      },
      '0x0018603C': {
        'keyword': 'TMLinePositionX0Retired',
        'vr': 'UL',
        'vm': '1',
        'name': 'TM-Line Position X0 (Retired)',
        'retired': 'Retired'
      },
      '0x0018603D': {
        'keyword': 'TMLinePositionX0',
        'vr': 'SL',
        'vm': '1',
        'name': 'TM-Line Position X0',
        'retired': ''
      },
      '0x0018603E': {
        'keyword': 'TMLinePositionY0Retired',
        'vr': 'UL',
        'vm': '1',
        'name': 'TM-Line Position Y0 (Retired)',
        'retired': 'Retired'
      },
      '0x0018603F': {
        'keyword': 'TMLinePositionY0',
        'vr': 'SL',
        'vm': '1',
        'name': 'TM-Line Position Y0',
        'retired': ''
      },
      '0x00186040': {
        'keyword': 'TMLinePositionX1Retired',
        'vr': 'UL',
        'vm': '1',
        'name': 'TM-Line Position X1 (Retired)',
        'retired': 'Retired'
      },
      '0x00186041': {
        'keyword': 'TMLinePositionX1',
        'vr': 'SL',
        'vm': '1',
        'name': 'TM-Line Position X1',
        'retired': ''
      },
      '0x00186042': {
        'keyword': 'TMLinePositionY1Retired',
        'vr': 'UL',
        'vm': '1',
        'name': 'TM-Line Position Y1 (Retired)',
        'retired': 'Retired'
      },
      '0x00186043': {
        'keyword': 'TMLinePositionY1',
        'vr': 'SL',
        'vm': '1',
        'name': 'TM-Line Position Y1',
        'retired': ''
      },
      '0x00186044': {
        'keyword': 'PixelComponentOrganization',
        'vr': 'US',
        'vm': '1',
        'name': 'Pixel Component Organization',
        'retired': ''
      },
      '0x00186046': {
        'keyword': 'PixelComponentMask',
        'vr': 'UL',
        'vm': '1',
        'name': 'Pixel Component Mask',
        'retired': ''
      },
      '0x00186048': {
        'keyword': 'PixelComponentRangeStart',
        'vr': 'UL',
        'vm': '1',
        'name': 'Pixel Component Range Start',
        'retired': ''
      },
      '0x0018604A': {
        'keyword': 'PixelComponentRangeStop',
        'vr': 'UL',
        'vm': '1',
        'name': 'Pixel Component Range Stop',
        'retired': ''
      },
      '0x0018604C': {
        'keyword': 'PixelComponentPhysicalUnits',
        'vr': 'US',
        'vm': '1',
        'name': 'Pixel Component Physical Units',
        'retired': ''
      },
      '0x0018604E': {
        'keyword': 'PixelComponentDataType',
        'vr': 'US',
        'vm': '1',
        'name': 'Pixel Component Data Type',
        'retired': ''
      },
      '0x00186050': {
        'keyword': 'NumberOfTableBreakPoints',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Table Break Points',
        'retired': ''
      },
      '0x00186052': {
        'keyword': 'TableOfXBreakPoints',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Table of X Break Points',
        'retired': ''
      },
      '0x00186054': {
        'keyword': 'TableOfYBreakPoints',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Table of Y Break Points',
        'retired': ''
      },
      '0x00186056': {
        'keyword': 'NumberOfTableEntries',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Table Entries',
        'retired': ''
      },
      '0x00186058': {
        'keyword': 'TableOfPixelValues',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Table of Pixel Values',
        'retired': ''
      },
      '0x0018605A': {
        'keyword': 'TableOfParameterValues',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Table of Parameter Values',
        'retired': ''
      },
      '0x00186060': {
        'keyword': 'RWaveTimeVector',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'R Wave Time Vector',
        'retired': ''
      },
      '0x00186070': {
        'keyword': 'ActiveImageAreaOverlayGroup',
        'vr': 'US',
        'vm': '1',
        'name': 'Active Image Area Overlay Group',
        'retired': ''
      },
      '0x00187000': {
        'keyword': 'DetectorConditionsNominalFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Conditions Nominal Flag',
        'retired': ''
      },
      '0x00187001': {
        'keyword': 'DetectorTemperature',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Temperature',
        'retired': ''
      },
      '0x00187004': {
        'keyword': 'DetectorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Type',
        'retired': ''
      },
      '0x00187005': {
        'keyword': 'DetectorConfiguration',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Configuration',
        'retired': ''
      },
      '0x00187006': {
        'keyword': 'DetectorDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Detector Description',
        'retired': ''
      },
      '0x00187008': {
        'keyword': 'DetectorMode',
        'vr': 'LT',
        'vm': '1',
        'name': 'Detector Mode',
        'retired': ''
      },
      '0x0018700A': {
        'keyword': 'DetectorID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Detector ID',
        'retired': ''
      },
      '0x0018700C': {
        'keyword': 'DateOfLastDetectorCalibration',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Last Detector Calibration',
        'retired': ''
      },
      '0x0018700E': {
        'keyword': 'TimeOfLastDetectorCalibration',
        'vr': 'TM',
        'vm': '1',
        'name': 'Time of Last Detector Calibration',
        'retired': ''
      },
      '0x00187010': {
        'keyword': 'ExposuresOnDetectorSinceLastCalibration',
        'vr': 'IS',
        'vm': '1',
        'name': 'Exposures on Detector Since Last Calibration',
        'retired': ''
      },
      '0x00187011': {
        'keyword': 'ExposuresOnDetectorSinceManufactured',
        'vr': 'IS',
        'vm': '1',
        'name': 'Exposures on Detector Since Manufactured',
        'retired': ''
      },
      '0x00187012': {
        'keyword': 'DetectorTimeSinceLastExposure',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Time Since Last Exposure',
        'retired': ''
      },
      '0x00187014': {
        'keyword': 'DetectorActiveTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Active Time',
        'retired': ''
      },
      '0x00187016': {
        'keyword': 'DetectorActivationOffsetFromExposure',
        'vr': 'DS',
        'vm': '1',
        'name': 'Detector Activation Offset From Exposure',
        'retired': ''
      },
      '0x0018701A': {
        'keyword': 'DetectorBinning',
        'vr': 'DS',
        'vm': '2',
        'name': 'Detector Binning',
        'retired': ''
      },
      '0x00187020': {
        'keyword': 'DetectorElementPhysicalSize',
        'vr': 'DS',
        'vm': '2',
        'name': 'Detector Element Physical Size',
        'retired': ''
      },
      '0x00187022': {
        'keyword': 'DetectorElementSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Detector Element Spacing',
        'retired': ''
      },
      '0x00187024': {
        'keyword': 'DetectorActiveShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Active Shape',
        'retired': ''
      },
      '0x00187026': {
        'keyword': 'DetectorActiveDimensions',
        'vr': 'DS',
        'vm': '1-2',
        'name': 'Detector Active Dimension(s)',
        'retired': ''
      },
      '0x00187028': {
        'keyword': 'DetectorActiveOrigin',
        'vr': 'DS',
        'vm': '2',
        'name': 'Detector Active Origin',
        'retired': ''
      },
      '0x0018702A': {
        'keyword': 'DetectorManufacturerName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Detector Manufacturer Name',
        'retired': ''
      },
      '0x0018702B': {
        'keyword': 'DetectorManufacturerModelName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Detector Manufacturer\'s Model Name',
        'retired': ''
      },
      '0x00187030': {
        'keyword': 'FieldOfViewOrigin',
        'vr': 'DS',
        'vm': '2',
        'name': 'Field of View Origin',
        'retired': ''
      },
      '0x00187032': {
        'keyword': 'FieldOfViewRotation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Field of View Rotation',
        'retired': ''
      },
      '0x00187034': {
        'keyword': 'FieldOfViewHorizontalFlip',
        'vr': 'CS',
        'vm': '1',
        'name': 'Field of View Horizontal Flip',
        'retired': ''
      },
      '0x00187036': {
        'keyword': 'PixelDataAreaOriginRelativeToFOV',
        'vr': 'FL',
        'vm': '2',
        'name': 'Pixel Data Area Origin Relative To FOV',
        'retired': ''
      },
      '0x00187038': {
        'keyword': 'PixelDataAreaRotationAngleRelativeToFOV',
        'vr': 'FL',
        'vm': '1',
        'name': 'Pixel Data Area Rotation Angle Relative To FOV',
        'retired': ''
      },
      '0x00187040': {
        'keyword': 'GridAbsorbingMaterial',
        'vr': 'LT',
        'vm': '1',
        'name': 'Grid Absorbing Material',
        'retired': ''
      },
      '0x00187041': {
        'keyword': 'GridSpacingMaterial',
        'vr': 'LT',
        'vm': '1',
        'name': 'Grid Spacing Material',
        'retired': ''
      },
      '0x00187042': {
        'keyword': 'GridThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Grid Thickness',
        'retired': ''
      },
      '0x00187044': {
        'keyword': 'GridPitch',
        'vr': 'DS',
        'vm': '1',
        'name': 'Grid Pitch',
        'retired': ''
      },
      '0x00187046': {
        'keyword': 'GridAspectRatio',
        'vr': 'IS',
        'vm': '2',
        'name': 'Grid Aspect Ratio',
        'retired': ''
      },
      '0x00187048': {
        'keyword': 'GridPeriod',
        'vr': 'DS',
        'vm': '1',
        'name': 'Grid Period',
        'retired': ''
      },
      '0x0018704C': {
        'keyword': 'GridFocalDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Grid Focal Distance',
        'retired': ''
      },
      '0x00187050': {
        'keyword': 'FilterMaterial',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Filter Material',
        'retired': ''
      },
      '0x00187052': {
        'keyword': 'FilterThicknessMinimum',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Filter Thickness Minimum',
        'retired': ''
      },
      '0x00187054': {
        'keyword': 'FilterThicknessMaximum',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Filter Thickness Maximum',
        'retired': ''
      },
      '0x00187056': {
        'keyword': 'FilterBeamPathLengthMinimum',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Filter Beam Path Length Minimum',
        'retired': ''
      },
      '0x00187058': {
        'keyword': 'FilterBeamPathLengthMaximum',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Filter Beam Path Length Maximum',
        'retired': ''
      },
      '0x00187060': {
        'keyword': 'ExposureControlMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Exposure Control Mode',
        'retired': ''
      },
      '0x00187062': {
        'keyword': 'ExposureControlModeDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Exposure Control Mode Description',
        'retired': ''
      },
      '0x00187064': {
        'keyword': 'ExposureStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Exposure Status',
        'retired': ''
      },
      '0x00187065': {
        'keyword': 'PhototimerSetting',
        'vr': 'DS',
        'vm': '1',
        'name': 'Phototimer Setting',
        'retired': ''
      },
      '0x00188150': {
        'keyword': 'ExposureTimeInuS',
        'vr': 'DS',
        'vm': '1',
        'name': 'Exposure Time in uS',
        'retired': ''
      },
      '0x00188151': {
        'keyword': 'XRayTubeCurrentInuA',
        'vr': 'DS',
        'vm': '1',
        'name': 'X-Ray Tube Current in uA',
        'retired': ''
      },
      '0x00189004': {
        'keyword': 'ContentQualification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Content Qualification',
        'retired': ''
      },
      '0x00189005': {
        'keyword': 'PulseSequenceName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Pulse Sequence Name',
        'retired': ''
      },
      '0x00189006': {
        'keyword': 'MRImagingModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Imaging Modifier Sequence',
        'retired': ''
      },
      '0x00189008': {
        'keyword': 'EchoPulseSequence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Echo Pulse Sequence',
        'retired': ''
      },
      '0x00189009': {
        'keyword': 'InversionRecovery',
        'vr': 'CS',
        'vm': '1',
        'name': 'Inversion Recovery',
        'retired': ''
      },
      '0x00189010': {
        'keyword': 'FlowCompensation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Flow Compensation',
        'retired': ''
      },
      '0x00189011': {
        'keyword': 'MultipleSpinEcho',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multiple Spin Echo',
        'retired': ''
      },
      '0x00189012': {
        'keyword': 'MultiPlanarExcitation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-planar Excitation',
        'retired': ''
      },
      '0x00189014': {
        'keyword': 'PhaseContrast',
        'vr': 'CS',
        'vm': '1',
        'name': 'Phase Contrast',
        'retired': ''
      },
      '0x00189015': {
        'keyword': 'TimeOfFlightContrast',
        'vr': 'CS',
        'vm': '1',
        'name': 'Time of Flight Contrast',
        'retired': ''
      },
      '0x00189016': {
        'keyword': 'Spoiling',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spoiling',
        'retired': ''
      },
      '0x00189017': {
        'keyword': 'SteadyStatePulseSequence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Steady State Pulse Sequence',
        'retired': ''
      },
      '0x00189018': {
        'keyword': 'EchoPlanarPulseSequence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Echo Planar Pulse Sequence',
        'retired': ''
      },
      '0x00189019': {
        'keyword': 'TagAngleFirstAxis',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tag Angle First Axis',
        'retired': ''
      },
      '0x00189020': {
        'keyword': 'MagnetizationTransfer',
        'vr': 'CS',
        'vm': '1',
        'name': 'Magnetization Transfer',
        'retired': ''
      },
      '0x00189021': {
        'keyword': 'T2Preparation',
        'vr': 'CS',
        'vm': '1',
        'name': 'T2 Preparation',
        'retired': ''
      },
      '0x00189022': {
        'keyword': 'BloodSignalNulling',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blood Signal Nulling',
        'retired': ''
      },
      '0x00189024': {
        'keyword': 'SaturationRecovery',
        'vr': 'CS',
        'vm': '1',
        'name': 'Saturation Recovery',
        'retired': ''
      },
      '0x00189025': {
        'keyword': 'SpectrallySelectedSuppression',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spectrally Selected Suppression',
        'retired': ''
      },
      '0x00189026': {
        'keyword': 'SpectrallySelectedExcitation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spectrally Selected Excitation',
        'retired': ''
      },
      '0x00189027': {
        'keyword': 'SpatialPresaturation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spatial Pre-saturation',
        'retired': ''
      },
      '0x00189028': {
        'keyword': 'Tagging',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tagging',
        'retired': ''
      },
      '0x00189029': {
        'keyword': 'OversamplingPhase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Oversampling Phase',
        'retired': ''
      },
      '0x00189030': {
        'keyword': 'TagSpacingFirstDimension',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tag Spacing First Dimension',
        'retired': ''
      },
      '0x00189032': {
        'keyword': 'GeometryOfKSpaceTraversal',
        'vr': 'CS',
        'vm': '1',
        'name': 'Geometry of k-Space Traversal',
        'retired': ''
      },
      '0x00189033': {
        'keyword': 'SegmentedKSpaceTraversal',
        'vr': 'CS',
        'vm': '1',
        'name': 'Segmented k-Space Traversal',
        'retired': ''
      },
      '0x00189034': {
        'keyword': 'RectilinearPhaseEncodeReordering',
        'vr': 'CS',
        'vm': '1',
        'name': 'Rectilinear Phase Encode Reordering',
        'retired': ''
      },
      '0x00189035': {
        'keyword': 'TagThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tag Thickness',
        'retired': ''
      },
      '0x00189036': {
        'keyword': 'PartialFourierDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Partial Fourier Direction',
        'retired': ''
      },
      '0x00189037': {
        'keyword': 'CardiacSynchronizationTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cardiac Synchronization Technique',
        'retired': ''
      },
      '0x00189041': {
        'keyword': 'ReceiveCoilManufacturerName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Receive Coil Manufacturer Name',
        'retired': ''
      },
      '0x00189042': {
        'keyword': 'MRReceiveCoilSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Receive Coil Sequence',
        'retired': ''
      },
      '0x00189043': {
        'keyword': 'ReceiveCoilType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Receive Coil Type',
        'retired': ''
      },
      '0x00189044': {
        'keyword': 'QuadratureReceiveCoil',
        'vr': 'CS',
        'vm': '1',
        'name': 'Quadrature Receive Coil',
        'retired': ''
      },
      '0x00189045': {
        'keyword': 'MultiCoilDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-Coil Definition Sequence',
        'retired': ''
      },
      '0x00189046': {
        'keyword': 'MultiCoilConfiguration',
        'vr': 'LO',
        'vm': '1',
        'name': 'Multi-Coil Configuration',
        'retired': ''
      },
      '0x00189047': {
        'keyword': 'MultiCoilElementName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Multi-Coil Element Name',
        'retired': ''
      },
      '0x00189048': {
        'keyword': 'MultiCoilElementUsed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-Coil Element Used',
        'retired': ''
      },
      '0x00189049': {
        'keyword': 'MRTransmitCoilSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Transmit Coil Sequence',
        'retired': ''
      },
      '0x00189050': {
        'keyword': 'TransmitCoilManufacturerName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Transmit Coil Manufacturer Name',
        'retired': ''
      },
      '0x00189051': {
        'keyword': 'TransmitCoilType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transmit Coil Type',
        'retired': ''
      },
      '0x00189052': {
        'keyword': 'SpectralWidth',
        'vr': 'FD',
        'vm': '1-2',
        'name': 'Spectral Width',
        'retired': ''
      },
      '0x00189053': {
        'keyword': 'ChemicalShiftReference',
        'vr': 'FD',
        'vm': '1-2',
        'name': 'Chemical Shift Reference',
        'retired': ''
      },
      '0x00189054': {
        'keyword': 'VolumeLocalizationTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Volume Localization Technique',
        'retired': ''
      },
      '0x00189058': {
        'keyword': 'MRAcquisitionFrequencyEncodingSteps',
        'vr': 'US',
        'vm': '1',
        'name': 'MR Acquisition Frequency Encoding Steps',
        'retired': ''
      },
      '0x00189059': {
        'keyword': 'Decoupling',
        'vr': 'CS',
        'vm': '1',
        'name': 'De-coupling',
        'retired': ''
      },
      '0x00189060': {
        'keyword': 'DecoupledNucleus',
        'vr': 'CS',
        'vm': '1-2',
        'name': 'De-coupled Nucleus',
        'retired': ''
      },
      '0x00189061': {
        'keyword': 'DecouplingFrequency',
        'vr': 'FD',
        'vm': '1-2',
        'name': 'De-coupling Frequency',
        'retired': ''
      },
      '0x00189062': {
        'keyword': 'DecouplingMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'De-coupling Method',
        'retired': ''
      },
      '0x00189063': {
        'keyword': 'DecouplingChemicalShiftReference',
        'vr': 'FD',
        'vm': '1-2',
        'name': 'De-coupling Chemical Shift Reference',
        'retired': ''
      },
      '0x00189064': {
        'keyword': 'KSpaceFiltering',
        'vr': 'CS',
        'vm': '1',
        'name': 'k-space Filtering',
        'retired': ''
      },
      '0x00189065': {
        'keyword': 'TimeDomainFiltering',
        'vr': 'CS',
        'vm': '1-2',
        'name': 'Time Domain Filtering',
        'retired': ''
      },
      '0x00189066': {
        'keyword': 'NumberOfZeroFills',
        'vr': 'US',
        'vm': '1-2',
        'name': 'Number of Zero Fills',
        'retired': ''
      },
      '0x00189067': {
        'keyword': 'BaselineCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Baseline Correction',
        'retired': ''
      },
      '0x00189069': {
        'keyword': 'ParallelReductionFactorInPlane',
        'vr': 'FD',
        'vm': '1',
        'name': 'Parallel Reduction Factor In-plane',
        'retired': ''
      },
      '0x00189070': {
        'keyword': 'CardiacRRIntervalSpecified',
        'vr': 'FD',
        'vm': '1',
        'name': 'Cardiac R-R Interval Specified',
        'retired': ''
      },
      '0x00189073': {
        'keyword': 'AcquisitionDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'Acquisition Duration',
        'retired': ''
      },
      '0x00189074': {
        'keyword': 'FrameAcquisitionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Frame Acquisition DateTime',
        'retired': ''
      },
      '0x00189075': {
        'keyword': 'DiffusionDirectionality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Diffusion Directionality',
        'retired': ''
      },
      '0x00189076': {
        'keyword': 'DiffusionGradientDirectionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Diffusion Gradient Direction Sequence',
        'retired': ''
      },
      '0x00189077': {
        'keyword': 'ParallelAcquisition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Parallel Acquisition',
        'retired': ''
      },
      '0x00189078': {
        'keyword': 'ParallelAcquisitionTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Parallel Acquisition Technique',
        'retired': ''
      },
      '0x00189079': {
        'keyword': 'InversionTimes',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Inversion Times',
        'retired': ''
      },
      '0x00189080': {
        'keyword': 'MetaboliteMapDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Metabolite Map Description',
        'retired': ''
      },
      '0x00189081': {
        'keyword': 'PartialFourier',
        'vr': 'CS',
        'vm': '1',
        'name': 'Partial Fourier',
        'retired': ''
      },
      '0x00189082': {
        'keyword': 'EffectiveEchoTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Effective Echo Time',
        'retired': ''
      },
      '0x00189083': {
        'keyword': 'MetaboliteMapCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Metabolite Map Code Sequence',
        'retired': ''
      },
      '0x00189084': {
        'keyword': 'ChemicalShiftSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Chemical Shift Sequence',
        'retired': ''
      },
      '0x00189085': {
        'keyword': 'CardiacSignalSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cardiac Signal Source',
        'retired': ''
      },
      '0x00189087': {
        'keyword': 'DiffusionBValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value',
        'retired': ''
      },
      '0x00189089': {
        'keyword': 'DiffusionGradientOrientation',
        'vr': 'FD',
        'vm': '3',
        'name': 'Diffusion Gradient Orientation',
        'retired': ''
      },
      '0x00189090': {
        'keyword': 'VelocityEncodingDirection',
        'vr': 'FD',
        'vm': '3',
        'name': 'Velocity Encoding Direction',
        'retired': ''
      },
      '0x00189091': {
        'keyword': 'VelocityEncodingMinimumValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Velocity Encoding Minimum Value',
        'retired': ''
      },
      '0x00189092': {
        'keyword': 'VelocityEncodingAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Velocity Encoding Acquisition Sequence',
        'retired': ''
      },
      '0x00189093': {
        'keyword': 'NumberOfKSpaceTrajectories',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of k-Space Trajectories',
        'retired': ''
      },
      '0x00189094': {
        'keyword': 'CoverageOfKSpace',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coverage of k-Space',
        'retired': ''
      },
      '0x00189095': {
        'keyword': 'SpectroscopyAcquisitionPhaseRows',
        'vr': 'UL',
        'vm': '1',
        'name': 'Spectroscopy Acquisition Phase Rows',
        'retired': ''
      },
      '0x00189096': {
        'keyword': 'ParallelReductionFactorInPlaneRetired',
        'vr': 'FD',
        'vm': '1',
        'name': 'Parallel Reduction Factor In-plane (Retired)',
        'retired': 'Retired'
      },
      '0x00189098': {
        'keyword': 'TransmitterFrequency',
        'vr': 'FD',
        'vm': '1-2',
        'name': 'Transmitter Frequency',
        'retired': ''
      },
      '0x00189100': {
        'keyword': 'ResonantNucleus',
        'vr': 'CS',
        'vm': '1-2',
        'name': 'Resonant Nucleus',
        'retired': ''
      },
      '0x00189101': {
        'keyword': 'FrequencyCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Frequency Correction',
        'retired': ''
      },
      '0x00189103': {
        'keyword': 'MRSpectroscopyFOVGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Spectroscopy FOV/Geometry Sequence',
        'retired': ''
      },
      '0x00189104': {
        'keyword': 'SlabThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Slab Thickness',
        'retired': ''
      },
      '0x00189105': {
        'keyword': 'SlabOrientation',
        'vr': 'FD',
        'vm': '3',
        'name': 'Slab Orientation',
        'retired': ''
      },
      '0x00189106': {
        'keyword': 'MidSlabPosition',
        'vr': 'FD',
        'vm': '3',
        'name': 'Mid Slab Position',
        'retired': ''
      },
      '0x00189107': {
        'keyword': 'MRSpatialSaturationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Spatial Saturation Sequence',
        'retired': ''
      },
      '0x00189112': {
        'keyword': 'MRTimingAndRelatedParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Timing and Related Parameters Sequence',
        'retired': ''
      },
      '0x00189114': {
        'keyword': 'MREchoSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Echo Sequence',
        'retired': ''
      },
      '0x00189115': {
        'keyword': 'MRModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Modifier Sequence',
        'retired': ''
      },
      '0x00189117': {
        'keyword': 'MRDiffusionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Diffusion Sequence',
        'retired': ''
      },
      '0x00189118': {
        'keyword': 'CardiacSynchronizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Cardiac Synchronization Sequence',
        'retired': ''
      },
      '0x00189119': {
        'keyword': 'MRAveragesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Averages Sequence',
        'retired': ''
      },
      '0x00189125': {
        'keyword': 'MRFOVGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR FOV/Geometry Sequence',
        'retired': ''
      },
      '0x00189126': {
        'keyword': 'VolumeLocalizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volume Localization Sequence',
        'retired': ''
      },
      '0x00189127': {
        'keyword': 'SpectroscopyAcquisitionDataColumns',
        'vr': 'UL',
        'vm': '1',
        'name': 'Spectroscopy Acquisition Data Columns',
        'retired': ''
      },
      '0x00189147': {
        'keyword': 'DiffusionAnisotropyType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Diffusion Anisotropy Type',
        'retired': ''
      },
      '0x00189151': {
        'keyword': 'FrameReferenceDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Frame Reference DateTime',
        'retired': ''
      },
      '0x00189152': {
        'keyword': 'MRMetaboliteMapSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Metabolite Map Sequence',
        'retired': ''
      },
      '0x00189155': {
        'keyword': 'ParallelReductionFactorOutOfPlane',
        'vr': 'FD',
        'vm': '1',
        'name': 'Parallel Reduction Factor out-of-plane',
        'retired': ''
      },
      '0x00189159': {
        'keyword': 'SpectroscopyAcquisitionOutOfPlanePhaseSteps',
        'vr': 'UL',
        'vm': '1',
        'name': 'Spectroscopy Acquisition Out-of-plane Phase Steps',
        'retired': ''
      },
      '0x00189166': {
        'keyword': 'BulkMotionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bulk Motion Status',
        'retired': 'Retired'
      },
      '0x00189168': {
        'keyword': 'ParallelReductionFactorSecondInPlane',
        'vr': 'FD',
        'vm': '1',
        'name': 'Parallel Reduction Factor Second In-plane',
        'retired': ''
      },
      '0x00189169': {
        'keyword': 'CardiacBeatRejectionTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cardiac Beat Rejection Technique',
        'retired': ''
      },
      '0x00189170': {
        'keyword': 'RespiratoryMotionCompensationTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Respiratory Motion Compensation Technique',
        'retired': ''
      },
      '0x00189171': {
        'keyword': 'RespiratorySignalSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Respiratory Signal Source',
        'retired': ''
      },
      '0x00189172': {
        'keyword': 'BulkMotionCompensationTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bulk Motion Compensation Technique',
        'retired': ''
      },
      '0x00189173': {
        'keyword': 'BulkMotionSignalSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bulk Motion Signal Source',
        'retired': ''
      },
      '0x00189174': {
        'keyword': 'ApplicableSafetyStandardAgency',
        'vr': 'CS',
        'vm': '1',
        'name': 'Applicable Safety Standard Agency',
        'retired': ''
      },
      '0x00189175': {
        'keyword': 'ApplicableSafetyStandardDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Applicable Safety Standard Description',
        'retired': ''
      },
      '0x00189176': {
        'keyword': 'OperatingModeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Operating Mode Sequence',
        'retired': ''
      },
      '0x00189177': {
        'keyword': 'OperatingModeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Operating Mode Type',
        'retired': ''
      },
      '0x00189178': {
        'keyword': 'OperatingMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Operating Mode',
        'retired': ''
      },
      '0x00189179': {
        'keyword': 'SpecificAbsorptionRateDefinition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Specific Absorption Rate Definition',
        'retired': ''
      },
      '0x00189180': {
        'keyword': 'GradientOutputType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gradient Output Type',
        'retired': ''
      },
      '0x00189181': {
        'keyword': 'SpecificAbsorptionRateValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Specific Absorption Rate Value',
        'retired': ''
      },
      '0x00189182': {
        'keyword': 'GradientOutput',
        'vr': 'FD',
        'vm': '1',
        'name': 'Gradient Output',
        'retired': ''
      },
      '0x00189183': {
        'keyword': 'FlowCompensationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Flow Compensation Direction',
        'retired': ''
      },
      '0x00189184': {
        'keyword': 'TaggingDelay',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tagging Delay',
        'retired': ''
      },
      '0x00189185': {
        'keyword': 'RespiratoryMotionCompensationTechniqueDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Respiratory Motion Compensation Technique Description',
        'retired': ''
      },
      '0x00189186': {
        'keyword': 'RespiratorySignalSourceID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Respiratory Signal Source ID',
        'retired': ''
      },
      '0x00189195': {
        'keyword': 'ChemicalShiftMinimumIntegrationLimitInHz',
        'vr': 'FD',
        'vm': '1',
        'name': 'Chemical Shift Minimum Integration Limit in Hz',
        'retired': 'Retired'
      },
      '0x00189196': {
        'keyword': 'ChemicalShiftMaximumIntegrationLimitInHz',
        'vr': 'FD',
        'vm': '1',
        'name': 'Chemical Shift Maximum Integration Limit in Hz',
        'retired': 'Retired'
      },
      '0x00189197': {
        'keyword': 'MRVelocityEncodingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Velocity Encoding Sequence',
        'retired': ''
      },
      '0x00189198': {
        'keyword': 'FirstOrderPhaseCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'First Order Phase Correction',
        'retired': ''
      },
      '0x00189199': {
        'keyword': 'WaterReferencedPhaseCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Water Referenced Phase Correction',
        'retired': ''
      },
      '0x00189200': {
        'keyword': 'MRSpectroscopyAcquisitionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'MR Spectroscopy Acquisition Type',
        'retired': ''
      },
      '0x00189214': {
        'keyword': 'RespiratoryCyclePosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Respiratory Cycle Position',
        'retired': ''
      },
      '0x00189217': {
        'keyword': 'VelocityEncodingMaximumValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Velocity Encoding Maximum Value',
        'retired': ''
      },
      '0x00189218': {
        'keyword': 'TagSpacingSecondDimension',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tag Spacing Second Dimension',
        'retired': ''
      },
      '0x00189219': {
        'keyword': 'TagAngleSecondAxis',
        'vr': 'SS',
        'vm': '1',
        'name': 'Tag Angle Second Axis',
        'retired': ''
      },
      '0x00189220': {
        'keyword': 'FrameAcquisitionDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'Frame Acquisition Duration',
        'retired': ''
      },
      '0x00189226': {
        'keyword': 'MRImageFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Image Frame Type Sequence',
        'retired': ''
      },
      '0x00189227': {
        'keyword': 'MRSpectroscopyFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Spectroscopy Frame Type Sequence',
        'retired': ''
      },
      '0x00189231': {
        'keyword': 'MRAcquisitionPhaseEncodingStepsInPlane',
        'vr': 'US',
        'vm': '1',
        'name': 'MR Acquisition Phase Encoding Steps in-plane',
        'retired': ''
      },
      '0x00189232': {
        'keyword': 'MRAcquisitionPhaseEncodingStepsOutOfPlane',
        'vr': 'US',
        'vm': '1',
        'name': 'MR Acquisition Phase Encoding Steps out-of-plane',
        'retired': ''
      },
      '0x00189234': {
        'keyword': 'SpectroscopyAcquisitionPhaseColumns',
        'vr': 'UL',
        'vm': '1',
        'name': 'Spectroscopy Acquisition Phase Columns',
        'retired': ''
      },
      '0x00189236': {
        'keyword': 'CardiacCyclePosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Cardiac Cycle Position',
        'retired': ''
      },
      '0x00189239': {
        'keyword': 'SpecificAbsorptionRateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specific Absorption Rate Sequence',
        'retired': ''
      },
      '0x00189240': {
        'keyword': 'RFEchoTrainLength',
        'vr': 'US',
        'vm': '1',
        'name': 'RF Echo Train Length',
        'retired': ''
      },
      '0x00189241': {
        'keyword': 'GradientEchoTrainLength',
        'vr': 'US',
        'vm': '1',
        'name': 'Gradient Echo Train Length',
        'retired': ''
      },
      '0x00189250': {
        'keyword': 'ArterialSpinLabelingContrast',
        'vr': 'CS',
        'vm': '1',
        'name': 'Arterial Spin Labeling Contrast',
        'retired': ''
      },
      '0x00189251': {
        'keyword': 'MRArterialSpinLabelingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MR Arterial Spin Labeling Sequence',
        'retired': ''
      },
      '0x00189252': {
        'keyword': 'ASLTechniqueDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'ASL Technique Description',
        'retired': ''
      },
      '0x00189253': {
        'keyword': 'ASLSlabNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'ASL Slab Number',
        'retired': ''
      },
      '0x00189254': {
        'keyword': 'ASLSlabThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'ASL Slab Thickness',
        'retired': ''
      },
      '0x00189255': {
        'keyword': 'ASLSlabOrientation',
        'vr': 'FD',
        'vm': '3',
        'name': 'ASL Slab Orientation',
        'retired': ''
      },
      '0x00189256': {
        'keyword': 'ASLMidSlabPosition',
        'vr': 'FD',
        'vm': '3',
        'name': 'ASL Mid Slab Position',
        'retired': ''
      },
      '0x00189257': {
        'keyword': 'ASLContext',
        'vr': 'CS',
        'vm': '1',
        'name': 'ASL Context',
        'retired': ''
      },
      '0x00189258': {
        'keyword': 'ASLPulseTrainDuration',
        'vr': 'UL',
        'vm': '1',
        'name': 'ASL Pulse Train Duration',
        'retired': ''
      },
      '0x00189259': {
        'keyword': 'ASLCrusherFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'ASL Crusher Flag',
        'retired': ''
      },
      '0x0018925A': {
        'keyword': 'ASLCrusherFlowLimit',
        'vr': 'FD',
        'vm': '1',
        'name': 'ASL Crusher Flow Limit',
        'retired': ''
      },
      '0x0018925B': {
        'keyword': 'ASLCrusherDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'ASL Crusher Description',
        'retired': ''
      },
      '0x0018925C': {
        'keyword': 'ASLBolusCutoffFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'ASL Bolus Cut-off Flag',
        'retired': ''
      },
      '0x0018925D': {
        'keyword': 'ASLBolusCutoffTimingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ASL Bolus Cut-off Timing Sequence',
        'retired': ''
      },
      '0x0018925E': {
        'keyword': 'ASLBolusCutoffTechnique',
        'vr': 'LO',
        'vm': '1',
        'name': 'ASL Bolus Cut-off Technique',
        'retired': ''
      },
      '0x0018925F': {
        'keyword': 'ASLBolusCutoffDelayTime',
        'vr': 'UL',
        'vm': '1',
        'name': 'ASL Bolus Cut-off Delay Time',
        'retired': ''
      },
      '0x00189260': {
        'keyword': 'ASLSlabSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ASL Slab Sequence',
        'retired': ''
      },
      '0x00189295': {
        'keyword': 'ChemicalShiftMinimumIntegrationLimitInppm',
        'vr': 'FD',
        'vm': '1',
        'name': 'Chemical Shift Minimum Integration Limit in ppm',
        'retired': ''
      },
      '0x00189296': {
        'keyword': 'ChemicalShiftMaximumIntegrationLimitInppm',
        'vr': 'FD',
        'vm': '1',
        'name': 'Chemical Shift Maximum Integration Limit in ppm',
        'retired': ''
      },
      '0x00189297': {
        'keyword': 'WaterReferenceAcquisition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Water Reference Acquisition',
        'retired': ''
      },
      '0x00189298': {
        'keyword': 'EchoPeakPosition',
        'vr': 'IS',
        'vm': '1',
        'name': 'Echo Peak Position',
        'retired': ''
      },
      '0x00189301': {
        'keyword': 'CTAcquisitionTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Acquisition Type Sequence',
        'retired': ''
      },
      '0x00189302': {
        'keyword': 'AcquisitionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Type',
        'retired': ''
      },
      '0x00189303': {
        'keyword': 'TubeAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tube Angle',
        'retired': ''
      },
      '0x00189304': {
        'keyword': 'CTAcquisitionDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Acquisition Details Sequence',
        'retired': ''
      },
      '0x00189305': {
        'keyword': 'RevolutionTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Revolution Time',
        'retired': ''
      },
      '0x00189306': {
        'keyword': 'SingleCollimationWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Single Collimation Width',
        'retired': ''
      },
      '0x00189307': {
        'keyword': 'TotalCollimationWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Total Collimation Width',
        'retired': ''
      },
      '0x00189308': {
        'keyword': 'CTTableDynamicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Table Dynamics Sequence',
        'retired': ''
      },
      '0x00189309': {
        'keyword': 'TableSpeed',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Speed',
        'retired': ''
      },
      '0x00189310': {
        'keyword': 'TableFeedPerRotation',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Feed per Rotation',
        'retired': ''
      },
      '0x00189311': {
        'keyword': 'SpiralPitchFactor',
        'vr': 'FD',
        'vm': '1',
        'name': 'Spiral Pitch Factor',
        'retired': ''
      },
      '0x00189312': {
        'keyword': 'CTGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Geometry Sequence',
        'retired': ''
      },
      '0x00189313': {
        'keyword': 'DataCollectionCenterPatient',
        'vr': 'FD',
        'vm': '3',
        'name': 'Data Collection Center (Patient)',
        'retired': ''
      },
      '0x00189314': {
        'keyword': 'CTReconstructionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Reconstruction Sequence',
        'retired': ''
      },
      '0x00189315': {
        'keyword': 'ReconstructionAlgorithm',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reconstruction Algorithm',
        'retired': ''
      },
      '0x00189316': {
        'keyword': 'ConvolutionKernelGroup',
        'vr': 'CS',
        'vm': '1',
        'name': 'Convolution Kernel Group',
        'retired': ''
      },
      '0x00189317': {
        'keyword': 'ReconstructionFieldOfView',
        'vr': 'FD',
        'vm': '2',
        'name': 'Reconstruction Field of View',
        'retired': ''
      },
      '0x00189318': {
        'keyword': 'ReconstructionTargetCenterPatient',
        'vr': 'FD',
        'vm': '3',
        'name': 'Reconstruction Target Center (Patient)',
        'retired': ''
      },
      '0x00189319': {
        'keyword': 'ReconstructionAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Reconstruction Angle',
        'retired': ''
      },
      '0x00189320': {
        'keyword': 'ImageFilter',
        'vr': 'SH',
        'vm': '1',
        'name': 'Image Filter',
        'retired': ''
      },
      '0x00189321': {
        'keyword': 'CTExposureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Exposure Sequence',
        'retired': ''
      },
      '0x00189322': {
        'keyword': 'ReconstructionPixelSpacing',
        'vr': 'FD',
        'vm': '2',
        'name': 'Reconstruction Pixel Spacing',
        'retired': ''
      },
      '0x00189323': {
        'keyword': 'ExposureModulationType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Exposure Modulation Type',
        'retired': ''
      },
      '0x00189324': {
        'keyword': 'EstimatedDoseSaving',
        'vr': 'FD',
        'vm': '1',
        'name': 'Estimated Dose Saving',
        'retired': 'Retired'
      },
      '0x00189325': {
        'keyword': 'CTXRayDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT X-Ray Details Sequence',
        'retired': ''
      },
      '0x00189326': {
        'keyword': 'CTPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Position Sequence',
        'retired': ''
      },
      '0x00189327': {
        'keyword': 'TablePosition',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Position',
        'retired': ''
      },
      '0x00189328': {
        'keyword': 'ExposureTimeInms',
        'vr': 'FD',
        'vm': '1',
        'name': 'Exposure Time in ms',
        'retired': ''
      },
      '0x00189329': {
        'keyword': 'CTImageFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Image Frame Type Sequence',
        'retired': ''
      },
      '0x00189330': {
        'keyword': 'XRayTubeCurrentInmA',
        'vr': 'FD',
        'vm': '1',
        'name': 'X-Ray Tube Current in mA',
        'retired': ''
      },
      '0x00189332': {
        'keyword': 'ExposureInmAs',
        'vr': 'FD',
        'vm': '1',
        'name': 'Exposure in mAs',
        'retired': ''
      },
      '0x00189333': {
        'keyword': 'ConstantVolumeFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Constant Volume Flag',
        'retired': ''
      },
      '0x00189334': {
        'keyword': 'FluoroscopyFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fluoroscopy Flag',
        'retired': ''
      },
      '0x00189335': {
        'keyword': 'DistanceSourceToDataCollectionCenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Distance Source to Data Collection Center',
        'retired': ''
      },
      '0x00189337': {
        'keyword': 'ContrastBolusAgentNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Contrast/Bolus Agent Number',
        'retired': ''
      },
      '0x00189338': {
        'keyword': 'ContrastBolusIngredientCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contrast/Bolus Ingredient Code Sequence',
        'retired': ''
      },
      '0x00189340': {
        'keyword': 'ContrastAdministrationProfileSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contrast Administration Profile Sequence',
        'retired': ''
      },
      '0x00189341': {
        'keyword': 'ContrastBolusUsageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contrast/Bolus Usage Sequence',
        'retired': ''
      },
      '0x00189342': {
        'keyword': 'ContrastBolusAgentAdministered',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Agent Administered',
        'retired': ''
      },
      '0x00189343': {
        'keyword': 'ContrastBolusAgentDetected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Agent Detected',
        'retired': ''
      },
      '0x00189344': {
        'keyword': 'ContrastBolusAgentPhase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Agent Phase',
        'retired': ''
      },
      '0x00189345': {
        'keyword': 'CTDIvol',
        'vr': 'FD',
        'vm': '1',
        'name': 'CTDIvol',
        'retired': ''
      },
      '0x00189346': {
        'keyword': 'CTDIPhantomTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CTDI Phantom Type Code Sequence',
        'retired': ''
      },
      '0x00189351': {
        'keyword': 'CalciumScoringMassFactorPatient',
        'vr': 'FL',
        'vm': '1',
        'name': 'Calcium Scoring Mass Factor Patient',
        'retired': ''
      },
      '0x00189352': {
        'keyword': 'CalciumScoringMassFactorDevice',
        'vr': 'FL',
        'vm': '3',
        'name': 'Calcium Scoring Mass Factor Device',
        'retired': ''
      },
      '0x00189353': {
        'keyword': 'EnergyWeightingFactor',
        'vr': 'FL',
        'vm': '1',
        'name': 'Energy Weighting Factor',
        'retired': ''
      },
      '0x00189360': {
        'keyword': 'CTAdditionalXRaySourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Additional X-Ray Source Sequence',
        'retired': ''
      },
      '0x00189361': {
        'keyword': 'MultienergyCTAcquisition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-energy CT Acquisition',
        'retired': ''
      },
      '0x00189362': {
        'keyword': 'MultienergyCTAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT Acquisition Sequence',
        'retired': ''
      },
      '0x00189363': {
        'keyword': 'MultienergyCTProcessingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT Processing Sequence',
        'retired': ''
      },
      '0x00189364': {
        'keyword': 'MultienergyCTCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT Characteristics Sequence',
        'retired': ''
      },
      '0x00189365': {
        'keyword': 'MultienergyCTXRaySourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT X-Ray Source Sequence',
        'retired': ''
      },
      '0x00189366': {
        'keyword': 'XRaySourceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'X-Ray Source Index',
        'retired': ''
      },
      '0x00189367': {
        'keyword': 'XRaySourceID',
        'vr': 'UC',
        'vm': '1',
        'name': 'X-Ray Source ID',
        'retired': ''
      },
      '0x00189368': {
        'keyword': 'MultienergySourceTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-energy Source Technique',
        'retired': ''
      },
      '0x00189369': {
        'keyword': 'SourceStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Source Start DateTime',
        'retired': ''
      },
      '0x0018936A': {
        'keyword': 'SourceEndDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Source End DateTime',
        'retired': ''
      },
      '0x0018936B': {
        'keyword': 'SwitchingPhaseNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Switching Phase Number',
        'retired': ''
      },
      '0x0018936C': {
        'keyword': 'SwitchingPhaseNominalDuration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Switching Phase Nominal Duration',
        'retired': ''
      },
      '0x0018936D': {
        'keyword': 'SwitchingPhaseTransitionDuration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Switching Phase Transition Duration',
        'retired': ''
      },
      '0x0018936E': {
        'keyword': 'EffectiveBinEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Effective Bin Energy',
        'retired': ''
      },
      '0x0018936F': {
        'keyword': 'MultienergyCTXRayDetectorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT X-Ray Detector Sequence',
        'retired': ''
      },
      '0x00189370': {
        'keyword': 'XRayDetectorIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'X-Ray Detector Index',
        'retired': ''
      },
      '0x00189371': {
        'keyword': 'XRayDetectorID',
        'vr': 'UC',
        'vm': '1',
        'name': 'X-Ray Detector ID',
        'retired': ''
      },
      '0x00189372': {
        'keyword': 'MultienergyDetectorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-energy Detector Type',
        'retired': ''
      },
      '0x00189373': {
        'keyword': 'XRayDetectorLabel',
        'vr': 'ST',
        'vm': '1',
        'name': 'X-Ray Detector Label',
        'retired': ''
      },
      '0x00189374': {
        'keyword': 'NominalMaxEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Max Energy',
        'retired': ''
      },
      '0x00189375': {
        'keyword': 'NominalMinEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Min Energy',
        'retired': ''
      },
      '0x00189376': {
        'keyword': 'ReferencedXRayDetectorIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Referenced X-Ray Detector Index',
        'retired': ''
      },
      '0x00189377': {
        'keyword': 'ReferencedXRaySourceIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Referenced X-Ray Source Index',
        'retired': ''
      },
      '0x00189378': {
        'keyword': 'ReferencedPathIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Referenced Path Index',
        'retired': ''
      },
      '0x00189379': {
        'keyword': 'MultienergyCTPathSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-energy CT Path Sequence',
        'retired': ''
      },
      '0x0018937A': {
        'keyword': 'MultienergyCTPathIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Multi-energy CT Path Index',
        'retired': ''
      },
      '0x0018937B': {
        'keyword': 'MultienergyAcquisitionDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Multi-energy Acquisition Description',
        'retired': ''
      },
      '0x0018937C': {
        'keyword': 'MonoenergeticEnergyEquivalent',
        'vr': 'FD',
        'vm': '1',
        'name': 'Monoenergetic Energy Equivalent',
        'retired': ''
      },
      '0x0018937D': {
        'keyword': 'MaterialCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Material Code Sequence',
        'retired': ''
      },
      '0x0018937E': {
        'keyword': 'DecompositionMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Decomposition Method',
        'retired': ''
      },
      '0x0018937F': {
        'keyword': 'DecompositionDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Decomposition Description',
        'retired': ''
      },
      '0x00189380': {
        'keyword': 'DecompositionAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Decomposition Algorithm Identification Sequence',
        'retired': ''
      },
      '0x00189381': {
        'keyword': 'DecompositionMaterialSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Decomposition Material Sequence',
        'retired': ''
      },
      '0x00189382': {
        'keyword': 'MaterialAttenuationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Material Attenuation Sequence',
        'retired': ''
      },
      '0x00189383': {
        'keyword': 'PhotonEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Photon Energy',
        'retired': ''
      },
      '0x00189384': {
        'keyword': 'XRayMassAttenuationCoefficient',
        'vr': 'DS',
        'vm': '1',
        'name': 'X-Ray Mass Attenuation Coefficient',
        'retired': ''
      },
      '0x00189401': {
        'keyword': 'ProjectionPixelCalibrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Projection Pixel Calibration Sequence',
        'retired': ''
      },
      '0x00189402': {
        'keyword': 'DistanceSourceToIsocenter',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distance Source to Isocenter',
        'retired': ''
      },
      '0x00189403': {
        'keyword': 'DistanceObjectToTableTop',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distance Object to Table Top',
        'retired': ''
      },
      '0x00189404': {
        'keyword': 'ObjectPixelSpacingInCenterOfBeam',
        'vr': 'FL',
        'vm': '2',
        'name': 'Object Pixel Spacing in Center of Beam',
        'retired': ''
      },
      '0x00189405': {
        'keyword': 'PositionerPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Positioner Position Sequence',
        'retired': ''
      },
      '0x00189406': {
        'keyword': 'TablePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Table Position Sequence',
        'retired': ''
      },
      '0x00189407': {
        'keyword': 'CollimatorShapeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Collimator Shape Sequence',
        'retired': ''
      },
      '0x00189410': {
        'keyword': 'PlanesInAcquisition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Planes in Acquisition',
        'retired': ''
      },
      '0x00189412': {
        'keyword': 'XAXRFFrameCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'XA/XRF Frame Characteristics Sequence',
        'retired': ''
      },
      '0x00189417': {
        'keyword': 'FrameAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Acquisition Sequence',
        'retired': ''
      },
      '0x00189420': {
        'keyword': 'XRayReceptorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'X-Ray Receptor Type',
        'retired': ''
      },
      '0x00189423': {
        'keyword': 'AcquisitionProtocolName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Acquisition Protocol Name',
        'retired': ''
      },
      '0x00189424': {
        'keyword': 'AcquisitionProtocolDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Acquisition Protocol Description',
        'retired': ''
      },
      '0x00189425': {
        'keyword': 'ContrastBolusIngredientOpaque',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contrast/Bolus Ingredient Opaque',
        'retired': ''
      },
      '0x00189426': {
        'keyword': 'DistanceReceptorPlaneToDetectorHousing',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distance Receptor Plane to Detector Housing',
        'retired': ''
      },
      '0x00189427': {
        'keyword': 'IntensifierActiveShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Intensifier Active Shape',
        'retired': ''
      },
      '0x00189428': {
        'keyword': 'IntensifierActiveDimensions',
        'vr': 'FL',
        'vm': '1-2',
        'name': 'Intensifier Active Dimension(s)',
        'retired': ''
      },
      '0x00189429': {
        'keyword': 'PhysicalDetectorSize',
        'vr': 'FL',
        'vm': '2',
        'name': 'Physical Detector Size',
        'retired': ''
      },
      '0x00189430': {
        'keyword': 'PositionOfIsocenterProjection',
        'vr': 'FL',
        'vm': '2',
        'name': 'Position of Isocenter Projection',
        'retired': ''
      },
      '0x00189432': {
        'keyword': 'FieldOfViewSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Field of View Sequence',
        'retired': ''
      },
      '0x00189433': {
        'keyword': 'FieldOfViewDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Field of View Description',
        'retired': ''
      },
      '0x00189434': {
        'keyword': 'ExposureControlSensingRegionsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Exposure Control Sensing Regions Sequence',
        'retired': ''
      },
      '0x00189435': {
        'keyword': 'ExposureControlSensingRegionShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Exposure Control Sensing Region Shape',
        'retired': ''
      },
      '0x00189436': {
        'keyword': 'ExposureControlSensingRegionLeftVerticalEdge',
        'vr': 'SS',
        'vm': '1',
        'name': 'Exposure Control Sensing Region Left Vertical Edge',
        'retired': ''
      },
      '0x00189437': {
        'keyword': 'ExposureControlSensingRegionRightVerticalEdge',
        'vr': 'SS',
        'vm': '1',
        'name': 'Exposure Control Sensing Region Right Vertical Edge',
        'retired': ''
      },
      '0x00189438': {
        'keyword': 'ExposureControlSensingRegionUpperHorizontalEdge',
        'vr': 'SS',
        'vm': '1',
        'name': 'Exposure Control Sensing Region Upper Horizontal Edge',
        'retired': ''
      },
      '0x00189439': {
        'keyword': 'ExposureControlSensingRegionLowerHorizontalEdge',
        'vr': 'SS',
        'vm': '1',
        'name': 'Exposure Control Sensing Region Lower Horizontal Edge',
        'retired': ''
      },
      '0x00189440': {
        'keyword': 'CenterOfCircularExposureControlSensingRegion',
        'vr': 'SS',
        'vm': '2',
        'name': 'Center of Circular Exposure Control Sensing Region',
        'retired': ''
      },
      '0x00189441': {
        'keyword': 'RadiusOfCircularExposureControlSensingRegion',
        'vr': 'US',
        'vm': '1',
        'name': 'Radius of Circular Exposure Control Sensing Region',
        'retired': ''
      },
      '0x00189442': {
        'keyword': 'VerticesOfThePolygonalExposureControlSensingRegion',
        'vr': 'SS',
        'vm': '2-n',
        'name': 'Vertices of the Polygonal Exposure Control Sensing Region',
        'retired': ''
      },
      '0x00189445': {
        'keyword': '',
        'vr': 'OB',
        'vm': '1',
        'name': 'Retired-blank',
        'retired': 'Retired'
      },
      '0x00189447': {
        'keyword': 'ColumnAngulationPatient',
        'vr': 'FL',
        'vm': '1',
        'name': 'Column Angulation (Patient)',
        'retired': ''
      },
      '0x00189449': {
        'keyword': 'BeamAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Beam Angle',
        'retired': ''
      },
      '0x00189451': {
        'keyword': 'FrameDetectorParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Detector Parameters Sequence',
        'retired': ''
      },
      '0x00189452': {
        'keyword': 'CalculatedAnatomyThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Calculated Anatomy Thickness',
        'retired': ''
      },
      '0x00189455': {
        'keyword': 'CalibrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Calibration Sequence',
        'retired': ''
      },
      '0x00189456': {
        'keyword': 'ObjectThicknessSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Object Thickness Sequence',
        'retired': ''
      },
      '0x00189457': {
        'keyword': 'PlaneIdentification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Plane Identification',
        'retired': ''
      },
      '0x00189461': {
        'keyword': 'FieldOfViewDimensionsInFloat',
        'vr': 'FL',
        'vm': '1-2',
        'name': 'Field of View Dimension(s) in Float',
        'retired': ''
      },
      '0x00189462': {
        'keyword': 'IsocenterReferenceSystemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Isocenter Reference System Sequence',
        'retired': ''
      },
      '0x00189463': {
        'keyword': 'PositionerIsocenterPrimaryAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Positioner Isocenter Primary Angle',
        'retired': ''
      },
      '0x00189464': {
        'keyword': 'PositionerIsocenterSecondaryAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Positioner Isocenter Secondary Angle',
        'retired': ''
      },
      '0x00189465': {
        'keyword': 'PositionerIsocenterDetectorRotationAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Positioner Isocenter Detector Rotation Angle',
        'retired': ''
      },
      '0x00189466': {
        'keyword': 'TableXPositionToIsocenter',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table X Position to Isocenter',
        'retired': ''
      },
      '0x00189467': {
        'keyword': 'TableYPositionToIsocenter',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Y Position to Isocenter',
        'retired': ''
      },
      '0x00189468': {
        'keyword': 'TableZPositionToIsocenter',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Z Position to Isocenter',
        'retired': ''
      },
      '0x00189469': {
        'keyword': 'TableHorizontalRotationAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Horizontal Rotation Angle',
        'retired': ''
      },
      '0x00189470': {
        'keyword': 'TableHeadTiltAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Head Tilt Angle',
        'retired': ''
      },
      '0x00189471': {
        'keyword': 'TableCradleTiltAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Cradle Tilt Angle',
        'retired': ''
      },
      '0x00189472': {
        'keyword': 'FrameDisplayShutterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Display Shutter Sequence',
        'retired': ''
      },
      '0x00189473': {
        'keyword': 'AcquiredImageAreaDoseProduct',
        'vr': 'FL',
        'vm': '1',
        'name': 'Acquired Image Area Dose Product',
        'retired': ''
      },
      '0x00189474': {
        'keyword': 'CArmPositionerTabletopRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'C-arm Positioner Tabletop Relationship',
        'retired': ''
      },
      '0x00189476': {
        'keyword': 'XRayGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray Geometry Sequence',
        'retired': ''
      },
      '0x00189477': {
        'keyword': 'IrradiationEventIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Irradiation Event Identification Sequence',
        'retired': ''
      },
      '0x00189504': {
        'keyword': 'XRay3DFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray 3D Frame Type Sequence',
        'retired': ''
      },
      '0x00189506': {
        'keyword': 'ContributingSourcesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contributing Sources Sequence',
        'retired': ''
      },
      '0x00189507': {
        'keyword': 'XRay3DAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray 3D Acquisition Sequence',
        'retired': ''
      },
      '0x00189508': {
        'keyword': 'PrimaryPositionerScanArc',
        'vr': 'FL',
        'vm': '1',
        'name': 'Primary Positioner Scan Arc',
        'retired': ''
      },
      '0x00189509': {
        'keyword': 'SecondaryPositionerScanArc',
        'vr': 'FL',
        'vm': '1',
        'name': 'Secondary Positioner Scan Arc',
        'retired': ''
      },
      '0x00189510': {
        'keyword': 'PrimaryPositionerScanStartAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Primary Positioner Scan Start Angle',
        'retired': ''
      },
      '0x00189511': {
        'keyword': 'SecondaryPositionerScanStartAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Secondary Positioner Scan Start Angle',
        'retired': ''
      },
      '0x00189514': {
        'keyword': 'PrimaryPositionerIncrement',
        'vr': 'FL',
        'vm': '1',
        'name': 'Primary Positioner Increment',
        'retired': ''
      },
      '0x00189515': {
        'keyword': 'SecondaryPositionerIncrement',
        'vr': 'FL',
        'vm': '1',
        'name': 'Secondary Positioner Increment',
        'retired': ''
      },
      '0x00189516': {
        'keyword': 'StartAcquisitionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Start Acquisition DateTime',
        'retired': ''
      },
      '0x00189517': {
        'keyword': 'EndAcquisitionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'End Acquisition DateTime',
        'retired': ''
      },
      '0x00189518': {
        'keyword': 'PrimaryPositionerIncrementSign',
        'vr': 'SS',
        'vm': '1',
        'name': 'Primary Positioner Increment Sign',
        'retired': ''
      },
      '0x00189519': {
        'keyword': 'SecondaryPositionerIncrementSign',
        'vr': 'SS',
        'vm': '1',
        'name': 'Secondary Positioner Increment Sign',
        'retired': ''
      },
      '0x00189524': {
        'keyword': 'ApplicationName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Application Name',
        'retired': ''
      },
      '0x00189525': {
        'keyword': 'ApplicationVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Application Version',
        'retired': ''
      },
      '0x00189526': {
        'keyword': 'ApplicationManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Application Manufacturer',
        'retired': ''
      },
      '0x00189527': {
        'keyword': 'AlgorithmType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Algorithm Type',
        'retired': ''
      },
      '0x00189528': {
        'keyword': 'AlgorithmDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Algorithm Description',
        'retired': ''
      },
      '0x00189530': {
        'keyword': 'XRay3DReconstructionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray 3D Reconstruction Sequence',
        'retired': ''
      },
      '0x00189531': {
        'keyword': 'ReconstructionDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reconstruction Description',
        'retired': ''
      },
      '0x00189538': {
        'keyword': 'PerProjectionAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Per Projection Acquisition Sequence',
        'retired': ''
      },
      '0x00189541': {
        'keyword': 'DetectorPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Detector Position Sequence',
        'retired': ''
      },
      '0x00189542': {
        'keyword': 'XRayAcquisitionDoseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray Acquisition Dose Sequence',
        'retired': ''
      },
      '0x00189543': {
        'keyword': 'XRaySourceIsocenterPrimaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'X-Ray Source Isocenter Primary Angle',
        'retired': ''
      },
      '0x00189544': {
        'keyword': 'XRaySourceIsocenterSecondaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'X-Ray Source Isocenter Secondary Angle',
        'retired': ''
      },
      '0x00189545': {
        'keyword': 'BreastSupportIsocenterPrimaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Breast Support Isocenter Primary Angle',
        'retired': ''
      },
      '0x00189546': {
        'keyword': 'BreastSupportIsocenterSecondaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Breast Support Isocenter Secondary Angle',
        'retired': ''
      },
      '0x00189547': {
        'keyword': 'BreastSupportXPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Breast Support X Position to Isocenter',
        'retired': ''
      },
      '0x00189548': {
        'keyword': 'BreastSupportYPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Breast Support Y Position to Isocenter',
        'retired': ''
      },
      '0x00189549': {
        'keyword': 'BreastSupportZPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Breast Support Z Position to Isocenter',
        'retired': ''
      },
      '0x00189550': {
        'keyword': 'DetectorIsocenterPrimaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Detector Isocenter Primary Angle',
        'retired': ''
      },
      '0x00189551': {
        'keyword': 'DetectorIsocenterSecondaryAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Detector Isocenter Secondary Angle',
        'retired': ''
      },
      '0x00189552': {
        'keyword': 'DetectorXPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Detector X Position to Isocenter',
        'retired': ''
      },
      '0x00189553': {
        'keyword': 'DetectorYPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Detector Y Position to Isocenter',
        'retired': ''
      },
      '0x00189554': {
        'keyword': 'DetectorZPositionToIsocenter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Detector Z Position to Isocenter',
        'retired': ''
      },
      '0x00189555': {
        'keyword': 'XRayGridSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray Grid Sequence',
        'retired': ''
      },
      '0x00189556': {
        'keyword': 'XRayFilterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'X-Ray Filter Sequence',
        'retired': ''
      },
      '0x00189557': {
        'keyword': 'DetectorActiveAreaTLHCPosition',
        'vr': 'FD',
        'vm': '3',
        'name': 'Detector Active Area TLHC Position',
        'retired': ''
      },
      '0x00189558': {
        'keyword': 'DetectorActiveAreaOrientation',
        'vr': 'FD',
        'vm': '6',
        'name': 'Detector Active Area Orientation',
        'retired': ''
      },
      '0x00189559': {
        'keyword': 'PositionerPrimaryAngleDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Positioner Primary Angle Direction',
        'retired': ''
      },
      '0x00189601': {
        'keyword': 'DiffusionBMatrixSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Diffusion b-matrix Sequence',
        'retired': ''
      },
      '0x00189602': {
        'keyword': 'DiffusionBValueXX',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value XX',
        'retired': ''
      },
      '0x00189603': {
        'keyword': 'DiffusionBValueXY',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value XY',
        'retired': ''
      },
      '0x00189604': {
        'keyword': 'DiffusionBValueXZ',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value XZ',
        'retired': ''
      },
      '0x00189605': {
        'keyword': 'DiffusionBValueYY',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value YY',
        'retired': ''
      },
      '0x00189606': {
        'keyword': 'DiffusionBValueYZ',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value YZ',
        'retired': ''
      },
      '0x00189607': {
        'keyword': 'DiffusionBValueZZ',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffusion b-value ZZ',
        'retired': ''
      },
      '0x00189621': {
        'keyword': 'FunctionalMRSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Functional MR Sequence',
        'retired': ''
      },
      '0x00189622': {
        'keyword': 'FunctionalSettlingPhaseFramesPresent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Functional Settling Phase Frames Present',
        'retired': ''
      },
      '0x00189623': {
        'keyword': 'FunctionalSyncPulse',
        'vr': 'DT',
        'vm': '1',
        'name': 'Functional Sync Pulse',
        'retired': ''
      },
      '0x00189624': {
        'keyword': 'SettlingPhaseFrame',
        'vr': 'CS',
        'vm': '1',
        'name': 'Settling Phase Frame',
        'retired': ''
      },
      '0x00189701': {
        'keyword': 'DecayCorrectionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Decay Correction DateTime',
        'retired': ''
      },
      '0x00189715': {
        'keyword': 'StartDensityThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Start Density Threshold',
        'retired': ''
      },
      '0x00189716': {
        'keyword': 'StartRelativeDensityDifferenceThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Start Relative Density Difference Threshold',
        'retired': ''
      },
      '0x00189717': {
        'keyword': 'StartCardiacTriggerCountThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Start Cardiac Trigger Count Threshold',
        'retired': ''
      },
      '0x00189718': {
        'keyword': 'StartRespiratoryTriggerCountThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Start Respiratory Trigger Count Threshold',
        'retired': ''
      },
      '0x00189719': {
        'keyword': 'TerminationCountsThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Counts Threshold',
        'retired': ''
      },
      '0x00189720': {
        'keyword': 'TerminationDensityThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Density Threshold',
        'retired': ''
      },
      '0x00189721': {
        'keyword': 'TerminationRelativeDensityThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Relative Density Threshold',
        'retired': ''
      },
      '0x00189722': {
        'keyword': 'TerminationTimeThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Time Threshold',
        'retired': ''
      },
      '0x00189723': {
        'keyword': 'TerminationCardiacTriggerCountThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Cardiac Trigger Count Threshold',
        'retired': ''
      },
      '0x00189724': {
        'keyword': 'TerminationRespiratoryTriggerCountThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Termination Respiratory Trigger Count Threshold',
        'retired': ''
      },
      '0x00189725': {
        'keyword': 'DetectorGeometry',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Geometry',
        'retired': ''
      },
      '0x00189726': {
        'keyword': 'TransverseDetectorSeparation',
        'vr': 'FD',
        'vm': '1',
        'name': 'Transverse Detector Separation',
        'retired': ''
      },
      '0x00189727': {
        'keyword': 'AxialDetectorDimension',
        'vr': 'FD',
        'vm': '1',
        'name': 'Axial Detector Dimension',
        'retired': ''
      },
      '0x00189729': {
        'keyword': 'RadiopharmaceuticalAgentNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Radiopharmaceutical Agent Number',
        'retired': ''
      },
      '0x00189732': {
        'keyword': 'PETFrameAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Frame Acquisition Sequence',
        'retired': ''
      },
      '0x00189733': {
        'keyword': 'PETDetectorMotionDetailsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Detector Motion Details Sequence',
        'retired': ''
      },
      '0x00189734': {
        'keyword': 'PETTableDynamicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Table Dynamics Sequence',
        'retired': ''
      },
      '0x00189735': {
        'keyword': 'PETPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Position Sequence',
        'retired': ''
      },
      '0x00189736': {
        'keyword': 'PETFrameCorrectionFactorsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Frame Correction Factors Sequence',
        'retired': ''
      },
      '0x00189737': {
        'keyword': 'RadiopharmaceuticalUsageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiopharmaceutical Usage Sequence',
        'retired': ''
      },
      '0x00189738': {
        'keyword': 'AttenuationCorrectionSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Attenuation Correction Source',
        'retired': ''
      },
      '0x00189739': {
        'keyword': 'NumberOfIterations',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Iterations',
        'retired': ''
      },
      '0x00189740': {
        'keyword': 'NumberOfSubsets',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Subsets',
        'retired': ''
      },
      '0x00189749': {
        'keyword': 'PETReconstructionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Reconstruction Sequence',
        'retired': ''
      },
      '0x00189751': {
        'keyword': 'PETFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PET Frame Type Sequence',
        'retired': ''
      },
      '0x00189755': {
        'keyword': 'TimeOfFlightInformationUsed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Time of Flight Information Used',
        'retired': ''
      },
      '0x00189756': {
        'keyword': 'ReconstructionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reconstruction Type',
        'retired': ''
      },
      '0x00189758': {
        'keyword': 'DecayCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Decay Corrected',
        'retired': ''
      },
      '0x00189759': {
        'keyword': 'AttenuationCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Attenuation Corrected',
        'retired': ''
      },
      '0x00189760': {
        'keyword': 'ScatterCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scatter Corrected',
        'retired': ''
      },
      '0x00189761': {
        'keyword': 'DeadTimeCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dead Time Corrected',
        'retired': ''
      },
      '0x00189762': {
        'keyword': 'GantryMotionCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gantry Motion Corrected',
        'retired': ''
      },
      '0x00189763': {
        'keyword': 'PatientMotionCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Motion Corrected',
        'retired': ''
      },
      '0x00189764': {
        'keyword': 'CountLossNormalizationCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Count Loss Normalization Corrected',
        'retired': ''
      },
      '0x00189765': {
        'keyword': 'RandomsCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Randoms Corrected',
        'retired': ''
      },
      '0x00189766': {
        'keyword': 'NonUniformRadialSamplingCorrected',
        'vr': 'CS',
        'vm': '1',
        'name': 'Non-uniform Radial Sampling Corrected',
        'retired': ''
      },
      '0x00189767': {
        'keyword': 'SensitivityCalibrated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Sensitivity Calibrated',
        'retired': ''
      },
      '0x00189768': {
        'keyword': 'DetectorNormalizationCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Normalization Correction',
        'retired': ''
      },
      '0x00189769': {
        'keyword': 'IterativeReconstructionMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Iterative Reconstruction Method',
        'retired': ''
      },
      '0x00189770': {
        'keyword': 'AttenuationCorrectionTemporalRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'Attenuation Correction Temporal Relationship',
        'retired': ''
      },
      '0x00189771': {
        'keyword': 'PatientPhysiologicalStateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Physiological State Sequence',
        'retired': ''
      },
      '0x00189772': {
        'keyword': 'PatientPhysiologicalStateCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Physiological State Code Sequence',
        'retired': ''
      },
      '0x00189801': {
        'keyword': 'DepthsOfFocus',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Depth(s) of Focus',
        'retired': ''
      },
      '0x00189803': {
        'keyword': 'ExcludedIntervalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Excluded Intervals Sequence',
        'retired': ''
      },
      '0x00189804': {
        'keyword': 'ExclusionStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Exclusion Start DateTime',
        'retired': ''
      },
      '0x00189805': {
        'keyword': 'ExclusionDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'Exclusion Duration',
        'retired': ''
      },
      '0x00189806': {
        'keyword': 'USImageDescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'US Image Description Sequence',
        'retired': ''
      },
      '0x00189807': {
        'keyword': 'ImageDataTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Data Type Sequence',
        'retired': ''
      },
      '0x00189808': {
        'keyword': 'DataType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Data Type',
        'retired': ''
      },
      '0x00189809': {
        'keyword': 'TransducerScanPatternCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Scan Pattern Code Sequence',
        'retired': ''
      },
      '0x0018980B': {
        'keyword': 'AliasedDataType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Aliased Data Type',
        'retired': ''
      },
      '0x0018980C': {
        'keyword': 'PositionMeasuringDeviceUsed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Position Measuring Device Used',
        'retired': ''
      },
      '0x0018980D': {
        'keyword': 'TransducerGeometryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Geometry Code Sequence',
        'retired': ''
      },
      '0x0018980E': {
        'keyword': 'TransducerBeamSteeringCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Beam Steering Code Sequence',
        'retired': ''
      },
      '0x0018980F': {
        'keyword': 'TransducerApplicationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Application Code Sequence',
        'retired': ''
      },
      '0x00189810': {
        'keyword': 'ZeroVelocityPixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Zero Velocity Pixel Value',
        'retired': ''
      },
      '0x00189821': {
        'keyword': 'PhotoacousticExcitationCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Photoacoustic Excitation Characteristics Sequence',
        'retired': ''
      },
      '0x00189822': {
        'keyword': 'ExcitationSpectralWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Excitation Spectral Width',
        'retired': ''
      },
      '0x00189823': {
        'keyword': 'ExcitationEnergy',
        'vr': 'FD',
        'vm': '1',
        'name': 'Excitation Energy',
        'retired': ''
      },
      '0x00189824': {
        'keyword': 'ExcitationPulseDuration',
        'vr': 'FD',
        'vm': '1',
        'name': 'Excitation Pulse Duration',
        'retired': ''
      },
      '0x00189825': {
        'keyword': 'ExcitationWavelengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Excitation Wavelength Sequence',
        'retired': ''
      },
      '0x00189826': {
        'keyword': 'ExcitationWavelength',
        'vr': 'FD',
        'vm': '1',
        'name': 'Excitation Wavelength',
        'retired': ''
      },
      '0x00189828': {
        'keyword': 'IlluminationTranslationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Illumination Translation Flag',
        'retired': ''
      },
      '0x00189829': {
        'keyword': 'AcousticCouplingMediumFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acoustic Coupling Medium Flag',
        'retired': ''
      },
      '0x0018982A': {
        'keyword': 'AcousticCouplingMediumCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acoustic Coupling Medium Code Sequence',
        'retired': ''
      },
      '0x0018982B': {
        'keyword': 'AcousticCouplingMediumTemperature',
        'vr': 'FD',
        'vm': '1',
        'name': 'Acoustic Coupling Medium Temperature',
        'retired': ''
      },
      '0x0018982C': {
        'keyword': 'TransducerResponseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Response Sequence',
        'retired': ''
      },
      '0x0018982D': {
        'keyword': 'CenterFrequency',
        'vr': 'FD',
        'vm': '1',
        'name': 'Center Frequency',
        'retired': ''
      },
      '0x0018982E': {
        'keyword': 'FractionalBandwidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Fractional Bandwidth',
        'retired': ''
      },
      '0x0018982F': {
        'keyword': 'LowerCutoffFrequency',
        'vr': 'FD',
        'vm': '1',
        'name': 'Lower Cutoff Frequency',
        'retired': ''
      },
      '0x00189830': {
        'keyword': 'UpperCutoffFrequency',
        'vr': 'FD',
        'vm': '1',
        'name': 'Upper Cutoff Frequency',
        'retired': ''
      },
      '0x00189831': {
        'keyword': 'TransducerTechnologySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transducer Technology Sequence',
        'retired': ''
      },
      '0x00189832': {
        'keyword': 'SoundSpeedCorrectionMechanismCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Sound Speed Correction Mechanism Code Sequence',
        'retired': ''
      },
      '0x00189833': {
        'keyword': 'ObjectSoundSpeed',
        'vr': 'FD',
        'vm': '1',
        'name': 'Object Sound Speed',
        'retired': ''
      },
      '0x00189834': {
        'keyword': 'AcousticCouplingMediumSoundSpeed',
        'vr': 'FD',
        'vm': '1',
        'name': 'Acoustic Coupling Medium Sound Speed',
        'retired': ''
      },
      '0x00189835': {
        'keyword': 'PhotoacousticImageFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Photoacoustic Image Frame Type Sequence',
        'retired': ''
      },
      '0x00189836': {
        'keyword': 'ImageDataTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Data Type Code Sequence',
        'retired': ''
      },
      '0x00189900': {
        'keyword': 'ReferenceLocationLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reference Location Label',
        'retired': ''
      },
      '0x00189901': {
        'keyword': 'ReferenceLocationDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Reference Location Description',
        'retired': ''
      },
      '0x00189902': {
        'keyword': 'ReferenceBasisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reference Basis Code Sequence',
        'retired': ''
      },
      '0x00189903': {
        'keyword': 'ReferenceGeometryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reference Geometry Code Sequence',
        'retired': ''
      },
      '0x00189904': {
        'keyword': 'OffsetDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Offset Distance',
        'retired': ''
      },
      '0x00189905': {
        'keyword': 'OffsetDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Offset Direction',
        'retired': ''
      },
      '0x00189906': {
        'keyword': 'PotentialScheduledProtocolCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Potential Scheduled Protocol Code Sequence',
        'retired': ''
      },
      '0x00189907': {
        'keyword': 'PotentialRequestedProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Potential Requested Procedure Code Sequence',
        'retired': ''
      },
      '0x00189908': {
        'keyword': 'PotentialReasonsForProcedure',
        'vr': 'UC',
        'vm': '1-n',
        'name': 'Potential Reasons for Procedure',
        'retired': ''
      },
      '0x00189909': {
        'keyword': 'PotentialReasonsForProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Potential Reasons for Procedure Code Sequence',
        'retired': ''
      },
      '0x0018990A': {
        'keyword': 'PotentialDiagnosticTasks',
        'vr': 'UC',
        'vm': '1-n',
        'name': 'Potential Diagnostic Tasks',
        'retired': ''
      },
      '0x0018990B': {
        'keyword': 'ContraindicationsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contraindications Code Sequence',
        'retired': ''
      },
      '0x0018990C': {
        'keyword': 'ReferencedDefinedProtocolSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Defined Protocol Sequence',
        'retired': ''
      },
      '0x0018990D': {
        'keyword': 'ReferencedPerformedProtocolSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Performed Protocol Sequence',
        'retired': ''
      },
      '0x0018990E': {
        'keyword': 'PredecessorProtocolSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Predecessor Protocol Sequence',
        'retired': ''
      },
      '0x0018990F': {
        'keyword': 'ProtocolPlanningInformation',
        'vr': 'UT',
        'vm': '1',
        'name': 'Protocol Planning Information',
        'retired': ''
      },
      '0x00189910': {
        'keyword': 'ProtocolDesignRationale',
        'vr': 'UT',
        'vm': '1',
        'name': 'Protocol Design Rationale',
        'retired': ''
      },
      '0x00189911': {
        'keyword': 'PatientSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Specification Sequence',
        'retired': ''
      },
      '0x00189912': {
        'keyword': 'ModelSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Model Specification Sequence',
        'retired': ''
      },
      '0x00189913': {
        'keyword': 'ParametersSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Parameters Specification Sequence',
        'retired': ''
      },
      '0x00189914': {
        'keyword': 'InstructionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Instruction Sequence',
        'retired': ''
      },
      '0x00189915': {
        'keyword': 'InstructionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Instruction Index',
        'retired': ''
      },
      '0x00189916': {
        'keyword': 'InstructionText',
        'vr': 'LO',
        'vm': '1',
        'name': 'Instruction Text',
        'retired': ''
      },
      '0x00189917': {
        'keyword': 'InstructionDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Instruction Description',
        'retired': ''
      },
      '0x00189918': {
        'keyword': 'InstructionPerformedFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Instruction Performed Flag',
        'retired': ''
      },
      '0x00189919': {
        'keyword': 'InstructionPerformedDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Instruction Performed DateTime',
        'retired': ''
      },
      '0x0018991A': {
        'keyword': 'InstructionPerformanceComment',
        'vr': 'UT',
        'vm': '1',
        'name': 'Instruction Performance Comment',
        'retired': ''
      },
      '0x0018991B': {
        'keyword': 'PatientPositioningInstructionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Positioning Instruction Sequence',
        'retired': ''
      },
      '0x0018991C': {
        'keyword': 'PositioningMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Positioning Method Code Sequence',
        'retired': ''
      },
      '0x0018991D': {
        'keyword': 'PositioningLandmarkSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Positioning Landmark Sequence',
        'retired': ''
      },
      '0x0018991E': {
        'keyword': 'TargetFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Target Frame of Reference UID',
        'retired': ''
      },
      '0x0018991F': {
        'keyword': 'AcquisitionProtocolElementSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Protocol Element Specification Sequence',
        'retired': ''
      },
      '0x00189920': {
        'keyword': 'AcquisitionProtocolElementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Protocol Element Sequence',
        'retired': ''
      },
      '0x00189921': {
        'keyword': 'ProtocolElementNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Protocol Element Number',
        'retired': ''
      },
      '0x00189922': {
        'keyword': 'ProtocolElementName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Protocol Element Name',
        'retired': ''
      },
      '0x00189923': {
        'keyword': 'ProtocolElementCharacteristicsSummary',
        'vr': 'UT',
        'vm': '1',
        'name': 'Protocol Element Characteristics Summary',
        'retired': ''
      },
      '0x00189924': {
        'keyword': 'ProtocolElementPurpose',
        'vr': 'UT',
        'vm': '1',
        'name': 'Protocol Element Purpose',
        'retired': ''
      },
      '0x00189930': {
        'keyword': 'AcquisitionMotion',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Motion',
        'retired': ''
      },
      '0x00189931': {
        'keyword': 'AcquisitionStartLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Start Location Sequence',
        'retired': ''
      },
      '0x00189932': {
        'keyword': 'AcquisitionEndLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition End Location Sequence',
        'retired': ''
      },
      '0x00189933': {
        'keyword': 'ReconstructionProtocolElementSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction Protocol Element Specification Sequence',
        'retired': ''
      },
      '0x00189934': {
        'keyword': 'ReconstructionProtocolElementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction Protocol Element Sequence',
        'retired': ''
      },
      '0x00189935': {
        'keyword': 'StorageProtocolElementSpecificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Storage Protocol Element Specification Sequence',
        'retired': ''
      },
      '0x00189936': {
        'keyword': 'StorageProtocolElementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Storage Protocol Element Sequence',
        'retired': ''
      },
      '0x00189937': {
        'keyword': 'RequestedSeriesDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Series Description',
        'retired': ''
      },
      '0x00189938': {
        'keyword': 'SourceAcquisitionProtocolElementNumber',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Source Acquisition Protocol Element Number',
        'retired': ''
      },
      '0x00189939': {
        'keyword': 'SourceAcquisitionBeamNumber',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Source Acquisition Beam Number',
        'retired': ''
      },
      '0x0018993A': {
        'keyword': 'SourceReconstructionProtocolElementNumber',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Source Reconstruction Protocol Element Number',
        'retired': ''
      },
      '0x0018993B': {
        'keyword': 'ReconstructionStartLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction Start Location Sequence',
        'retired': ''
      },
      '0x0018993C': {
        'keyword': 'ReconstructionEndLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction End Location Sequence',
        'retired': ''
      },
      '0x0018993D': {
        'keyword': 'ReconstructionAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction Algorithm Sequence',
        'retired': ''
      },
      '0x0018993E': {
        'keyword': 'ReconstructionTargetCenterLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reconstruction Target Center Location Sequence',
        'retired': ''
      },
      '0x00189941': {
        'keyword': 'ImageFilterDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Image Filter Description',
        'retired': ''
      },
      '0x00189942': {
        'keyword': 'CTDIvolNotificationTrigger',
        'vr': 'FD',
        'vm': '1',
        'name': 'CTDIvol Notification Trigger',
        'retired': ''
      },
      '0x00189943': {
        'keyword': 'DLPNotificationTrigger',
        'vr': 'FD',
        'vm': '1',
        'name': 'DLP Notification Trigger',
        'retired': ''
      },
      '0x00189944': {
        'keyword': 'AutoKVPSelectionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Auto KVP Selection Type',
        'retired': ''
      },
      '0x00189945': {
        'keyword': 'AutoKVPUpperBound',
        'vr': 'FD',
        'vm': '1',
        'name': 'Auto KVP Upper Bound',
        'retired': ''
      },
      '0x00189946': {
        'keyword': 'AutoKVPLowerBound',
        'vr': 'FD',
        'vm': '1',
        'name': 'Auto KVP Lower Bound',
        'retired': ''
      },
      '0x00189947': {
        'keyword': 'ProtocolDefinedPatientPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Protocol Defined Patient Position',
        'retired': ''
      },
      '0x0018A001': {
        'keyword': 'ContributingEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contributing Equipment Sequence',
        'retired': ''
      },
      '0x0018A002': {
        'keyword': 'ContributionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Contribution DateTime',
        'retired': ''
      },
      '0x0018A003': {
        'keyword': 'ContributionDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Contribution Description',
        'retired': ''
      },
      '0x0020000D': {
        'keyword': 'StudyInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Study Instance UID',
        'retired': ''
      },
      '0x0020000E': {
        'keyword': 'SeriesInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Series Instance UID',
        'retired': ''
      },
      '0x00200010': {
        'keyword': 'StudyID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Study ID',
        'retired': ''
      },
      '0x00200011': {
        'keyword': 'SeriesNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Series Number',
        'retired': ''
      },
      '0x00200012': {
        'keyword': 'AcquisitionNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisition Number',
        'retired': ''
      },
      '0x00200013': {
        'keyword': 'InstanceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Instance Number',
        'retired': ''
      },
      '0x00200014': {
        'keyword': 'IsotopeNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Isotope Number',
        'retired': 'Retired'
      },
      '0x00200015': {
        'keyword': 'PhaseNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Phase Number',
        'retired': 'Retired'
      },
      '0x00200016': {
        'keyword': 'IntervalNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Interval Number',
        'retired': 'Retired'
      },
      '0x00200017': {
        'keyword': 'TimeSlotNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Time Slot Number',
        'retired': 'Retired'
      },
      '0x00200018': {
        'keyword': 'AngleNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Angle Number',
        'retired': 'Retired'
      },
      '0x00200019': {
        'keyword': 'ItemNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Item Number',
        'retired': ''
      },
      '0x00200020': {
        'keyword': 'PatientOrientation',
        'vr': 'CS',
        'vm': '2',
        'name': 'Patient Orientation',
        'retired': ''
      },
      '0x00200022': {
        'keyword': 'OverlayNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Overlay Number',
        'retired': 'Retired'
      },
      '0x00200024': {
        'keyword': 'CurveNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Curve Number',
        'retired': 'Retired'
      },
      '0x00200026': {
        'keyword': 'LUTNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'LUT Number',
        'retired': 'Retired'
      },
      '0x00200027': {
        'keyword': 'PyramidLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Pyramid Label',
        'retired': ''
      },
      '0x00200030': {
        'keyword': 'ImagePosition',
        'vr': 'DS',
        'vm': '3',
        'name': 'Image Position',
        'retired': 'Retired'
      },
      '0x00200032': {
        'keyword': 'ImagePositionPatient',
        'vr': 'DS',
        'vm': '3',
        'name': 'Image Position (Patient)',
        'retired': ''
      },
      '0x00200035': {
        'keyword': 'ImageOrientation',
        'vr': 'DS',
        'vm': '6',
        'name': 'Image Orientation',
        'retired': 'Retired'
      },
      '0x00200037': {
        'keyword': 'ImageOrientationPatient',
        'vr': 'DS',
        'vm': '6',
        'name': 'Image Orientation (Patient)',
        'retired': ''
      },
      '0x00200050': {
        'keyword': 'Location',
        'vr': 'DS',
        'vm': '1',
        'name': 'Location',
        'retired': 'Retired'
      },
      '0x00200052': {
        'keyword': 'FrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Frame of Reference UID',
        'retired': ''
      },
      '0x00200060': {
        'keyword': 'Laterality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Laterality',
        'retired': ''
      },
      '0x00200062': {
        'keyword': 'ImageLaterality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Laterality',
        'retired': ''
      },
      '0x00200070': {
        'keyword': 'ImageGeometryType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Image Geometry Type',
        'retired': 'Retired'
      },
      '0x00200080': {
        'keyword': 'MaskingImage',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Masking Image',
        'retired': 'Retired'
      },
      '0x002000AA': {
        'keyword': 'ReportNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Report Number',
        'retired': 'Retired'
      },
      '0x00200100': {
        'keyword': 'TemporalPositionIdentifier',
        'vr': 'IS',
        'vm': '1',
        'name': 'Temporal Position Identifier',
        'retired': ''
      },
      '0x00200105': {
        'keyword': 'NumberOfTemporalPositions',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Temporal Positions',
        'retired': ''
      },
      '0x00200110': {
        'keyword': 'TemporalResolution',
        'vr': 'DS',
        'vm': '1',
        'name': 'Temporal Resolution',
        'retired': ''
      },
      '0x00200200': {
        'keyword': 'SynchronizationFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Synchronization Frame of Reference UID',
        'retired': ''
      },
      '0x00200242': {
        'keyword': 'SOPInstanceUIDOfConcatenationSource',
        'vr': 'UI',
        'vm': '1',
        'name': 'SOP Instance UID of Concatenation Source',
        'retired': ''
      },
      '0x00201000': {
        'keyword': 'SeriesInStudy',
        'vr': 'IS',
        'vm': '1',
        'name': 'Series in Study',
        'retired': 'Retired'
      },
      '0x00201001': {
        'keyword': 'AcquisitionsInSeries',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisitions in Series',
        'retired': 'Retired'
      },
      '0x00201002': {
        'keyword': 'ImagesInAcquisition',
        'vr': 'IS',
        'vm': '1',
        'name': 'Images in Acquisition',
        'retired': ''
      },
      '0x00201003': {
        'keyword': 'ImagesInSeries',
        'vr': 'IS',
        'vm': '1',
        'name': 'Images in Series',
        'retired': 'Retired'
      },
      '0x00201004': {
        'keyword': 'AcquisitionsInStudy',
        'vr': 'IS',
        'vm': '1',
        'name': 'Acquisitions in Study',
        'retired': 'Retired'
      },
      '0x00201005': {
        'keyword': 'ImagesInStudy',
        'vr': 'IS',
        'vm': '1',
        'name': 'Images in Study',
        'retired': 'Retired'
      },
      '0x00201020': {
        'keyword': 'Reference',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Reference',
        'retired': 'Retired'
      },
      '0x0020103F': {
        'keyword': 'TargetPositionReferenceIndicator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Target Position Reference Indicator',
        'retired': ''
      },
      '0x00201040': {
        'keyword': 'PositionReferenceIndicator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Position Reference Indicator',
        'retired': ''
      },
      '0x00201041': {
        'keyword': 'SliceLocation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Slice Location',
        'retired': ''
      },
      '0x00201070': {
        'keyword': 'OtherStudyNumbers',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Other Study Numbers',
        'retired': 'Retired'
      },
      '0x00201200': {
        'keyword': 'NumberOfPatientRelatedStudies',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Patient Related Studies',
        'retired': ''
      },
      '0x00201202': {
        'keyword': 'NumberOfPatientRelatedSeries',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Patient Related Series',
        'retired': ''
      },
      '0x00201204': {
        'keyword': 'NumberOfPatientRelatedInstances',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Patient Related Instances',
        'retired': ''
      },
      '0x00201206': {
        'keyword': 'NumberOfStudyRelatedSeries',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Study Related Series',
        'retired': ''
      },
      '0x00201208': {
        'keyword': 'NumberOfStudyRelatedInstances',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Study Related Instances',
        'retired': ''
      },
      '0x00201209': {
        'keyword': 'NumberOfSeriesRelatedInstances',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Series Related Instances',
        'retired': ''
      },
      '0x00203401': {
        'keyword': 'ModifyingDeviceID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modifying Device ID',
        'retired': 'Retired'
      },
      '0x00203402': {
        'keyword': 'ModifiedImageID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modified Image ID',
        'retired': 'Retired'
      },
      '0x00203403': {
        'keyword': 'ModifiedImageDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Modified Image Date',
        'retired': 'Retired'
      },
      '0x00203404': {
        'keyword': 'ModifyingDeviceManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Modifying Device Manufacturer',
        'retired': 'Retired'
      },
      '0x00203405': {
        'keyword': 'ModifiedImageTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Modified Image Time',
        'retired': 'Retired'
      },
      '0x00203406': {
        'keyword': 'ModifiedImageDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Modified Image Description',
        'retired': 'Retired'
      },
      '0x00204000': {
        'keyword': 'ImageComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Image Comments',
        'retired': ''
      },
      '0x00205000': {
        'keyword': 'OriginalImageIdentification',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Original Image Identification',
        'retired': 'Retired'
      },
      '0x00205002': {
        'keyword': 'OriginalImageIdentificationNomenclature',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Original Image Identification Nomenclature',
        'retired': 'Retired'
      },
      '0x00209056': {
        'keyword': 'StackID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Stack ID',
        'retired': ''
      },
      '0x00209057': {
        'keyword': 'InStackPositionNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'In-Stack Position Number',
        'retired': ''
      },
      '0x00209071': {
        'keyword': 'FrameAnatomySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Anatomy Sequence',
        'retired': ''
      },
      '0x00209072': {
        'keyword': 'FrameLaterality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Frame Laterality',
        'retired': ''
      },
      '0x00209111': {
        'keyword': 'FrameContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Content Sequence',
        'retired': ''
      },
      '0x00209113': {
        'keyword': 'PlanePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plane Position Sequence',
        'retired': ''
      },
      '0x00209116': {
        'keyword': 'PlaneOrientationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plane Orientation Sequence',
        'retired': ''
      },
      '0x00209128': {
        'keyword': 'TemporalPositionIndex',
        'vr': 'UL',
        'vm': '1',
        'name': 'Temporal Position Index',
        'retired': ''
      },
      '0x00209153': {
        'keyword': 'NominalCardiacTriggerDelayTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Nominal Cardiac Trigger Delay Time',
        'retired': ''
      },
      '0x00209154': {
        'keyword': 'NominalCardiacTriggerTimePriorToRPeak',
        'vr': 'FL',
        'vm': '1',
        'name': 'Nominal Cardiac Trigger Time Prior To R-Peak',
        'retired': ''
      },
      '0x00209155': {
        'keyword': 'ActualCardiacTriggerTimePriorToRPeak',
        'vr': 'FL',
        'vm': '1',
        'name': 'Actual Cardiac Trigger Time Prior To R-Peak',
        'retired': ''
      },
      '0x00209156': {
        'keyword': 'FrameAcquisitionNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Frame Acquisition Number',
        'retired': ''
      },
      '0x00209157': {
        'keyword': 'DimensionIndexValues',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Dimension Index Values',
        'retired': ''
      },
      '0x00209158': {
        'keyword': 'FrameComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Frame Comments',
        'retired': ''
      },
      '0x00209161': {
        'keyword': 'ConcatenationUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Concatenation UID',
        'retired': ''
      },
      '0x00209162': {
        'keyword': 'InConcatenationNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'In-concatenation Number',
        'retired': ''
      },
      '0x00209163': {
        'keyword': 'InConcatenationTotalNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'In-concatenation Total Number',
        'retired': ''
      },
      '0x00209164': {
        'keyword': 'DimensionOrganizationUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Dimension Organization UID',
        'retired': ''
      },
      '0x00209165': {
        'keyword': 'DimensionIndexPointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Dimension Index Pointer',
        'retired': ''
      },
      '0x00209167': {
        'keyword': 'FunctionalGroupPointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Functional Group Pointer',
        'retired': ''
      },
      '0x00209170': {
        'keyword': 'UnassignedSharedConvertedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Unassigned Shared Converted Attributes Sequence',
        'retired': ''
      },
      '0x00209171': {
        'keyword': 'UnassignedPerFrameConvertedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Unassigned Per-Frame Converted Attributes Sequence',
        'retired': ''
      },
      '0x00209172': {
        'keyword': 'ConversionSourceAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conversion Source Attributes Sequence',
        'retired': ''
      },
      '0x00209213': {
        'keyword': 'DimensionIndexPrivateCreator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Dimension Index Private Creator',
        'retired': ''
      },
      '0x00209221': {
        'keyword': 'DimensionOrganizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dimension Organization Sequence',
        'retired': ''
      },
      '0x00209222': {
        'keyword': 'DimensionIndexSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dimension Index Sequence',
        'retired': ''
      },
      '0x00209228': {
        'keyword': 'ConcatenationFrameOffsetNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Concatenation Frame Offset Number',
        'retired': ''
      },
      '0x00209238': {
        'keyword': 'FunctionalGroupPrivateCreator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Functional Group Private Creator',
        'retired': ''
      },
      '0x00209241': {
        'keyword': 'NominalPercentageOfCardiacPhase',
        'vr': 'FL',
        'vm': '1',
        'name': 'Nominal Percentage of Cardiac Phase',
        'retired': ''
      },
      '0x00209245': {
        'keyword': 'NominalPercentageOfRespiratoryPhase',
        'vr': 'FL',
        'vm': '1',
        'name': 'Nominal Percentage of Respiratory Phase',
        'retired': ''
      },
      '0x00209246': {
        'keyword': 'StartingRespiratoryAmplitude',
        'vr': 'FL',
        'vm': '1',
        'name': 'Starting Respiratory Amplitude',
        'retired': ''
      },
      '0x00209247': {
        'keyword': 'StartingRespiratoryPhase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Starting Respiratory Phase',
        'retired': ''
      },
      '0x00209248': {
        'keyword': 'EndingRespiratoryAmplitude',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ending Respiratory Amplitude',
        'retired': ''
      },
      '0x00209249': {
        'keyword': 'EndingRespiratoryPhase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ending Respiratory Phase',
        'retired': ''
      },
      '0x00209250': {
        'keyword': 'RespiratoryTriggerType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Respiratory Trigger Type',
        'retired': ''
      },
      '0x00209251': {
        'keyword': 'RRIntervalTimeNominal',
        'vr': 'FD',
        'vm': '1',
        'name': 'R-R Interval Time Nominal',
        'retired': ''
      },
      '0x00209252': {
        'keyword': 'ActualCardiacTriggerDelayTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Actual Cardiac Trigger Delay Time',
        'retired': ''
      },
      '0x00209253': {
        'keyword': 'RespiratorySynchronizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Respiratory Synchronization Sequence',
        'retired': ''
      },
      '0x00209254': {
        'keyword': 'RespiratoryIntervalTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Respiratory Interval Time',
        'retired': ''
      },
      '0x00209255': {
        'keyword': 'NominalRespiratoryTriggerDelayTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Nominal Respiratory Trigger Delay Time',
        'retired': ''
      },
      '0x00209256': {
        'keyword': 'RespiratoryTriggerDelayThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'Respiratory Trigger Delay Threshold',
        'retired': ''
      },
      '0x00209257': {
        'keyword': 'ActualRespiratoryTriggerDelayTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Actual Respiratory Trigger Delay Time',
        'retired': ''
      },
      '0x00209301': {
        'keyword': 'ImagePositionVolume',
        'vr': 'FD',
        'vm': '3',
        'name': 'Image Position (Volume)',
        'retired': ''
      },
      '0x00209302': {
        'keyword': 'ImageOrientationVolume',
        'vr': 'FD',
        'vm': '6',
        'name': 'Image Orientation (Volume)',
        'retired': ''
      },
      '0x00209307': {
        'keyword': 'UltrasoundAcquisitionGeometry',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ultrasound Acquisition Geometry',
        'retired': ''
      },
      '0x00209308': {
        'keyword': 'ApexPosition',
        'vr': 'FD',
        'vm': '3',
        'name': 'Apex Position',
        'retired': ''
      },
      '0x00209309': {
        'keyword': 'VolumeToTransducerMappingMatrix',
        'vr': 'FD',
        'vm': '16',
        'name': 'Volume to Transducer Mapping Matrix',
        'retired': ''
      },
      '0x0020930A': {
        'keyword': 'VolumeToTableMappingMatrix',
        'vr': 'FD',
        'vm': '16',
        'name': 'Volume to Table Mapping Matrix',
        'retired': ''
      },
      '0x0020930B': {
        'keyword': 'VolumeToTransducerRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'Volume to Transducer Relationship',
        'retired': ''
      },
      '0x0020930C': {
        'keyword': 'PatientFrameOfReferenceSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Frame of Reference Source',
        'retired': ''
      },
      '0x0020930D': {
        'keyword': 'TemporalPositionTimeOffset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Temporal Position Time Offset',
        'retired': ''
      },
      '0x0020930E': {
        'keyword': 'PlanePositionVolumeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plane Position (Volume) Sequence',
        'retired': ''
      },
      '0x0020930F': {
        'keyword': 'PlaneOrientationVolumeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plane Orientation (Volume) Sequence',
        'retired': ''
      },
      '0x00209310': {
        'keyword': 'TemporalPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Temporal Position Sequence',
        'retired': ''
      },
      '0x00209311': {
        'keyword': 'DimensionOrganizationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dimension Organization Type',
        'retired': ''
      },
      '0x00209312': {
        'keyword': 'VolumeFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Volume Frame of Reference UID',
        'retired': ''
      },
      '0x00209313': {
        'keyword': 'TableFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Table Frame of Reference UID',
        'retired': ''
      },
      '0x00209421': {
        'keyword': 'DimensionDescriptionLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Dimension Description Label',
        'retired': ''
      },
      '0x00209450': {
        'keyword': 'PatientOrientationInFrameSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Orientation in Frame Sequence',
        'retired': ''
      },
      '0x00209453': {
        'keyword': 'FrameLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Frame Label',
        'retired': ''
      },
      '0x00209518': {
        'keyword': 'AcquisitionIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Acquisition Index',
        'retired': ''
      },
      '0x00209529': {
        'keyword': 'ContributingSOPInstancesReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contributing SOP Instances Reference Sequence',
        'retired': ''
      },
      '0x00209536': {
        'keyword': 'ReconstructionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Reconstruction Index',
        'retired': ''
      },
      '0x00220001': {
        'keyword': 'LightPathFilterPassThroughWavelength',
        'vr': 'US',
        'vm': '1',
        'name': 'Light Path Filter Pass-Through Wavelength',
        'retired': ''
      },
      '0x00220002': {
        'keyword': 'LightPathFilterPassBand',
        'vr': 'US',
        'vm': '2',
        'name': 'Light Path Filter Pass Band',
        'retired': ''
      },
      '0x00220003': {
        'keyword': 'ImagePathFilterPassThroughWavelength',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Path Filter Pass-Through Wavelength',
        'retired': ''
      },
      '0x00220004': {
        'keyword': 'ImagePathFilterPassBand',
        'vr': 'US',
        'vm': '2',
        'name': 'Image Path Filter Pass Band',
        'retired': ''
      },
      '0x00220005': {
        'keyword': 'PatientEyeMovementCommanded',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Eye Movement Commanded',
        'retired': ''
      },
      '0x00220006': {
        'keyword': 'PatientEyeMovementCommandCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Eye Movement Command Code Sequence',
        'retired': ''
      },
      '0x00220007': {
        'keyword': 'SphericalLensPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Spherical Lens Power',
        'retired': ''
      },
      '0x00220008': {
        'keyword': 'CylinderLensPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Cylinder Lens Power',
        'retired': ''
      },
      '0x00220009': {
        'keyword': 'CylinderAxis',
        'vr': 'FL',
        'vm': '1',
        'name': 'Cylinder Axis',
        'retired': ''
      },
      '0x0022000A': {
        'keyword': 'EmmetropicMagnification',
        'vr': 'FL',
        'vm': '1',
        'name': 'Emmetropic Magnification',
        'retired': ''
      },
      '0x0022000B': {
        'keyword': 'IntraOcularPressure',
        'vr': 'FL',
        'vm': '1',
        'name': 'Intra Ocular Pressure',
        'retired': ''
      },
      '0x0022000C': {
        'keyword': 'HorizontalFieldOfView',
        'vr': 'FL',
        'vm': '1',
        'name': 'Horizontal Field of View',
        'retired': ''
      },
      '0x0022000D': {
        'keyword': 'PupilDilated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pupil Dilated',
        'retired': ''
      },
      '0x0022000E': {
        'keyword': 'DegreeOfDilation',
        'vr': 'FL',
        'vm': '1',
        'name': 'Degree of Dilation',
        'retired': ''
      },
      '0x00220010': {
        'keyword': 'StereoBaselineAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stereo Baseline Angle',
        'retired': ''
      },
      '0x00220011': {
        'keyword': 'StereoBaselineDisplacement',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stereo Baseline Displacement',
        'retired': ''
      },
      '0x00220012': {
        'keyword': 'StereoHorizontalPixelOffset',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stereo Horizontal Pixel Offset',
        'retired': ''
      },
      '0x00220013': {
        'keyword': 'StereoVerticalPixelOffset',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stereo Vertical Pixel Offset',
        'retired': ''
      },
      '0x00220014': {
        'keyword': 'StereoRotation',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stereo Rotation',
        'retired': ''
      },
      '0x00220015': {
        'keyword': 'AcquisitionDeviceTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Device Type Code Sequence',
        'retired': ''
      },
      '0x00220016': {
        'keyword': 'IlluminationTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Illumination Type Code Sequence',
        'retired': ''
      },
      '0x00220017': {
        'keyword': 'LightPathFilterTypeStackCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Light Path Filter Type Stack Code Sequence',
        'retired': ''
      },
      '0x00220018': {
        'keyword': 'ImagePathFilterTypeStackCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Path Filter Type Stack Code Sequence',
        'retired': ''
      },
      '0x00220019': {
        'keyword': 'LensesCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lenses Code Sequence',
        'retired': ''
      },
      '0x0022001A': {
        'keyword': 'ChannelDescriptionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Description Code Sequence',
        'retired': ''
      },
      '0x0022001B': {
        'keyword': 'RefractiveStateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Refractive State Sequence',
        'retired': ''
      },
      '0x0022001C': {
        'keyword': 'MydriaticAgentCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mydriatic Agent Code Sequence',
        'retired': ''
      },
      '0x0022001D': {
        'keyword': 'RelativeImagePositionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Relative Image Position Code Sequence',
        'retired': ''
      },
      '0x0022001E': {
        'keyword': 'CameraAngleOfView',
        'vr': 'FL',
        'vm': '1',
        'name': 'Camera Angle of View',
        'retired': ''
      },
      '0x00220020': {
        'keyword': 'StereoPairsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Stereo Pairs Sequence',
        'retired': ''
      },
      '0x00220021': {
        'keyword': 'LeftImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Left Image Sequence',
        'retired': ''
      },
      '0x00220022': {
        'keyword': 'RightImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Right Image Sequence',
        'retired': ''
      },
      '0x00220028': {
        'keyword': 'StereoPairsPresent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Stereo Pairs Present',
        'retired': ''
      },
      '0x00220030': {
        'keyword': 'AxialLengthOfTheEye',
        'vr': 'FL',
        'vm': '1',
        'name': 'Axial Length of the Eye',
        'retired': ''
      },
      '0x00220031': {
        'keyword': 'OphthalmicFrameLocationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Frame Location Sequence',
        'retired': ''
      },
      '0x00220032': {
        'keyword': 'ReferenceCoordinates',
        'vr': 'FL',
        'vm': '2-2n',
        'name': 'Reference Coordinates',
        'retired': ''
      },
      '0x00220035': {
        'keyword': 'DepthSpatialResolution',
        'vr': 'FL',
        'vm': '1',
        'name': 'Depth Spatial Resolution',
        'retired': ''
      },
      '0x00220036': {
        'keyword': 'MaximumDepthDistortion',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Depth Distortion',
        'retired': ''
      },
      '0x00220037': {
        'keyword': 'AlongScanSpatialResolution',
        'vr': 'FL',
        'vm': '1',
        'name': 'Along-scan Spatial Resolution',
        'retired': ''
      },
      '0x00220038': {
        'keyword': 'MaximumAlongScanDistortion',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Along-scan Distortion',
        'retired': ''
      },
      '0x00220039': {
        'keyword': 'OphthalmicImageOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Image Orientation',
        'retired': ''
      },
      '0x00220041': {
        'keyword': 'DepthOfTransverseImage',
        'vr': 'FL',
        'vm': '1',
        'name': 'Depth of Transverse Image',
        'retired': ''
      },
      '0x00220042': {
        'keyword': 'MydriaticAgentConcentrationUnitsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mydriatic Agent Concentration Units Sequence',
        'retired': ''
      },
      '0x00220048': {
        'keyword': 'AcrossScanSpatialResolution',
        'vr': 'FL',
        'vm': '1',
        'name': 'Across-scan Spatial Resolution',
        'retired': ''
      },
      '0x00220049': {
        'keyword': 'MaximumAcrossScanDistortion',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Across-scan Distortion',
        'retired': ''
      },
      '0x0022004E': {
        'keyword': 'MydriaticAgentConcentration',
        'vr': 'DS',
        'vm': '1',
        'name': 'Mydriatic Agent Concentration',
        'retired': ''
      },
      '0x00220055': {
        'keyword': 'IlluminationWaveLength',
        'vr': 'FL',
        'vm': '1',
        'name': 'Illumination Wave Length',
        'retired': ''
      },
      '0x00220056': {
        'keyword': 'IlluminationPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Illumination Power',
        'retired': ''
      },
      '0x00220057': {
        'keyword': 'IlluminationBandwidth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Illumination Bandwidth',
        'retired': ''
      },
      '0x00220058': {
        'keyword': 'MydriaticAgentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mydriatic Agent Sequence',
        'retired': ''
      },
      '0x00221007': {
        'keyword': 'OphthalmicAxialMeasurementsRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Measurements Right Eye Sequence',
        'retired': ''
      },
      '0x00221008': {
        'keyword': 'OphthalmicAxialMeasurementsLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Measurements Left Eye Sequence',
        'retired': ''
      },
      '0x00221009': {
        'keyword': 'OphthalmicAxialMeasurementsDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Axial Measurements Device Type',
        'retired': ''
      },
      '0x00221010': {
        'keyword': 'OphthalmicAxialLengthMeasurementsType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Measurements Type',
        'retired': ''
      },
      '0x00221012': {
        'keyword': 'OphthalmicAxialLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Sequence',
        'retired': ''
      },
      '0x00221019': {
        'keyword': 'OphthalmicAxialLength',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic Axial Length',
        'retired': ''
      },
      '0x00221024': {
        'keyword': 'LensStatusCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lens Status Code Sequence',
        'retired': ''
      },
      '0x00221025': {
        'keyword': 'VitreousStatusCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Vitreous Status Code Sequence',
        'retired': ''
      },
      '0x00221028': {
        'keyword': 'IOLFormulaCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'IOL Formula Code Sequence',
        'retired': ''
      },
      '0x00221029': {
        'keyword': 'IOLFormulaDetail',
        'vr': 'LO',
        'vm': '1',
        'name': 'IOL Formula Detail',
        'retired': ''
      },
      '0x00221033': {
        'keyword': 'KeratometerIndex',
        'vr': 'FL',
        'vm': '1',
        'name': 'Keratometer Index',
        'retired': ''
      },
      '0x00221035': {
        'keyword': 'SourceOfOphthalmicAxialLengthCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Ophthalmic Axial Length Code Sequence',
        'retired': ''
      },
      '0x00221036': {
        'keyword': 'SourceOfCornealSizeDataCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Corneal Size Data Code Sequence',
        'retired': ''
      },
      '0x00221037': {
        'keyword': 'TargetRefraction',
        'vr': 'FL',
        'vm': '1',
        'name': 'Target Refraction',
        'retired': ''
      },
      '0x00221039': {
        'keyword': 'RefractiveProcedureOccurred',
        'vr': 'CS',
        'vm': '1',
        'name': 'Refractive Procedure Occurred',
        'retired': ''
      },
      '0x00221040': {
        'keyword': 'RefractiveSurgeryTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Refractive Surgery Type Code Sequence',
        'retired': ''
      },
      '0x00221044': {
        'keyword': 'OphthalmicUltrasoundMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Ultrasound Method Code Sequence',
        'retired': ''
      },
      '0x00221045': {
        'keyword': 'SurgicallyInducedAstigmatismSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surgically Induced Astigmatism Sequence',
        'retired': ''
      },
      '0x00221046': {
        'keyword': 'TypeOfOpticalCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Optical Correction',
        'retired': ''
      },
      '0x00221047': {
        'keyword': 'ToricIOLPowerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Toric IOL Power Sequence',
        'retired': ''
      },
      '0x00221048': {
        'keyword': 'PredictedToricErrorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Predicted Toric Error Sequence',
        'retired': ''
      },
      '0x00221049': {
        'keyword': 'PreSelectedForImplantation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pre-Selected for Implantation',
        'retired': ''
      },
      '0x0022104A': {
        'keyword': 'ToricIOLPowerForExactEmmetropiaSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Toric IOL Power for Exact Emmetropia Sequence',
        'retired': ''
      },
      '0x0022104B': {
        'keyword': 'ToricIOLPowerForExactTargetRefractionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Toric IOL Power for Exact Target Refraction Sequence',
        'retired': ''
      },
      '0x00221050': {
        'keyword': 'OphthalmicAxialLengthMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Measurements Sequence',
        'retired': ''
      },
      '0x00221053': {
        'keyword': 'IOLPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'IOL Power',
        'retired': ''
      },
      '0x00221054': {
        'keyword': 'PredictedRefractiveError',
        'vr': 'FL',
        'vm': '1',
        'name': 'Predicted Refractive Error',
        'retired': ''
      },
      '0x00221059': {
        'keyword': 'OphthalmicAxialLengthVelocity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Velocity',
        'retired': ''
      },
      '0x00221065': {
        'keyword': 'LensStatusDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Lens Status Description',
        'retired': ''
      },
      '0x00221066': {
        'keyword': 'VitreousStatusDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Vitreous Status Description',
        'retired': ''
      },
      '0x00221090': {
        'keyword': 'IOLPowerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'IOL Power Sequence',
        'retired': ''
      },
      '0x00221092': {
        'keyword': 'LensConstantSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lens Constant Sequence',
        'retired': ''
      },
      '0x00221093': {
        'keyword': 'IOLManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'IOL Manufacturer',
        'retired': ''
      },
      '0x00221094': {
        'keyword': 'LensConstantDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Lens Constant Description',
        'retired': 'Retired'
      },
      '0x00221095': {
        'keyword': 'ImplantName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Name',
        'retired': ''
      },
      '0x00221096': {
        'keyword': 'KeratometryMeasurementTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Keratometry Measurement Type Code Sequence',
        'retired': ''
      },
      '0x00221097': {
        'keyword': 'ImplantPartNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Part Number',
        'retired': ''
      },
      '0x00221100': {
        'keyword': 'ReferencedOphthalmicAxialMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Ophthalmic Axial Measurements Sequence',
        'retired': ''
      },
      '0x00221101': {
        'keyword': 'OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Ophthalmic Axial Length Measurements Segment Name Code Sequence',
        'retired': ''
      },
      '0x00221103': {
        'keyword': 'RefractiveErrorBeforeRefractiveSurgeryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Refractive Error Before Refractive Surgery Code Sequence',
        'retired': ''
      },
      '0x00221121': {
        'keyword': 'IOLPowerForExactEmmetropia',
        'vr': 'FL',
        'vm': '1',
        'name': 'IOL Power For Exact Emmetropia',
        'retired': ''
      },
      '0x00221122': {
        'keyword': 'IOLPowerForExactTargetRefraction',
        'vr': 'FL',
        'vm': '1',
        'name': 'IOL Power For Exact Target Refraction',
        'retired': ''
      },
      '0x00221125': {
        'keyword': 'AnteriorChamberDepthDefinitionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anterior Chamber Depth Definition Code Sequence',
        'retired': ''
      },
      '0x00221127': {
        'keyword': 'LensThicknessSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lens Thickness Sequence',
        'retired': ''
      },
      '0x00221128': {
        'keyword': 'AnteriorChamberDepthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anterior Chamber Depth Sequence',
        'retired': ''
      },
      '0x0022112A': {
        'keyword': 'CalculationCommentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Calculation Comment Sequence',
        'retired': ''
      },
      '0x0022112B': {
        'keyword': 'CalculationCommentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Calculation Comment Type',
        'retired': ''
      },
      '0x0022112C': {
        'keyword': 'CalculationComment',
        'vr': 'LT',
        'vm': '1',
        'name': 'Calculation Comment',
        'retired': ''
      },
      '0x00221130': {
        'keyword': 'LensThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Lens Thickness',
        'retired': ''
      },
      '0x00221131': {
        'keyword': 'AnteriorChamberDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Anterior Chamber Depth',
        'retired': ''
      },
      '0x00221132': {
        'keyword': 'SourceOfLensThicknessDataCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Lens Thickness Data Code Sequence',
        'retired': ''
      },
      '0x00221133': {
        'keyword': 'SourceOfAnteriorChamberDepthDataCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Anterior Chamber Depth Data Code Sequence',
        'retired': ''
      },
      '0x00221134': {
        'keyword': 'SourceOfRefractiveMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Refractive Measurements Sequence',
        'retired': ''
      },
      '0x00221135': {
        'keyword': 'SourceOfRefractiveMeasurementsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Refractive Measurements Code Sequence',
        'retired': ''
      },
      '0x00221140': {
        'keyword': 'OphthalmicAxialLengthMeasurementModified',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Measurement Modified',
        'retired': ''
      },
      '0x00221150': {
        'keyword': 'OphthalmicAxialLengthDataSourceCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Data Source Code Sequence',
        'retired': ''
      },
      '0x00221153': {
        'keyword': 'OphthalmicAxialLengthAcquisitionMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Acquisition Method Code Sequence',
        'retired': 'Retired'
      },
      '0x00221155': {
        'keyword': 'SignalToNoiseRatio',
        'vr': 'FL',
        'vm': '1',
        'name': 'Signal to Noise Ratio',
        'retired': ''
      },
      '0x00221159': {
        'keyword': 'OphthalmicAxialLengthDataSourceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Data Source Description',
        'retired': ''
      },
      '0x00221210': {
        'keyword': 'OphthalmicAxialLengthMeasurementsTotalLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Measurements Total Length Sequence',
        'retired': ''
      },
      '0x00221211': {
        'keyword': 'OphthalmicAxialLengthMeasurementsSegmentalLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Ophthalmic Axial Length Measurements Segmental Length Sequence',
        'retired': ''
      },
      '0x00221212': {
        'keyword': 'OphthalmicAxialLengthMeasurementsLengthSummationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Ophthalmic Axial Length Measurements Length Summation Sequence',
        'retired': ''
      },
      '0x00221220': {
        'keyword': 'UltrasoundOphthalmicAxialLengthMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ultrasound Ophthalmic Axial Length Measurements Sequence',
        'retired': ''
      },
      '0x00221225': {
        'keyword': 'OpticalOphthalmicAxialLengthMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Optical Ophthalmic Axial Length Measurements Sequence',
        'retired': ''
      },
      '0x00221230': {
        'keyword': 'UltrasoundSelectedOphthalmicAxialLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ultrasound Selected Ophthalmic Axial Length Sequence',
        'retired': ''
      },
      '0x00221250': {
        'keyword': 'OphthalmicAxialLengthSelectionMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Selection Method Code Sequence',
        'retired': ''
      },
      '0x00221255': {
        'keyword': 'OpticalSelectedOphthalmicAxialLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Optical Selected Ophthalmic Axial Length Sequence',
        'retired': ''
      },
      '0x00221257': {
        'keyword': 'SelectedSegmentalOphthalmicAxialLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Selected Segmental Ophthalmic Axial Length Sequence',
        'retired': ''
      },
      '0x00221260': {
        'keyword': 'SelectedTotalOphthalmicAxialLengthSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Selected Total Ophthalmic Axial Length Sequence',
        'retired': ''
      },
      '0x00221262': {
        'keyword': 'OphthalmicAxialLengthQualityMetricSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Quality Metric Sequence',
        'retired': ''
      },
      '0x00221265': {
        'keyword': 'OphthalmicAxialLengthQualityMetricTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Quality Metric Type Code Sequence',
        'retired': 'Retired'
      },
      '0x00221273': {
        'keyword': 'OphthalmicAxialLengthQualityMetricTypeDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Quality Metric Type Description',
        'retired': 'Retired'
      },
      '0x00221300': {
        'keyword': 'IntraocularLensCalculationsRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intraocular Lens Calculations Right Eye Sequence',
        'retired': ''
      },
      '0x00221310': {
        'keyword': 'IntraocularLensCalculationsLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intraocular Lens Calculations Left Eye Sequence',
        'retired': ''
      },
      '0x00221330': {
        'keyword': 'ReferencedOphthalmicAxialLengthMeasurementQCImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Referenced Ophthalmic Axial Length Measurement QC Image Sequence',
        'retired': ''
      },
      '0x00221415': {
        'keyword': 'OphthalmicMappingDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Mapping Device Type',
        'retired': ''
      },
      '0x00221420': {
        'keyword': 'AcquisitionMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Method Code Sequence',
        'retired': ''
      },
      '0x00221423': {
        'keyword': 'AcquisitionMethodAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Method Algorithm Sequence',
        'retired': ''
      },
      '0x00221436': {
        'keyword': 'OphthalmicThicknessMapTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Thickness Map Type Code Sequence',
        'retired': ''
      },
      '0x00221443': {
        'keyword': 'OphthalmicThicknessMappingNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Thickness Mapping Normals Sequence',
        'retired': ''
      },
      '0x00221445': {
        'keyword': 'RetinalThicknessDefinitionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Retinal Thickness Definition Code Sequence',
        'retired': ''
      },
      '0x00221450': {
        'keyword': 'PixelValueMappingToCodedConceptSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Value Mapping to Coded Concept Sequence',
        'retired': ''
      },
      '0x00221452': {
        'keyword': 'MappedPixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Mapped Pixel Value',
        'retired': ''
      },
      '0x00221454': {
        'keyword': 'PixelValueMappingExplanation',
        'vr': 'LO',
        'vm': '1',
        'name': 'Pixel Value Mapping Explanation',
        'retired': ''
      },
      '0x00221458': {
        'keyword': 'OphthalmicThicknessMapQualityThresholdSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Thickness Map Quality Threshold Sequence',
        'retired': ''
      },
      '0x00221460': {
        'keyword': 'OphthalmicThicknessMapThresholdQualityRating',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic Thickness Map Threshold Quality Rating',
        'retired': ''
      },
      '0x00221463': {
        'keyword': 'AnatomicStructureReferencePoint',
        'vr': 'FL',
        'vm': '2',
        'name': 'Anatomic Structure Reference Point',
        'retired': ''
      },
      '0x00221465': {
        'keyword': 'RegistrationToLocalizerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Registration to Localizer Sequence',
        'retired': ''
      },
      '0x00221466': {
        'keyword': 'RegisteredLocalizerUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Registered Localizer Units',
        'retired': ''
      },
      '0x00221467': {
        'keyword': 'RegisteredLocalizerTopLeftHandCorner',
        'vr': 'FL',
        'vm': '2',
        'name': 'Registered Localizer Top Left Hand Corner',
        'retired': ''
      },
      '0x00221468': {
        'keyword': 'RegisteredLocalizerBottomRightHandCorner',
        'vr': 'FL',
        'vm': '2',
        'name': 'Registered Localizer Bottom Right Hand Corner',
        'retired': ''
      },
      '0x00221470': {
        'keyword': 'OphthalmicThicknessMapQualityRatingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Thickness Map Quality Rating Sequence',
        'retired': ''
      },
      '0x00221472': {
        'keyword': 'RelevantOPTAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Relevant OPT Attributes Sequence',
        'retired': ''
      },
      '0x00221512': {
        'keyword': 'TransformationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transformation Method Code Sequence',
        'retired': ''
      },
      '0x00221513': {
        'keyword': 'TransformationAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Transformation Algorithm Sequence',
        'retired': ''
      },
      '0x00221515': {
        'keyword': 'OphthalmicAxialLengthMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Axial Length Method',
        'retired': ''
      },
      '0x00221517': {
        'keyword': 'OphthalmicFOV',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic FOV',
        'retired': ''
      },
      '0x00221518': {
        'keyword': 'TwoDimensionalToThreeDimensionalMapSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Two Dimensional to Three Dimensional Map Sequence',
        'retired': ''
      },
      '0x00221525': {
        'keyword': 'WideFieldOphthalmicPhotographyQualityRatingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Wide Field Ophthalmic Photography Quality Rating Sequence',
        'retired': ''
      },
      '0x00221526': {
        'keyword': 'WideFieldOphthalmicPhotographyQualityThresholdSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Wide Field Ophthalmic Photography Quality Threshold Sequence',
        'retired': ''
      },
      '0x00221527': {
        'keyword': 'WideFieldOphthalmicPhotographyThresholdQualityRating',
        'vr': 'FL',
        'vm': '1',
        'name': 'Wide Field Ophthalmic Photography Threshold Quality Rating',
        'retired': ''
      },
      '0x00221528': {
        'keyword': 'XCoordinatesCenterPixelViewAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'X Coordinates Center Pixel View Angle',
        'retired': ''
      },
      '0x00221529': {
        'keyword': 'YCoordinatesCenterPixelViewAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Y Coordinates Center Pixel View Angle',
        'retired': ''
      },
      '0x00221530': {
        'keyword': 'NumberOfMapPoints',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Map Points',
        'retired': ''
      },
      '0x00221531': {
        'keyword': 'TwoDimensionalToThreeDimensionalMapData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Two Dimensional to Three Dimensional Map Data',
        'retired': ''
      },
      '0x00221612': {
        'keyword': 'DerivationAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Algorithm Sequence',
        'retired': ''
      },
      '0x00221615': {
        'keyword': 'OphthalmicImageTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Image Type Code Sequence',
        'retired': ''
      },
      '0x00221616': {
        'keyword': 'OphthalmicImageTypeDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Ophthalmic Image Type Description',
        'retired': ''
      },
      '0x00221618': {
        'keyword': 'ScanPatternTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scan Pattern Type Code Sequence',
        'retired': ''
      },
      '0x00221620': {
        'keyword': 'ReferencedSurfaceMeshIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Surface Mesh Identification Sequence',
        'retired': ''
      },
      '0x00221622': {
        'keyword': 'OphthalmicVolumetricPropertiesFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ophthalmic Volumetric Properties Flag',
        'retired': ''
      },
      '0x00221624': {
        'keyword': 'OphthalmicAnatomicReferencePointXCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic Anatomic Reference Point X-Coordinate',
        'retired': ''
      },
      '0x00221626': {
        'keyword': 'OphthalmicAnatomicReferencePointYCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Ophthalmic Anatomic Reference Point Y-Coordinate',
        'retired': ''
      },
      '0x00221628': {
        'keyword': 'OphthalmicEnFaceImageQualityRatingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic En Face Image Quality Rating Sequence',
        'retired': ''
      },
      '0x00221630': {
        'keyword': 'QualityThreshold',
        'vr': 'DS',
        'vm': '1',
        'name': 'Quality Threshold',
        'retired': ''
      },
      '0x00221640': {
        'keyword': 'OCTBscanAnalysisAcquisitionParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'OCT B-scan Analysis Acquisition Parameters Sequence',
        'retired': ''
      },
      '0x00221642': {
        'keyword': 'NumberOfBscansPerFrame',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of B-scans Per Frame',
        'retired': ''
      },
      '0x00221643': {
        'keyword': 'BscanSlabThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'B-scan Slab Thickness',
        'retired': ''
      },
      '0x00221644': {
        'keyword': 'DistanceBetweenBscanSlabs',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distance Between B-scan Slabs',
        'retired': ''
      },
      '0x00221645': {
        'keyword': 'BscanCycleTime',
        'vr': 'FL',
        'vm': '1',
        'name': 'B-scan Cycle Time',
        'retired': ''
      },
      '0x00221646': {
        'keyword': 'BscanCycleTimeVector',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'B-scan Cycle Time Vector',
        'retired': ''
      },
      '0x00221649': {
        'keyword': 'AscanRate',
        'vr': 'FL',
        'vm': '1',
        'name': 'A-scan Rate',
        'retired': ''
      },
      '0x00221650': {
        'keyword': 'BscanRate',
        'vr': 'FL',
        'vm': '1',
        'name': 'B-scan Rate',
        'retired': ''
      },
      '0x00221658': {
        'keyword': 'SurfaceMeshZPixelOffset',
        'vr': 'UL',
        'vm': '1',
        'name': 'Surface Mesh Z-Pixel Offset',
        'retired': ''
      },
      '0x00240010': {
        'keyword': 'VisualFieldHorizontalExtent',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Horizontal Extent',
        'retired': ''
      },
      '0x00240011': {
        'keyword': 'VisualFieldVerticalExtent',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Vertical Extent',
        'retired': ''
      },
      '0x00240012': {
        'keyword': 'VisualFieldShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Visual Field Shape',
        'retired': ''
      },
      '0x00240016': {
        'keyword': 'ScreeningTestModeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Screening Test Mode Code Sequence',
        'retired': ''
      },
      '0x00240018': {
        'keyword': 'MaximumStimulusLuminance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Stimulus Luminance',
        'retired': ''
      },
      '0x00240020': {
        'keyword': 'BackgroundLuminance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Background Luminance',
        'retired': ''
      },
      '0x00240021': {
        'keyword': 'StimulusColorCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Stimulus Color Code Sequence',
        'retired': ''
      },
      '0x00240024': {
        'keyword': 'BackgroundIlluminationColorCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Background Illumination Color Code Sequence',
        'retired': ''
      },
      '0x00240025': {
        'keyword': 'StimulusArea',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stimulus Area',
        'retired': ''
      },
      '0x00240028': {
        'keyword': 'StimulusPresentationTime',
        'vr': 'FL',
        'vm': '1',
        'name': 'Stimulus Presentation Time',
        'retired': ''
      },
      '0x00240032': {
        'keyword': 'FixationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fixation Sequence',
        'retired': ''
      },
      '0x00240033': {
        'keyword': 'FixationMonitoringCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fixation Monitoring Code Sequence',
        'retired': ''
      },
      '0x00240034': {
        'keyword': 'VisualFieldCatchTrialSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Field Catch Trial Sequence',
        'retired': ''
      },
      '0x00240035': {
        'keyword': 'FixationCheckedQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'Fixation Checked Quantity',
        'retired': ''
      },
      '0x00240036': {
        'keyword': 'PatientNotProperlyFixatedQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'Patient Not Properly Fixated Quantity',
        'retired': ''
      },
      '0x00240037': {
        'keyword': 'PresentedVisualStimuliDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presented Visual Stimuli Data Flag',
        'retired': ''
      },
      '0x00240038': {
        'keyword': 'NumberOfVisualStimuli',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Visual Stimuli',
        'retired': ''
      },
      '0x00240039': {
        'keyword': 'ExcessiveFixationLossesDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive Fixation Losses Data Flag',
        'retired': ''
      },
      '0x00240040': {
        'keyword': 'ExcessiveFixationLosses',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive Fixation Losses',
        'retired': ''
      },
      '0x00240042': {
        'keyword': 'StimuliRetestingQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'Stimuli Retesting Quantity',
        'retired': ''
      },
      '0x00240044': {
        'keyword': 'CommentsOnPatientPerformanceOfVisualField',
        'vr': 'LT',
        'vm': '1',
        'name': 'Comments on Patient\'s Performance of Visual Field',
        'retired': ''
      },
      '0x00240045': {
        'keyword': 'FalseNegativesEstimateFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'False Negatives Estimate Flag',
        'retired': ''
      },
      '0x00240046': {
        'keyword': 'FalseNegativesEstimate',
        'vr': 'FL',
        'vm': '1',
        'name': 'False Negatives Estimate',
        'retired': ''
      },
      '0x00240048': {
        'keyword': 'NegativeCatchTrialsQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'Negative Catch Trials Quantity',
        'retired': ''
      },
      '0x00240050': {
        'keyword': 'FalseNegativesQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'False Negatives Quantity',
        'retired': ''
      },
      '0x00240051': {
        'keyword': 'ExcessiveFalseNegativesDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive False Negatives Data Flag',
        'retired': ''
      },
      '0x00240052': {
        'keyword': 'ExcessiveFalseNegatives',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive False Negatives',
        'retired': ''
      },
      '0x00240053': {
        'keyword': 'FalsePositivesEstimateFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'False Positives Estimate Flag',
        'retired': ''
      },
      '0x00240054': {
        'keyword': 'FalsePositivesEstimate',
        'vr': 'FL',
        'vm': '1',
        'name': 'False Positives Estimate',
        'retired': ''
      },
      '0x00240055': {
        'keyword': 'CatchTrialsDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Catch Trials Data Flag',
        'retired': ''
      },
      '0x00240056': {
        'keyword': 'PositiveCatchTrialsQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'Positive Catch Trials Quantity',
        'retired': ''
      },
      '0x00240057': {
        'keyword': 'TestPointNormalsDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Test Point Normals Data Flag',
        'retired': ''
      },
      '0x00240058': {
        'keyword': 'TestPointNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Test Point Normals Sequence',
        'retired': ''
      },
      '0x00240059': {
        'keyword': 'GlobalDeviationProbabilityNormalsFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Global Deviation Probability Normals Flag',
        'retired': ''
      },
      '0x00240060': {
        'keyword': 'FalsePositivesQuantity',
        'vr': 'US',
        'vm': '1',
        'name': 'False Positives Quantity',
        'retired': ''
      },
      '0x00240061': {
        'keyword': 'ExcessiveFalsePositivesDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive False Positives Data Flag',
        'retired': ''
      },
      '0x00240062': {
        'keyword': 'ExcessiveFalsePositives',
        'vr': 'CS',
        'vm': '1',
        'name': 'Excessive False Positives',
        'retired': ''
      },
      '0x00240063': {
        'keyword': 'VisualFieldTestNormalsFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Visual Field Test Normals Flag',
        'retired': ''
      },
      '0x00240064': {
        'keyword': 'ResultsNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Results Normals Sequence',
        'retired': ''
      },
      '0x00240065': {
        'keyword': 'AgeCorrectedSensitivityDeviationAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Age Corrected Sensitivity Deviation Algorithm Sequence',
        'retired': ''
      },
      '0x00240066': {
        'keyword': 'GlobalDeviationFromNormal',
        'vr': 'FL',
        'vm': '1',
        'name': 'Global Deviation From Normal',
        'retired': ''
      },
      '0x00240067': {
        'keyword': 'GeneralizedDefectSensitivityDeviationAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Generalized Defect Sensitivity Deviation Algorithm Sequence',
        'retired': ''
      },
      '0x00240068': {
        'keyword': 'LocalizedDeviationFromNormal',
        'vr': 'FL',
        'vm': '1',
        'name': 'Localized Deviation From Normal',
        'retired': ''
      },
      '0x00240069': {
        'keyword': 'PatientReliabilityIndicator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Reliability Indicator',
        'retired': ''
      },
      '0x00240070': {
        'keyword': 'VisualFieldMeanSensitivity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Mean Sensitivity',
        'retired': ''
      },
      '0x00240071': {
        'keyword': 'GlobalDeviationProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'Global Deviation Probability',
        'retired': ''
      },
      '0x00240072': {
        'keyword': 'LocalDeviationProbabilityNormalsFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Local Deviation Probability Normals Flag',
        'retired': ''
      },
      '0x00240073': {
        'keyword': 'LocalizedDeviationProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'Localized Deviation Probability',
        'retired': ''
      },
      '0x00240074': {
        'keyword': 'ShortTermFluctuationCalculated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Short Term Fluctuation Calculated',
        'retired': ''
      },
      '0x00240075': {
        'keyword': 'ShortTermFluctuation',
        'vr': 'FL',
        'vm': '1',
        'name': 'Short Term Fluctuation',
        'retired': ''
      },
      '0x00240076': {
        'keyword': 'ShortTermFluctuationProbabilityCalculated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Short Term Fluctuation Probability Calculated',
        'retired': ''
      },
      '0x00240077': {
        'keyword': 'ShortTermFluctuationProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'Short Term Fluctuation Probability',
        'retired': ''
      },
      '0x00240078': {
        'keyword': 'CorrectedLocalizedDeviationFromNormalCalculated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Corrected Localized Deviation From Normal Calculated',
        'retired': ''
      },
      '0x00240079': {
        'keyword': 'CorrectedLocalizedDeviationFromNormal',
        'vr': 'FL',
        'vm': '1',
        'name': 'Corrected Localized Deviation From Normal',
        'retired': ''
      },
      '0x00240080': {
        'keyword': 'CorrectedLocalizedDeviationFromNormalProbabilityCalculated',
        'vr': 'CS',
        'vm': '1',
        'name':
            'Corrected Localized Deviation From Normal Probability Calculated',
        'retired': ''
      },
      '0x00240081': {
        'keyword': 'CorrectedLocalizedDeviationFromNormalProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'Corrected Localized Deviation From Normal Probability',
        'retired': ''
      },
      '0x00240083': {
        'keyword': 'GlobalDeviationProbabilitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Global Deviation Probability Sequence',
        'retired': ''
      },
      '0x00240085': {
        'keyword': 'LocalizedDeviationProbabilitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Localized Deviation Probability Sequence',
        'retired': ''
      },
      '0x00240086': {
        'keyword': 'FovealSensitivityMeasured',
        'vr': 'CS',
        'vm': '1',
        'name': 'Foveal Sensitivity Measured',
        'retired': ''
      },
      '0x00240087': {
        'keyword': 'FovealSensitivity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Foveal Sensitivity',
        'retired': ''
      },
      '0x00240088': {
        'keyword': 'VisualFieldTestDuration',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Test Duration',
        'retired': ''
      },
      '0x00240089': {
        'keyword': 'VisualFieldTestPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Field Test Point Sequence',
        'retired': ''
      },
      '0x00240090': {
        'keyword': 'VisualFieldTestPointXCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Test Point X-Coordinate',
        'retired': ''
      },
      '0x00240091': {
        'keyword': 'VisualFieldTestPointYCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Visual Field Test Point Y-Coordinate',
        'retired': ''
      },
      '0x00240092': {
        'keyword': 'AgeCorrectedSensitivityDeviationValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Age Corrected Sensitivity Deviation Value',
        'retired': ''
      },
      '0x00240093': {
        'keyword': 'StimulusResults',
        'vr': 'CS',
        'vm': '1',
        'name': 'Stimulus Results',
        'retired': ''
      },
      '0x00240094': {
        'keyword': 'SensitivityValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Sensitivity Value',
        'retired': ''
      },
      '0x00240095': {
        'keyword': 'RetestStimulusSeen',
        'vr': 'CS',
        'vm': '1',
        'name': 'Retest Stimulus Seen',
        'retired': ''
      },
      '0x00240096': {
        'keyword': 'RetestSensitivityValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Retest Sensitivity Value',
        'retired': ''
      },
      '0x00240097': {
        'keyword': 'VisualFieldTestPointNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Field Test Point Normals Sequence',
        'retired': ''
      },
      '0x00240098': {
        'keyword': 'QuantifiedDefect',
        'vr': 'FL',
        'vm': '1',
        'name': 'Quantified Defect',
        'retired': ''
      },
      '0x00240100': {
        'keyword': 'AgeCorrectedSensitivityDeviationProbabilityValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Age Corrected Sensitivity Deviation Probability Value',
        'retired': ''
      },
      '0x00240102': {
        'keyword': 'GeneralizedDefectCorrectedSensitivityDeviationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Generalized Defect Corrected Sensitivity Deviation Flag',
        'retired': ''
      },
      '0x00240103': {
        'keyword': 'GeneralizedDefectCorrectedSensitivityDeviationValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Generalized Defect Corrected Sensitivity Deviation Value',
        'retired': ''
      },
      '0x00240104': {
        'keyword':
            'GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue',
        'vr': 'FL',
        'vm': '1',
        'name':
            'Generalized Defect Corrected Sensitivity Deviation Probability Value',
        'retired': ''
      },
      '0x00240105': {
        'keyword': 'MinimumSensitivityValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Minimum Sensitivity Value',
        'retired': ''
      },
      '0x00240106': {
        'keyword': 'BlindSpotLocalized',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blind Spot Localized',
        'retired': ''
      },
      '0x00240107': {
        'keyword': 'BlindSpotXCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Blind Spot X-Coordinate',
        'retired': ''
      },
      '0x00240108': {
        'keyword': 'BlindSpotYCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Blind Spot Y-Coordinate',
        'retired': ''
      },
      '0x00240110': {
        'keyword': 'VisualAcuityMeasurementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Acuity Measurement Sequence',
        'retired': ''
      },
      '0x00240112': {
        'keyword': 'RefractiveParametersUsedOnPatientSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Refractive Parameters Used on Patient Sequence',
        'retired': ''
      },
      '0x00240113': {
        'keyword': 'MeasurementLaterality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Measurement Laterality',
        'retired': ''
      },
      '0x00240114': {
        'keyword': 'OphthalmicPatientClinicalInformationLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Patient Clinical Information Left Eye Sequence',
        'retired': ''
      },
      '0x00240115': {
        'keyword': 'OphthalmicPatientClinicalInformationRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ophthalmic Patient Clinical Information Right Eye Sequence',
        'retired': ''
      },
      '0x00240117': {
        'keyword': 'FovealPointNormativeDataFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Foveal Point Normative Data Flag',
        'retired': ''
      },
      '0x00240118': {
        'keyword': 'FovealPointProbabilityValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Foveal Point Probability Value',
        'retired': ''
      },
      '0x00240120': {
        'keyword': 'ScreeningBaselineMeasured',
        'vr': 'CS',
        'vm': '1',
        'name': 'Screening Baseline Measured',
        'retired': ''
      },
      '0x00240122': {
        'keyword': 'ScreeningBaselineMeasuredSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Screening Baseline Measured Sequence',
        'retired': ''
      },
      '0x00240124': {
        'keyword': 'ScreeningBaselineType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Screening Baseline Type',
        'retired': ''
      },
      '0x00240126': {
        'keyword': 'ScreeningBaselineValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Screening Baseline Value',
        'retired': ''
      },
      '0x00240202': {
        'keyword': 'AlgorithmSource',
        'vr': 'LO',
        'vm': '1',
        'name': 'Algorithm Source',
        'retired': ''
      },
      '0x00240306': {
        'keyword': 'DataSetName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Set Name',
        'retired': ''
      },
      '0x00240307': {
        'keyword': 'DataSetVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Set Version',
        'retired': ''
      },
      '0x00240308': {
        'keyword': 'DataSetSource',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Set Source',
        'retired': ''
      },
      '0x00240309': {
        'keyword': 'DataSetDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Data Set Description',
        'retired': ''
      },
      '0x00240317': {
        'keyword': 'VisualFieldTestReliabilityGlobalIndexSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Field Test Reliability Global Index Sequence',
        'retired': ''
      },
      '0x00240320': {
        'keyword': 'VisualFieldGlobalResultsIndexSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Field Global Results Index Sequence',
        'retired': ''
      },
      '0x00240325': {
        'keyword': 'DataObservationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Data Observation Sequence',
        'retired': ''
      },
      '0x00240338': {
        'keyword': 'IndexNormalsFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Index Normals Flag',
        'retired': ''
      },
      '0x00240341': {
        'keyword': 'IndexProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'Index Probability',
        'retired': ''
      },
      '0x00240344': {
        'keyword': 'IndexProbabilitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Index Probability Sequence',
        'retired': ''
      },
      '0x00280002': {
        'keyword': 'SamplesPerPixel',
        'vr': 'US',
        'vm': '1',
        'name': 'Samples per Pixel',
        'retired': ''
      },
      '0x00280003': {
        'keyword': 'SamplesPerPixelUsed',
        'vr': 'US',
        'vm': '1',
        'name': 'Samples per Pixel Used',
        'retired': ''
      },
      '0x00280004': {
        'keyword': 'PhotometricInterpretation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Photometric Interpretation',
        'retired': ''
      },
      '0x00280005': {
        'keyword': 'ImageDimensions',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Dimensions',
        'retired': 'Retired'
      },
      '0x00280006': {
        'keyword': 'PlanarConfiguration',
        'vr': 'US',
        'vm': '1',
        'name': 'Planar Configuration',
        'retired': ''
      },
      '0x00280008': {
        'keyword': 'NumberOfFrames',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Frames',
        'retired': ''
      },
      '0x00280009': {
        'keyword': 'FrameIncrementPointer',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Frame Increment Pointer',
        'retired': ''
      },
      '0x0028000A': {
        'keyword': 'FrameDimensionPointer',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Frame Dimension Pointer',
        'retired': ''
      },
      '0x00280010': {
        'keyword': 'Rows',
        'vr': 'US',
        'vm': '1',
        'name': 'Rows',
        'retired': ''
      },
      '0x00280011': {
        'keyword': 'Columns',
        'vr': 'US',
        'vm': '1',
        'name': 'Columns',
        'retired': ''
      },
      '0x00280012': {
        'keyword': 'Planes',
        'vr': 'US',
        'vm': '1',
        'name': 'Planes',
        'retired': 'Retired'
      },
      '0x00280014': {
        'keyword': 'UltrasoundColorDataPresent',
        'vr': 'US',
        'vm': '1',
        'name': 'Ultrasound Color Data Present',
        'retired': ''
      },
      '0x00280020': {
        'keyword': '',
        'vr': 'OB',
        'vm': '1',
        'name': 'Retired-blank',
        'retired': 'Retired'
      },
      '0x00280030': {
        'keyword': 'PixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Pixel Spacing',
        'retired': ''
      },
      '0x00280031': {
        'keyword': 'ZoomFactor',
        'vr': 'DS',
        'vm': '2',
        'name': 'Zoom Factor',
        'retired': ''
      },
      '0x00280032': {
        'keyword': 'ZoomCenter',
        'vr': 'DS',
        'vm': '2',
        'name': 'Zoom Center',
        'retired': ''
      },
      '0x00280034': {
        'keyword': 'PixelAspectRatio',
        'vr': 'IS',
        'vm': '2',
        'name': 'Pixel Aspect Ratio',
        'retired': ''
      },
      '0x00280040': {
        'keyword': 'ImageFormat',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Format',
        'retired': 'Retired'
      },
      '0x00280050': {
        'keyword': 'ManipulatedImage',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Manipulated Image',
        'retired': 'Retired'
      },
      '0x00280051': {
        'keyword': 'CorrectedImage',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Corrected Image',
        'retired': ''
      },
      '0x0028005F': {
        'keyword': 'CompressionRecognitionCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Compression Recognition Code',
        'retired': 'Retired'
      },
      '0x00280060': {
        'keyword': 'CompressionCode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compression Code',
        'retired': 'Retired'
      },
      '0x00280061': {
        'keyword': 'CompressionOriginator',
        'vr': 'SH',
        'vm': '1',
        'name': 'Compression Originator',
        'retired': 'Retired'
      },
      '0x00280062': {
        'keyword': 'CompressionLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Compression Label',
        'retired': 'Retired'
      },
      '0x00280063': {
        'keyword': 'CompressionDescription',
        'vr': 'SH',
        'vm': '1',
        'name': 'Compression Description',
        'retired': 'Retired'
      },
      '0x00280065': {
        'keyword': 'CompressionSequence',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Compression Sequence',
        'retired': 'Retired'
      },
      '0x00280066': {
        'keyword': 'CompressionStepPointers',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Compression Step Pointers',
        'retired': 'Retired'
      },
      '0x00280068': {
        'keyword': 'RepeatInterval',
        'vr': 'US',
        'vm': '1',
        'name': 'Repeat Interval',
        'retired': 'Retired'
      },
      '0x00280069': {
        'keyword': 'BitsGrouped',
        'vr': 'US',
        'vm': '1',
        'name': 'Bits Grouped',
        'retired': 'Retired'
      },
      '0x00280070': {
        'keyword': 'PerimeterTable',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Perimeter Table',
        'retired': 'Retired'
      },
      '0x00280071': {
        'keyword': 'PerimeterValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Perimeter Value',
        'retired': 'Retired'
      },
      '0x00280080': {
        'keyword': 'PredictorRows',
        'vr': 'US',
        'vm': '1',
        'name': 'Predictor Rows',
        'retired': 'Retired'
      },
      '0x00280081': {
        'keyword': 'PredictorColumns',
        'vr': 'US',
        'vm': '1',
        'name': 'Predictor Columns',
        'retired': 'Retired'
      },
      '0x00280082': {
        'keyword': 'PredictorConstants',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Predictor Constants',
        'retired': 'Retired'
      },
      '0x00280090': {
        'keyword': 'BlockedPixels',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blocked Pixels',
        'retired': 'Retired'
      },
      '0x00280091': {
        'keyword': 'BlockRows',
        'vr': 'US',
        'vm': '1',
        'name': 'Block Rows',
        'retired': 'Retired'
      },
      '0x00280092': {
        'keyword': 'BlockColumns',
        'vr': 'US',
        'vm': '1',
        'name': 'Block Columns',
        'retired': 'Retired'
      },
      '0x00280093': {
        'keyword': 'RowOverlap',
        'vr': 'US',
        'vm': '1',
        'name': 'Row Overlap',
        'retired': 'Retired'
      },
      '0x00280094': {
        'keyword': 'ColumnOverlap',
        'vr': 'US',
        'vm': '1',
        'name': 'Column Overlap',
        'retired': 'Retired'
      },
      '0x00280100': {
        'keyword': 'BitsAllocated',
        'vr': 'US',
        'vm': '1',
        'name': 'Bits Allocated',
        'retired': ''
      },
      '0x00280101': {
        'keyword': 'BitsStored',
        'vr': 'US',
        'vm': '1',
        'name': 'Bits Stored',
        'retired': ''
      },
      '0x00280102': {
        'keyword': 'HighBit',
        'vr': 'US',
        'vm': '1',
        'name': 'High Bit',
        'retired': ''
      },
      '0x00280103': {
        'keyword': 'PixelRepresentation',
        'vr': 'US',
        'vm': '1',
        'name': 'Pixel Representation',
        'retired': ''
      },
      '0x00280104': {
        'keyword': 'SmallestValidPixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Smallest Valid Pixel Value',
        'retired': 'Retired'
      },
      '0x00280105': {
        'keyword': 'LargestValidPixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Largest Valid Pixel Value',
        'retired': 'Retired'
      },
      '0x00280106': {
        'keyword': 'SmallestImagePixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Smallest Image Pixel Value',
        'retired': ''
      },
      '0x00280107': {
        'keyword': 'LargestImagePixelValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Largest Image Pixel Value',
        'retired': ''
      },
      '0x00280108': {
        'keyword': 'SmallestPixelValueInSeries',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Smallest Pixel Value in Series',
        'retired': ''
      },
      '0x00280109': {
        'keyword': 'LargestPixelValueInSeries',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Largest Pixel Value in Series',
        'retired': ''
      },
      '0x00280110': {
        'keyword': 'SmallestImagePixelValueInPlane',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Smallest Image Pixel Value in Plane',
        'retired': 'Retired'
      },
      '0x00280111': {
        'keyword': 'LargestImagePixelValueInPlane',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Largest Image Pixel Value in Plane',
        'retired': 'Retired'
      },
      '0x00280120': {
        'keyword': 'PixelPaddingValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Pixel Padding Value',
        'retired': ''
      },
      '0x00280121': {
        'keyword': 'PixelPaddingRangeLimit',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Pixel Padding Range Limit',
        'retired': ''
      },
      '0x00280122': {
        'keyword': 'FloatPixelPaddingValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Float Pixel Padding Value',
        'retired': ''
      },
      '0x00280123': {
        'keyword': 'DoubleFloatPixelPaddingValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Double Float Pixel Padding Value',
        'retired': ''
      },
      '0x00280124': {
        'keyword': 'FloatPixelPaddingRangeLimit',
        'vr': 'FL',
        'vm': '1',
        'name': 'Float Pixel Padding Range Limit',
        'retired': ''
      },
      '0x00280125': {
        'keyword': 'DoubleFloatPixelPaddingRangeLimit',
        'vr': 'FD',
        'vm': '1',
        'name': 'Double Float Pixel Padding Range Limit',
        'retired': ''
      },
      '0x00280200': {
        'keyword': 'ImageLocation',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Location',
        'retired': 'Retired'
      },
      '0x00280300': {
        'keyword': 'QualityControlImage',
        'vr': 'CS',
        'vm': '1',
        'name': 'Quality Control Image',
        'retired': ''
      },
      '0x00280301': {
        'keyword': 'BurnedInAnnotation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Burned In Annotation',
        'retired': ''
      },
      '0x00280302': {
        'keyword': 'RecognizableVisualFeatures',
        'vr': 'CS',
        'vm': '1',
        'name': 'Recognizable Visual Features',
        'retired': ''
      },
      '0x00280303': {
        'keyword': 'LongitudinalTemporalInformationModified',
        'vr': 'CS',
        'vm': '1',
        'name': 'Longitudinal Temporal Information Modified',
        'retired': ''
      },
      '0x00280304': {
        'keyword': 'ReferencedColorPaletteInstanceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Color Palette Instance UID',
        'retired': ''
      },
      '0x00280400': {
        'keyword': 'TransformLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Transform Label',
        'retired': 'Retired'
      },
      '0x00280401': {
        'keyword': 'TransformVersionNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Transform Version Number',
        'retired': 'Retired'
      },
      '0x00280402': {
        'keyword': 'NumberOfTransformSteps',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Transform Steps',
        'retired': 'Retired'
      },
      '0x00280403': {
        'keyword': 'SequenceOfCompressedData',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Sequence of Compressed Data',
        'retired': 'Retired'
      },
      '0x00280404': {
        'keyword': 'DetailsOfCoefficients',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Details of Coefficients',
        'retired': 'Retired'
      },
      '0x00280700': {
        'keyword': 'DCTLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'DCT Label',
        'retired': 'Retired'
      },
      '0x00280701': {
        'keyword': 'DataBlockDescription',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Data Block Description',
        'retired': 'Retired'
      },
      '0x00280702': {
        'keyword': 'DataBlock',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Data Block',
        'retired': 'Retired'
      },
      '0x00280710': {
        'keyword': 'NormalizationFactorFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Normalization Factor Format',
        'retired': 'Retired'
      },
      '0x00280720': {
        'keyword': 'ZonalMapNumberFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Zonal Map Number Format',
        'retired': 'Retired'
      },
      '0x00280721': {
        'keyword': 'ZonalMapLocation',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Zonal Map Location',
        'retired': 'Retired'
      },
      '0x00280722': {
        'keyword': 'ZonalMapFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Zonal Map Format',
        'retired': 'Retired'
      },
      '0x00280730': {
        'keyword': 'AdaptiveMapFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Adaptive Map Format',
        'retired': 'Retired'
      },
      '0x00280740': {
        'keyword': 'CodeNumberFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Code Number Format',
        'retired': 'Retired'
      },
      '0x00280A02': {
        'keyword': 'PixelSpacingCalibrationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pixel Spacing Calibration Type',
        'retired': ''
      },
      '0x00280A04': {
        'keyword': 'PixelSpacingCalibrationDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Pixel Spacing Calibration Description',
        'retired': ''
      },
      '0x00281040': {
        'keyword': 'PixelIntensityRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pixel Intensity Relationship',
        'retired': ''
      },
      '0x00281041': {
        'keyword': 'PixelIntensityRelationshipSign',
        'vr': 'SS',
        'vm': '1',
        'name': 'Pixel Intensity Relationship Sign',
        'retired': ''
      },
      '0x00281050': {
        'keyword': 'WindowCenter',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Window Center',
        'retired': ''
      },
      '0x00281051': {
        'keyword': 'WindowWidth',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Window Width',
        'retired': ''
      },
      '0x00281052': {
        'keyword': 'RescaleIntercept',
        'vr': 'DS',
        'vm': '1',
        'name': 'Rescale Intercept',
        'retired': ''
      },
      '0x00281053': {
        'keyword': 'RescaleSlope',
        'vr': 'DS',
        'vm': '1',
        'name': 'Rescale Slope',
        'retired': ''
      },
      '0x00281054': {
        'keyword': 'RescaleType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Rescale Type',
        'retired': ''
      },
      '0x00281055': {
        'keyword': 'WindowCenterWidthExplanation',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Window Center & Width Explanation',
        'retired': ''
      },
      '0x00281056': {
        'keyword': 'VOILUTFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'VOI LUT Function',
        'retired': ''
      },
      '0x00281080': {
        'keyword': 'GrayScale',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gray Scale',
        'retired': 'Retired'
      },
      '0x00281090': {
        'keyword': 'RecommendedViewingMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Recommended Viewing Mode',
        'retired': ''
      },
      '0x00281100': {
        'keyword': 'GrayLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '3',
        'name': 'Gray Lookup Table Descriptor',
        'retired': 'Retired'
      },
      '0x00281101': {
        'keyword': 'RedPaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '3',
        'name': 'Red Palette Color Lookup Table Descriptor',
        'retired': ''
      },
      '0x00281102': {
        'keyword': 'GreenPaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '3',
        'name': 'Green Palette Color Lookup Table Descriptor',
        'retired': ''
      },
      '0x00281103': {
        'keyword': 'BluePaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '3',
        'name': 'Blue Palette Color Lookup Table Descriptor',
        'retired': ''
      },
      '0x00281104': {
        'keyword': 'AlphaPaletteColorLookupTableDescriptor',
        'vr': 'US',
        'vm': '3',
        'name': 'Alpha Palette Color Lookup Table Descriptor',
        'retired': ''
      },
      '0x00281111': {
        'keyword': 'LargeRedPaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '4',
        'name': 'Large Red Palette Color Lookup Table Descriptor',
        'retired': 'Retired'
      },
      '0x00281112': {
        'keyword': 'LargeGreenPaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '4',
        'name': 'Large Green Palette Color Lookup Table Descriptor',
        'retired': 'Retired'
      },
      '0x00281113': {
        'keyword': 'LargeBluePaletteColorLookupTableDescriptor',
        'vr': 'US or SS',
        'vm': '4',
        'name': 'Large Blue Palette Color Lookup Table Descriptor',
        'retired': 'Retired'
      },
      '0x00281199': {
        'keyword': 'PaletteColorLookupTableUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Palette Color Lookup Table UID',
        'retired': ''
      },
      '0x00281200': {
        'keyword': 'GrayLookupTableData',
        'vr': 'US or SS or OW',
        'vm': '1-n or 1',
        'name': 'Gray Lookup Table Data',
        'retired': 'Retired'
      },
      '0x00281201': {
        'keyword': 'RedPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Red Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281202': {
        'keyword': 'GreenPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Green Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281203': {
        'keyword': 'BluePaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Blue Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281204': {
        'keyword': 'AlphaPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Alpha Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281211': {
        'keyword': 'LargeRedPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Large Red Palette Color Lookup Table Data',
        'retired': 'Retired'
      },
      '0x00281212': {
        'keyword': 'LargeGreenPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Large Green Palette Color Lookup Table Data',
        'retired': 'Retired'
      },
      '0x00281213': {
        'keyword': 'LargeBluePaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Large Blue Palette Color Lookup Table Data',
        'retired': 'Retired'
      },
      '0x00281214': {
        'keyword': 'LargePaletteColorLookupTableUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Large Palette Color Lookup Table UID',
        'retired': 'Retired'
      },
      '0x00281221': {
        'keyword': 'SegmentedRedPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Segmented Red Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281222': {
        'keyword': 'SegmentedGreenPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Segmented Green Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281223': {
        'keyword': 'SegmentedBluePaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Segmented Blue Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281224': {
        'keyword': 'SegmentedAlphaPaletteColorLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Segmented Alpha Palette Color Lookup Table Data',
        'retired': ''
      },
      '0x00281230': {
        'keyword': 'StoredValueColorRangeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Stored Value Color Range Sequence',
        'retired': ''
      },
      '0x00281231': {
        'keyword': 'MinimumStoredValueMapped',
        'vr': 'FD',
        'vm': '1',
        'name': 'Minimum Stored Value Mapped',
        'retired': ''
      },
      '0x00281232': {
        'keyword': 'MaximumStoredValueMapped',
        'vr': 'FD',
        'vm': '1',
        'name': 'Maximum Stored Value Mapped',
        'retired': ''
      },
      '0x00281300': {
        'keyword': 'BreastImplantPresent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Breast Implant Present',
        'retired': ''
      },
      '0x00281350': {
        'keyword': 'PartialView',
        'vr': 'CS',
        'vm': '1',
        'name': 'Partial View',
        'retired': ''
      },
      '0x00281351': {
        'keyword': 'PartialViewDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Partial View Description',
        'retired': ''
      },
      '0x00281352': {
        'keyword': 'PartialViewCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Partial View Code Sequence',
        'retired': ''
      },
      '0x0028135A': {
        'keyword': 'SpatialLocationsPreserved',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spatial Locations Preserved',
        'retired': ''
      },
      '0x00281401': {
        'keyword': 'DataFrameAssignmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Data Frame Assignment Sequence',
        'retired': ''
      },
      '0x00281402': {
        'keyword': 'DataPathAssignment',
        'vr': 'CS',
        'vm': '1',
        'name': 'Data Path Assignment',
        'retired': ''
      },
      '0x00281403': {
        'keyword': 'BitsMappedToColorLookupTable',
        'vr': 'US',
        'vm': '1',
        'name': 'Bits Mapped to Color Lookup Table',
        'retired': ''
      },
      '0x00281404': {
        'keyword': 'BlendingLUT1Sequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Blending LUT 1 Sequence',
        'retired': ''
      },
      '0x00281405': {
        'keyword': 'BlendingLUT1TransferFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blending LUT 1 Transfer Function',
        'retired': ''
      },
      '0x00281406': {
        'keyword': 'BlendingWeightConstant',
        'vr': 'FD',
        'vm': '1',
        'name': 'Blending Weight Constant',
        'retired': ''
      },
      '0x00281407': {
        'keyword': 'BlendingLookupTableDescriptor',
        'vr': 'US',
        'vm': '3',
        'name': 'Blending Lookup Table Descriptor',
        'retired': ''
      },
      '0x00281408': {
        'keyword': 'BlendingLookupTableData',
        'vr': 'OW',
        'vm': '1',
        'name': 'Blending Lookup Table Data',
        'retired': ''
      },
      '0x0028140B': {
        'keyword': 'EnhancedPaletteColorLookupTableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Enhanced Palette Color Lookup Table Sequence',
        'retired': ''
      },
      '0x0028140C': {
        'keyword': 'BlendingLUT2Sequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Blending LUT 2 Sequence',
        'retired': ''
      },
      '0x0028140D': {
        'keyword': 'BlendingLUT2TransferFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blending LUT 2 Transfer Function',
        'retired': ''
      },
      '0x0028140E': {
        'keyword': 'DataPathID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Data Path ID',
        'retired': ''
      },
      '0x0028140F': {
        'keyword': 'RGBLUTTransferFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'RGB LUT Transfer Function',
        'retired': ''
      },
      '0x00281410': {
        'keyword': 'AlphaLUTTransferFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'Alpha LUT Transfer Function',
        'retired': ''
      },
      '0x00282000': {
        'keyword': 'ICCProfile',
        'vr': 'OB',
        'vm': '1',
        'name': 'ICC Profile',
        'retired': ''
      },
      '0x00282002': {
        'keyword': 'ColorSpace',
        'vr': 'CS',
        'vm': '1',
        'name': 'Color Space',
        'retired': ''
      },
      '0x00282110': {
        'keyword': 'LossyImageCompression',
        'vr': 'CS',
        'vm': '1',
        'name': 'Lossy Image Compression',
        'retired': ''
      },
      '0x00282112': {
        'keyword': 'LossyImageCompressionRatio',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Lossy Image Compression Ratio',
        'retired': ''
      },
      '0x00282114': {
        'keyword': 'LossyImageCompressionMethod',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Lossy Image Compression Method',
        'retired': ''
      },
      '0x00283000': {
        'keyword': 'ModalityLUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Modality LUT Sequence',
        'retired': ''
      },
      '0x00283001': {
        'keyword': 'VariableModalityLUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Variable Modality LUT Sequence',
        'retired': ''
      },
      '0x00283002': {
        'keyword': 'LUTDescriptor',
        'vr': 'US or SS',
        'vm': '3',
        'name': 'LUT Descriptor',
        'retired': ''
      },
      '0x00283003': {
        'keyword': 'LUTExplanation',
        'vr': 'LO',
        'vm': '1',
        'name': 'LUT Explanation',
        'retired': ''
      },
      '0x00283004': {
        'keyword': 'ModalityLUTType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Modality LUT Type',
        'retired': ''
      },
      '0x00283006': {
        'keyword': 'LUTData',
        'vr': 'US or OW',
        'vm': '1-n or 1',
        'name': 'LUT Data',
        'retired': ''
      },
      '0x00283010': {
        'keyword': 'VOILUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'VOI LUT Sequence',
        'retired': ''
      },
      '0x00283110': {
        'keyword': 'SoftcopyVOILUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Softcopy VOI LUT Sequence',
        'retired': ''
      },
      '0x00284000': {
        'keyword': 'ImagePresentationComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Image Presentation Comments',
        'retired': 'Retired'
      },
      '0x00285000': {
        'keyword': 'BiPlaneAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Bi-Plane Acquisition Sequence',
        'retired': 'Retired'
      },
      '0x00286010': {
        'keyword': 'RepresentativeFrameNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Representative Frame Number',
        'retired': ''
      },
      '0x00286020': {
        'keyword': 'FrameNumbersOfInterest',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Frame Numbers of Interest (FOI)',
        'retired': ''
      },
      '0x00286022': {
        'keyword': 'FrameOfInterestDescription',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Frame of Interest Description',
        'retired': ''
      },
      '0x00286023': {
        'keyword': 'FrameOfInterestType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Frame of Interest Type',
        'retired': ''
      },
      '0x00286030': {
        'keyword': 'MaskPointers',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Mask Pointer(s)',
        'retired': 'Retired'
      },
      '0x00286040': {
        'keyword': 'RWavePointer',
        'vr': 'US',
        'vm': '1-n',
        'name': 'R Wave Pointer',
        'retired': ''
      },
      '0x00286100': {
        'keyword': 'MaskSubtractionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mask Subtraction Sequence',
        'retired': ''
      },
      '0x00286101': {
        'keyword': 'MaskOperation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Mask Operation',
        'retired': ''
      },
      '0x00286102': {
        'keyword': 'ApplicableFrameRange',
        'vr': 'US',
        'vm': '2-2n',
        'name': 'Applicable Frame Range',
        'retired': ''
      },
      '0x00286110': {
        'keyword': 'MaskFrameNumbers',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Mask Frame Numbers',
        'retired': ''
      },
      '0x00286112': {
        'keyword': 'ContrastFrameAveraging',
        'vr': 'US',
        'vm': '1',
        'name': 'Contrast Frame Averaging',
        'retired': ''
      },
      '0x00286114': {
        'keyword': 'MaskSubPixelShift',
        'vr': 'FL',
        'vm': '2',
        'name': 'Mask Sub-pixel Shift',
        'retired': ''
      },
      '0x00286120': {
        'keyword': 'TIDOffset',
        'vr': 'SS',
        'vm': '1',
        'name': 'TID Offset',
        'retired': ''
      },
      '0x00286190': {
        'keyword': 'MaskOperationExplanation',
        'vr': 'ST',
        'vm': '1',
        'name': 'Mask Operation Explanation',
        'retired': ''
      },
      '0x00287000': {
        'keyword': 'EquipmentAdministratorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equipment Administrator Sequence',
        'retired': ''
      },
      '0x00287001': {
        'keyword': 'NumberOfDisplaySubsystems',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Display Subsystems',
        'retired': ''
      },
      '0x00287002': {
        'keyword': 'CurrentConfigurationID',
        'vr': 'US',
        'vm': '1',
        'name': 'Current Configuration ID',
        'retired': ''
      },
      '0x00287003': {
        'keyword': 'DisplaySubsystemID',
        'vr': 'US',
        'vm': '1',
        'name': 'Display Subsystem ID',
        'retired': ''
      },
      '0x00287004': {
        'keyword': 'DisplaySubsystemName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Display Subsystem Name',
        'retired': ''
      },
      '0x00287005': {
        'keyword': 'DisplaySubsystemDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Display Subsystem Description',
        'retired': ''
      },
      '0x00287006': {
        'keyword': 'SystemStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'System Status',
        'retired': ''
      },
      '0x00287007': {
        'keyword': 'SystemStatusComment',
        'vr': 'LO',
        'vm': '1',
        'name': 'System Status Comment',
        'retired': ''
      },
      '0x00287008': {
        'keyword': 'TargetLuminanceCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Target Luminance Characteristics Sequence',
        'retired': ''
      },
      '0x00287009': {
        'keyword': 'LuminanceCharacteristicsID',
        'vr': 'US',
        'vm': '1',
        'name': 'Luminance Characteristics ID',
        'retired': ''
      },
      '0x0028700A': {
        'keyword': 'DisplaySubsystemConfigurationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Subsystem Configuration Sequence',
        'retired': ''
      },
      '0x0028700B': {
        'keyword': 'ConfigurationID',
        'vr': 'US',
        'vm': '1',
        'name': 'Configuration ID',
        'retired': ''
      },
      '0x0028700C': {
        'keyword': 'ConfigurationName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Configuration Name',
        'retired': ''
      },
      '0x0028700D': {
        'keyword': 'ConfigurationDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Configuration Description',
        'retired': ''
      },
      '0x0028700E': {
        'keyword': 'ReferencedTargetLuminanceCharacteristicsID',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Target Luminance Characteristics ID',
        'retired': ''
      },
      '0x0028700F': {
        'keyword': 'QAResultsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'QA Results Sequence',
        'retired': ''
      },
      '0x00287010': {
        'keyword': 'DisplaySubsystemQAResultsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Subsystem QA Results Sequence',
        'retired': ''
      },
      '0x00287011': {
        'keyword': 'ConfigurationQAResultsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Configuration QA Results Sequence',
        'retired': ''
      },
      '0x00287012': {
        'keyword': 'MeasurementEquipmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measurement Equipment Sequence',
        'retired': ''
      },
      '0x00287013': {
        'keyword': 'MeasurementFunctions',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Measurement Functions',
        'retired': ''
      },
      '0x00287014': {
        'keyword': 'MeasurementEquipmentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Measurement Equipment Type',
        'retired': ''
      },
      '0x00287015': {
        'keyword': 'VisualEvaluationResultSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Evaluation Result Sequence',
        'retired': ''
      },
      '0x00287016': {
        'keyword': 'DisplayCalibrationResultSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Calibration Result Sequence',
        'retired': ''
      },
      '0x00287017': {
        'keyword': 'DDLValue',
        'vr': 'US',
        'vm': '1',
        'name': 'DDL Value',
        'retired': ''
      },
      '0x00287018': {
        'keyword': 'CIExyWhitePoint',
        'vr': 'FL',
        'vm': '2',
        'name': 'CIExy White Point',
        'retired': ''
      },
      '0x00287019': {
        'keyword': 'DisplayFunctionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Display Function Type',
        'retired': ''
      },
      '0x0028701A': {
        'keyword': 'GammaValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Gamma Value',
        'retired': ''
      },
      '0x0028701B': {
        'keyword': 'NumberOfLuminancePoints',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Luminance Points',
        'retired': ''
      },
      '0x0028701C': {
        'keyword': 'LuminanceResponseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Luminance Response Sequence',
        'retired': ''
      },
      '0x0028701D': {
        'keyword': 'TargetMinimumLuminance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Target Minimum Luminance',
        'retired': ''
      },
      '0x0028701E': {
        'keyword': 'TargetMaximumLuminance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Target Maximum Luminance',
        'retired': ''
      },
      '0x0028701F': {
        'keyword': 'LuminanceValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Luminance Value',
        'retired': ''
      },
      '0x00287020': {
        'keyword': 'LuminanceResponseDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Luminance Response Description',
        'retired': ''
      },
      '0x00287021': {
        'keyword': 'WhitePointFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'White Point Flag',
        'retired': ''
      },
      '0x00287022': {
        'keyword': 'DisplayDeviceTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Device Type Code Sequence',
        'retired': ''
      },
      '0x00287023': {
        'keyword': 'DisplaySubsystemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Subsystem Sequence',
        'retired': ''
      },
      '0x00287024': {
        'keyword': 'LuminanceResultSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Luminance Result Sequence',
        'retired': ''
      },
      '0x00287025': {
        'keyword': 'AmbientLightValueSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Ambient Light Value Source',
        'retired': ''
      },
      '0x00287026': {
        'keyword': 'MeasuredCharacteristics',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Measured Characteristics',
        'retired': ''
      },
      '0x00287027': {
        'keyword': 'LuminanceUniformityResultSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Luminance Uniformity Result Sequence',
        'retired': ''
      },
      '0x00287028': {
        'keyword': 'VisualEvaluationTestSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Evaluation Test Sequence',
        'retired': ''
      },
      '0x00287029': {
        'keyword': 'TestResult',
        'vr': 'CS',
        'vm': '1',
        'name': 'Test Result',
        'retired': ''
      },
      '0x0028702A': {
        'keyword': 'TestResultComment',
        'vr': 'LO',
        'vm': '1',
        'name': 'Test Result Comment',
        'retired': ''
      },
      '0x0028702B': {
        'keyword': 'TestImageValidation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Test Image Validation',
        'retired': ''
      },
      '0x0028702C': {
        'keyword': 'TestPatternCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Test Pattern Code Sequence',
        'retired': ''
      },
      '0x0028702D': {
        'keyword': 'MeasurementPatternCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measurement Pattern Code Sequence',
        'retired': ''
      },
      '0x0028702E': {
        'keyword': 'VisualEvaluationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Evaluation Method Code Sequence',
        'retired': ''
      },
      '0x00287FE0': {
        'keyword': 'PixelDataProviderURL',
        'vr': 'UR',
        'vm': '1',
        'name': 'Pixel Data Provider URL',
        'retired': ''
      },
      '0x00289001': {
        'keyword': 'DataPointRows',
        'vr': 'UL',
        'vm': '1',
        'name': 'Data Point Rows',
        'retired': ''
      },
      '0x00289002': {
        'keyword': 'DataPointColumns',
        'vr': 'UL',
        'vm': '1',
        'name': 'Data Point Columns',
        'retired': ''
      },
      '0x00289003': {
        'keyword': 'SignalDomainColumns',
        'vr': 'CS',
        'vm': '1',
        'name': 'Signal Domain Columns',
        'retired': ''
      },
      '0x00289099': {
        'keyword': 'LargestMonochromePixelValue',
        'vr': 'US',
        'vm': '1',
        'name': 'Largest Monochrome Pixel Value',
        'retired': 'Retired'
      },
      '0x00289108': {
        'keyword': 'DataRepresentation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Data Representation',
        'retired': ''
      },
      '0x00289110': {
        'keyword': 'PixelMeasuresSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Measures Sequence',
        'retired': ''
      },
      '0x00289132': {
        'keyword': 'FrameVOILUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame VOI LUT Sequence',
        'retired': ''
      },
      '0x00289145': {
        'keyword': 'PixelValueTransformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Value Transformation Sequence',
        'retired': ''
      },
      '0x00289235': {
        'keyword': 'SignalDomainRows',
        'vr': 'CS',
        'vm': '1',
        'name': 'Signal Domain Rows',
        'retired': ''
      },
      '0x00289411': {
        'keyword': 'DisplayFilterPercentage',
        'vr': 'FL',
        'vm': '1',
        'name': 'Display Filter Percentage',
        'retired': ''
      },
      '0x00289415': {
        'keyword': 'FramePixelShiftSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Pixel Shift Sequence',
        'retired': ''
      },
      '0x00289416': {
        'keyword': 'SubtractionItemID',
        'vr': 'US',
        'vm': '1',
        'name': 'Subtraction Item ID',
        'retired': ''
      },
      '0x00289422': {
        'keyword': 'PixelIntensityRelationshipLUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Intensity Relationship LUT Sequence',
        'retired': ''
      },
      '0x00289443': {
        'keyword': 'FramePixelDataPropertiesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Pixel Data Properties Sequence',
        'retired': ''
      },
      '0x00289444': {
        'keyword': 'GeometricalProperties',
        'vr': 'CS',
        'vm': '1',
        'name': 'Geometrical Properties',
        'retired': ''
      },
      '0x00289445': {
        'keyword': 'GeometricMaximumDistortion',
        'vr': 'FL',
        'vm': '1',
        'name': 'Geometric Maximum Distortion',
        'retired': ''
      },
      '0x00289446': {
        'keyword': 'ImageProcessingApplied',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Image Processing Applied',
        'retired': ''
      },
      '0x00289454': {
        'keyword': 'MaskSelectionMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Mask Selection Mode',
        'retired': ''
      },
      '0x00289474': {
        'keyword': 'LUTFunction',
        'vr': 'CS',
        'vm': '1',
        'name': 'LUT Function',
        'retired': ''
      },
      '0x00289478': {
        'keyword': 'MaskVisibilityPercentage',
        'vr': 'FL',
        'vm': '1',
        'name': 'Mask Visibility Percentage',
        'retired': ''
      },
      '0x00289501': {
        'keyword': 'PixelShiftSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Shift Sequence',
        'retired': ''
      },
      '0x00289502': {
        'keyword': 'RegionPixelShiftSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Region Pixel Shift Sequence',
        'retired': ''
      },
      '0x00289503': {
        'keyword': 'VerticesOfTheRegion',
        'vr': 'SS',
        'vm': '2-2n',
        'name': 'Vertices of the Region',
        'retired': ''
      },
      '0x00289505': {
        'keyword': 'MultiFramePresentationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multi-frame Presentation Sequence',
        'retired': ''
      },
      '0x00289506': {
        'keyword': 'PixelShiftFrameRange',
        'vr': 'US',
        'vm': '2-2n',
        'name': 'Pixel Shift Frame Range',
        'retired': ''
      },
      '0x00289507': {
        'keyword': 'LUTFrameRange',
        'vr': 'US',
        'vm': '2-2n',
        'name': 'LUT Frame Range',
        'retired': ''
      },
      '0x00289520': {
        'keyword': 'ImageToEquipmentMappingMatrix',
        'vr': 'DS',
        'vm': '16',
        'name': 'Image to Equipment Mapping Matrix',
        'retired': ''
      },
      '0x00289537': {
        'keyword': 'EquipmentCoordinateSystemIdentification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Equipment Coordinate System Identification',
        'retired': ''
      },
      '0x0032000A': {
        'keyword': 'StudyStatusID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Study Status ID',
        'retired': 'Retired'
      },
      '0x0032000C': {
        'keyword': 'StudyPriorityID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Study Priority ID',
        'retired': 'Retired'
      },
      '0x00320012': {
        'keyword': 'StudyIDIssuer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Study ID Issuer',
        'retired': 'Retired'
      },
      '0x00320032': {
        'keyword': 'StudyVerifiedDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Study Verified Date',
        'retired': 'Retired'
      },
      '0x00320033': {
        'keyword': 'StudyVerifiedTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Study Verified Time',
        'retired': 'Retired'
      },
      '0x00320034': {
        'keyword': 'StudyReadDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Study Read Date',
        'retired': 'Retired'
      },
      '0x00320035': {
        'keyword': 'StudyReadTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Study Read Time',
        'retired': 'Retired'
      },
      '0x00321000': {
        'keyword': 'ScheduledStudyStartDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Study Start Date',
        'retired': 'Retired'
      },
      '0x00321001': {
        'keyword': 'ScheduledStudyStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Study Start Time',
        'retired': 'Retired'
      },
      '0x00321010': {
        'keyword': 'ScheduledStudyStopDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Study Stop Date',
        'retired': 'Retired'
      },
      '0x00321011': {
        'keyword': 'ScheduledStudyStopTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Study Stop Time',
        'retired': 'Retired'
      },
      '0x00321020': {
        'keyword': 'ScheduledStudyLocation',
        'vr': 'LO',
        'vm': '1',
        'name': 'Scheduled Study Location',
        'retired': 'Retired'
      },
      '0x00321021': {
        'keyword': 'ScheduledStudyLocationAETitle',
        'vr': 'AE',
        'vm': '1-n',
        'name': 'Scheduled Study Location AE Title',
        'retired': 'Retired'
      },
      '0x00321030': {
        'keyword': 'ReasonForStudy',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reason for Study',
        'retired': 'Retired'
      },
      '0x00321031': {
        'keyword': 'RequestingPhysicianIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requesting Physician Identification Sequence',
        'retired': ''
      },
      '0x00321032': {
        'keyword': 'RequestingPhysician',
        'vr': 'PN',
        'vm': '1',
        'name': 'Requesting Physician',
        'retired': ''
      },
      '0x00321033': {
        'keyword': 'RequestingService',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requesting Service',
        'retired': ''
      },
      '0x00321034': {
        'keyword': 'RequestingServiceCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requesting Service Code Sequence',
        'retired': ''
      },
      '0x00321040': {
        'keyword': 'StudyArrivalDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Study Arrival Date',
        'retired': 'Retired'
      },
      '0x00321041': {
        'keyword': 'StudyArrivalTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Study Arrival Time',
        'retired': 'Retired'
      },
      '0x00321050': {
        'keyword': 'StudyCompletionDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Study Completion Date',
        'retired': 'Retired'
      },
      '0x00321051': {
        'keyword': 'StudyCompletionTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Study Completion Time',
        'retired': 'Retired'
      },
      '0x00321055': {
        'keyword': 'StudyComponentStatusID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Study Component Status ID',
        'retired': 'Retired'
      },
      '0x00321060': {
        'keyword': 'RequestedProcedureDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Procedure Description',
        'retired': ''
      },
      '0x00321064': {
        'keyword': 'RequestedProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requested Procedure Code Sequence',
        'retired': ''
      },
      '0x00321065': {
        'keyword': 'RequestedLateralityCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requested Laterality Code Sequence',
        'retired': ''
      },
      '0x00321066': {
        'keyword': 'ReasonForVisit',
        'vr': 'UT',
        'vm': '1',
        'name': 'Reason for Visit',
        'retired': ''
      },
      '0x00321067': {
        'keyword': 'ReasonForVisitCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reason for Visit Code Sequence',
        'retired': ''
      },
      '0x00321070': {
        'keyword': 'RequestedContrastAgent',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Contrast Agent',
        'retired': ''
      },
      '0x00324000': {
        'keyword': 'StudyComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Study Comments',
        'retired': 'Retired'
      },
      '0x00340001': {
        'keyword': 'FlowIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Flow Identifier Sequence',
        'retired': ''
      },
      '0x00340002': {
        'keyword': 'FlowIdentifier',
        'vr': 'OB',
        'vm': '1',
        'name': 'Flow Identifier',
        'retired': ''
      },
      '0x00340003': {
        'keyword': 'FlowTransferSyntaxUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Flow Transfer Syntax UID',
        'retired': ''
      },
      '0x00340004': {
        'keyword': 'FlowRTPSamplingRate',
        'vr': 'UL',
        'vm': '1',
        'name': 'Flow RTP Sampling Rate',
        'retired': ''
      },
      '0x00340005': {
        'keyword': 'SourceIdentifier',
        'vr': 'OB',
        'vm': '1',
        'name': 'Source Identifier',
        'retired': ''
      },
      '0x00340007': {
        'keyword': 'FrameOriginTimestamp',
        'vr': 'OB',
        'vm': '1',
        'name': 'Frame Origin Timestamp',
        'retired': ''
      },
      '0x00340008': {
        'keyword': 'IncludesImagingSubject',
        'vr': 'CS',
        'vm': '1',
        'name': 'Includes Imaging Subject',
        'retired': ''
      },
      '0x00340009': {
        'keyword': 'FrameUsefulnessGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame Usefulness Group Sequence',
        'retired': ''
      },
      '0x0034000A': {
        'keyword': 'RealTimeBulkDataFlowSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Real-Time Bulk Data Flow Sequence',
        'retired': ''
      },
      '0x0034000B': {
        'keyword': 'CameraPositionGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Camera Position Group Sequence',
        'retired': ''
      },
      '0x0034000C': {
        'keyword': 'IncludesInformation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Includes Information',
        'retired': ''
      },
      '0x0034000D': {
        'keyword': 'TimeOfFrameGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Time of Frame Group Sequence',
        'retired': ''
      },
      '0x00380004': {
        'keyword': 'ReferencedPatientAliasSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Patient Alias Sequence',
        'retired': 'Retired'
      },
      '0x00380008': {
        'keyword': 'VisitStatusID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Visit Status ID',
        'retired': ''
      },
      '0x00380010': {
        'keyword': 'AdmissionID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Admission ID',
        'retired': ''
      },
      '0x00380011': {
        'keyword': 'IssuerOfAdmissionID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Issuer of Admission ID',
        'retired': 'Retired'
      },
      '0x00380014': {
        'keyword': 'IssuerOfAdmissionIDSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of Admission ID Sequence',
        'retired': ''
      },
      '0x00380016': {
        'keyword': 'RouteOfAdmissions',
        'vr': 'LO',
        'vm': '1',
        'name': 'Route of Admissions',
        'retired': ''
      },
      '0x0038001A': {
        'keyword': 'ScheduledAdmissionDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Admission Date',
        'retired': 'Retired'
      },
      '0x0038001B': {
        'keyword': 'ScheduledAdmissionTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Admission Time',
        'retired': 'Retired'
      },
      '0x0038001C': {
        'keyword': 'ScheduledDischargeDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Discharge Date',
        'retired': 'Retired'
      },
      '0x0038001D': {
        'keyword': 'ScheduledDischargeTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Discharge Time',
        'retired': 'Retired'
      },
      '0x0038001E': {
        'keyword': 'ScheduledPatientInstitutionResidence',
        'vr': 'LO',
        'vm': '1',
        'name': 'Scheduled Patient Institution Residence',
        'retired': 'Retired'
      },
      '0x00380020': {
        'keyword': 'AdmittingDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Admitting Date',
        'retired': ''
      },
      '0x00380021': {
        'keyword': 'AdmittingTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Admitting Time',
        'retired': ''
      },
      '0x00380030': {
        'keyword': 'DischargeDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Discharge Date',
        'retired': 'Retired'
      },
      '0x00380032': {
        'keyword': 'DischargeTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Discharge Time',
        'retired': 'Retired'
      },
      '0x00380040': {
        'keyword': 'DischargeDiagnosisDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Discharge Diagnosis Description',
        'retired': 'Retired'
      },
      '0x00380044': {
        'keyword': 'DischargeDiagnosisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Discharge Diagnosis Code Sequence',
        'retired': 'Retired'
      },
      '0x00380050': {
        'keyword': 'SpecialNeeds',
        'vr': 'LO',
        'vm': '1',
        'name': 'Special Needs',
        'retired': ''
      },
      '0x00380060': {
        'keyword': 'ServiceEpisodeID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Service Episode ID',
        'retired': ''
      },
      '0x00380061': {
        'keyword': 'IssuerOfServiceEpisodeID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Issuer of Service Episode ID',
        'retired': 'Retired'
      },
      '0x00380062': {
        'keyword': 'ServiceEpisodeDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Service Episode Description',
        'retired': ''
      },
      '0x00380064': {
        'keyword': 'IssuerOfServiceEpisodeIDSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of Service Episode ID Sequence',
        'retired': ''
      },
      '0x00380100': {
        'keyword': 'PertinentDocumentsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pertinent Documents Sequence',
        'retired': ''
      },
      '0x00380101': {
        'keyword': 'PertinentResourcesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pertinent Resources Sequence',
        'retired': ''
      },
      '0x00380102': {
        'keyword': 'ResourceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Resource Description',
        'retired': ''
      },
      '0x00380300': {
        'keyword': 'CurrentPatientLocation',
        'vr': 'LO',
        'vm': '1',
        'name': 'Current Patient Location',
        'retired': ''
      },
      '0x00380400': {
        'keyword': 'PatientInstitutionResidence',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient\'s Institution Residence',
        'retired': ''
      },
      '0x00380500': {
        'keyword': 'PatientState',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient State',
        'retired': ''
      },
      '0x00380502': {
        'keyword': 'PatientClinicalTrialParticipationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Clinical Trial Participation Sequence',
        'retired': ''
      },
      '0x00384000': {
        'keyword': 'VisitComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Visit Comments',
        'retired': ''
      },
      '0x003A0004': {
        'keyword': 'WaveformOriginality',
        'vr': 'CS',
        'vm': '1',
        'name': 'Waveform Originality',
        'retired': ''
      },
      '0x003A0005': {
        'keyword': 'NumberOfWaveformChannels',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Waveform Channels',
        'retired': ''
      },
      '0x003A0010': {
        'keyword': 'NumberOfWaveformSamples',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Waveform Samples',
        'retired': ''
      },
      '0x003A001A': {
        'keyword': 'SamplingFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Sampling Frequency',
        'retired': ''
      },
      '0x003A0020': {
        'keyword': 'MultiplexGroupLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Multiplex Group Label',
        'retired': ''
      },
      '0x003A0200': {
        'keyword': 'ChannelDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Definition Sequence',
        'retired': ''
      },
      '0x003A0202': {
        'keyword': 'WaveformChannelNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Waveform Channel Number',
        'retired': ''
      },
      '0x003A0203': {
        'keyword': 'ChannelLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Channel Label',
        'retired': ''
      },
      '0x003A0205': {
        'keyword': 'ChannelStatus',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Channel Status',
        'retired': ''
      },
      '0x003A0208': {
        'keyword': 'ChannelSourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Source Sequence',
        'retired': ''
      },
      '0x003A0209': {
        'keyword': 'ChannelSourceModifiersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Source Modifiers Sequence',
        'retired': ''
      },
      '0x003A020A': {
        'keyword': 'SourceWaveformSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Waveform Sequence',
        'retired': ''
      },
      '0x003A020C': {
        'keyword': 'ChannelDerivationDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Channel Derivation Description',
        'retired': ''
      },
      '0x003A0210': {
        'keyword': 'ChannelSensitivity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Sensitivity',
        'retired': ''
      },
      '0x003A0211': {
        'keyword': 'ChannelSensitivityUnitsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Sensitivity Units Sequence',
        'retired': ''
      },
      '0x003A0212': {
        'keyword': 'ChannelSensitivityCorrectionFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Sensitivity Correction Factor',
        'retired': ''
      },
      '0x003A0213': {
        'keyword': 'ChannelBaseline',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Baseline',
        'retired': ''
      },
      '0x003A0214': {
        'keyword': 'ChannelTimeSkew',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Time Skew',
        'retired': ''
      },
      '0x003A0215': {
        'keyword': 'ChannelSampleSkew',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Sample Skew',
        'retired': ''
      },
      '0x003A0218': {
        'keyword': 'ChannelOffset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Offset',
        'retired': ''
      },
      '0x003A021A': {
        'keyword': 'WaveformBitsStored',
        'vr': 'US',
        'vm': '1',
        'name': 'Waveform Bits Stored',
        'retired': ''
      },
      '0x003A0220': {
        'keyword': 'FilterLowFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Filter Low Frequency',
        'retired': ''
      },
      '0x003A0221': {
        'keyword': 'FilterHighFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Filter High Frequency',
        'retired': ''
      },
      '0x003A0222': {
        'keyword': 'NotchFilterFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Notch Filter Frequency',
        'retired': ''
      },
      '0x003A0223': {
        'keyword': 'NotchFilterBandwidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Notch Filter Bandwidth',
        'retired': ''
      },
      '0x003A0230': {
        'keyword': 'WaveformDataDisplayScale',
        'vr': 'FL',
        'vm': '1',
        'name': 'Waveform Data Display Scale',
        'retired': ''
      },
      '0x003A0231': {
        'keyword': 'WaveformDisplayBackgroundCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Waveform Display Background CIELab Value',
        'retired': ''
      },
      '0x003A0240': {
        'keyword': 'WaveformPresentationGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Waveform Presentation Group Sequence',
        'retired': ''
      },
      '0x003A0241': {
        'keyword': 'PresentationGroupNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Presentation Group Number',
        'retired': ''
      },
      '0x003A0242': {
        'keyword': 'ChannelDisplaySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Display Sequence',
        'retired': ''
      },
      '0x003A0244': {
        'keyword': 'ChannelRecommendedDisplayCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Channel Recommended Display CIELab Value',
        'retired': ''
      },
      '0x003A0245': {
        'keyword': 'ChannelPosition',
        'vr': 'FL',
        'vm': '1',
        'name': 'Channel Position',
        'retired': ''
      },
      '0x003A0246': {
        'keyword': 'DisplayShadingFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Display Shading Flag',
        'retired': ''
      },
      '0x003A0247': {
        'keyword': 'FractionalChannelDisplayScale',
        'vr': 'FL',
        'vm': '1',
        'name': 'Fractional Channel Display Scale',
        'retired': ''
      },
      '0x003A0248': {
        'keyword': 'AbsoluteChannelDisplayScale',
        'vr': 'FL',
        'vm': '1',
        'name': 'Absolute Channel Display Scale',
        'retired': ''
      },
      '0x003A0300': {
        'keyword': 'MultiplexedAudioChannelsDescriptionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Multiplexed Audio Channels Description Code Sequence',
        'retired': ''
      },
      '0x003A0301': {
        'keyword': 'ChannelIdentificationCode',
        'vr': 'IS',
        'vm': '1',
        'name': 'Channel Identification Code',
        'retired': ''
      },
      '0x003A0302': {
        'keyword': 'ChannelMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Channel Mode',
        'retired': ''
      },
      '0x003A0310': {
        'keyword': 'MultiplexGroupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Multiplex Group UID',
        'retired': ''
      },
      '0x003A0311': {
        'keyword': 'PowerlineFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Powerline Frequency',
        'retired': ''
      },
      '0x003A0312': {
        'keyword': 'ChannelImpedanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Impedance Sequence',
        'retired': ''
      },
      '0x003A0313': {
        'keyword': 'ImpedanceValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Impedance Value',
        'retired': ''
      },
      '0x003A0314': {
        'keyword': 'ImpedanceMeasurementDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Impedance Measurement DateTime',
        'retired': ''
      },
      '0x003A0315': {
        'keyword': 'ImpedanceMeasurementFrequency',
        'vr': 'DS',
        'vm': '1',
        'name': 'Impedance Measurement Frequency',
        'retired': ''
      },
      '0x003A0316': {
        'keyword': 'ImpedanceMeasurementCurrentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Impedance Measurement Current Type',
        'retired': ''
      },
      '0x003A0317': {
        'keyword': 'WaveformAmplifierType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Waveform Amplifier Type',
        'retired': ''
      },
      '0x003A0318': {
        'keyword': 'FilterLowFrequencyCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Filter Low Frequency Characteristics Sequence',
        'retired': ''
      },
      '0x003A0319': {
        'keyword': 'FilterHighFrequencyCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Filter High Frequency Characteristics Sequence',
        'retired': ''
      },
      '0x003A0320': {
        'keyword': 'SummarizedFilterLookupTable',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Summarized Filter Lookup Table Sequence',
        'retired': ''
      },
      '0x003A0321': {
        'keyword': 'NotchFilterCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Notch Filter Characteristics Sequence',
        'retired': ''
      },
      '0x003A0322': {
        'keyword': 'WaveformFilterType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Waveform Filter Type',
        'retired': ''
      },
      '0x003A0323': {
        'keyword': 'AnalogFilterCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Analog Filter Characteristics Sequence',
        'retired': ''
      },
      '0x003A0324': {
        'keyword': 'AnalogFilterRollOff',
        'vr': 'DS',
        'vm': '1',
        'name': 'Analog Filter Roll Off',
        'retired': ''
      },
      '0x003A0325': {
        'keyword': 'AnalogFilterType',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Analog Filter Type Code Sequence',
        'retired': ''
      },
      '0x003A0326': {
        'keyword': 'DigitalFilterCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Digital Filter Characteristics Sequence',
        'retired': ''
      },
      '0x003A0327': {
        'keyword': 'DigitalFilterOrder',
        'vr': 'IS',
        'vm': '1',
        'name': 'Digital Filter Order',
        'retired': ''
      },
      '0x003A0328': {
        'keyword': 'DigitalFilterTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Digital Filter Type Code Sequence',
        'retired': ''
      },
      '0x003A0329': {
        'keyword': 'WaveformFilterDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Waveform Filter Description',
        'retired': ''
      },
      '0x003A032A': {
        'keyword': 'FilterLookupTableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Filter Lookup Table Sequence',
        'retired': ''
      },
      '0x003A032B': {
        'keyword': 'FilterLookupTableDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Filter Lookup Table Description',
        'retired': ''
      },
      '0x003A032C': {
        'keyword': 'FrequencyEncodingCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frequency Encoding Code Sequence',
        'retired': ''
      },
      '0x003A032D': {
        'keyword': 'MagnitudeEncodingCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Magnitude Encoding Code Sequence',
        'retired': ''
      },
      '0x003A032E': {
        'keyword': 'FilterLookupTableData',
        'vr': 'OD',
        'vm': '1',
        'name': 'Filter Lookup Table Data',
        'retired': ''
      },
      '0x00400001': {
        'keyword': 'ScheduledStationAETitle',
        'vr': 'AE',
        'vm': '1-n',
        'name': 'Scheduled Station AE Title',
        'retired': ''
      },
      '0x00400002': {
        'keyword': 'ScheduledProcedureStepStartDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Procedure Step Start Date',
        'retired': ''
      },
      '0x00400003': {
        'keyword': 'ScheduledProcedureStepStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Procedure Step Start Time',
        'retired': ''
      },
      '0x00400004': {
        'keyword': 'ScheduledProcedureStepEndDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Scheduled Procedure Step End Date',
        'retired': ''
      },
      '0x00400005': {
        'keyword': 'ScheduledProcedureStepEndTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Scheduled Procedure Step End Time',
        'retired': ''
      },
      '0x00400006': {
        'keyword': 'ScheduledPerformingPhysicianName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Scheduled Performing Physician\'s Name',
        'retired': ''
      },
      '0x00400007': {
        'keyword': 'ScheduledProcedureStepDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Scheduled Procedure Step Description',
        'retired': ''
      },
      '0x00400008': {
        'keyword': 'ScheduledProtocolCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Protocol Code Sequence',
        'retired': ''
      },
      '0x00400009': {
        'keyword': 'ScheduledProcedureStepID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Scheduled Procedure Step ID',
        'retired': ''
      },
      '0x0040000A': {
        'keyword': 'StageCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Stage Code Sequence',
        'retired': ''
      },
      '0x0040000B': {
        'keyword': 'ScheduledPerformingPhysicianIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Performing Physician Identification Sequence',
        'retired': ''
      },
      '0x00400010': {
        'keyword': 'ScheduledStationName',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Scheduled Station Name',
        'retired': ''
      },
      '0x00400011': {
        'keyword': 'ScheduledProcedureStepLocation',
        'vr': 'SH',
        'vm': '1',
        'name': 'Scheduled Procedure Step Location',
        'retired': ''
      },
      '0x00400012': {
        'keyword': 'PreMedication',
        'vr': 'LO',
        'vm': '1',
        'name': 'Pre-Medication',
        'retired': ''
      },
      '0x00400020': {
        'keyword': 'ScheduledProcedureStepStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scheduled Procedure Step Status',
        'retired': ''
      },
      '0x00400026': {
        'keyword': 'OrderPlacerIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Order Placer Identifier Sequence',
        'retired': ''
      },
      '0x00400027': {
        'keyword': 'OrderFillerIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Order Filler Identifier Sequence',
        'retired': ''
      },
      '0x00400031': {
        'keyword': 'LocalNamespaceEntityID',
        'vr': 'UT',
        'vm': '1',
        'name': 'Local Namespace Entity ID',
        'retired': ''
      },
      '0x00400032': {
        'keyword': 'UniversalEntityID',
        'vr': 'UT',
        'vm': '1',
        'name': 'Universal Entity ID',
        'retired': ''
      },
      '0x00400033': {
        'keyword': 'UniversalEntityIDType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Universal Entity ID Type',
        'retired': ''
      },
      '0x00400035': {
        'keyword': 'IdentifierTypeCode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Identifier Type Code',
        'retired': ''
      },
      '0x00400036': {
        'keyword': 'AssigningFacilitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assigning Facility Sequence',
        'retired': ''
      },
      '0x00400039': {
        'keyword': 'AssigningJurisdictionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assigning Jurisdiction Code Sequence',
        'retired': ''
      },
      '0x0040003A': {
        'keyword': 'AssigningAgencyOrDepartmentCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assigning Agency or Department Code Sequence',
        'retired': ''
      },
      '0x00400100': {
        'keyword': 'ScheduledProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Procedure Step Sequence',
        'retired': ''
      },
      '0x00400220': {
        'keyword': 'ReferencedNonImageCompositeSOPInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Non-Image Composite SOP Instance Sequence',
        'retired': ''
      },
      '0x00400241': {
        'keyword': 'PerformedStationAETitle',
        'vr': 'AE',
        'vm': '1',
        'name': 'Performed Station AE Title',
        'retired': ''
      },
      '0x00400242': {
        'keyword': 'PerformedStationName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Performed Station Name',
        'retired': ''
      },
      '0x00400243': {
        'keyword': 'PerformedLocation',
        'vr': 'SH',
        'vm': '1',
        'name': 'Performed Location',
        'retired': ''
      },
      '0x00400244': {
        'keyword': 'PerformedProcedureStepStartDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Performed Procedure Step Start Date',
        'retired': ''
      },
      '0x00400245': {
        'keyword': 'PerformedProcedureStepStartTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Performed Procedure Step Start Time',
        'retired': ''
      },
      '0x00400250': {
        'keyword': 'PerformedProcedureStepEndDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Performed Procedure Step End Date',
        'retired': ''
      },
      '0x00400251': {
        'keyword': 'PerformedProcedureStepEndTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Performed Procedure Step End Time',
        'retired': ''
      },
      '0x00400252': {
        'keyword': 'PerformedProcedureStepStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Performed Procedure Step Status',
        'retired': ''
      },
      '0x00400253': {
        'keyword': 'PerformedProcedureStepID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Performed Procedure Step ID',
        'retired': ''
      },
      '0x00400254': {
        'keyword': 'PerformedProcedureStepDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Performed Procedure Step Description',
        'retired': ''
      },
      '0x00400255': {
        'keyword': 'PerformedProcedureTypeDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Performed Procedure Type Description',
        'retired': ''
      },
      '0x00400260': {
        'keyword': 'PerformedProtocolCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Protocol Code Sequence',
        'retired': ''
      },
      '0x00400261': {
        'keyword': 'PerformedProtocolType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Performed Protocol Type',
        'retired': ''
      },
      '0x00400270': {
        'keyword': 'ScheduledStepAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Step Attributes Sequence',
        'retired': ''
      },
      '0x00400275': {
        'keyword': 'RequestAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Request Attributes Sequence',
        'retired': ''
      },
      '0x00400280': {
        'keyword': 'CommentsOnThePerformedProcedureStep',
        'vr': 'ST',
        'vm': '1',
        'name': 'Comments on the Performed Procedure Step',
        'retired': ''
      },
      '0x00400281': {
        'keyword': 'PerformedProcedureStepDiscontinuationReasonCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Procedure Step Discontinuation Reason Code Sequence',
        'retired': ''
      },
      '0x00400293': {
        'keyword': 'QuantitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Quantity Sequence',
        'retired': ''
      },
      '0x00400294': {
        'keyword': 'Quantity',
        'vr': 'DS',
        'vm': '1',
        'name': 'Quantity',
        'retired': ''
      },
      '0x00400295': {
        'keyword': 'MeasuringUnitsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measuring Units Sequence',
        'retired': ''
      },
      '0x00400296': {
        'keyword': 'BillingItemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Billing Item Sequence',
        'retired': ''
      },
      '0x00400300': {
        'keyword': 'TotalTimeOfFluoroscopy',
        'vr': 'US',
        'vm': '1',
        'name': 'Total Time of Fluoroscopy',
        'retired': 'Retired'
      },
      '0x00400301': {
        'keyword': 'TotalNumberOfExposures',
        'vr': 'US',
        'vm': '1',
        'name': 'Total Number of Exposures',
        'retired': 'Retired'
      },
      '0x00400302': {
        'keyword': 'EntranceDose',
        'vr': 'US',
        'vm': '1',
        'name': 'Entrance Dose',
        'retired': ''
      },
      '0x00400303': {
        'keyword': 'ExposedArea',
        'vr': 'US',
        'vm': '1-2',
        'name': 'Exposed Area',
        'retired': ''
      },
      '0x00400306': {
        'keyword': 'DistanceSourceToEntrance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Distance Source to Entrance',
        'retired': ''
      },
      '0x00400307': {
        'keyword': 'DistanceSourceToSupport',
        'vr': 'DS',
        'vm': '1',
        'name': 'Distance Source to Support',
        'retired': 'Retired'
      },
      '0x0040030E': {
        'keyword': 'ExposureDoseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Exposure Dose Sequence',
        'retired': 'Retired'
      },
      '0x00400310': {
        'keyword': 'CommentsOnRadiationDose',
        'vr': 'ST',
        'vm': '1',
        'name': 'Comments on Radiation Dose',
        'retired': ''
      },
      '0x00400312': {
        'keyword': 'XRayOutput',
        'vr': 'DS',
        'vm': '1',
        'name': 'X-Ray Output',
        'retired': ''
      },
      '0x00400314': {
        'keyword': 'HalfValueLayer',
        'vr': 'DS',
        'vm': '1',
        'name': 'Half Value Layer',
        'retired': ''
      },
      '0x00400316': {
        'keyword': 'OrganDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Organ Dose',
        'retired': ''
      },
      '0x00400318': {
        'keyword': 'OrganExposed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Organ Exposed',
        'retired': ''
      },
      '0x00400320': {
        'keyword': 'BillingProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Billing Procedure Step Sequence',
        'retired': ''
      },
      '0x00400321': {
        'keyword': 'FilmConsumptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Film Consumption Sequence',
        'retired': ''
      },
      '0x00400324': {
        'keyword': 'BillingSuppliesAndDevicesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Billing Supplies and Devices Sequence',
        'retired': ''
      },
      '0x00400330': {
        'keyword': 'ReferencedProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Procedure Step Sequence',
        'retired': 'Retired'
      },
      '0x00400340': {
        'keyword': 'PerformedSeriesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Series Sequence',
        'retired': ''
      },
      '0x00400400': {
        'keyword': 'CommentsOnTheScheduledProcedureStep',
        'vr': 'LT',
        'vm': '1',
        'name': 'Comments on the Scheduled Procedure Step',
        'retired': ''
      },
      '0x00400440': {
        'keyword': 'ProtocolContextSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Protocol Context Sequence',
        'retired': ''
      },
      '0x00400441': {
        'keyword': 'ContentItemModifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Content Item Modifier Sequence',
        'retired': ''
      },
      '0x00400500': {
        'keyword': 'ScheduledSpecimenSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Specimen Sequence',
        'retired': ''
      },
      '0x0040050A': {
        'keyword': 'SpecimenAccessionNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Specimen Accession Number',
        'retired': 'Retired'
      },
      '0x00400512': {
        'keyword': 'ContainerIdentifier',
        'vr': 'LO',
        'vm': '1',
        'name': 'Container Identifier',
        'retired': ''
      },
      '0x00400513': {
        'keyword': 'IssuerOfTheContainerIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of the Container Identifier Sequence',
        'retired': ''
      },
      '0x00400515': {
        'keyword': 'AlternateContainerIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Alternate Container Identifier Sequence',
        'retired': ''
      },
      '0x00400518': {
        'keyword': 'ContainerTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Container Type Code Sequence',
        'retired': ''
      },
      '0x0040051A': {
        'keyword': 'ContainerDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Container Description',
        'retired': ''
      },
      '0x00400520': {
        'keyword': 'ContainerComponentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Container Component Sequence',
        'retired': ''
      },
      '0x00400550': {
        'keyword': 'SpecimenSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Sequence',
        'retired': 'Retired'
      },
      '0x00400551': {
        'keyword': 'SpecimenIdentifier',
        'vr': 'LO',
        'vm': '1',
        'name': 'Specimen Identifier',
        'retired': ''
      },
      '0x00400552': {
        'keyword': 'SpecimenDescriptionSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Description Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00400553': {
        'keyword': 'SpecimenDescriptionTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Specimen Description (Trial)',
        'retired': 'Retired'
      },
      '0x00400554': {
        'keyword': 'SpecimenUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Specimen UID',
        'retired': ''
      },
      '0x00400555': {
        'keyword': 'AcquisitionContextSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Context Sequence',
        'retired': ''
      },
      '0x00400556': {
        'keyword': 'AcquisitionContextDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Acquisition Context Description',
        'retired': ''
      },
      '0x00400560': {
        'keyword': 'SpecimenDescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Description Sequence',
        'retired': ''
      },
      '0x00400562': {
        'keyword': 'IssuerOfTheSpecimenIdentifierSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Issuer of the Specimen Identifier Sequence',
        'retired': ''
      },
      '0x0040059A': {
        'keyword': 'SpecimenTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Type Code Sequence',
        'retired': ''
      },
      '0x00400600': {
        'keyword': 'SpecimenShortDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Specimen Short Description',
        'retired': ''
      },
      '0x00400602': {
        'keyword': 'SpecimenDetailedDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Specimen Detailed Description',
        'retired': ''
      },
      '0x00400610': {
        'keyword': 'SpecimenPreparationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Preparation Sequence',
        'retired': ''
      },
      '0x00400612': {
        'keyword': 'SpecimenPreparationStepContentItemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Preparation Step Content Item Sequence',
        'retired': ''
      },
      '0x00400620': {
        'keyword': 'SpecimenLocalizationContentItemSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Localization Content Item Sequence',
        'retired': ''
      },
      '0x004006FA': {
        'keyword': 'SlideIdentifier',
        'vr': 'LO',
        'vm': '1',
        'name': 'Slide Identifier',
        'retired': 'Retired'
      },
      '0x00400710': {
        'keyword': 'WholeSlideMicroscopyImageFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Whole Slide Microscopy Image Frame Type Sequence',
        'retired': ''
      },
      '0x0040071A': {
        'keyword': 'ImageCenterPointCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Center Point Coordinates Sequence',
        'retired': ''
      },
      '0x0040072A': {
        'keyword': 'XOffsetInSlideCoordinateSystem',
        'vr': 'DS',
        'vm': '1',
        'name': 'X Offset in Slide Coordinate System',
        'retired': ''
      },
      '0x0040073A': {
        'keyword': 'YOffsetInSlideCoordinateSystem',
        'vr': 'DS',
        'vm': '1',
        'name': 'Y Offset in Slide Coordinate System',
        'retired': ''
      },
      '0x0040074A': {
        'keyword': 'ZOffsetInSlideCoordinateSystem',
        'vr': 'DS',
        'vm': '1',
        'name': 'Z Offset in Slide Coordinate System',
        'retired': ''
      },
      '0x004008D8': {
        'keyword': 'PixelSpacingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Spacing Sequence',
        'retired': 'Retired'
      },
      '0x004008DA': {
        'keyword': 'CoordinateSystemAxisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coordinate System Axis Code Sequence',
        'retired': 'Retired'
      },
      '0x004008EA': {
        'keyword': 'MeasurementUnitsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measurement Units Code Sequence',
        'retired': ''
      },
      '0x004009F8': {
        'keyword': 'VitalStainCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Vital Stain Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x00401001': {
        'keyword': 'RequestedProcedureID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Requested Procedure ID',
        'retired': ''
      },
      '0x00401002': {
        'keyword': 'ReasonForTheRequestedProcedure',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reason for the Requested Procedure',
        'retired': ''
      },
      '0x00401003': {
        'keyword': 'RequestedProcedurePriority',
        'vr': 'SH',
        'vm': '1',
        'name': 'Requested Procedure Priority',
        'retired': ''
      },
      '0x00401004': {
        'keyword': 'PatientTransportArrangements',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Transport Arrangements',
        'retired': ''
      },
      '0x00401005': {
        'keyword': 'RequestedProcedureLocation',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Procedure Location',
        'retired': ''
      },
      '0x00401006': {
        'keyword': 'PlacerOrderNumberProcedure',
        'vr': 'SH',
        'vm': '1',
        'name': 'Placer Order Number / Procedure',
        'retired': 'Retired'
      },
      '0x00401007': {
        'keyword': 'FillerOrderNumberProcedure',
        'vr': 'SH',
        'vm': '1',
        'name': 'Filler Order Number / Procedure',
        'retired': 'Retired'
      },
      '0x00401008': {
        'keyword': 'ConfidentialityCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Confidentiality Code',
        'retired': ''
      },
      '0x00401009': {
        'keyword': 'ReportingPriority',
        'vr': 'SH',
        'vm': '1',
        'name': 'Reporting Priority',
        'retired': ''
      },
      '0x0040100A': {
        'keyword': 'ReasonForRequestedProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reason for Requested Procedure Code Sequence',
        'retired': ''
      },
      '0x00401010': {
        'keyword': 'NamesOfIntendedRecipientsOfResults',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Names of Intended Recipients of Results',
        'retired': ''
      },
      '0x00401011': {
        'keyword': 'IntendedRecipientsOfResultsIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intended Recipients of Results Identification Sequence',
        'retired': ''
      },
      '0x00401012': {
        'keyword': 'ReasonForPerformedProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reason For Performed Procedure Code Sequence',
        'retired': ''
      },
      '0x00401060': {
        'keyword': 'RequestedProcedureDescriptionTrial',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Procedure Description (Trial)',
        'retired': 'Retired'
      },
      '0x00401101': {
        'keyword': 'PersonIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Person Identification Code Sequence',
        'retired': ''
      },
      '0x00401102': {
        'keyword': 'PersonAddress',
        'vr': 'ST',
        'vm': '1',
        'name': 'Person\'s Address',
        'retired': ''
      },
      '0x00401103': {
        'keyword': 'PersonTelephoneNumbers',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Person\'s Telephone Numbers',
        'retired': ''
      },
      '0x00401104': {
        'keyword': 'PersonTelecomInformation',
        'vr': 'LT',
        'vm': '1',
        'name': 'Person\'s Telecom Information',
        'retired': ''
      },
      '0x00401400': {
        'keyword': 'RequestedProcedureComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Requested Procedure Comments',
        'retired': ''
      },
      '0x00402001': {
        'keyword': 'ReasonForTheImagingServiceRequest',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reason for the Imaging Service Request',
        'retired': 'Retired'
      },
      '0x00402004': {
        'keyword': 'IssueDateOfImagingServiceRequest',
        'vr': 'DA',
        'vm': '1',
        'name': 'Issue Date of Imaging Service Request',
        'retired': ''
      },
      '0x00402005': {
        'keyword': 'IssueTimeOfImagingServiceRequest',
        'vr': 'TM',
        'vm': '1',
        'name': 'Issue Time of Imaging Service Request',
        'retired': ''
      },
      '0x00402006': {
        'keyword': 'PlacerOrderNumberImagingServiceRequestRetired',
        'vr': 'SH',
        'vm': '1',
        'name': 'Placer Order Number / Imaging Service Request (Retired)',
        'retired': 'Retired'
      },
      '0x00402007': {
        'keyword': 'FillerOrderNumberImagingServiceRequestRetired',
        'vr': 'SH',
        'vm': '1',
        'name': 'Filler Order Number / Imaging Service Request (Retired)',
        'retired': 'Retired'
      },
      '0x00402008': {
        'keyword': 'OrderEnteredBy',
        'vr': 'PN',
        'vm': '1',
        'name': 'Order Entered By',
        'retired': ''
      },
      '0x00402009': {
        'keyword': 'OrderEntererLocation',
        'vr': 'SH',
        'vm': '1',
        'name': 'Order Enterer\'s Location',
        'retired': ''
      },
      '0x00402010': {
        'keyword': 'OrderCallbackPhoneNumber',
        'vr': 'SH',
        'vm': '1',
        'name': 'Order Callback Phone Number',
        'retired': ''
      },
      '0x00402011': {
        'keyword': 'OrderCallbackTelecomInformation',
        'vr': 'LT',
        'vm': '1',
        'name': 'Order Callback Telecom Information',
        'retired': ''
      },
      '0x00402016': {
        'keyword': 'PlacerOrderNumberImagingServiceRequest',
        'vr': 'LO',
        'vm': '1',
        'name': 'Placer Order Number / Imaging Service Request',
        'retired': ''
      },
      '0x00402017': {
        'keyword': 'FillerOrderNumberImagingServiceRequest',
        'vr': 'LO',
        'vm': '1',
        'name': 'Filler Order Number / Imaging Service Request',
        'retired': ''
      },
      '0x00402400': {
        'keyword': 'ImagingServiceRequestComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Imaging Service Request Comments',
        'retired': ''
      },
      '0x00403001': {
        'keyword': 'ConfidentialityConstraintOnPatientDataDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Confidentiality Constraint on Patient Data Description',
        'retired': ''
      },
      '0x00404001': {
        'keyword': 'GeneralPurposeScheduledProcedureStepStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'General Purpose Scheduled Procedure Step Status',
        'retired': 'Retired'
      },
      '0x00404002': {
        'keyword': 'GeneralPurposePerformedProcedureStepStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'General Purpose Performed Procedure Step Status',
        'retired': 'Retired'
      },
      '0x00404003': {
        'keyword': 'GeneralPurposeScheduledProcedureStepPriority',
        'vr': 'CS',
        'vm': '1',
        'name': 'General Purpose Scheduled Procedure Step Priority',
        'retired': 'Retired'
      },
      '0x00404004': {
        'keyword': 'ScheduledProcessingApplicationsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Processing Applications Code Sequence',
        'retired': 'Retired'
      },
      '0x00404005': {
        'keyword': 'ScheduledProcedureStepStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Scheduled Procedure Step Start DateTime',
        'retired': ''
      },
      '0x00404006': {
        'keyword': 'MultipleCopiesFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multiple Copies Flag',
        'retired': 'Retired'
      },
      '0x00404007': {
        'keyword': 'PerformedProcessingApplicationsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Processing Applications Code Sequence',
        'retired': 'Retired'
      },
      '0x00404008': {
        'keyword': 'ScheduledProcedureStepExpirationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Scheduled Procedure Step Expiration DateTime',
        'retired': ''
      },
      '0x00404009': {
        'keyword': 'HumanPerformerCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Human Performer Code Sequence',
        'retired': ''
      },
      '0x00404010': {
        'keyword': 'ScheduledProcedureStepModificationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Scheduled Procedure Step Modification DateTime',
        'retired': ''
      },
      '0x00404011': {
        'keyword': 'ExpectedCompletionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Expected Completion DateTime',
        'retired': ''
      },
      '0x00404015': {
        'keyword': 'ResultingGeneralPurposePerformedProcedureStepsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Resulting General Purpose Performed Procedure Steps Sequence',
        'retired': 'Retired'
      },
      '0x00404016': {
        'keyword': 'ReferencedGeneralPurposeScheduledProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced General Purpose Scheduled Procedure Step Sequence',
        'retired': 'Retired'
      },
      '0x00404018': {
        'keyword': 'ScheduledWorkitemCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Workitem Code Sequence',
        'retired': ''
      },
      '0x00404019': {
        'keyword': 'PerformedWorkitemCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Workitem Code Sequence',
        'retired': ''
      },
      '0x00404020': {
        'keyword': 'InputAvailabilityFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Input Availability Flag',
        'retired': 'Retired'
      },
      '0x00404021': {
        'keyword': 'InputInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Input Information Sequence',
        'retired': ''
      },
      '0x00404022': {
        'keyword': 'RelevantInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Relevant Information Sequence',
        'retired': 'Retired'
      },
      '0x00404023': {
        'keyword':
            'ReferencedGeneralPurposeScheduledProcedureStepTransactionUID',
        'vr': 'UI',
        'vm': '1',
        'name':
            'Referenced General Purpose Scheduled Procedure Step Transaction UID',
        'retired': 'Retired'
      },
      '0x00404025': {
        'keyword': 'ScheduledStationNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Station Name Code Sequence',
        'retired': ''
      },
      '0x00404026': {
        'keyword': 'ScheduledStationClassCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Station Class Code Sequence',
        'retired': ''
      },
      '0x00404027': {
        'keyword': 'ScheduledStationGeographicLocationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Station Geographic Location Code Sequence',
        'retired': ''
      },
      '0x00404028': {
        'keyword': 'PerformedStationNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Station Name Code Sequence',
        'retired': ''
      },
      '0x00404029': {
        'keyword': 'PerformedStationClassCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Station Class Code Sequence',
        'retired': ''
      },
      '0x00404030': {
        'keyword': 'PerformedStationGeographicLocationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Station Geographic Location Code Sequence',
        'retired': ''
      },
      '0x00404031': {
        'keyword': 'RequestedSubsequentWorkitemCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Requested Subsequent Workitem Code Sequence',
        'retired': 'Retired'
      },
      '0x00404032': {
        'keyword': 'NonDICOMOutputCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Non-DICOM Output Code Sequence',
        'retired': 'Retired'
      },
      '0x00404033': {
        'keyword': 'OutputInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Output Information Sequence',
        'retired': ''
      },
      '0x00404034': {
        'keyword': 'ScheduledHumanPerformersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Human Performers Sequence',
        'retired': ''
      },
      '0x00404035': {
        'keyword': 'ActualHumanPerformersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Actual Human Performers Sequence',
        'retired': ''
      },
      '0x00404036': {
        'keyword': 'HumanPerformerOrganization',
        'vr': 'LO',
        'vm': '1',
        'name': 'Human Performer\'s Organization',
        'retired': ''
      },
      '0x00404037': {
        'keyword': 'HumanPerformerName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Human Performer\'s Name',
        'retired': ''
      },
      '0x00404040': {
        'keyword': 'RawDataHandling',
        'vr': 'CS',
        'vm': '1',
        'name': 'Raw Data Handling',
        'retired': ''
      },
      '0x00404041': {
        'keyword': 'InputReadinessState',
        'vr': 'CS',
        'vm': '1',
        'name': 'Input Readiness State',
        'retired': ''
      },
      '0x00404050': {
        'keyword': 'PerformedProcedureStepStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Performed Procedure Step Start DateTime',
        'retired': ''
      },
      '0x00404051': {
        'keyword': 'PerformedProcedureStepEndDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Performed Procedure Step End DateTime',
        'retired': ''
      },
      '0x00404052': {
        'keyword': 'ProcedureStepCancellationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Procedure Step Cancellation DateTime',
        'retired': ''
      },
      '0x00404070': {
        'keyword': 'OutputDestinationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Output Destination Sequence',
        'retired': ''
      },
      '0x00404071': {
        'keyword': 'DICOMStorageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DICOM Storage Sequence',
        'retired': ''
      },
      '0x00404072': {
        'keyword': 'STOWRSStorageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'STOW-RS Storage Sequence',
        'retired': ''
      },
      '0x00404073': {
        'keyword': 'StorageURL',
        'vr': 'UR',
        'vm': '1',
        'name': 'Storage URL',
        'retired': ''
      },
      '0x00404074': {
        'keyword': 'XDSStorageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'XDS Storage Sequence',
        'retired': ''
      },
      '0x00408302': {
        'keyword': 'EntranceDoseInmGy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Entrance Dose in mGy',
        'retired': ''
      },
      '0x00408303': {
        'keyword': 'EntranceDoseDerivation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Entrance Dose Derivation',
        'retired': ''
      },
      '0x00409092': {
        'keyword': 'ParametricMapFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Parametric Map Frame Type Sequence',
        'retired': ''
      },
      '0x00409094': {
        'keyword': 'ReferencedImageRealWorldValueMappingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Real World Value Mapping Sequence',
        'retired': ''
      },
      '0x00409096': {
        'keyword': 'RealWorldValueMappingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Real World Value Mapping Sequence',
        'retired': ''
      },
      '0x00409098': {
        'keyword': 'PixelValueMappingCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pixel Value Mapping Code Sequence',
        'retired': ''
      },
      '0x00409210': {
        'keyword': 'LUTLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'LUT Label',
        'retired': ''
      },
      '0x00409211': {
        'keyword': 'RealWorldValueLastValueMapped',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Real World Value Last Value Mapped',
        'retired': ''
      },
      '0x00409212': {
        'keyword': 'RealWorldValueLUTData',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Real World Value LUT Data',
        'retired': ''
      },
      '0x00409213': {
        'keyword': 'DoubleFloatRealWorldValueLastValueMapped',
        'vr': 'FD',
        'vm': '1',
        'name': 'Double Float Real World Value Last Value Mapped',
        'retired': ''
      },
      '0x00409214': {
        'keyword': 'DoubleFloatRealWorldValueFirstValueMapped',
        'vr': 'FD',
        'vm': '1',
        'name': 'Double Float Real World Value First Value Mapped',
        'retired': ''
      },
      '0x00409216': {
        'keyword': 'RealWorldValueFirstValueMapped',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Real World Value First Value Mapped',
        'retired': ''
      },
      '0x00409220': {
        'keyword': 'QuantityDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Quantity Definition Sequence',
        'retired': ''
      },
      '0x00409224': {
        'keyword': 'RealWorldValueIntercept',
        'vr': 'FD',
        'vm': '1',
        'name': 'Real World Value Intercept',
        'retired': ''
      },
      '0x00409225': {
        'keyword': 'RealWorldValueSlope',
        'vr': 'FD',
        'vm': '1',
        'name': 'Real World Value Slope',
        'retired': ''
      },
      '0x0040A007': {
        'keyword': 'FindingsFlagTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Findings Flag (Trial)',
        'retired': 'Retired'
      },
      '0x0040A010': {
        'keyword': 'RelationshipType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Relationship Type',
        'retired': ''
      },
      '0x0040A020': {
        'keyword': 'FindingsSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Findings Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A021': {
        'keyword': 'FindingsGroupUIDTrial',
        'vr': 'UI',
        'vm': '1',
        'name': 'Findings Group UID (Trial)',
        'retired': 'Retired'
      },
      '0x0040A022': {
        'keyword': 'ReferencedFindingsGroupUIDTrial',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Findings Group UID (Trial)',
        'retired': 'Retired'
      },
      '0x0040A023': {
        'keyword': 'FindingsGroupRecordingDateTrial',
        'vr': 'DA',
        'vm': '1',
        'name': 'Findings Group Recording Date (Trial)',
        'retired': 'Retired'
      },
      '0x0040A024': {
        'keyword': 'FindingsGroupRecordingTimeTrial',
        'vr': 'TM',
        'vm': '1',
        'name': 'Findings Group Recording Time (Trial)',
        'retired': 'Retired'
      },
      '0x0040A026': {
        'keyword': 'FindingsSourceCategoryCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Findings Source Category Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A027': {
        'keyword': 'VerifyingOrganization',
        'vr': 'LO',
        'vm': '1',
        'name': 'Verifying Organization',
        'retired': ''
      },
      '0x0040A028': {
        'keyword': 'DocumentingOrganizationIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Documenting Organization Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A030': {
        'keyword': 'VerificationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Verification DateTime',
        'retired': ''
      },
      '0x0040A032': {
        'keyword': 'ObservationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Observation DateTime',
        'retired': ''
      },
      '0x0040A033': {
        'keyword': 'ObservationStartDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Observation Start DateTime',
        'retired': ''
      },
      '0x0040A040': {
        'keyword': 'ValueType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Value Type',
        'retired': ''
      },
      '0x0040A043': {
        'keyword': 'ConceptNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Concept Name Code Sequence',
        'retired': ''
      },
      '0x0040A047': {
        'keyword': 'MeasurementPrecisionDescriptionTrial',
        'vr': 'LO',
        'vm': '1',
        'name': 'Measurement Precision Description (Trial)',
        'retired': 'Retired'
      },
      '0x0040A050': {
        'keyword': 'ContinuityOfContent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Continuity Of Content',
        'retired': ''
      },
      '0x0040A057': {
        'keyword': 'UrgencyOrPriorityAlertsTrial',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Urgency or Priority Alerts (Trial)',
        'retired': 'Retired'
      },
      '0x0040A060': {
        'keyword': 'SequencingIndicatorTrial',
        'vr': 'LO',
        'vm': '1',
        'name': 'Sequencing Indicator (Trial)',
        'retired': 'Retired'
      },
      '0x0040A066': {
        'keyword': 'DocumentIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Document Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A067': {
        'keyword': 'DocumentAuthorTrial',
        'vr': 'PN',
        'vm': '1',
        'name': 'Document Author (Trial)',
        'retired': 'Retired'
      },
      '0x0040A068': {
        'keyword': 'DocumentAuthorIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Document Author Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A070': {
        'keyword': 'IdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A073': {
        'keyword': 'VerifyingObserverSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Verifying Observer Sequence',
        'retired': ''
      },
      '0x0040A074': {
        'keyword': 'ObjectBinaryIdentifierTrial',
        'vr': 'OB',
        'vm': '1',
        'name': 'Object Binary Identifier (Trial)',
        'retired': 'Retired'
      },
      '0x0040A075': {
        'keyword': 'VerifyingObserverName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Verifying Observer Name',
        'retired': ''
      },
      '0x0040A076': {
        'keyword': 'DocumentingObserverIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Documenting Observer Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A078': {
        'keyword': 'AuthorObserverSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Author Observer Sequence',
        'retired': ''
      },
      '0x0040A07A': {
        'keyword': 'ParticipantSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Participant Sequence',
        'retired': ''
      },
      '0x0040A07C': {
        'keyword': 'CustodialOrganizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Custodial Organization Sequence',
        'retired': ''
      },
      '0x0040A080': {
        'keyword': 'ParticipationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Participation Type',
        'retired': ''
      },
      '0x0040A082': {
        'keyword': 'ParticipationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Participation DateTime',
        'retired': ''
      },
      '0x0040A084': {
        'keyword': 'ObserverType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Observer Type',
        'retired': ''
      },
      '0x0040A085': {
        'keyword': 'ProcedureIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A088': {
        'keyword': 'VerifyingObserverIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Verifying Observer Identification Code Sequence',
        'retired': ''
      },
      '0x0040A089': {
        'keyword': 'ObjectDirectoryBinaryIdentifierTrial',
        'vr': 'OB',
        'vm': '1',
        'name': 'Object Directory Binary Identifier (Trial)',
        'retired': 'Retired'
      },
      '0x0040A090': {
        'keyword': 'EquivalentCDADocumentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equivalent CDA Document Sequence',
        'retired': 'Retired'
      },
      '0x0040A0B0': {
        'keyword': 'ReferencedWaveformChannels',
        'vr': 'US',
        'vm': '2-2n',
        'name': 'Referenced Waveform Channels',
        'retired': ''
      },
      '0x0040A110': {
        'keyword': 'DateOfDocumentOrVerbalTransactionTrial',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date of Document or Verbal Transaction (Trial)',
        'retired': 'Retired'
      },
      '0x0040A112': {
        'keyword': 'TimeOfDocumentCreationOrVerbalTransactionTrial',
        'vr': 'TM',
        'vm': '1',
        'name': 'Time of Document Creation or Verbal Transaction (Trial)',
        'retired': 'Retired'
      },
      '0x0040A120': {
        'keyword': 'DateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'DateTime',
        'retired': ''
      },
      '0x0040A121': {
        'keyword': 'Date',
        'vr': 'DA',
        'vm': '1',
        'name': 'Date',
        'retired': ''
      },
      '0x0040A122': {
        'keyword': 'Time',
        'vr': 'TM',
        'vm': '1',
        'name': 'Time',
        'retired': ''
      },
      '0x0040A123': {
        'keyword': 'PersonName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Person Name',
        'retired': ''
      },
      '0x0040A124': {
        'keyword': 'UID',
        'vr': 'UI',
        'vm': '1',
        'name': 'UID',
        'retired': ''
      },
      '0x0040A125': {
        'keyword': 'ReportStatusIDTrial',
        'vr': 'CS',
        'vm': '2',
        'name': 'Report Status ID (Trial)',
        'retired': 'Retired'
      },
      '0x0040A130': {
        'keyword': 'TemporalRangeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Temporal Range Type',
        'retired': ''
      },
      '0x0040A132': {
        'keyword': 'ReferencedSamplePositions',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Referenced Sample Positions',
        'retired': ''
      },
      '0x0040A136': {
        'keyword': 'ReferencedFrameNumbers',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Referenced Frame Numbers',
        'retired': 'Retired'
      },
      '0x0040A138': {
        'keyword': 'ReferencedTimeOffsets',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Referenced Time Offsets',
        'retired': ''
      },
      '0x0040A13A': {
        'keyword': 'ReferencedDateTime',
        'vr': 'DT',
        'vm': '1-n',
        'name': 'Referenced DateTime',
        'retired': ''
      },
      '0x0040A160': {
        'keyword': 'TextValue',
        'vr': 'UT',
        'vm': '1',
        'name': 'Text Value',
        'retired': ''
      },
      '0x0040A161': {
        'keyword': 'FloatingPointValue',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Floating Point Value',
        'retired': ''
      },
      '0x0040A162': {
        'keyword': 'RationalNumeratorValue',
        'vr': 'SL',
        'vm': '1-n',
        'name': 'Rational Numerator Value',
        'retired': ''
      },
      '0x0040A163': {
        'keyword': 'RationalDenominatorValue',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Rational Denominator Value',
        'retired': ''
      },
      '0x0040A167': {
        'keyword': 'ObservationCategoryCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Observation Category Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A168': {
        'keyword': 'ConceptCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Concept Code Sequence',
        'retired': ''
      },
      '0x0040A16A': {
        'keyword': 'BibliographicCitationTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Bibliographic Citation (Trial)',
        'retired': 'Retired'
      },
      '0x0040A170': {
        'keyword': 'PurposeOfReferenceCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Purpose of Reference Code Sequence',
        'retired': ''
      },
      '0x0040A171': {
        'keyword': 'ObservationUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Observation UID',
        'retired': ''
      },
      '0x0040A172': {
        'keyword': 'ReferencedObservationUIDTrial',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Observation UID (Trial)',
        'retired': 'Retired'
      },
      '0x0040A173': {
        'keyword': 'ReferencedObservationClassTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Referenced Observation Class (Trial)',
        'retired': 'Retired'
      },
      '0x0040A174': {
        'keyword': 'ReferencedObjectObservationClassTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Referenced Object Observation Class (Trial)',
        'retired': 'Retired'
      },
      '0x0040A180': {
        'keyword': 'AnnotationGroupNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Annotation Group Number',
        'retired': ''
      },
      '0x0040A192': {
        'keyword': 'ObservationDateTrial',
        'vr': 'DA',
        'vm': '1',
        'name': 'Observation Date (Trial)',
        'retired': 'Retired'
      },
      '0x0040A193': {
        'keyword': 'ObservationTimeTrial',
        'vr': 'TM',
        'vm': '1',
        'name': 'Observation Time (Trial)',
        'retired': 'Retired'
      },
      '0x0040A194': {
        'keyword': 'MeasurementAutomationTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Measurement Automation (Trial)',
        'retired': 'Retired'
      },
      '0x0040A195': {
        'keyword': 'ModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Modifier Code Sequence',
        'retired': ''
      },
      '0x0040A224': {
        'keyword': 'IdentificationDescriptionTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Identification Description (Trial)',
        'retired': 'Retired'
      },
      '0x0040A290': {
        'keyword': 'CoordinatesSetGeometricTypeTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Coordinates Set Geometric Type (Trial)',
        'retired': 'Retired'
      },
      '0x0040A296': {
        'keyword': 'AlgorithmCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Algorithm Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A297': {
        'keyword': 'AlgorithmDescriptionTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Algorithm Description (Trial)',
        'retired': 'Retired'
      },
      '0x0040A29A': {
        'keyword': 'PixelCoordinatesSetTrial',
        'vr': 'SL',
        'vm': '2-2n',
        'name': 'Pixel Coordinates Set (Trial)',
        'retired': 'Retired'
      },
      '0x0040A300': {
        'keyword': 'MeasuredValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measured Value Sequence',
        'retired': ''
      },
      '0x0040A301': {
        'keyword': 'NumericValueQualifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Numeric Value Qualifier Code Sequence',
        'retired': ''
      },
      '0x0040A307': {
        'keyword': 'CurrentObserverTrial',
        'vr': 'PN',
        'vm': '1',
        'name': 'Current Observer (Trial)',
        'retired': 'Retired'
      },
      '0x0040A30A': {
        'keyword': 'NumericValue',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Numeric Value',
        'retired': ''
      },
      '0x0040A313': {
        'keyword': 'ReferencedAccessionSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Accession Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A33A': {
        'keyword': 'ReportStatusCommentTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Report Status Comment (Trial)',
        'retired': 'Retired'
      },
      '0x0040A340': {
        'keyword': 'ProcedureContextSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Context Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A352': {
        'keyword': 'VerbalSourceTrial',
        'vr': 'PN',
        'vm': '1',
        'name': 'Verbal Source (Trial)',
        'retired': 'Retired'
      },
      '0x0040A353': {
        'keyword': 'AddressTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Address (Trial)',
        'retired': 'Retired'
      },
      '0x0040A354': {
        'keyword': 'TelephoneNumberTrial',
        'vr': 'LO',
        'vm': '1',
        'name': 'Telephone Number (Trial)',
        'retired': 'Retired'
      },
      '0x0040A358': {
        'keyword': 'VerbalSourceIdentifierCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Verbal Source Identifier Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A360': {
        'keyword': 'PredecessorDocumentsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Predecessor Documents Sequence',
        'retired': ''
      },
      '0x0040A370': {
        'keyword': 'ReferencedRequestSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Request Sequence',
        'retired': ''
      },
      '0x0040A372': {
        'keyword': 'PerformedProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Procedure Code Sequence',
        'retired': ''
      },
      '0x0040A375': {
        'keyword': 'CurrentRequestedProcedureEvidenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Current Requested Procedure Evidence Sequence',
        'retired': ''
      },
      '0x0040A380': {
        'keyword': 'ReportDetailSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Report Detail Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A385': {
        'keyword': 'PertinentOtherEvidenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pertinent Other Evidence Sequence',
        'retired': ''
      },
      '0x0040A390': {
        'keyword': 'HL7StructuredDocumentReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'HL7 Structured Document Reference Sequence',
        'retired': ''
      },
      '0x0040A402': {
        'keyword': 'ObservationSubjectUIDTrial',
        'vr': 'UI',
        'vm': '1',
        'name': 'Observation Subject UID (Trial)',
        'retired': 'Retired'
      },
      '0x0040A403': {
        'keyword': 'ObservationSubjectClassTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Observation Subject Class (Trial)',
        'retired': 'Retired'
      },
      '0x0040A404': {
        'keyword': 'ObservationSubjectTypeCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Observation Subject Type Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A491': {
        'keyword': 'CompletionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Completion Flag',
        'retired': ''
      },
      '0x0040A492': {
        'keyword': 'CompletionFlagDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Completion Flag Description',
        'retired': ''
      },
      '0x0040A493': {
        'keyword': 'VerificationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Verification Flag',
        'retired': ''
      },
      '0x0040A494': {
        'keyword': 'ArchiveRequested',
        'vr': 'CS',
        'vm': '1',
        'name': 'Archive Requested',
        'retired': ''
      },
      '0x0040A496': {
        'keyword': 'PreliminaryFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Preliminary Flag',
        'retired': ''
      },
      '0x0040A504': {
        'keyword': 'ContentTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Content Template Sequence',
        'retired': ''
      },
      '0x0040A525': {
        'keyword': 'IdenticalDocumentsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Identical Documents Sequence',
        'retired': ''
      },
      '0x0040A600': {
        'keyword': 'ObservationSubjectContextFlagTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Observation Subject Context Flag (Trial)',
        'retired': 'Retired'
      },
      '0x0040A601': {
        'keyword': 'ObserverContextFlagTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Observer Context Flag (Trial)',
        'retired': 'Retired'
      },
      '0x0040A603': {
        'keyword': 'ProcedureContextFlagTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Procedure Context Flag (Trial)',
        'retired': 'Retired'
      },
      '0x0040A730': {
        'keyword': 'ContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Content Sequence',
        'retired': ''
      },
      '0x0040A731': {
        'keyword': 'RelationshipSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Relationship Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A732': {
        'keyword': 'RelationshipTypeCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Relationship Type Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A744': {
        'keyword': 'LanguageCodeSequenceTrial',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Language Code Sequence (Trial)',
        'retired': 'Retired'
      },
      '0x0040A801': {
        'keyword': 'TabulatedValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Tabulated Values Sequence',
        'retired': ''
      },
      '0x0040A802': {
        'keyword': 'NumberOfTableRows',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Table Rows',
        'retired': ''
      },
      '0x0040A803': {
        'keyword': 'NumberOfTableColumns',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Table Columns',
        'retired': ''
      },
      '0x0040A804': {
        'keyword': 'TableRowNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Table Row Number',
        'retired': ''
      },
      '0x0040A805': {
        'keyword': 'TableColumnNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Table Column Number',
        'retired': ''
      },
      '0x0040A806': {
        'keyword': 'TableRowDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Table Row Definition Sequence',
        'retired': ''
      },
      '0x0040A807': {
        'keyword': 'TableColumnDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Table Column Definition Sequence',
        'retired': ''
      },
      '0x0040A808': {
        'keyword': 'CellValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Cell Values Sequence',
        'retired': ''
      },
      '0x0040A992': {
        'keyword': 'UniformResourceLocatorTrial',
        'vr': 'ST',
        'vm': '1',
        'name': 'Uniform Resource Locator (Trial)',
        'retired': 'Retired'
      },
      '0x0040B020': {
        'keyword': 'WaveformAnnotationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Waveform Annotation Sequence',
        'retired': ''
      },
      '0x0040DB00': {
        'keyword': 'TemplateIdentifier',
        'vr': 'CS',
        'vm': '1',
        'name': 'Template Identifier',
        'retired': ''
      },
      '0x0040DB06': {
        'keyword': 'TemplateVersion',
        'vr': 'DT',
        'vm': '1',
        'name': 'Template Version',
        'retired': 'Retired'
      },
      '0x0040DB07': {
        'keyword': 'TemplateLocalVersion',
        'vr': 'DT',
        'vm': '1',
        'name': 'Template Local Version',
        'retired': 'Retired'
      },
      '0x0040DB0B': {
        'keyword': 'TemplateExtensionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Template Extension Flag',
        'retired': 'Retired'
      },
      '0x0040DB0C': {
        'keyword': 'TemplateExtensionOrganizationUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Template Extension Organization UID',
        'retired': 'Retired'
      },
      '0x0040DB0D': {
        'keyword': 'TemplateExtensionCreatorUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Template Extension Creator UID',
        'retired': 'Retired'
      },
      '0x0040DB73': {
        'keyword': 'ReferencedContentItemIdentifier',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Referenced Content Item Identifier',
        'retired': ''
      },
      '0x0040E001': {
        'keyword': 'HL7InstanceIdentifier',
        'vr': 'ST',
        'vm': '1',
        'name': 'HL7 Instance Identifier',
        'retired': ''
      },
      '0x0040E004': {
        'keyword': 'HL7DocumentEffectiveTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'HL7 Document Effective Time',
        'retired': ''
      },
      '0x0040E006': {
        'keyword': 'HL7DocumentTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'HL7 Document Type Code Sequence',
        'retired': ''
      },
      '0x0040E008': {
        'keyword': 'DocumentClassCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Document Class Code Sequence',
        'retired': ''
      },
      '0x0040E010': {
        'keyword': 'RetrieveURI',
        'vr': 'UR',
        'vm': '1',
        'name': 'Retrieve URI',
        'retired': ''
      },
      '0x0040E011': {
        'keyword': 'RetrieveLocationUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Retrieve Location UID',
        'retired': ''
      },
      '0x0040E020': {
        'keyword': 'TypeOfInstances',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Instances',
        'retired': ''
      },
      '0x0040E021': {
        'keyword': 'DICOMRetrievalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DICOM Retrieval Sequence',
        'retired': ''
      },
      '0x0040E022': {
        'keyword': 'DICOMMediaRetrievalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DICOM Media Retrieval Sequence',
        'retired': ''
      },
      '0x0040E023': {
        'keyword': 'WADORetrievalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'WADO Retrieval Sequence',
        'retired': ''
      },
      '0x0040E024': {
        'keyword': 'XDSRetrievalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'XDS Retrieval Sequence',
        'retired': ''
      },
      '0x0040E025': {
        'keyword': 'WADORSRetrievalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'WADO-RS Retrieval Sequence',
        'retired': ''
      },
      '0x0040E030': {
        'keyword': 'RepositoryUniqueID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Repository Unique ID',
        'retired': ''
      },
      '0x0040E031': {
        'keyword': 'HomeCommunityID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Home Community ID',
        'retired': ''
      },
      '0x00420010': {
        'keyword': 'DocumentTitle',
        'vr': 'ST',
        'vm': '1',
        'name': 'Document Title',
        'retired': ''
      },
      '0x00420011': {
        'keyword': 'EncapsulatedDocument',
        'vr': 'OB',
        'vm': '1',
        'name': 'Encapsulated Document',
        'retired': ''
      },
      '0x00420012': {
        'keyword': 'MIMETypeOfEncapsulatedDocument',
        'vr': 'LO',
        'vm': '1',
        'name': 'MIME Type of Encapsulated Document',
        'retired': ''
      },
      '0x00420013': {
        'keyword': 'SourceInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Instance Sequence',
        'retired': ''
      },
      '0x00420014': {
        'keyword': 'ListOfMIMETypes',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'List of MIME Types',
        'retired': ''
      },
      '0x00420015': {
        'keyword': 'EncapsulatedDocumentLength',
        'vr': 'UL',
        'vm': '1',
        'name': 'Encapsulated Document Length',
        'retired': ''
      },
      '0x00440001': {
        'keyword': 'ProductPackageIdentifier',
        'vr': 'ST',
        'vm': '1',
        'name': 'Product Package Identifier',
        'retired': ''
      },
      '0x00440002': {
        'keyword': 'SubstanceAdministrationApproval',
        'vr': 'CS',
        'vm': '1',
        'name': 'Substance Administration Approval',
        'retired': ''
      },
      '0x00440003': {
        'keyword': 'ApprovalStatusFurtherDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Approval Status Further Description',
        'retired': ''
      },
      '0x00440004': {
        'keyword': 'ApprovalStatusDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Approval Status DateTime',
        'retired': ''
      },
      '0x00440007': {
        'keyword': 'ProductTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Product Type Code Sequence',
        'retired': ''
      },
      '0x00440008': {
        'keyword': 'ProductName',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Product Name',
        'retired': ''
      },
      '0x00440009': {
        'keyword': 'ProductDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Product Description',
        'retired': ''
      },
      '0x0044000A': {
        'keyword': 'ProductLotIdentifier',
        'vr': 'LO',
        'vm': '1',
        'name': 'Product Lot Identifier',
        'retired': ''
      },
      '0x0044000B': {
        'keyword': 'ProductExpirationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Product Expiration DateTime',
        'retired': ''
      },
      '0x00440010': {
        'keyword': 'SubstanceAdministrationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Substance Administration DateTime',
        'retired': ''
      },
      '0x00440011': {
        'keyword': 'SubstanceAdministrationNotes',
        'vr': 'LO',
        'vm': '1',
        'name': 'Substance Administration Notes',
        'retired': ''
      },
      '0x00440012': {
        'keyword': 'SubstanceAdministrationDeviceID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Substance Administration Device ID',
        'retired': ''
      },
      '0x00440013': {
        'keyword': 'ProductParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Product Parameter Sequence',
        'retired': ''
      },
      '0x00440019': {
        'keyword': 'SubstanceAdministrationParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Substance Administration Parameter Sequence',
        'retired': ''
      },
      '0x00440100': {
        'keyword': 'ApprovalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Approval Sequence',
        'retired': ''
      },
      '0x00440101': {
        'keyword': 'AssertionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assertion Code Sequence',
        'retired': ''
      },
      '0x00440102': {
        'keyword': 'AssertionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Assertion UID',
        'retired': ''
      },
      '0x00440103': {
        'keyword': 'AsserterIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Asserter Identification Sequence',
        'retired': ''
      },
      '0x00440104': {
        'keyword': 'AssertionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Assertion DateTime',
        'retired': ''
      },
      '0x00440105': {
        'keyword': 'AssertionExpirationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Assertion Expiration DateTime',
        'retired': ''
      },
      '0x00440106': {
        'keyword': 'AssertionComments',
        'vr': 'UT',
        'vm': '1',
        'name': 'Assertion Comments',
        'retired': ''
      },
      '0x00440107': {
        'keyword': 'RelatedAssertionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related Assertion Sequence',
        'retired': ''
      },
      '0x00440108': {
        'keyword': 'ReferencedAssertionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Assertion UID',
        'retired': ''
      },
      '0x00440109': {
        'keyword': 'ApprovalSubjectSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Approval Subject Sequence',
        'retired': ''
      },
      '0x0044010A': {
        'keyword': 'OrganizationalRoleCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Organizational Role Code Sequence',
        'retired': ''
      },
      '0x00460012': {
        'keyword': 'LensDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Lens Description',
        'retired': ''
      },
      '0x00460014': {
        'keyword': 'RightLensSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Right Lens Sequence',
        'retired': ''
      },
      '0x00460015': {
        'keyword': 'LeftLensSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Left Lens Sequence',
        'retired': ''
      },
      '0x00460016': {
        'keyword': 'UnspecifiedLateralityLensSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Unspecified Laterality Lens Sequence',
        'retired': ''
      },
      '0x00460018': {
        'keyword': 'CylinderSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Cylinder Sequence',
        'retired': ''
      },
      '0x00460028': {
        'keyword': 'PrismSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Prism Sequence',
        'retired': ''
      },
      '0x00460030': {
        'keyword': 'HorizontalPrismPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Horizontal Prism Power',
        'retired': ''
      },
      '0x00460032': {
        'keyword': 'HorizontalPrismBase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Horizontal Prism Base',
        'retired': ''
      },
      '0x00460034': {
        'keyword': 'VerticalPrismPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Vertical Prism Power',
        'retired': ''
      },
      '0x00460036': {
        'keyword': 'VerticalPrismBase',
        'vr': 'CS',
        'vm': '1',
        'name': 'Vertical Prism Base',
        'retired': ''
      },
      '0x00460038': {
        'keyword': 'LensSegmentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Lens Segment Type',
        'retired': ''
      },
      '0x00460040': {
        'keyword': 'OpticalTransmittance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Optical Transmittance',
        'retired': ''
      },
      '0x00460042': {
        'keyword': 'ChannelWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Channel Width',
        'retired': ''
      },
      '0x00460044': {
        'keyword': 'PupilSize',
        'vr': 'FD',
        'vm': '1',
        'name': 'Pupil Size',
        'retired': ''
      },
      '0x00460046': {
        'keyword': 'CornealSize',
        'vr': 'FD',
        'vm': '1',
        'name': 'Corneal Size',
        'retired': ''
      },
      '0x00460047': {
        'keyword': 'CornealSizeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Corneal Size Sequence',
        'retired': ''
      },
      '0x00460050': {
        'keyword': 'AutorefractionRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Autorefraction Right Eye Sequence',
        'retired': ''
      },
      '0x00460052': {
        'keyword': 'AutorefractionLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Autorefraction Left Eye Sequence',
        'retired': ''
      },
      '0x00460060': {
        'keyword': 'DistancePupillaryDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Distance Pupillary Distance',
        'retired': ''
      },
      '0x00460062': {
        'keyword': 'NearPupillaryDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Near Pupillary Distance',
        'retired': ''
      },
      '0x00460063': {
        'keyword': 'IntermediatePupillaryDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Intermediate Pupillary Distance',
        'retired': ''
      },
      '0x00460064': {
        'keyword': 'OtherPupillaryDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Other Pupillary Distance',
        'retired': ''
      },
      '0x00460070': {
        'keyword': 'KeratometryRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Keratometry Right Eye Sequence',
        'retired': ''
      },
      '0x00460071': {
        'keyword': 'KeratometryLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Keratometry Left Eye Sequence',
        'retired': ''
      },
      '0x00460074': {
        'keyword': 'SteepKeratometricAxisSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Steep Keratometric Axis Sequence',
        'retired': ''
      },
      '0x00460075': {
        'keyword': 'RadiusOfCurvature',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radius of Curvature',
        'retired': ''
      },
      '0x00460076': {
        'keyword': 'KeratometricPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Keratometric Power',
        'retired': ''
      },
      '0x00460077': {
        'keyword': 'KeratometricAxis',
        'vr': 'FD',
        'vm': '1',
        'name': 'Keratometric Axis',
        'retired': ''
      },
      '0x00460080': {
        'keyword': 'FlatKeratometricAxisSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Flat Keratometric Axis Sequence',
        'retired': ''
      },
      '0x00460092': {
        'keyword': 'BackgroundColor',
        'vr': 'CS',
        'vm': '1',
        'name': 'Background Color',
        'retired': ''
      },
      '0x00460094': {
        'keyword': 'Optotype',
        'vr': 'CS',
        'vm': '1',
        'name': 'Optotype',
        'retired': ''
      },
      '0x00460095': {
        'keyword': 'OptotypePresentation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Optotype Presentation',
        'retired': ''
      },
      '0x00460097': {
        'keyword': 'SubjectiveRefractionRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Subjective Refraction Right Eye Sequence',
        'retired': ''
      },
      '0x00460098': {
        'keyword': 'SubjectiveRefractionLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Subjective Refraction Left Eye Sequence',
        'retired': ''
      },
      '0x00460100': {
        'keyword': 'AddNearSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Add Near Sequence',
        'retired': ''
      },
      '0x00460101': {
        'keyword': 'AddIntermediateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Add Intermediate Sequence',
        'retired': ''
      },
      '0x00460102': {
        'keyword': 'AddOtherSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Add Other Sequence',
        'retired': ''
      },
      '0x00460104': {
        'keyword': 'AddPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Add Power',
        'retired': ''
      },
      '0x00460106': {
        'keyword': 'ViewingDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Viewing Distance',
        'retired': ''
      },
      '0x00460110': {
        'keyword': 'CorneaMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Cornea Measurements Sequence',
        'retired': ''
      },
      '0x00460111': {
        'keyword': 'SourceOfCorneaMeasurementDataCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source of Cornea Measurement Data Code Sequence',
        'retired': ''
      },
      '0x00460112': {
        'keyword': 'SteepCornealAxisSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Steep Corneal Axis Sequence',
        'retired': ''
      },
      '0x00460113': {
        'keyword': 'FlatCornealAxisSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Flat Corneal Axis Sequence',
        'retired': ''
      },
      '0x00460114': {
        'keyword': 'CornealPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Corneal Power',
        'retired': ''
      },
      '0x00460115': {
        'keyword': 'CornealAxis',
        'vr': 'FD',
        'vm': '1',
        'name': 'Corneal Axis',
        'retired': ''
      },
      '0x00460116': {
        'keyword': 'CorneaMeasurementMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Cornea Measurement Method Code Sequence',
        'retired': ''
      },
      '0x00460117': {
        'keyword': 'RefractiveIndexOfCornea',
        'vr': 'FL',
        'vm': '1',
        'name': 'Refractive Index of Cornea',
        'retired': ''
      },
      '0x00460118': {
        'keyword': 'RefractiveIndexOfAqueousHumor',
        'vr': 'FL',
        'vm': '1',
        'name': 'Refractive Index of Aqueous Humor',
        'retired': ''
      },
      '0x00460121': {
        'keyword': 'VisualAcuityTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Acuity Type Code Sequence',
        'retired': ''
      },
      '0x00460122': {
        'keyword': 'VisualAcuityRightEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Acuity Right Eye Sequence',
        'retired': ''
      },
      '0x00460123': {
        'keyword': 'VisualAcuityLeftEyeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Acuity Left Eye Sequence',
        'retired': ''
      },
      '0x00460124': {
        'keyword': 'VisualAcuityBothEyesOpenSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Visual Acuity Both Eyes Open Sequence',
        'retired': ''
      },
      '0x00460125': {
        'keyword': 'ViewingDistanceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Viewing Distance Type',
        'retired': ''
      },
      '0x00460135': {
        'keyword': 'VisualAcuityModifiers',
        'vr': 'SS',
        'vm': '2',
        'name': 'Visual Acuity Modifiers',
        'retired': ''
      },
      '0x00460137': {
        'keyword': 'DecimalVisualAcuity',
        'vr': 'FD',
        'vm': '1',
        'name': 'Decimal Visual Acuity',
        'retired': ''
      },
      '0x00460139': {
        'keyword': 'OptotypeDetailedDefinition',
        'vr': 'LO',
        'vm': '1',
        'name': 'Optotype Detailed Definition',
        'retired': ''
      },
      '0x00460145': {
        'keyword': 'ReferencedRefractiveMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Refractive Measurements Sequence',
        'retired': ''
      },
      '0x00460146': {
        'keyword': 'SpherePower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Sphere Power',
        'retired': ''
      },
      '0x00460147': {
        'keyword': 'CylinderPower',
        'vr': 'FD',
        'vm': '1',
        'name': 'Cylinder Power',
        'retired': ''
      },
      '0x00460201': {
        'keyword': 'CornealTopographySurface',
        'vr': 'CS',
        'vm': '1',
        'name': 'Corneal Topography Surface',
        'retired': ''
      },
      '0x00460202': {
        'keyword': 'CornealVertexLocation',
        'vr': 'FL',
        'vm': '2',
        'name': 'Corneal Vertex Location',
        'retired': ''
      },
      '0x00460203': {
        'keyword': 'PupilCentroidXCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Pupil Centroid X-Coordinate',
        'retired': ''
      },
      '0x00460204': {
        'keyword': 'PupilCentroidYCoordinate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Pupil Centroid Y-Coordinate',
        'retired': ''
      },
      '0x00460205': {
        'keyword': 'EquivalentPupilRadius',
        'vr': 'FL',
        'vm': '1',
        'name': 'Equivalent Pupil Radius',
        'retired': ''
      },
      '0x00460207': {
        'keyword': 'CornealTopographyMapTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Corneal Topography Map Type Code Sequence',
        'retired': ''
      },
      '0x00460208': {
        'keyword': 'VerticesOfTheOutlineOfPupil',
        'vr': 'IS',
        'vm': '2-2n',
        'name': 'Vertices of the Outline of Pupil',
        'retired': ''
      },
      '0x00460210': {
        'keyword': 'CornealTopographyMappingNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Corneal Topography Mapping Normals Sequence',
        'retired': ''
      },
      '0x00460211': {
        'keyword': 'MaximumCornealCurvatureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Maximum Corneal Curvature Sequence',
        'retired': ''
      },
      '0x00460212': {
        'keyword': 'MaximumCornealCurvature',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Corneal Curvature',
        'retired': ''
      },
      '0x00460213': {
        'keyword': 'MaximumCornealCurvatureLocation',
        'vr': 'FL',
        'vm': '2',
        'name': 'Maximum Corneal Curvature Location',
        'retired': ''
      },
      '0x00460215': {
        'keyword': 'MinimumKeratometricSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Minimum Keratometric Sequence',
        'retired': ''
      },
      '0x00460218': {
        'keyword': 'SimulatedKeratometricCylinderSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Simulated Keratometric Cylinder Sequence',
        'retired': ''
      },
      '0x00460220': {
        'keyword': 'AverageCornealPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Average Corneal Power',
        'retired': ''
      },
      '0x00460224': {
        'keyword': 'CornealISValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Corneal I-S Value',
        'retired': ''
      },
      '0x00460227': {
        'keyword': 'AnalyzedArea',
        'vr': 'FL',
        'vm': '1',
        'name': 'Analyzed Area',
        'retired': ''
      },
      '0x00460230': {
        'keyword': 'SurfaceRegularityIndex',
        'vr': 'FL',
        'vm': '1',
        'name': 'Surface Regularity Index',
        'retired': ''
      },
      '0x00460232': {
        'keyword': 'SurfaceAsymmetryIndex',
        'vr': 'FL',
        'vm': '1',
        'name': 'Surface Asymmetry Index',
        'retired': ''
      },
      '0x00460234': {
        'keyword': 'CornealEccentricityIndex',
        'vr': 'FL',
        'vm': '1',
        'name': 'Corneal Eccentricity Index',
        'retired': ''
      },
      '0x00460236': {
        'keyword': 'KeratoconusPredictionIndex',
        'vr': 'FL',
        'vm': '1',
        'name': 'Keratoconus Prediction Index',
        'retired': ''
      },
      '0x00460238': {
        'keyword': 'DecimalPotentialVisualAcuity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Decimal Potential Visual Acuity',
        'retired': ''
      },
      '0x00460242': {
        'keyword': 'CornealTopographyMapQualityEvaluation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Corneal Topography Map Quality Evaluation',
        'retired': ''
      },
      '0x00460244': {
        'keyword': 'SourceImageCornealProcessedDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Image Corneal Processed Data Sequence',
        'retired': ''
      },
      '0x00460247': {
        'keyword': 'CornealPointLocation',
        'vr': 'FL',
        'vm': '3',
        'name': 'Corneal Point Location',
        'retired': ''
      },
      '0x00460248': {
        'keyword': 'CornealPointEstimated',
        'vr': 'CS',
        'vm': '1',
        'name': 'Corneal Point Estimated',
        'retired': ''
      },
      '0x00460249': {
        'keyword': 'AxialPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Axial Power',
        'retired': ''
      },
      '0x00460250': {
        'keyword': 'TangentialPower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Tangential Power',
        'retired': ''
      },
      '0x00460251': {
        'keyword': 'RefractivePower',
        'vr': 'FL',
        'vm': '1',
        'name': 'Refractive Power',
        'retired': ''
      },
      '0x00460252': {
        'keyword': 'RelativeElevation',
        'vr': 'FL',
        'vm': '1',
        'name': 'Relative Elevation',
        'retired': ''
      },
      '0x00460253': {
        'keyword': 'CornealWavefront',
        'vr': 'FL',
        'vm': '1',
        'name': 'Corneal Wavefront',
        'retired': ''
      },
      '0x00480001': {
        'keyword': 'ImagedVolumeWidth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Imaged Volume Width',
        'retired': ''
      },
      '0x00480002': {
        'keyword': 'ImagedVolumeHeight',
        'vr': 'FL',
        'vm': '1',
        'name': 'Imaged Volume Height',
        'retired': ''
      },
      '0x00480003': {
        'keyword': 'ImagedVolumeDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Imaged Volume Depth',
        'retired': ''
      },
      '0x00480006': {
        'keyword': 'TotalPixelMatrixColumns',
        'vr': 'UL',
        'vm': '1',
        'name': 'Total Pixel Matrix Columns',
        'retired': ''
      },
      '0x00480007': {
        'keyword': 'TotalPixelMatrixRows',
        'vr': 'UL',
        'vm': '1',
        'name': 'Total Pixel Matrix Rows',
        'retired': ''
      },
      '0x00480008': {
        'keyword': 'TotalPixelMatrixOriginSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Total Pixel Matrix Origin Sequence',
        'retired': ''
      },
      '0x00480010': {
        'keyword': 'SpecimenLabelInImage',
        'vr': 'CS',
        'vm': '1',
        'name': 'Specimen Label in Image',
        'retired': ''
      },
      '0x00480011': {
        'keyword': 'FocusMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Focus Method',
        'retired': ''
      },
      '0x00480012': {
        'keyword': 'ExtendedDepthOfField',
        'vr': 'CS',
        'vm': '1',
        'name': 'Extended Depth of Field',
        'retired': ''
      },
      '0x00480013': {
        'keyword': 'NumberOfFocalPlanes',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Focal Planes',
        'retired': ''
      },
      '0x00480014': {
        'keyword': 'DistanceBetweenFocalPlanes',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distance Between Focal Planes',
        'retired': ''
      },
      '0x00480015': {
        'keyword': 'RecommendedAbsentPixelCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Recommended Absent Pixel CIELab Value',
        'retired': ''
      },
      '0x00480100': {
        'keyword': 'IlluminatorTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Illuminator Type Code Sequence',
        'retired': ''
      },
      '0x00480102': {
        'keyword': 'ImageOrientationSlide',
        'vr': 'DS',
        'vm': '6',
        'name': 'Image Orientation (Slide)',
        'retired': ''
      },
      '0x00480105': {
        'keyword': 'OpticalPathSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Optical Path Sequence',
        'retired': ''
      },
      '0x00480106': {
        'keyword': 'OpticalPathIdentifier',
        'vr': 'SH',
        'vm': '1',
        'name': 'Optical Path Identifier',
        'retired': ''
      },
      '0x00480107': {
        'keyword': 'OpticalPathDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Optical Path Description',
        'retired': ''
      },
      '0x00480108': {
        'keyword': 'IlluminationColorCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Illumination Color Code Sequence',
        'retired': ''
      },
      '0x00480110': {
        'keyword': 'SpecimenReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Specimen Reference Sequence',
        'retired': ''
      },
      '0x00480111': {
        'keyword': 'CondenserLensPower',
        'vr': 'DS',
        'vm': '1',
        'name': 'Condenser Lens Power',
        'retired': ''
      },
      '0x00480112': {
        'keyword': 'ObjectiveLensPower',
        'vr': 'DS',
        'vm': '1',
        'name': 'Objective Lens Power',
        'retired': ''
      },
      '0x00480113': {
        'keyword': 'ObjectiveLensNumericalAperture',
        'vr': 'DS',
        'vm': '1',
        'name': 'Objective Lens Numerical Aperture',
        'retired': ''
      },
      '0x00480114': {
        'keyword': 'ConfocalMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Confocal Mode',
        'retired': ''
      },
      '0x00480115': {
        'keyword': 'TissueLocation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tissue Location',
        'retired': ''
      },
      '0x00480116': {
        'keyword': 'ConfocalMicroscopyImageFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Confocal Microscopy Image Frame Type Sequence',
        'retired': ''
      },
      '0x00480117': {
        'keyword': 'ImageAcquisitionDepth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Image Acquisition Depth',
        'retired': ''
      },
      '0x00480120': {
        'keyword': 'PaletteColorLookupTableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Palette Color Lookup Table Sequence',
        'retired': ''
      },
      '0x00480200': {
        'keyword': 'ReferencedImageNavigationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Navigation Sequence',
        'retired': 'Retired'
      },
      '0x00480201': {
        'keyword': 'TopLeftHandCornerOfLocalizerArea',
        'vr': 'US',
        'vm': '2',
        'name': 'Top Left Hand Corner of Localizer Area',
        'retired': 'Retired'
      },
      '0x00480202': {
        'keyword': 'BottomRightHandCornerOfLocalizerArea',
        'vr': 'US',
        'vm': '2',
        'name': 'Bottom Right Hand Corner of Localizer Area',
        'retired': 'Retired'
      },
      '0x00480207': {
        'keyword': 'OpticalPathIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Optical Path Identification Sequence',
        'retired': ''
      },
      '0x0048021A': {
        'keyword': 'PlanePositionSlideSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plane Position (Slide) Sequence',
        'retired': ''
      },
      '0x0048021E': {
        'keyword': 'ColumnPositionInTotalImagePixelMatrix',
        'vr': 'SL',
        'vm': '1',
        'name': 'Column Position In Total Image Pixel Matrix',
        'retired': ''
      },
      '0x0048021F': {
        'keyword': 'RowPositionInTotalImagePixelMatrix',
        'vr': 'SL',
        'vm': '1',
        'name': 'Row Position In Total Image Pixel Matrix',
        'retired': ''
      },
      '0x00480301': {
        'keyword': 'PixelOriginInterpretation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pixel Origin Interpretation',
        'retired': ''
      },
      '0x00480302': {
        'keyword': 'NumberOfOpticalPaths',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Optical Paths',
        'retired': ''
      },
      '0x00480303': {
        'keyword': 'TotalPixelMatrixFocalPlanes',
        'vr': 'UL',
        'vm': '1',
        'name': 'Total Pixel Matrix Focal Planes',
        'retired': ''
      },
      '0x00500004': {
        'keyword': 'CalibrationImage',
        'vr': 'CS',
        'vm': '1',
        'name': 'Calibration Image',
        'retired': ''
      },
      '0x00500010': {
        'keyword': 'DeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device Sequence',
        'retired': ''
      },
      '0x00500012': {
        'keyword': 'ContainerComponentTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Container Component Type Code Sequence',
        'retired': ''
      },
      '0x00500013': {
        'keyword': 'ContainerComponentThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Container Component Thickness',
        'retired': ''
      },
      '0x00500014': {
        'keyword': 'DeviceLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Device Length',
        'retired': ''
      },
      '0x00500015': {
        'keyword': 'ContainerComponentWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Container Component Width',
        'retired': ''
      },
      '0x00500016': {
        'keyword': 'DeviceDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Device Diameter',
        'retired': ''
      },
      '0x00500017': {
        'keyword': 'DeviceDiameterUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Device Diameter Units',
        'retired': ''
      },
      '0x00500018': {
        'keyword': 'DeviceVolume',
        'vr': 'DS',
        'vm': '1',
        'name': 'Device Volume',
        'retired': ''
      },
      '0x00500019': {
        'keyword': 'InterMarkerDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Inter-Marker Distance',
        'retired': ''
      },
      '0x0050001A': {
        'keyword': 'ContainerComponentMaterial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Container Component Material',
        'retired': ''
      },
      '0x0050001B': {
        'keyword': 'ContainerComponentID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Container Component ID',
        'retired': ''
      },
      '0x0050001C': {
        'keyword': 'ContainerComponentLength',
        'vr': 'FD',
        'vm': '1',
        'name': 'Container Component Length',
        'retired': ''
      },
      '0x0050001D': {
        'keyword': 'ContainerComponentDiameter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Container Component Diameter',
        'retired': ''
      },
      '0x0050001E': {
        'keyword': 'ContainerComponentDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Container Component Description',
        'retired': ''
      },
      '0x00500020': {
        'keyword': 'DeviceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Device Description',
        'retired': ''
      },
      '0x00500021': {
        'keyword': 'LongDeviceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Long Device Description',
        'retired': ''
      },
      '0x00520001': {
        'keyword': 'ContrastBolusIngredientPercentByVolume',
        'vr': 'FL',
        'vm': '1',
        'name': 'Contrast/Bolus Ingredient Percent by Volume',
        'retired': ''
      },
      '0x00520002': {
        'keyword': 'OCTFocalDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'OCT Focal Distance',
        'retired': ''
      },
      '0x00520003': {
        'keyword': 'BeamSpotSize',
        'vr': 'FD',
        'vm': '1',
        'name': 'Beam Spot Size',
        'retired': ''
      },
      '0x00520004': {
        'keyword': 'EffectiveRefractiveIndex',
        'vr': 'FD',
        'vm': '1',
        'name': 'Effective Refractive Index',
        'retired': ''
      },
      '0x00520006': {
        'keyword': 'OCTAcquisitionDomain',
        'vr': 'CS',
        'vm': '1',
        'name': 'OCT Acquisition Domain',
        'retired': ''
      },
      '0x00520007': {
        'keyword': 'OCTOpticalCenterWavelength',
        'vr': 'FD',
        'vm': '1',
        'name': 'OCT Optical Center Wavelength',
        'retired': ''
      },
      '0x00520008': {
        'keyword': 'AxialResolution',
        'vr': 'FD',
        'vm': '1',
        'name': 'Axial Resolution',
        'retired': ''
      },
      '0x00520009': {
        'keyword': 'RangingDepth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Ranging Depth',
        'retired': ''
      },
      '0x00520011': {
        'keyword': 'ALineRate',
        'vr': 'FD',
        'vm': '1',
        'name': 'A-line Rate',
        'retired': ''
      },
      '0x00520012': {
        'keyword': 'ALinesPerFrame',
        'vr': 'US',
        'vm': '1',
        'name': 'A-lines Per Frame',
        'retired': ''
      },
      '0x00520013': {
        'keyword': 'CatheterRotationalRate',
        'vr': 'FD',
        'vm': '1',
        'name': 'Catheter Rotational Rate',
        'retired': ''
      },
      '0x00520014': {
        'keyword': 'ALinePixelSpacing',
        'vr': 'FD',
        'vm': '1',
        'name': 'A-line Pixel Spacing',
        'retired': ''
      },
      '0x00520016': {
        'keyword': 'ModeOfPercutaneousAccessSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mode of Percutaneous Access Sequence',
        'retired': ''
      },
      '0x00520025': {
        'keyword': 'IntravascularOCTFrameTypeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intravascular OCT Frame Type Sequence',
        'retired': ''
      },
      '0x00520026': {
        'keyword': 'OCTZOffsetApplied',
        'vr': 'CS',
        'vm': '1',
        'name': 'OCT Z Offset Applied',
        'retired': ''
      },
      '0x00520027': {
        'keyword': 'IntravascularFrameContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intravascular Frame Content Sequence',
        'retired': ''
      },
      '0x00520028': {
        'keyword': 'IntravascularLongitudinalDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Intravascular Longitudinal Distance',
        'retired': ''
      },
      '0x00520029': {
        'keyword': 'IntravascularOCTFrameContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intravascular OCT Frame Content Sequence',
        'retired': ''
      },
      '0x00520030': {
        'keyword': 'OCTZOffsetCorrection',
        'vr': 'SS',
        'vm': '1',
        'name': 'OCT Z Offset Correction',
        'retired': ''
      },
      '0x00520031': {
        'keyword': 'CatheterDirectionOfRotation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Catheter Direction of Rotation',
        'retired': ''
      },
      '0x00520033': {
        'keyword': 'SeamLineLocation',
        'vr': 'FD',
        'vm': '1',
        'name': 'Seam Line Location',
        'retired': ''
      },
      '0x00520034': {
        'keyword': 'FirstALineLocation',
        'vr': 'FD',
        'vm': '1',
        'name': 'First A-line Location',
        'retired': ''
      },
      '0x00520036': {
        'keyword': 'SeamLineIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Seam Line Index',
        'retired': ''
      },
      '0x00520038': {
        'keyword': 'NumberOfPaddedALines',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Padded A-lines',
        'retired': ''
      },
      '0x00520039': {
        'keyword': 'InterpolationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Interpolation Type',
        'retired': ''
      },
      '0x0052003A': {
        'keyword': 'RefractiveIndexApplied',
        'vr': 'CS',
        'vm': '1',
        'name': 'Refractive Index Applied',
        'retired': ''
      },
      '0x00540010': {
        'keyword': 'EnergyWindowVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Energy Window Vector',
        'retired': ''
      },
      '0x00540011': {
        'keyword': 'NumberOfEnergyWindows',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Energy Windows',
        'retired': ''
      },
      '0x00540012': {
        'keyword': 'EnergyWindowInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Energy Window Information Sequence',
        'retired': ''
      },
      '0x00540013': {
        'keyword': 'EnergyWindowRangeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Energy Window Range Sequence',
        'retired': ''
      },
      '0x00540014': {
        'keyword': 'EnergyWindowLowerLimit',
        'vr': 'DS',
        'vm': '1',
        'name': 'Energy Window Lower Limit',
        'retired': ''
      },
      '0x00540015': {
        'keyword': 'EnergyWindowUpperLimit',
        'vr': 'DS',
        'vm': '1',
        'name': 'Energy Window Upper Limit',
        'retired': ''
      },
      '0x00540016': {
        'keyword': 'RadiopharmaceuticalInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiopharmaceutical Information Sequence',
        'retired': ''
      },
      '0x00540017': {
        'keyword': 'ResidualSyringeCounts',
        'vr': 'IS',
        'vm': '1',
        'name': 'Residual Syringe Counts',
        'retired': ''
      },
      '0x00540018': {
        'keyword': 'EnergyWindowName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Energy Window Name',
        'retired': ''
      },
      '0x00540020': {
        'keyword': 'DetectorVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Detector Vector',
        'retired': ''
      },
      '0x00540021': {
        'keyword': 'NumberOfDetectors',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Detectors',
        'retired': ''
      },
      '0x00540022': {
        'keyword': 'DetectorInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Detector Information Sequence',
        'retired': ''
      },
      '0x00540030': {
        'keyword': 'PhaseVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Phase Vector',
        'retired': ''
      },
      '0x00540031': {
        'keyword': 'NumberOfPhases',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Phases',
        'retired': ''
      },
      '0x00540032': {
        'keyword': 'PhaseInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Phase Information Sequence',
        'retired': ''
      },
      '0x00540033': {
        'keyword': 'NumberOfFramesInPhase',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Frames in Phase',
        'retired': ''
      },
      '0x00540036': {
        'keyword': 'PhaseDelay',
        'vr': 'IS',
        'vm': '1',
        'name': 'Phase Delay',
        'retired': ''
      },
      '0x00540038': {
        'keyword': 'PauseBetweenFrames',
        'vr': 'IS',
        'vm': '1',
        'name': 'Pause Between Frames',
        'retired': ''
      },
      '0x00540039': {
        'keyword': 'PhaseDescription',
        'vr': 'CS',
        'vm': '1',
        'name': 'Phase Description',
        'retired': ''
      },
      '0x00540050': {
        'keyword': 'RotationVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Rotation Vector',
        'retired': ''
      },
      '0x00540051': {
        'keyword': 'NumberOfRotations',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Rotations',
        'retired': ''
      },
      '0x00540052': {
        'keyword': 'RotationInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Rotation Information Sequence',
        'retired': ''
      },
      '0x00540053': {
        'keyword': 'NumberOfFramesInRotation',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Frames in Rotation',
        'retired': ''
      },
      '0x00540060': {
        'keyword': 'RRIntervalVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'R-R Interval Vector',
        'retired': ''
      },
      '0x00540061': {
        'keyword': 'NumberOfRRIntervals',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of R-R Intervals',
        'retired': ''
      },
      '0x00540062': {
        'keyword': 'GatedInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Gated Information Sequence',
        'retired': ''
      },
      '0x00540063': {
        'keyword': 'DataInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Data Information Sequence',
        'retired': ''
      },
      '0x00540070': {
        'keyword': 'TimeSlotVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Time Slot Vector',
        'retired': ''
      },
      '0x00540071': {
        'keyword': 'NumberOfTimeSlots',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Time Slots',
        'retired': ''
      },
      '0x00540072': {
        'keyword': 'TimeSlotInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Time Slot Information Sequence',
        'retired': ''
      },
      '0x00540073': {
        'keyword': 'TimeSlotTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Time Slot Time',
        'retired': ''
      },
      '0x00540080': {
        'keyword': 'SliceVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Slice Vector',
        'retired': ''
      },
      '0x00540081': {
        'keyword': 'NumberOfSlices',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Slices',
        'retired': ''
      },
      '0x00540090': {
        'keyword': 'AngularViewVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Angular View Vector',
        'retired': ''
      },
      '0x00540100': {
        'keyword': 'TimeSliceVector',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Time Slice Vector',
        'retired': ''
      },
      '0x00540101': {
        'keyword': 'NumberOfTimeSlices',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Time Slices',
        'retired': ''
      },
      '0x00540200': {
        'keyword': 'StartAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Start Angle',
        'retired': ''
      },
      '0x00540202': {
        'keyword': 'TypeOfDetectorMotion',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Detector Motion',
        'retired': ''
      },
      '0x00540210': {
        'keyword': 'TriggerVector',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Trigger Vector',
        'retired': ''
      },
      '0x00540211': {
        'keyword': 'NumberOfTriggersInPhase',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Triggers in Phase',
        'retired': ''
      },
      '0x00540220': {
        'keyword': 'ViewCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'View Code Sequence',
        'retired': ''
      },
      '0x00540222': {
        'keyword': 'ViewModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'View Modifier Code Sequence',
        'retired': ''
      },
      '0x00540300': {
        'keyword': 'RadionuclideCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radionuclide Code Sequence',
        'retired': ''
      },
      '0x00540302': {
        'keyword': 'AdministrationRouteCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Administration Route Code Sequence',
        'retired': ''
      },
      '0x00540304': {
        'keyword': 'RadiopharmaceuticalCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiopharmaceutical Code Sequence',
        'retired': ''
      },
      '0x00540306': {
        'keyword': 'CalibrationDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Calibration Data Sequence',
        'retired': ''
      },
      '0x00540308': {
        'keyword': 'EnergyWindowNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Energy Window Number',
        'retired': ''
      },
      '0x00540400': {
        'keyword': 'ImageID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Image ID',
        'retired': ''
      },
      '0x00540410': {
        'keyword': 'PatientOrientationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Orientation Code Sequence',
        'retired': ''
      },
      '0x00540412': {
        'keyword': 'PatientOrientationModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Orientation Modifier Code Sequence',
        'retired': ''
      },
      '0x00540414': {
        'keyword': 'PatientGantryRelationshipCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Gantry Relationship Code Sequence',
        'retired': ''
      },
      '0x00540500': {
        'keyword': 'SliceProgressionDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Slice Progression Direction',
        'retired': ''
      },
      '0x00540501': {
        'keyword': 'ScanProgressionDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Progression Direction',
        'retired': ''
      },
      '0x00541000': {
        'keyword': 'SeriesType',
        'vr': 'CS',
        'vm': '2',
        'name': 'Series Type',
        'retired': ''
      },
      '0x00541001': {
        'keyword': 'Units',
        'vr': 'CS',
        'vm': '1',
        'name': 'Units',
        'retired': ''
      },
      '0x00541002': {
        'keyword': 'CountsSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Counts Source',
        'retired': ''
      },
      '0x00541004': {
        'keyword': 'ReprojectionMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reprojection Method',
        'retired': ''
      },
      '0x00541006': {
        'keyword': 'SUVType',
        'vr': 'CS',
        'vm': '1',
        'name': 'SUV Type',
        'retired': ''
      },
      '0x00541100': {
        'keyword': 'RandomsCorrectionMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Randoms Correction Method',
        'retired': ''
      },
      '0x00541101': {
        'keyword': 'AttenuationCorrectionMethod',
        'vr': 'LO',
        'vm': '1',
        'name': 'Attenuation Correction Method',
        'retired': ''
      },
      '0x00541102': {
        'keyword': 'DecayCorrection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Decay Correction',
        'retired': ''
      },
      '0x00541103': {
        'keyword': 'ReconstructionMethod',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reconstruction Method',
        'retired': ''
      },
      '0x00541104': {
        'keyword': 'DetectorLinesOfResponseUsed',
        'vr': 'LO',
        'vm': '1',
        'name': 'Detector Lines of Response Used',
        'retired': ''
      },
      '0x00541105': {
        'keyword': 'ScatterCorrectionMethod',
        'vr': 'LO',
        'vm': '1',
        'name': 'Scatter Correction Method',
        'retired': ''
      },
      '0x00541200': {
        'keyword': 'AxialAcceptance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Axial Acceptance',
        'retired': ''
      },
      '0x00541201': {
        'keyword': 'AxialMash',
        'vr': 'IS',
        'vm': '2',
        'name': 'Axial Mash',
        'retired': ''
      },
      '0x00541202': {
        'keyword': 'TransverseMash',
        'vr': 'IS',
        'vm': '1',
        'name': 'Transverse Mash',
        'retired': ''
      },
      '0x00541203': {
        'keyword': 'DetectorElementSize',
        'vr': 'DS',
        'vm': '2',
        'name': 'Detector Element Size',
        'retired': ''
      },
      '0x00541210': {
        'keyword': 'CoincidenceWindowWidth',
        'vr': 'DS',
        'vm': '1',
        'name': 'Coincidence Window Width',
        'retired': ''
      },
      '0x00541220': {
        'keyword': 'SecondaryCountsType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Secondary Counts Type',
        'retired': ''
      },
      '0x00541300': {
        'keyword': 'FrameReferenceTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Frame Reference Time',
        'retired': ''
      },
      '0x00541310': {
        'keyword': 'PrimaryPromptsCountsAccumulated',
        'vr': 'IS',
        'vm': '1',
        'name': 'Primary (Prompts) Counts Accumulated',
        'retired': ''
      },
      '0x00541311': {
        'keyword': 'SecondaryCountsAccumulated',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Secondary Counts Accumulated',
        'retired': ''
      },
      '0x00541320': {
        'keyword': 'SliceSensitivityFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Slice Sensitivity Factor',
        'retired': ''
      },
      '0x00541321': {
        'keyword': 'DecayFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Decay Factor',
        'retired': ''
      },
      '0x00541322': {
        'keyword': 'DoseCalibrationFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dose Calibration Factor',
        'retired': ''
      },
      '0x00541323': {
        'keyword': 'ScatterFractionFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Scatter Fraction Factor',
        'retired': ''
      },
      '0x00541324': {
        'keyword': 'DeadTimeFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dead Time Factor',
        'retired': ''
      },
      '0x00541330': {
        'keyword': 'ImageIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Index',
        'retired': ''
      },
      '0x00541400': {
        'keyword': 'CountsIncluded',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Counts Included',
        'retired': 'Retired'
      },
      '0x00541401': {
        'keyword': 'DeadTimeCorrectionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dead Time Correction Flag',
        'retired': 'Retired'
      },
      '0x00603000': {
        'keyword': 'HistogramSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Histogram Sequence',
        'retired': ''
      },
      '0x00603002': {
        'keyword': 'HistogramNumberOfBins',
        'vr': 'US',
        'vm': '1',
        'name': 'Histogram Number of Bins',
        'retired': ''
      },
      '0x00603004': {
        'keyword': 'HistogramFirstBinValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Histogram First Bin Value',
        'retired': ''
      },
      '0x00603006': {
        'keyword': 'HistogramLastBinValue',
        'vr': 'US or SS',
        'vm': '1',
        'name': 'Histogram Last Bin Value',
        'retired': ''
      },
      '0x00603008': {
        'keyword': 'HistogramBinWidth',
        'vr': 'US',
        'vm': '1',
        'name': 'Histogram Bin Width',
        'retired': ''
      },
      '0x00603010': {
        'keyword': 'HistogramExplanation',
        'vr': 'LO',
        'vm': '1',
        'name': 'Histogram Explanation',
        'retired': ''
      },
      '0x00603020': {
        'keyword': 'HistogramData',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Histogram Data',
        'retired': ''
      },
      '0x00620001': {
        'keyword': 'SegmentationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Segmentation Type',
        'retired': ''
      },
      '0x00620002': {
        'keyword': 'SegmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Sequence',
        'retired': ''
      },
      '0x00620003': {
        'keyword': 'SegmentedPropertyCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segmented Property Category Code Sequence',
        'retired': ''
      },
      '0x00620004': {
        'keyword': 'SegmentNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Segment Number',
        'retired': ''
      },
      '0x00620005': {
        'keyword': 'SegmentLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Segment Label',
        'retired': ''
      },
      '0x00620006': {
        'keyword': 'SegmentDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Segment Description',
        'retired': ''
      },
      '0x00620007': {
        'keyword': 'SegmentationAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segmentation Algorithm Identification Sequence',
        'retired': ''
      },
      '0x00620008': {
        'keyword': 'SegmentAlgorithmType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Segment Algorithm Type',
        'retired': ''
      },
      '0x00620009': {
        'keyword': 'SegmentAlgorithmName',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Segment Algorithm Name',
        'retired': ''
      },
      '0x0062000A': {
        'keyword': 'SegmentIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Identification Sequence',
        'retired': ''
      },
      '0x0062000B': {
        'keyword': 'ReferencedSegmentNumber',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Referenced Segment Number',
        'retired': ''
      },
      '0x0062000C': {
        'keyword': 'RecommendedDisplayGrayscaleValue',
        'vr': 'US',
        'vm': '1',
        'name': 'Recommended Display Grayscale Value',
        'retired': ''
      },
      '0x0062000D': {
        'keyword': 'RecommendedDisplayCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Recommended Display CIELab Value',
        'retired': ''
      },
      '0x0062000E': {
        'keyword': 'MaximumFractionalValue',
        'vr': 'US',
        'vm': '1',
        'name': 'Maximum Fractional Value',
        'retired': ''
      },
      '0x0062000F': {
        'keyword': 'SegmentedPropertyTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segmented Property Type Code Sequence',
        'retired': ''
      },
      '0x00620010': {
        'keyword': 'SegmentationFractionalType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Segmentation Fractional Type',
        'retired': ''
      },
      '0x00620011': {
        'keyword': 'SegmentedPropertyTypeModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segmented Property Type Modifier Code Sequence',
        'retired': ''
      },
      '0x00620012': {
        'keyword': 'UsedSegmentsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Used Segments Sequence',
        'retired': ''
      },
      '0x00620013': {
        'keyword': 'SegmentsOverlap',
        'vr': 'CS',
        'vm': '1',
        'name': 'Segments Overlap',
        'retired': ''
      },
      '0x00620020': {
        'keyword': 'TrackingID',
        'vr': 'UT',
        'vm': '1',
        'name': 'Tracking ID',
        'retired': ''
      },
      '0x00620021': {
        'keyword': 'TrackingUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Tracking UID',
        'retired': ''
      },
      '0x00640002': {
        'keyword': 'DeformableRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Deformable Registration Sequence',
        'retired': ''
      },
      '0x00640003': {
        'keyword': 'SourceFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Source Frame of Reference UID',
        'retired': ''
      },
      '0x00640005': {
        'keyword': 'DeformableRegistrationGridSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Deformable Registration Grid Sequence',
        'retired': ''
      },
      '0x00640007': {
        'keyword': 'GridDimensions',
        'vr': 'UL',
        'vm': '3',
        'name': 'Grid Dimensions',
        'retired': ''
      },
      '0x00640008': {
        'keyword': 'GridResolution',
        'vr': 'FD',
        'vm': '3',
        'name': 'Grid Resolution',
        'retired': ''
      },
      '0x00640009': {
        'keyword': 'VectorGridData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Vector Grid Data',
        'retired': ''
      },
      '0x0064000F': {
        'keyword': 'PreDeformationMatrixRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pre Deformation Matrix Registration Sequence',
        'retired': ''
      },
      '0x00640010': {
        'keyword': 'PostDeformationMatrixRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Post Deformation Matrix Registration Sequence',
        'retired': ''
      },
      '0x00660001': {
        'keyword': 'NumberOfSurfaces',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Surfaces',
        'retired': ''
      },
      '0x00660002': {
        'keyword': 'SurfaceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Sequence',
        'retired': ''
      },
      '0x00660003': {
        'keyword': 'SurfaceNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Surface Number',
        'retired': ''
      },
      '0x00660004': {
        'keyword': 'SurfaceComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Surface Comments',
        'retired': ''
      },
      '0x00660009': {
        'keyword': 'SurfaceProcessing',
        'vr': 'CS',
        'vm': '1',
        'name': 'Surface Processing',
        'retired': ''
      },
      '0x0066000A': {
        'keyword': 'SurfaceProcessingRatio',
        'vr': 'FL',
        'vm': '1',
        'name': 'Surface Processing Ratio',
        'retired': ''
      },
      '0x0066000B': {
        'keyword': 'SurfaceProcessingDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Surface Processing Description',
        'retired': ''
      },
      '0x0066000C': {
        'keyword': 'RecommendedPresentationOpacity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Recommended Presentation Opacity',
        'retired': ''
      },
      '0x0066000D': {
        'keyword': 'RecommendedPresentationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Recommended Presentation Type',
        'retired': ''
      },
      '0x0066000E': {
        'keyword': 'FiniteVolume',
        'vr': 'CS',
        'vm': '1',
        'name': 'Finite Volume',
        'retired': ''
      },
      '0x00660010': {
        'keyword': 'Manifold',
        'vr': 'CS',
        'vm': '1',
        'name': 'Manifold',
        'retired': ''
      },
      '0x00660011': {
        'keyword': 'SurfacePointsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Points Sequence',
        'retired': ''
      },
      '0x00660012': {
        'keyword': 'SurfacePointsNormalsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Points Normals Sequence',
        'retired': ''
      },
      '0x00660013': {
        'keyword': 'SurfaceMeshPrimitivesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Mesh Primitives Sequence',
        'retired': ''
      },
      '0x00660015': {
        'keyword': 'NumberOfSurfacePoints',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Surface Points',
        'retired': ''
      },
      '0x00660016': {
        'keyword': 'PointCoordinatesData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Point Coordinates Data',
        'retired': ''
      },
      '0x00660017': {
        'keyword': 'PointPositionAccuracy',
        'vr': 'FL',
        'vm': '3',
        'name': 'Point Position Accuracy',
        'retired': ''
      },
      '0x00660018': {
        'keyword': 'MeanPointDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Mean Point Distance',
        'retired': ''
      },
      '0x00660019': {
        'keyword': 'MaximumPointDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Maximum Point Distance',
        'retired': ''
      },
      '0x0066001A': {
        'keyword': 'PointsBoundingBoxCoordinates',
        'vr': 'FL',
        'vm': '6',
        'name': 'Points Bounding Box Coordinates',
        'retired': ''
      },
      '0x0066001B': {
        'keyword': 'AxisOfRotation',
        'vr': 'FL',
        'vm': '3',
        'name': 'Axis of Rotation',
        'retired': ''
      },
      '0x0066001C': {
        'keyword': 'CenterOfRotation',
        'vr': 'FL',
        'vm': '3',
        'name': 'Center of Rotation',
        'retired': ''
      },
      '0x0066001E': {
        'keyword': 'NumberOfVectors',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Vectors',
        'retired': ''
      },
      '0x0066001F': {
        'keyword': 'VectorDimensionality',
        'vr': 'US',
        'vm': '1',
        'name': 'Vector Dimensionality',
        'retired': ''
      },
      '0x00660020': {
        'keyword': 'VectorAccuracy',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Vector Accuracy',
        'retired': ''
      },
      '0x00660021': {
        'keyword': 'VectorCoordinateData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Vector Coordinate Data',
        'retired': ''
      },
      '0x00660022': {
        'keyword': 'DoublePointCoordinatesData',
        'vr': 'OD',
        'vm': '1',
        'name': 'Double Point Coordinates Data',
        'retired': ''
      },
      '0x00660023': {
        'keyword': 'TrianglePointIndexList',
        'vr': 'OW',
        'vm': '1',
        'name': 'Triangle Point Index List',
        'retired': 'Retired'
      },
      '0x00660024': {
        'keyword': 'EdgePointIndexList',
        'vr': 'OW',
        'vm': '1',
        'name': 'Edge Point Index List',
        'retired': 'Retired'
      },
      '0x00660025': {
        'keyword': 'VertexPointIndexList',
        'vr': 'OW',
        'vm': '1',
        'name': 'Vertex Point Index List',
        'retired': 'Retired'
      },
      '0x00660026': {
        'keyword': 'TriangleStripSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Triangle Strip Sequence',
        'retired': ''
      },
      '0x00660027': {
        'keyword': 'TriangleFanSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Triangle Fan Sequence',
        'retired': ''
      },
      '0x00660028': {
        'keyword': 'LineSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Line Sequence',
        'retired': ''
      },
      '0x00660029': {
        'keyword': 'PrimitivePointIndexList',
        'vr': 'OW',
        'vm': '1',
        'name': 'Primitive Point Index List',
        'retired': 'Retired'
      },
      '0x0066002A': {
        'keyword': 'SurfaceCount',
        'vr': 'UL',
        'vm': '1',
        'name': 'Surface Count',
        'retired': ''
      },
      '0x0066002B': {
        'keyword': 'ReferencedSurfaceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Surface Sequence',
        'retired': ''
      },
      '0x0066002C': {
        'keyword': 'ReferencedSurfaceNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Referenced Surface Number',
        'retired': ''
      },
      '0x0066002D': {
        'keyword': 'SegmentSurfaceGenerationAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Surface Generation Algorithm Identification Sequence',
        'retired': ''
      },
      '0x0066002E': {
        'keyword': 'SegmentSurfaceSourceInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Surface Source Instance Sequence',
        'retired': ''
      },
      '0x0066002F': {
        'keyword': 'AlgorithmFamilyCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Algorithm Family Code Sequence',
        'retired': ''
      },
      '0x00660030': {
        'keyword': 'AlgorithmNameCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Algorithm Name Code Sequence',
        'retired': ''
      },
      '0x00660031': {
        'keyword': 'AlgorithmVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Algorithm Version',
        'retired': ''
      },
      '0x00660032': {
        'keyword': 'AlgorithmParameters',
        'vr': 'LT',
        'vm': '1',
        'name': 'Algorithm Parameters',
        'retired': ''
      },
      '0x00660034': {
        'keyword': 'FacetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Facet Sequence',
        'retired': ''
      },
      '0x00660035': {
        'keyword': 'SurfaceProcessingAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Processing Algorithm Identification Sequence',
        'retired': ''
      },
      '0x00660036': {
        'keyword': 'AlgorithmName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Algorithm Name',
        'retired': ''
      },
      '0x00660037': {
        'keyword': 'RecommendedPointRadius',
        'vr': 'FL',
        'vm': '1',
        'name': 'Recommended Point Radius',
        'retired': ''
      },
      '0x00660038': {
        'keyword': 'RecommendedLineThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Recommended Line Thickness',
        'retired': ''
      },
      '0x00660040': {
        'keyword': 'LongPrimitivePointIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Long Primitive Point Index List',
        'retired': ''
      },
      '0x00660041': {
        'keyword': 'LongTrianglePointIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Long Triangle Point Index List',
        'retired': ''
      },
      '0x00660042': {
        'keyword': 'LongEdgePointIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Long Edge Point Index List',
        'retired': ''
      },
      '0x00660043': {
        'keyword': 'LongVertexPointIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Long Vertex Point Index List',
        'retired': ''
      },
      '0x00660101': {
        'keyword': 'TrackSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Track Set Sequence',
        'retired': ''
      },
      '0x00660102': {
        'keyword': 'TrackSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Track Sequence',
        'retired': ''
      },
      '0x00660103': {
        'keyword': 'RecommendedDisplayCIELabValueList',
        'vr': 'OW',
        'vm': '1',
        'name': 'Recommended Display CIELab Value List',
        'retired': ''
      },
      '0x00660104': {
        'keyword': 'TrackingAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Tracking Algorithm Identification Sequence',
        'retired': ''
      },
      '0x00660105': {
        'keyword': 'TrackSetNumber',
        'vr': 'UL',
        'vm': '1',
        'name': 'Track Set Number',
        'retired': ''
      },
      '0x00660106': {
        'keyword': 'TrackSetLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Track Set Label',
        'retired': ''
      },
      '0x00660107': {
        'keyword': 'TrackSetDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Track Set Description',
        'retired': ''
      },
      '0x00660108': {
        'keyword': 'TrackSetAnatomicalTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Track Set Anatomical Type Code Sequence',
        'retired': ''
      },
      '0x00660121': {
        'keyword': 'MeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measurements Sequence',
        'retired': ''
      },
      '0x00660124': {
        'keyword': 'TrackSetStatisticsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Track Set Statistics Sequence',
        'retired': ''
      },
      '0x00660125': {
        'keyword': 'FloatingPointValues',
        'vr': 'OF',
        'vm': '1',
        'name': 'Floating Point Values',
        'retired': ''
      },
      '0x00660129': {
        'keyword': 'TrackPointIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Track Point Index List',
        'retired': ''
      },
      '0x00660130': {
        'keyword': 'TrackStatisticsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Track Statistics Sequence',
        'retired': ''
      },
      '0x00660132': {
        'keyword': 'MeasurementValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measurement Values Sequence',
        'retired': ''
      },
      '0x00660133': {
        'keyword': 'DiffusionAcquisitionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Diffusion Acquisition Code Sequence',
        'retired': ''
      },
      '0x00660134': {
        'keyword': 'DiffusionModelCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Diffusion Model Code Sequence',
        'retired': ''
      },
      '0x00686210': {
        'keyword': 'ImplantSize',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Size',
        'retired': ''
      },
      '0x00686221': {
        'keyword': 'ImplantTemplateVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Template Version',
        'retired': ''
      },
      '0x00686222': {
        'keyword': 'ReplacedImplantTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Replaced Implant Template Sequence',
        'retired': ''
      },
      '0x00686223': {
        'keyword': 'ImplantType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Implant Type',
        'retired': ''
      },
      '0x00686224': {
        'keyword': 'DerivationImplantTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Implant Template Sequence',
        'retired': ''
      },
      '0x00686225': {
        'keyword': 'OriginalImplantTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Original Implant Template Sequence',
        'retired': ''
      },
      '0x00686226': {
        'keyword': 'EffectiveDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Effective DateTime',
        'retired': ''
      },
      '0x00686230': {
        'keyword': 'ImplantTargetAnatomySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Target Anatomy Sequence',
        'retired': ''
      },
      '0x00686260': {
        'keyword': 'InformationFromManufacturerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Information From Manufacturer Sequence',
        'retired': ''
      },
      '0x00686265': {
        'keyword': 'NotificationFromManufacturerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Notification From Manufacturer Sequence',
        'retired': ''
      },
      '0x00686270': {
        'keyword': 'InformationIssueDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Information Issue DateTime',
        'retired': ''
      },
      '0x00686280': {
        'keyword': 'InformationSummary',
        'vr': 'ST',
        'vm': '1',
        'name': 'Information Summary',
        'retired': ''
      },
      '0x006862A0': {
        'keyword': 'ImplantRegulatoryDisapprovalCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Regulatory Disapproval Code Sequence',
        'retired': ''
      },
      '0x006862A5': {
        'keyword': 'OverallTemplateSpatialTolerance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Overall Template Spatial Tolerance',
        'retired': ''
      },
      '0x006862C0': {
        'keyword': 'HPGLDocumentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'HPGL Document Sequence',
        'retired': ''
      },
      '0x006862D0': {
        'keyword': 'HPGLDocumentID',
        'vr': 'US',
        'vm': '1',
        'name': 'HPGL Document ID',
        'retired': ''
      },
      '0x006862D5': {
        'keyword': 'HPGLDocumentLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'HPGL Document Label',
        'retired': ''
      },
      '0x006862E0': {
        'keyword': 'ViewOrientationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'View Orientation Code Sequence',
        'retired': ''
      },
      '0x006862F0': {
        'keyword': 'ViewOrientationModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'View Orientation Modifier Code Sequence',
        'retired': ''
      },
      '0x006862F2': {
        'keyword': 'HPGLDocumentScaling',
        'vr': 'FD',
        'vm': '1',
        'name': 'HPGL Document Scaling',
        'retired': ''
      },
      '0x00686300': {
        'keyword': 'HPGLDocument',
        'vr': 'OB',
        'vm': '1',
        'name': 'HPGL Document',
        'retired': ''
      },
      '0x00686310': {
        'keyword': 'HPGLContourPenNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'HPGL Contour Pen Number',
        'retired': ''
      },
      '0x00686320': {
        'keyword': 'HPGLPenSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'HPGL Pen Sequence',
        'retired': ''
      },
      '0x00686330': {
        'keyword': 'HPGLPenNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'HPGL Pen Number',
        'retired': ''
      },
      '0x00686340': {
        'keyword': 'HPGLPenLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'HPGL Pen Label',
        'retired': ''
      },
      '0x00686345': {
        'keyword': 'HPGLPenDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'HPGL Pen Description',
        'retired': ''
      },
      '0x00686346': {
        'keyword': 'RecommendedRotationPoint',
        'vr': 'FD',
        'vm': '2',
        'name': 'Recommended Rotation Point',
        'retired': ''
      },
      '0x00686347': {
        'keyword': 'BoundingRectangle',
        'vr': 'FD',
        'vm': '4',
        'name': 'Bounding Rectangle',
        'retired': ''
      },
      '0x00686350': {
        'keyword': 'ImplantTemplate3DModelSurfaceNumber',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Implant Template 3D Model Surface Number',
        'retired': ''
      },
      '0x00686360': {
        'keyword': 'SurfaceModelDescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Model Description Sequence',
        'retired': ''
      },
      '0x00686380': {
        'keyword': 'SurfaceModelLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Surface Model Label',
        'retired': ''
      },
      '0x00686390': {
        'keyword': 'SurfaceModelScalingFactor',
        'vr': 'FD',
        'vm': '1',
        'name': 'Surface Model Scaling Factor',
        'retired': ''
      },
      '0x006863A0': {
        'keyword': 'MaterialsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Materials Code Sequence',
        'retired': ''
      },
      '0x006863A4': {
        'keyword': 'CoatingMaterialsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Coating Materials Code Sequence',
        'retired': ''
      },
      '0x006863A8': {
        'keyword': 'ImplantTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Type Code Sequence',
        'retired': ''
      },
      '0x006863AC': {
        'keyword': 'FixationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fixation Method Code Sequence',
        'retired': ''
      },
      '0x006863B0': {
        'keyword': 'MatingFeatureSetsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mating Feature Sets Sequence',
        'retired': ''
      },
      '0x006863C0': {
        'keyword': 'MatingFeatureSetID',
        'vr': 'US',
        'vm': '1',
        'name': 'Mating Feature Set ID',
        'retired': ''
      },
      '0x006863D0': {
        'keyword': 'MatingFeatureSetLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Mating Feature Set Label',
        'retired': ''
      },
      '0x006863E0': {
        'keyword': 'MatingFeatureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mating Feature Sequence',
        'retired': ''
      },
      '0x006863F0': {
        'keyword': 'MatingFeatureID',
        'vr': 'US',
        'vm': '1',
        'name': 'Mating Feature ID',
        'retired': ''
      },
      '0x00686400': {
        'keyword': 'MatingFeatureDegreeOfFreedomSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Mating Feature Degree of Freedom Sequence',
        'retired': ''
      },
      '0x00686410': {
        'keyword': 'DegreeOfFreedomID',
        'vr': 'US',
        'vm': '1',
        'name': 'Degree of Freedom ID',
        'retired': ''
      },
      '0x00686420': {
        'keyword': 'DegreeOfFreedomType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Degree of Freedom Type',
        'retired': ''
      },
      '0x00686430': {
        'keyword': 'TwoDMatingFeatureCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': '2D Mating Feature Coordinates Sequence',
        'retired': ''
      },
      '0x00686440': {
        'keyword': 'ReferencedHPGLDocumentID',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced HPGL Document ID',
        'retired': ''
      },
      '0x00686450': {
        'keyword': 'TwoDMatingPoint',
        'vr': 'FD',
        'vm': '2',
        'name': '2D Mating Point',
        'retired': ''
      },
      '0x00686460': {
        'keyword': 'TwoDMatingAxes',
        'vr': 'FD',
        'vm': '4',
        'name': '2D Mating Axes',
        'retired': ''
      },
      '0x00686470': {
        'keyword': 'TwoDDegreeOfFreedomSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': '2D Degree of Freedom Sequence',
        'retired': ''
      },
      '0x00686490': {
        'keyword': 'ThreeDDegreeOfFreedomAxis',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Degree of Freedom Axis',
        'retired': ''
      },
      '0x006864A0': {
        'keyword': 'RangeOfFreedom',
        'vr': 'FD',
        'vm': '2',
        'name': 'Range of Freedom',
        'retired': ''
      },
      '0x006864C0': {
        'keyword': 'ThreeDMatingPoint',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Mating Point',
        'retired': ''
      },
      '0x006864D0': {
        'keyword': 'ThreeDMatingAxes',
        'vr': 'FD',
        'vm': '9',
        'name': '3D Mating Axes',
        'retired': ''
      },
      '0x006864F0': {
        'keyword': 'TwoDDegreeOfFreedomAxis',
        'vr': 'FD',
        'vm': '3',
        'name': '2D Degree of Freedom Axis',
        'retired': ''
      },
      '0x00686500': {
        'keyword': 'PlanningLandmarkPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planning Landmark Point Sequence',
        'retired': ''
      },
      '0x00686510': {
        'keyword': 'PlanningLandmarkLineSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planning Landmark Line Sequence',
        'retired': ''
      },
      '0x00686520': {
        'keyword': 'PlanningLandmarkPlaneSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planning Landmark Plane Sequence',
        'retired': ''
      },
      '0x00686530': {
        'keyword': 'PlanningLandmarkID',
        'vr': 'US',
        'vm': '1',
        'name': 'Planning Landmark ID',
        'retired': ''
      },
      '0x00686540': {
        'keyword': 'PlanningLandmarkDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Planning Landmark Description',
        'retired': ''
      },
      '0x00686545': {
        'keyword': 'PlanningLandmarkIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planning Landmark Identification Code Sequence',
        'retired': ''
      },
      '0x00686550': {
        'keyword': 'TwoDPointCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': '2D Point Coordinates Sequence',
        'retired': ''
      },
      '0x00686560': {
        'keyword': 'TwoDPointCoordinates',
        'vr': 'FD',
        'vm': '2',
        'name': '2D Point Coordinates',
        'retired': ''
      },
      '0x00686590': {
        'keyword': 'ThreeDPointCoordinates',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Point Coordinates',
        'retired': ''
      },
      '0x006865A0': {
        'keyword': 'TwoDLineCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': '2D Line Coordinates Sequence',
        'retired': ''
      },
      '0x006865B0': {
        'keyword': 'TwoDLineCoordinates',
        'vr': 'FD',
        'vm': '4',
        'name': '2D Line Coordinates',
        'retired': ''
      },
      '0x006865D0': {
        'keyword': 'ThreeDLineCoordinates',
        'vr': 'FD',
        'vm': '6',
        'name': '3D Line Coordinates',
        'retired': ''
      },
      '0x006865E0': {
        'keyword': 'TwoDPlaneCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': '2D Plane Coordinates Sequence',
        'retired': ''
      },
      '0x006865F0': {
        'keyword': 'TwoDPlaneIntersection',
        'vr': 'FD',
        'vm': '4',
        'name': '2D Plane Intersection',
        'retired': ''
      },
      '0x00686610': {
        'keyword': 'ThreeDPlaneOrigin',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Plane Origin',
        'retired': ''
      },
      '0x00686620': {
        'keyword': 'ThreeDPlaneNormal',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Plane Normal',
        'retired': ''
      },
      '0x00687001': {
        'keyword': 'ModelModification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Model Modification',
        'retired': ''
      },
      '0x00687002': {
        'keyword': 'ModelMirroring',
        'vr': 'CS',
        'vm': '1',
        'name': 'Model Mirroring',
        'retired': ''
      },
      '0x00687003': {
        'keyword': 'ModelUsageCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Model Usage Code Sequence',
        'retired': ''
      },
      '0x00687004': {
        'keyword': 'ModelGroupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Model Group UID',
        'retired': ''
      },
      '0x00687005': {
        'keyword': 'RelativeURIReferenceWithinEncapsulatedDocument',
        'vr': 'UR',
        'vm': '1',
        'name': 'Relative URI Reference Within Encapsulated Document',
        'retired': ''
      },
      '0x006A0001': {
        'keyword': 'AnnotationCoordinateType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Coordinate Type',
        'retired': ''
      },
      '0x006A0002': {
        'keyword': 'AnnotationGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Group Sequence',
        'retired': ''
      },
      '0x006A0003': {
        'keyword': 'AnnotationGroupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Annotation Group UID',
        'retired': ''
      },
      '0x006A0005': {
        'keyword': 'AnnotationGroupLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Annotation Group Label',
        'retired': ''
      },
      '0x006A0006': {
        'keyword': 'AnnotationGroupDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Annotation Group Description',
        'retired': ''
      },
      '0x006A0007': {
        'keyword': 'AnnotationGroupGenerationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Group Generation Type',
        'retired': ''
      },
      '0x006A0008': {
        'keyword': 'AnnotationGroupAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Group Algorithm Identification Sequence',
        'retired': ''
      },
      '0x006A0009': {
        'keyword': 'AnnotationPropertyCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Property Category Code Sequence',
        'retired': ''
      },
      '0x006A000A': {
        'keyword': 'AnnotationPropertyTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Property Type Code Sequence',
        'retired': ''
      },
      '0x006A000B': {
        'keyword': 'AnnotationPropertyTypeModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Property Type Modifier Code Sequence',
        'retired': ''
      },
      '0x006A000C': {
        'keyword': 'NumberOfAnnotations',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Annotations',
        'retired': ''
      },
      '0x006A000D': {
        'keyword': 'AnnotationAppliesToAllOpticalPaths',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Applies to All Optical Paths',
        'retired': ''
      },
      '0x006A000E': {
        'keyword': 'ReferencedOpticalPathIdentifier',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Referenced Optical Path Identifier',
        'retired': ''
      },
      '0x006A000F': {
        'keyword': 'AnnotationAppliesToAllZPlanes',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Applies to All Z Planes',
        'retired': ''
      },
      '0x006A0010': {
        'keyword': 'CommonZCoordinateValue',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Common Z Coordinate Value',
        'retired': ''
      },
      '0x006A0011': {
        'keyword': 'AnnotationIndexList',
        'vr': 'OL',
        'vm': '1',
        'name': 'Annotation Index List',
        'retired': ''
      },
      '0x00700001': {
        'keyword': 'GraphicAnnotationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Graphic Annotation Sequence',
        'retired': ''
      },
      '0x00700002': {
        'keyword': 'GraphicLayer',
        'vr': 'CS',
        'vm': '1',
        'name': 'Graphic Layer',
        'retired': ''
      },
      '0x00700003': {
        'keyword': 'BoundingBoxAnnotationUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bounding Box Annotation Units',
        'retired': ''
      },
      '0x00700004': {
        'keyword': 'AnchorPointAnnotationUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Anchor Point Annotation Units',
        'retired': ''
      },
      '0x00700005': {
        'keyword': 'GraphicAnnotationUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Graphic Annotation Units',
        'retired': ''
      },
      '0x00700006': {
        'keyword': 'UnformattedTextValue',
        'vr': 'ST',
        'vm': '1',
        'name': 'Unformatted Text Value',
        'retired': ''
      },
      '0x00700008': {
        'keyword': 'TextObjectSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Text Object Sequence',
        'retired': ''
      },
      '0x00700009': {
        'keyword': 'GraphicObjectSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Graphic Object Sequence',
        'retired': ''
      },
      '0x00700010': {
        'keyword': 'BoundingBoxTopLeftHandCorner',
        'vr': 'FL',
        'vm': '2',
        'name': 'Bounding Box Top Left Hand Corner',
        'retired': ''
      },
      '0x00700011': {
        'keyword': 'BoundingBoxBottomRightHandCorner',
        'vr': 'FL',
        'vm': '2',
        'name': 'Bounding Box Bottom Right Hand Corner',
        'retired': ''
      },
      '0x00700012': {
        'keyword': 'BoundingBoxTextHorizontalJustification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bounding Box Text Horizontal Justification',
        'retired': ''
      },
      '0x00700014': {
        'keyword': 'AnchorPoint',
        'vr': 'FL',
        'vm': '2',
        'name': 'Anchor Point',
        'retired': ''
      },
      '0x00700015': {
        'keyword': 'AnchorPointVisibility',
        'vr': 'CS',
        'vm': '1',
        'name': 'Anchor Point Visibility',
        'retired': ''
      },
      '0x00700020': {
        'keyword': 'GraphicDimensions',
        'vr': 'US',
        'vm': '1',
        'name': 'Graphic Dimensions',
        'retired': ''
      },
      '0x00700021': {
        'keyword': 'NumberOfGraphicPoints',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Graphic Points',
        'retired': ''
      },
      '0x00700022': {
        'keyword': 'GraphicData',
        'vr': 'FL',
        'vm': '2-n',
        'name': 'Graphic Data',
        'retired': ''
      },
      '0x00700023': {
        'keyword': 'GraphicType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Graphic Type',
        'retired': ''
      },
      '0x00700024': {
        'keyword': 'GraphicFilled',
        'vr': 'CS',
        'vm': '1',
        'name': 'Graphic Filled',
        'retired': ''
      },
      '0x00700040': {
        'keyword': 'ImageRotationRetired',
        'vr': 'IS',
        'vm': '1',
        'name': 'Image Rotation (Retired)',
        'retired': 'Retired'
      },
      '0x00700041': {
        'keyword': 'ImageHorizontalFlip',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Horizontal Flip',
        'retired': ''
      },
      '0x00700042': {
        'keyword': 'ImageRotation',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Rotation',
        'retired': ''
      },
      '0x00700050': {
        'keyword': 'DisplayedAreaTopLeftHandCornerTrial',
        'vr': 'US',
        'vm': '2',
        'name': 'Displayed Area Top Left Hand Corner (Trial)',
        'retired': 'Retired'
      },
      '0x00700051': {
        'keyword': 'DisplayedAreaBottomRightHandCornerTrial',
        'vr': 'US',
        'vm': '2',
        'name': 'Displayed Area Bottom Right Hand Corner (Trial)',
        'retired': 'Retired'
      },
      '0x00700052': {
        'keyword': 'DisplayedAreaTopLeftHandCorner',
        'vr': 'SL',
        'vm': '2',
        'name': 'Displayed Area Top Left Hand Corner',
        'retired': ''
      },
      '0x00700053': {
        'keyword': 'DisplayedAreaBottomRightHandCorner',
        'vr': 'SL',
        'vm': '2',
        'name': 'Displayed Area Bottom Right Hand Corner',
        'retired': ''
      },
      '0x0070005A': {
        'keyword': 'DisplayedAreaSelectionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Displayed Area Selection Sequence',
        'retired': ''
      },
      '0x00700060': {
        'keyword': 'GraphicLayerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Graphic Layer Sequence',
        'retired': ''
      },
      '0x00700062': {
        'keyword': 'GraphicLayerOrder',
        'vr': 'IS',
        'vm': '1',
        'name': 'Graphic Layer Order',
        'retired': ''
      },
      '0x00700066': {
        'keyword': 'GraphicLayerRecommendedDisplayGrayscaleValue',
        'vr': 'US',
        'vm': '1',
        'name': 'Graphic Layer Recommended Display Grayscale Value',
        'retired': ''
      },
      '0x00700067': {
        'keyword': 'GraphicLayerRecommendedDisplayRGBValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Graphic Layer Recommended Display RGB Value',
        'retired': 'Retired'
      },
      '0x00700068': {
        'keyword': 'GraphicLayerDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Graphic Layer Description',
        'retired': ''
      },
      '0x00700080': {
        'keyword': 'ContentLabel',
        'vr': 'CS',
        'vm': '1',
        'name': 'Content Label',
        'retired': ''
      },
      '0x00700081': {
        'keyword': 'ContentDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Content Description',
        'retired': ''
      },
      '0x00700082': {
        'keyword': 'PresentationCreationDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Presentation Creation Date',
        'retired': ''
      },
      '0x00700083': {
        'keyword': 'PresentationCreationTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Presentation Creation Time',
        'retired': ''
      },
      '0x00700084': {
        'keyword': 'ContentCreatorName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Content Creator\'s Name',
        'retired': ''
      },
      '0x00700086': {
        'keyword': 'ContentCreatorIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Content Creator\'s Identification Code Sequence',
        'retired': ''
      },
      '0x00700087': {
        'keyword': 'AlternateContentDescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Alternate Content Description Sequence',
        'retired': ''
      },
      '0x00700100': {
        'keyword': 'PresentationSizeMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation Size Mode',
        'retired': ''
      },
      '0x00700101': {
        'keyword': 'PresentationPixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Presentation Pixel Spacing',
        'retired': ''
      },
      '0x00700102': {
        'keyword': 'PresentationPixelAspectRatio',
        'vr': 'IS',
        'vm': '2',
        'name': 'Presentation Pixel Aspect Ratio',
        'retired': ''
      },
      '0x00700103': {
        'keyword': 'PresentationPixelMagnificationRatio',
        'vr': 'FL',
        'vm': '1',
        'name': 'Presentation Pixel Magnification Ratio',
        'retired': ''
      },
      '0x00700207': {
        'keyword': 'GraphicGroupLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Graphic Group Label',
        'retired': ''
      },
      '0x00700208': {
        'keyword': 'GraphicGroupDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Graphic Group Description',
        'retired': ''
      },
      '0x00700209': {
        'keyword': 'CompoundGraphicSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Compound Graphic Sequence',
        'retired': ''
      },
      '0x00700226': {
        'keyword': 'CompoundGraphicInstanceID',
        'vr': 'UL',
        'vm': '1',
        'name': 'Compound Graphic Instance ID',
        'retired': ''
      },
      '0x00700227': {
        'keyword': 'FontName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Font Name',
        'retired': ''
      },
      '0x00700228': {
        'keyword': 'FontNameType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Font Name Type',
        'retired': ''
      },
      '0x00700229': {
        'keyword': 'CSSFontName',
        'vr': 'LO',
        'vm': '1',
        'name': 'CSS Font Name',
        'retired': ''
      },
      '0x00700230': {
        'keyword': 'RotationAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Rotation Angle',
        'retired': ''
      },
      '0x00700231': {
        'keyword': 'TextStyleSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Text Style Sequence',
        'retired': ''
      },
      '0x00700232': {
        'keyword': 'LineStyleSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Line Style Sequence',
        'retired': ''
      },
      '0x00700233': {
        'keyword': 'FillStyleSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fill Style Sequence',
        'retired': ''
      },
      '0x00700234': {
        'keyword': 'GraphicGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Graphic Group Sequence',
        'retired': ''
      },
      '0x00700241': {
        'keyword': 'TextColorCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Text Color CIELab Value',
        'retired': ''
      },
      '0x00700242': {
        'keyword': 'HorizontalAlignment',
        'vr': 'CS',
        'vm': '1',
        'name': 'Horizontal Alignment',
        'retired': ''
      },
      '0x00700243': {
        'keyword': 'VerticalAlignment',
        'vr': 'CS',
        'vm': '1',
        'name': 'Vertical Alignment',
        'retired': ''
      },
      '0x00700244': {
        'keyword': 'ShadowStyle',
        'vr': 'CS',
        'vm': '1',
        'name': 'Shadow Style',
        'retired': ''
      },
      '0x00700245': {
        'keyword': 'ShadowOffsetX',
        'vr': 'FL',
        'vm': '1',
        'name': 'Shadow Offset X',
        'retired': ''
      },
      '0x00700246': {
        'keyword': 'ShadowOffsetY',
        'vr': 'FL',
        'vm': '1',
        'name': 'Shadow Offset Y',
        'retired': ''
      },
      '0x00700247': {
        'keyword': 'ShadowColorCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Shadow Color CIELab Value',
        'retired': ''
      },
      '0x00700248': {
        'keyword': 'Underlined',
        'vr': 'CS',
        'vm': '1',
        'name': 'Underlined',
        'retired': ''
      },
      '0x00700249': {
        'keyword': 'Bold',
        'vr': 'CS',
        'vm': '1',
        'name': 'Bold',
        'retired': ''
      },
      '0x00700250': {
        'keyword': 'Italic',
        'vr': 'CS',
        'vm': '1',
        'name': 'Italic',
        'retired': ''
      },
      '0x00700251': {
        'keyword': 'PatternOnColorCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Pattern On Color CIELab Value',
        'retired': ''
      },
      '0x00700252': {
        'keyword': 'PatternOffColorCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Pattern Off Color CIELab Value',
        'retired': ''
      },
      '0x00700253': {
        'keyword': 'LineThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Line Thickness',
        'retired': ''
      },
      '0x00700254': {
        'keyword': 'LineDashingStyle',
        'vr': 'CS',
        'vm': '1',
        'name': 'Line Dashing Style',
        'retired': ''
      },
      '0x00700255': {
        'keyword': 'LinePattern',
        'vr': 'UL',
        'vm': '1',
        'name': 'Line Pattern',
        'retired': ''
      },
      '0x00700256': {
        'keyword': 'FillPattern',
        'vr': 'OB',
        'vm': '1',
        'name': 'Fill Pattern',
        'retired': ''
      },
      '0x00700257': {
        'keyword': 'FillMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fill Mode',
        'retired': ''
      },
      '0x00700258': {
        'keyword': 'ShadowOpacity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Shadow Opacity',
        'retired': ''
      },
      '0x00700261': {
        'keyword': 'GapLength',
        'vr': 'FL',
        'vm': '1',
        'name': 'Gap Length',
        'retired': ''
      },
      '0x00700262': {
        'keyword': 'DiameterOfVisibility',
        'vr': 'FL',
        'vm': '1',
        'name': 'Diameter of Visibility',
        'retired': ''
      },
      '0x00700273': {
        'keyword': 'RotationPoint',
        'vr': 'FL',
        'vm': '2',
        'name': 'Rotation Point',
        'retired': ''
      },
      '0x00700274': {
        'keyword': 'TickAlignment',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tick Alignment',
        'retired': ''
      },
      '0x00700278': {
        'keyword': 'ShowTickLabel',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Tick Label',
        'retired': ''
      },
      '0x00700279': {
        'keyword': 'TickLabelAlignment',
        'vr': 'CS',
        'vm': '1',
        'name': 'Tick Label Alignment',
        'retired': ''
      },
      '0x00700282': {
        'keyword': 'CompoundGraphicUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compound Graphic Units',
        'retired': ''
      },
      '0x00700284': {
        'keyword': 'PatternOnOpacity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Pattern On Opacity',
        'retired': ''
      },
      '0x00700285': {
        'keyword': 'PatternOffOpacity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Pattern Off Opacity',
        'retired': ''
      },
      '0x00700287': {
        'keyword': 'MajorTicksSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Major Ticks Sequence',
        'retired': ''
      },
      '0x00700288': {
        'keyword': 'TickPosition',
        'vr': 'FL',
        'vm': '1',
        'name': 'Tick Position',
        'retired': ''
      },
      '0x00700289': {
        'keyword': 'TickLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Tick Label',
        'retired': ''
      },
      '0x00700294': {
        'keyword': 'CompoundGraphicType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compound Graphic Type',
        'retired': ''
      },
      '0x00700295': {
        'keyword': 'GraphicGroupID',
        'vr': 'UL',
        'vm': '1',
        'name': 'Graphic Group ID',
        'retired': ''
      },
      '0x00700306': {
        'keyword': 'ShapeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Shape Type',
        'retired': ''
      },
      '0x00700308': {
        'keyword': 'RegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Registration Sequence',
        'retired': ''
      },
      '0x00700309': {
        'keyword': 'MatrixRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Matrix Registration Sequence',
        'retired': ''
      },
      '0x0070030A': {
        'keyword': 'MatrixSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Matrix Sequence',
        'retired': ''
      },
      '0x0070030B': {
        'keyword':
            'FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix',
        'vr': 'FD',
        'vm': '16',
        'name':
            'Frame of Reference to Displayed Coordinate System Transformation Matrix',
        'retired': ''
      },
      '0x0070030C': {
        'keyword': 'FrameOfReferenceTransformationMatrixType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Frame of Reference Transformation Matrix Type',
        'retired': ''
      },
      '0x0070030D': {
        'keyword': 'RegistrationTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Registration Type Code Sequence',
        'retired': ''
      },
      '0x0070030F': {
        'keyword': 'FiducialDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Fiducial Description',
        'retired': ''
      },
      '0x00700310': {
        'keyword': 'FiducialIdentifier',
        'vr': 'SH',
        'vm': '1',
        'name': 'Fiducial Identifier',
        'retired': ''
      },
      '0x00700311': {
        'keyword': 'FiducialIdentifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fiducial Identifier Code Sequence',
        'retired': ''
      },
      '0x00700312': {
        'keyword': 'ContourUncertaintyRadius',
        'vr': 'FD',
        'vm': '1',
        'name': 'Contour Uncertainty Radius',
        'retired': ''
      },
      '0x00700314': {
        'keyword': 'UsedFiducialsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Used Fiducials Sequence',
        'retired': ''
      },
      '0x00700315': {
        'keyword': 'UsedRTStructureSetROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Used RT Structure Set ROI Sequence',
        'retired': ''
      },
      '0x00700318': {
        'keyword': 'GraphicCoordinatesDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Graphic Coordinates Data Sequence',
        'retired': ''
      },
      '0x0070031A': {
        'keyword': 'FiducialUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Fiducial UID',
        'retired': ''
      },
      '0x0070031B': {
        'keyword': 'ReferencedFiducialUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Fiducial UID',
        'retired': ''
      },
      '0x0070031C': {
        'keyword': 'FiducialSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fiducial Set Sequence',
        'retired': ''
      },
      '0x0070031E': {
        'keyword': 'FiducialSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fiducial Sequence',
        'retired': ''
      },
      '0x0070031F': {
        'keyword': 'FiducialsPropertyCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fiducials Property Category Code Sequence',
        'retired': ''
      },
      '0x00700401': {
        'keyword': 'GraphicLayerRecommendedDisplayCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Graphic Layer Recommended Display CIELab Value',
        'retired': ''
      },
      '0x00700402': {
        'keyword': 'BlendingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Blending Sequence',
        'retired': ''
      },
      '0x00700403': {
        'keyword': 'RelativeOpacity',
        'vr': 'FL',
        'vm': '1',
        'name': 'Relative Opacity',
        'retired': ''
      },
      '0x00700404': {
        'keyword': 'ReferencedSpatialRegistrationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Spatial Registration Sequence',
        'retired': ''
      },
      '0x00700405': {
        'keyword': 'BlendingPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blending Position',
        'retired': ''
      },
      '0x00701101': {
        'keyword': 'PresentationDisplayCollectionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Presentation Display Collection UID',
        'retired': ''
      },
      '0x00701102': {
        'keyword': 'PresentationSequenceCollectionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Presentation Sequence Collection UID',
        'retired': ''
      },
      '0x00701103': {
        'keyword': 'PresentationSequencePositionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Presentation Sequence Position Index',
        'retired': ''
      },
      '0x00701104': {
        'keyword': 'RenderedImageReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Rendered Image Reference Sequence',
        'retired': ''
      },
      '0x00701201': {
        'keyword': 'VolumetricPresentationStateInputSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volumetric Presentation State Input Sequence',
        'retired': ''
      },
      '0x00701202': {
        'keyword': 'PresentationInputType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation Input Type',
        'retired': ''
      },
      '0x00701203': {
        'keyword': 'InputSequencePositionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Input Sequence Position Index',
        'retired': ''
      },
      '0x00701204': {
        'keyword': 'Crop',
        'vr': 'CS',
        'vm': '1',
        'name': 'Crop',
        'retired': ''
      },
      '0x00701205': {
        'keyword': 'CroppingSpecificationIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Cropping Specification Index',
        'retired': ''
      },
      '0x00701206': {
        'keyword': 'CompositingMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compositing Method',
        'retired': 'Retired'
      },
      '0x00701207': {
        'keyword': 'VolumetricPresentationInputNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Volumetric Presentation Input Number',
        'retired': ''
      },
      '0x00701208': {
        'keyword': 'ImageVolumeGeometry',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Volume Geometry',
        'retired': ''
      },
      '0x00701209': {
        'keyword': 'VolumetricPresentationInputSetUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Volumetric Presentation Input Set UID',
        'retired': ''
      },
      '0x0070120A': {
        'keyword': 'VolumetricPresentationInputSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volumetric Presentation Input Set Sequence',
        'retired': ''
      },
      '0x0070120B': {
        'keyword': 'GlobalCrop',
        'vr': 'CS',
        'vm': '1',
        'name': 'Global Crop',
        'retired': ''
      },
      '0x0070120C': {
        'keyword': 'GlobalCroppingSpecificationIndex',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Global Cropping Specification Index',
        'retired': ''
      },
      '0x0070120D': {
        'keyword': 'RenderingMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Rendering Method',
        'retired': ''
      },
      '0x00701301': {
        'keyword': 'VolumeCroppingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volume Cropping Sequence',
        'retired': ''
      },
      '0x00701302': {
        'keyword': 'VolumeCroppingMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Volume Cropping Method',
        'retired': ''
      },
      '0x00701303': {
        'keyword': 'BoundingBoxCrop',
        'vr': 'FD',
        'vm': '6',
        'name': 'Bounding Box Crop',
        'retired': ''
      },
      '0x00701304': {
        'keyword': 'ObliqueCroppingPlaneSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Oblique Cropping Plane Sequence',
        'retired': ''
      },
      '0x00701305': {
        'keyword': 'Plane',
        'vr': 'FD',
        'vm': '4',
        'name': 'Plane',
        'retired': ''
      },
      '0x00701306': {
        'keyword': 'PlaneNormal',
        'vr': 'FD',
        'vm': '3',
        'name': 'Plane Normal',
        'retired': ''
      },
      '0x00701309': {
        'keyword': 'CroppingSpecificationNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Cropping Specification Number',
        'retired': ''
      },
      '0x00701501': {
        'keyword': 'MultiPlanarReconstructionStyle',
        'vr': 'CS',
        'vm': '1',
        'name': 'Multi-Planar Reconstruction Style',
        'retired': ''
      },
      '0x00701502': {
        'keyword': 'MPRThicknessType',
        'vr': 'CS',
        'vm': '1',
        'name': 'MPR Thickness Type',
        'retired': ''
      },
      '0x00701503': {
        'keyword': 'MPRSlabThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'MPR Slab Thickness',
        'retired': ''
      },
      '0x00701505': {
        'keyword': 'MPRTopLeftHandCorner',
        'vr': 'FD',
        'vm': '3',
        'name': 'MPR Top Left Hand Corner',
        'retired': ''
      },
      '0x00701507': {
        'keyword': 'MPRViewWidthDirection',
        'vr': 'FD',
        'vm': '3',
        'name': 'MPR View Width Direction',
        'retired': ''
      },
      '0x00701508': {
        'keyword': 'MPRViewWidth',
        'vr': 'FD',
        'vm': '1',
        'name': 'MPR View Width',
        'retired': ''
      },
      '0x0070150C': {
        'keyword': 'NumberOfVolumetricCurvePoints',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Volumetric Curve Points',
        'retired': ''
      },
      '0x0070150D': {
        'keyword': 'VolumetricCurvePoints',
        'vr': 'OD',
        'vm': '1',
        'name': 'Volumetric Curve Points',
        'retired': ''
      },
      '0x00701511': {
        'keyword': 'MPRViewHeightDirection',
        'vr': 'FD',
        'vm': '3',
        'name': 'MPR View Height Direction',
        'retired': ''
      },
      '0x00701512': {
        'keyword': 'MPRViewHeight',
        'vr': 'FD',
        'vm': '1',
        'name': 'MPR View Height',
        'retired': ''
      },
      '0x00701602': {
        'keyword': 'RenderProjection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Render Projection',
        'retired': ''
      },
      '0x00701603': {
        'keyword': 'ViewpointPosition',
        'vr': 'FD',
        'vm': '3',
        'name': 'Viewpoint Position',
        'retired': ''
      },
      '0x00701604': {
        'keyword': 'ViewpointLookAtPoint',
        'vr': 'FD',
        'vm': '3',
        'name': 'Viewpoint LookAt Point',
        'retired': ''
      },
      '0x00701605': {
        'keyword': 'ViewpointUpDirection',
        'vr': 'FD',
        'vm': '3',
        'name': 'Viewpoint Up Direction',
        'retired': ''
      },
      '0x00701606': {
        'keyword': 'RenderFieldOfView',
        'vr': 'FD',
        'vm': '6',
        'name': 'Render Field of View',
        'retired': ''
      },
      '0x00701607': {
        'keyword': 'SamplingStepSize',
        'vr': 'FD',
        'vm': '1',
        'name': 'Sampling Step Size',
        'retired': ''
      },
      '0x00701701': {
        'keyword': 'ShadingStyle',
        'vr': 'CS',
        'vm': '1',
        'name': 'Shading Style',
        'retired': ''
      },
      '0x00701702': {
        'keyword': 'AmbientReflectionIntensity',
        'vr': 'FD',
        'vm': '1',
        'name': 'Ambient Reflection Intensity',
        'retired': ''
      },
      '0x00701703': {
        'keyword': 'LightDirection',
        'vr': 'FD',
        'vm': '3',
        'name': 'Light Direction',
        'retired': ''
      },
      '0x00701704': {
        'keyword': 'DiffuseReflectionIntensity',
        'vr': 'FD',
        'vm': '1',
        'name': 'Diffuse Reflection Intensity',
        'retired': ''
      },
      '0x00701705': {
        'keyword': 'SpecularReflectionIntensity',
        'vr': 'FD',
        'vm': '1',
        'name': 'Specular Reflection Intensity',
        'retired': ''
      },
      '0x00701706': {
        'keyword': 'Shininess',
        'vr': 'FD',
        'vm': '1',
        'name': 'Shininess',
        'retired': ''
      },
      '0x00701801': {
        'keyword': 'PresentationStateClassificationComponentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Presentation State Classification Component Sequence',
        'retired': ''
      },
      '0x00701802': {
        'keyword': 'ComponentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Component Type',
        'retired': ''
      },
      '0x00701803': {
        'keyword': 'ComponentInputSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Component Input Sequence',
        'retired': ''
      },
      '0x00701804': {
        'keyword': 'VolumetricPresentationInputIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Volumetric Presentation Input Index',
        'retired': ''
      },
      '0x00701805': {
        'keyword': 'PresentationStateCompositorComponentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Presentation State Compositor Component Sequence',
        'retired': ''
      },
      '0x00701806': {
        'keyword': 'WeightingTransferFunctionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Weighting Transfer Function Sequence',
        'retired': ''
      },
      '0x00701807': {
        'keyword': 'WeightingLookupTableDescriptor',
        'vr': 'US',
        'vm': '3',
        'name': 'Weighting Lookup Table Descriptor',
        'retired': ''
      },
      '0x00701808': {
        'keyword': 'WeightingLookupTableData',
        'vr': 'OB',
        'vm': '1',
        'name': 'Weighting Lookup Table Data',
        'retired': ''
      },
      '0x00701901': {
        'keyword': 'VolumetricAnnotationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volumetric Annotation Sequence',
        'retired': ''
      },
      '0x00701903': {
        'keyword': 'ReferencedStructuredContextSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Structured Context Sequence',
        'retired': ''
      },
      '0x00701904': {
        'keyword': 'ReferencedContentItem',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Content Item',
        'retired': ''
      },
      '0x00701905': {
        'keyword': 'VolumetricPresentationInputAnnotationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volumetric Presentation Input Annotation Sequence',
        'retired': ''
      },
      '0x00701907': {
        'keyword': 'AnnotationClipping',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Clipping',
        'retired': ''
      },
      '0x00701A01': {
        'keyword': 'PresentationAnimationStyle',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation Animation Style',
        'retired': ''
      },
      '0x00701A03': {
        'keyword': 'RecommendedAnimationRate',
        'vr': 'FD',
        'vm': '1',
        'name': 'Recommended Animation Rate',
        'retired': ''
      },
      '0x00701A04': {
        'keyword': 'AnimationCurveSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Animation Curve Sequence',
        'retired': ''
      },
      '0x00701A05': {
        'keyword': 'AnimationStepSize',
        'vr': 'FD',
        'vm': '1',
        'name': 'Animation Step Size',
        'retired': ''
      },
      '0x00701A06': {
        'keyword': 'SwivelRange',
        'vr': 'FD',
        'vm': '1',
        'name': 'Swivel Range',
        'retired': ''
      },
      '0x00701A07': {
        'keyword': 'VolumetricCurveUpDirections',
        'vr': 'OD',
        'vm': '1',
        'name': 'Volumetric Curve Up Directions',
        'retired': ''
      },
      '0x00701A08': {
        'keyword': 'VolumeStreamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Volume Stream Sequence',
        'retired': ''
      },
      '0x00701A09': {
        'keyword': 'RGBATransferFunctionDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'RGBA Transfer Function Description',
        'retired': ''
      },
      '0x00701B01': {
        'keyword': 'AdvancedBlendingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Advanced Blending Sequence',
        'retired': ''
      },
      '0x00701B02': {
        'keyword': 'BlendingInputNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Blending Input Number',
        'retired': ''
      },
      '0x00701B03': {
        'keyword': 'BlendingDisplayInputSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Blending Display Input Sequence',
        'retired': ''
      },
      '0x00701B04': {
        'keyword': 'BlendingDisplaySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Blending Display Sequence',
        'retired': ''
      },
      '0x00701B06': {
        'keyword': 'BlendingMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blending Mode',
        'retired': ''
      },
      '0x00701B07': {
        'keyword': 'TimeSeriesBlending',
        'vr': 'CS',
        'vm': '1',
        'name': 'Time Series Blending',
        'retired': ''
      },
      '0x00701B08': {
        'keyword': 'GeometryForDisplay',
        'vr': 'CS',
        'vm': '1',
        'name': 'Geometry for Display',
        'retired': ''
      },
      '0x00701B11': {
        'keyword': 'ThresholdSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Threshold Sequence',
        'retired': ''
      },
      '0x00701B12': {
        'keyword': 'ThresholdValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Threshold Value Sequence',
        'retired': ''
      },
      '0x00701B13': {
        'keyword': 'ThresholdType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Threshold Type',
        'retired': ''
      },
      '0x00701B14': {
        'keyword': 'ThresholdValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Threshold Value',
        'retired': ''
      },
      '0x00720002': {
        'keyword': 'HangingProtocolName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Hanging Protocol Name',
        'retired': ''
      },
      '0x00720004': {
        'keyword': 'HangingProtocolDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hanging Protocol Description',
        'retired': ''
      },
      '0x00720006': {
        'keyword': 'HangingProtocolLevel',
        'vr': 'CS',
        'vm': '1',
        'name': 'Hanging Protocol Level',
        'retired': ''
      },
      '0x00720008': {
        'keyword': 'HangingProtocolCreator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hanging Protocol Creator',
        'retired': ''
      },
      '0x0072000A': {
        'keyword': 'HangingProtocolCreationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Hanging Protocol Creation DateTime',
        'retired': ''
      },
      '0x0072000C': {
        'keyword': 'HangingProtocolDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Hanging Protocol Definition Sequence',
        'retired': ''
      },
      '0x0072000E': {
        'keyword': 'HangingProtocolUserIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Hanging Protocol User Identification Code Sequence',
        'retired': ''
      },
      '0x00720010': {
        'keyword': 'HangingProtocolUserGroupName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Hanging Protocol User Group Name',
        'retired': ''
      },
      '0x00720012': {
        'keyword': 'SourceHangingProtocolSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Hanging Protocol Sequence',
        'retired': ''
      },
      '0x00720014': {
        'keyword': 'NumberOfPriorsReferenced',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Priors Referenced',
        'retired': ''
      },
      '0x00720020': {
        'keyword': 'ImageSetsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Sets Sequence',
        'retired': ''
      },
      '0x00720022': {
        'keyword': 'ImageSetSelectorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Set Selector Sequence',
        'retired': ''
      },
      '0x00720024': {
        'keyword': 'ImageSetSelectorUsageFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Set Selector Usage Flag',
        'retired': ''
      },
      '0x00720026': {
        'keyword': 'SelectorAttribute',
        'vr': 'AT',
        'vm': '1',
        'name': 'Selector Attribute',
        'retired': ''
      },
      '0x00720028': {
        'keyword': 'SelectorValueNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Selector Value Number',
        'retired': ''
      },
      '0x00720030': {
        'keyword': 'TimeBasedImageSetsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Time Based Image Sets Sequence',
        'retired': ''
      },
      '0x00720032': {
        'keyword': 'ImageSetNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Set Number',
        'retired': ''
      },
      '0x00720034': {
        'keyword': 'ImageSetSelectorCategory',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Set Selector Category',
        'retired': ''
      },
      '0x00720038': {
        'keyword': 'RelativeTime',
        'vr': 'US',
        'vm': '2',
        'name': 'Relative Time',
        'retired': ''
      },
      '0x0072003A': {
        'keyword': 'RelativeTimeUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Relative Time Units',
        'retired': ''
      },
      '0x0072003C': {
        'keyword': 'AbstractPriorValue',
        'vr': 'SS',
        'vm': '2',
        'name': 'Abstract Prior Value',
        'retired': ''
      },
      '0x0072003E': {
        'keyword': 'AbstractPriorCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Abstract Prior Code Sequence',
        'retired': ''
      },
      '0x00720040': {
        'keyword': 'ImageSetLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Image Set Label',
        'retired': ''
      },
      '0x00720050': {
        'keyword': 'SelectorAttributeVR',
        'vr': 'CS',
        'vm': '1',
        'name': 'Selector Attribute VR',
        'retired': ''
      },
      '0x00720052': {
        'keyword': 'SelectorSequencePointer',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Selector Sequence Pointer',
        'retired': ''
      },
      '0x00720054': {
        'keyword': 'SelectorSequencePointerPrivateCreator',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Selector Sequence Pointer Private Creator',
        'retired': ''
      },
      '0x00720056': {
        'keyword': 'SelectorAttributePrivateCreator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Selector Attribute Private Creator',
        'retired': ''
      },
      '0x0072005E': {
        'keyword': 'SelectorAEValue',
        'vr': 'AE',
        'vm': '1-n',
        'name': 'Selector AE Value',
        'retired': ''
      },
      '0x0072005F': {
        'keyword': 'SelectorASValue',
        'vr': 'AS',
        'vm': '1-n',
        'name': 'Selector AS Value',
        'retired': ''
      },
      '0x00720060': {
        'keyword': 'SelectorATValue',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Selector AT Value',
        'retired': ''
      },
      '0x00720061': {
        'keyword': 'SelectorDAValue',
        'vr': 'DA',
        'vm': '1-n',
        'name': 'Selector DA Value',
        'retired': ''
      },
      '0x00720062': {
        'keyword': 'SelectorCSValue',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Selector CS Value',
        'retired': ''
      },
      '0x00720063': {
        'keyword': 'SelectorDTValue',
        'vr': 'DT',
        'vm': '1-n',
        'name': 'Selector DT Value',
        'retired': ''
      },
      '0x00720064': {
        'keyword': 'SelectorISValue',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Selector IS Value',
        'retired': ''
      },
      '0x00720065': {
        'keyword': 'SelectorOBValue',
        'vr': 'OB',
        'vm': '1',
        'name': 'Selector OB Value',
        'retired': ''
      },
      '0x00720066': {
        'keyword': 'SelectorLOValue',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Selector LO Value',
        'retired': ''
      },
      '0x00720067': {
        'keyword': 'SelectorOFValue',
        'vr': 'OF',
        'vm': '1',
        'name': 'Selector OF Value',
        'retired': ''
      },
      '0x00720068': {
        'keyword': 'SelectorLTValue',
        'vr': 'LT',
        'vm': '1',
        'name': 'Selector LT Value',
        'retired': ''
      },
      '0x00720069': {
        'keyword': 'SelectorOWValue',
        'vr': 'OW',
        'vm': '1',
        'name': 'Selector OW Value',
        'retired': ''
      },
      '0x0072006A': {
        'keyword': 'SelectorPNValue',
        'vr': 'PN',
        'vm': '1-n',
        'name': 'Selector PN Value',
        'retired': ''
      },
      '0x0072006B': {
        'keyword': 'SelectorTMValue',
        'vr': 'TM',
        'vm': '1-n',
        'name': 'Selector TM Value',
        'retired': ''
      },
      '0x0072006C': {
        'keyword': 'SelectorSHValue',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Selector SH Value',
        'retired': ''
      },
      '0x0072006D': {
        'keyword': 'SelectorUNValue',
        'vr': 'UN',
        'vm': '1',
        'name': 'Selector UN Value',
        'retired': ''
      },
      '0x0072006E': {
        'keyword': 'SelectorSTValue',
        'vr': 'ST',
        'vm': '1',
        'name': 'Selector ST Value',
        'retired': ''
      },
      '0x0072006F': {
        'keyword': 'SelectorUCValue',
        'vr': 'UC',
        'vm': '1-n',
        'name': 'Selector UC Value',
        'retired': ''
      },
      '0x00720070': {
        'keyword': 'SelectorUTValue',
        'vr': 'UT',
        'vm': '1',
        'name': 'Selector UT Value',
        'retired': ''
      },
      '0x00720071': {
        'keyword': 'SelectorURValue',
        'vr': 'UR',
        'vm': '1',
        'name': 'Selector UR Value',
        'retired': ''
      },
      '0x00720072': {
        'keyword': 'SelectorDSValue',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Selector DS Value',
        'retired': ''
      },
      '0x00720073': {
        'keyword': 'SelectorODValue',
        'vr': 'OD',
        'vm': '1',
        'name': 'Selector OD Value',
        'retired': ''
      },
      '0x00720074': {
        'keyword': 'SelectorFDValue',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Selector FD Value',
        'retired': ''
      },
      '0x00720075': {
        'keyword': 'SelectorOLValue',
        'vr': 'OL',
        'vm': '1',
        'name': 'Selector OL Value',
        'retired': ''
      },
      '0x00720076': {
        'keyword': 'SelectorFLValue',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Selector FL Value',
        'retired': ''
      },
      '0x00720078': {
        'keyword': 'SelectorULValue',
        'vr': 'UL',
        'vm': '1-n',
        'name': 'Selector UL Value',
        'retired': ''
      },
      '0x0072007A': {
        'keyword': 'SelectorUSValue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Selector US Value',
        'retired': ''
      },
      '0x0072007C': {
        'keyword': 'SelectorSLValue',
        'vr': 'SL',
        'vm': '1-n',
        'name': 'Selector SL Value',
        'retired': ''
      },
      '0x0072007E': {
        'keyword': 'SelectorSSValue',
        'vr': 'SS',
        'vm': '1-n',
        'name': 'Selector SS Value',
        'retired': ''
      },
      '0x0072007F': {
        'keyword': 'SelectorUIValue',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Selector UI Value',
        'retired': ''
      },
      '0x00720080': {
        'keyword': 'SelectorCodeSequenceValue',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Selector Code Sequence Value',
        'retired': ''
      },
      '0x00720081': {
        'keyword': 'SelectorOVValue',
        'vr': 'OV',
        'vm': '1',
        'name': 'Selector OV Value',
        'retired': ''
      },
      '0x00720082': {
        'keyword': 'SelectorSVValue',
        'vr': 'SV',
        'vm': '1-n',
        'name': 'Selector SV Value',
        'retired': ''
      },
      '0x00720083': {
        'keyword': 'SelectorUVValue',
        'vr': 'UV',
        'vm': '1-n',
        'name': 'Selector UV Value',
        'retired': ''
      },
      '0x00720100': {
        'keyword': 'NumberOfScreens',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Screens',
        'retired': ''
      },
      '0x00720102': {
        'keyword': 'NominalScreenDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Nominal Screen Definition Sequence',
        'retired': ''
      },
      '0x00720104': {
        'keyword': 'NumberOfVerticalPixels',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Vertical Pixels',
        'retired': ''
      },
      '0x00720106': {
        'keyword': 'NumberOfHorizontalPixels',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Horizontal Pixels',
        'retired': ''
      },
      '0x00720108': {
        'keyword': 'DisplayEnvironmentSpatialPosition',
        'vr': 'FD',
        'vm': '4',
        'name': 'Display Environment Spatial Position',
        'retired': ''
      },
      '0x0072010A': {
        'keyword': 'ScreenMinimumGrayscaleBitDepth',
        'vr': 'US',
        'vm': '1',
        'name': 'Screen Minimum Grayscale Bit Depth',
        'retired': ''
      },
      '0x0072010C': {
        'keyword': 'ScreenMinimumColorBitDepth',
        'vr': 'US',
        'vm': '1',
        'name': 'Screen Minimum Color Bit Depth',
        'retired': ''
      },
      '0x0072010E': {
        'keyword': 'ApplicationMaximumRepaintTime',
        'vr': 'US',
        'vm': '1',
        'name': 'Application Maximum Repaint Time',
        'retired': ''
      },
      '0x00720200': {
        'keyword': 'DisplaySetsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Display Sets Sequence',
        'retired': ''
      },
      '0x00720202': {
        'keyword': 'DisplaySetNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Display Set Number',
        'retired': ''
      },
      '0x00720203': {
        'keyword': 'DisplaySetLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Display Set Label',
        'retired': ''
      },
      '0x00720204': {
        'keyword': 'DisplaySetPresentationGroup',
        'vr': 'US',
        'vm': '1',
        'name': 'Display Set Presentation Group',
        'retired': ''
      },
      '0x00720206': {
        'keyword': 'DisplaySetPresentationGroupDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Display Set Presentation Group Description',
        'retired': ''
      },
      '0x00720208': {
        'keyword': 'PartialDataDisplayHandling',
        'vr': 'CS',
        'vm': '1',
        'name': 'Partial Data Display Handling',
        'retired': ''
      },
      '0x00720210': {
        'keyword': 'SynchronizedScrollingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Synchronized Scrolling Sequence',
        'retired': ''
      },
      '0x00720212': {
        'keyword': 'DisplaySetScrollingGroup',
        'vr': 'US',
        'vm': '2-n',
        'name': 'Display Set Scrolling Group',
        'retired': ''
      },
      '0x00720214': {
        'keyword': 'NavigationIndicatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Navigation Indicator Sequence',
        'retired': ''
      },
      '0x00720216': {
        'keyword': 'NavigationDisplaySet',
        'vr': 'US',
        'vm': '1',
        'name': 'Navigation Display Set',
        'retired': ''
      },
      '0x00720218': {
        'keyword': 'ReferenceDisplaySets',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Reference Display Sets',
        'retired': ''
      },
      '0x00720300': {
        'keyword': 'ImageBoxesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Boxes Sequence',
        'retired': ''
      },
      '0x00720302': {
        'keyword': 'ImageBoxNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Number',
        'retired': ''
      },
      '0x00720304': {
        'keyword': 'ImageBoxLayoutType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Box Layout Type',
        'retired': ''
      },
      '0x00720306': {
        'keyword': 'ImageBoxTileHorizontalDimension',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Tile Horizontal Dimension',
        'retired': ''
      },
      '0x00720308': {
        'keyword': 'ImageBoxTileVerticalDimension',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Tile Vertical Dimension',
        'retired': ''
      },
      '0x00720310': {
        'keyword': 'ImageBoxScrollDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Box Scroll Direction',
        'retired': ''
      },
      '0x00720312': {
        'keyword': 'ImageBoxSmallScrollType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Box Small Scroll Type',
        'retired': ''
      },
      '0x00720314': {
        'keyword': 'ImageBoxSmallScrollAmount',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Small Scroll Amount',
        'retired': ''
      },
      '0x00720316': {
        'keyword': 'ImageBoxLargeScrollType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Box Large Scroll Type',
        'retired': ''
      },
      '0x00720318': {
        'keyword': 'ImageBoxLargeScrollAmount',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Large Scroll Amount',
        'retired': ''
      },
      '0x00720320': {
        'keyword': 'ImageBoxOverlapPriority',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Overlap Priority',
        'retired': ''
      },
      '0x00720330': {
        'keyword': 'CineRelativeToRealTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Cine Relative to Real-Time',
        'retired': ''
      },
      '0x00720400': {
        'keyword': 'FilterOperationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Filter Operations Sequence',
        'retired': ''
      },
      '0x00720402': {
        'keyword': 'FilterByCategory',
        'vr': 'CS',
        'vm': '1',
        'name': 'Filter-by Category',
        'retired': ''
      },
      '0x00720404': {
        'keyword': 'FilterByAttributePresence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Filter-by Attribute Presence',
        'retired': ''
      },
      '0x00720406': {
        'keyword': 'FilterByOperator',
        'vr': 'CS',
        'vm': '1',
        'name': 'Filter-by Operator',
        'retired': ''
      },
      '0x00720420': {
        'keyword': 'StructuredDisplayBackgroundCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Structured Display Background CIELab Value',
        'retired': ''
      },
      '0x00720421': {
        'keyword': 'EmptyImageBoxCIELabValue',
        'vr': 'US',
        'vm': '3',
        'name': 'Empty Image Box CIELab Value',
        'retired': ''
      },
      '0x00720422': {
        'keyword': 'StructuredDisplayImageBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Structured Display Image Box Sequence',
        'retired': ''
      },
      '0x00720424': {
        'keyword': 'StructuredDisplayTextBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Structured Display Text Box Sequence',
        'retired': ''
      },
      '0x00720427': {
        'keyword': 'ReferencedFirstFrameSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced First Frame Sequence',
        'retired': ''
      },
      '0x00720430': {
        'keyword': 'ImageBoxSynchronizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Box Synchronization Sequence',
        'retired': ''
      },
      '0x00720432': {
        'keyword': 'SynchronizedImageBoxList',
        'vr': 'US',
        'vm': '2-n',
        'name': 'Synchronized Image Box List',
        'retired': ''
      },
      '0x00720434': {
        'keyword': 'TypeOfSynchronization',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Synchronization',
        'retired': ''
      },
      '0x00720500': {
        'keyword': 'BlendingOperationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Blending Operation Type',
        'retired': ''
      },
      '0x00720510': {
        'keyword': 'ReformattingOperationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reformatting Operation Type',
        'retired': ''
      },
      '0x00720512': {
        'keyword': 'ReformattingThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Reformatting Thickness',
        'retired': ''
      },
      '0x00720514': {
        'keyword': 'ReformattingInterval',
        'vr': 'FD',
        'vm': '1',
        'name': 'Reformatting Interval',
        'retired': ''
      },
      '0x00720516': {
        'keyword': 'ReformattingOperationInitialViewDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reformatting Operation Initial View Direction',
        'retired': ''
      },
      '0x00720520': {
        'keyword': 'ThreeDRenderingType',
        'vr': 'CS',
        'vm': '1-n',
        'name': '3D Rendering Type',
        'retired': ''
      },
      '0x00720600': {
        'keyword': 'SortingOperationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Sorting Operations Sequence',
        'retired': ''
      },
      '0x00720602': {
        'keyword': 'SortByCategory',
        'vr': 'CS',
        'vm': '1',
        'name': 'Sort-by Category',
        'retired': ''
      },
      '0x00720604': {
        'keyword': 'SortingDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Sorting Direction',
        'retired': ''
      },
      '0x00720700': {
        'keyword': 'DisplaySetPatientOrientation',
        'vr': 'CS',
        'vm': '2',
        'name': 'Display Set Patient Orientation',
        'retired': ''
      },
      '0x00720702': {
        'keyword': 'VOIType',
        'vr': 'CS',
        'vm': '1',
        'name': 'VOI Type',
        'retired': ''
      },
      '0x00720704': {
        'keyword': 'PseudoColorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Pseudo-Color Type',
        'retired': ''
      },
      '0x00720705': {
        'keyword': 'PseudoColorPaletteInstanceReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pseudo-Color Palette Instance Reference Sequence',
        'retired': ''
      },
      '0x00720706': {
        'keyword': 'ShowGrayscaleInverted',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Grayscale Inverted',
        'retired': ''
      },
      '0x00720710': {
        'keyword': 'ShowImageTrueSizeFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Image True Size Flag',
        'retired': ''
      },
      '0x00720712': {
        'keyword': 'ShowGraphicAnnotationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Graphic Annotation Flag',
        'retired': ''
      },
      '0x00720714': {
        'keyword': 'ShowPatientDemographicsFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Patient Demographics Flag',
        'retired': ''
      },
      '0x00720716': {
        'keyword': 'ShowAcquisitionTechniquesFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Show Acquisition Techniques Flag',
        'retired': ''
      },
      '0x00720717': {
        'keyword': 'DisplaySetHorizontalJustification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Display Set Horizontal Justification',
        'retired': ''
      },
      '0x00720718': {
        'keyword': 'DisplaySetVerticalJustification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Display Set Vertical Justification',
        'retired': ''
      },
      '0x00740120': {
        'keyword': 'ContinuationStartMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Continuation Start Meterset',
        'retired': ''
      },
      '0x00740121': {
        'keyword': 'ContinuationEndMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Continuation End Meterset',
        'retired': ''
      },
      '0x00741000': {
        'keyword': 'ProcedureStepState',
        'vr': 'CS',
        'vm': '1',
        'name': 'Procedure Step State',
        'retired': ''
      },
      '0x00741002': {
        'keyword': 'ProcedureStepProgressInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Step Progress Information Sequence',
        'retired': ''
      },
      '0x00741004': {
        'keyword': 'ProcedureStepProgress',
        'vr': 'DS',
        'vm': '1',
        'name': 'Procedure Step Progress',
        'retired': ''
      },
      '0x00741006': {
        'keyword': 'ProcedureStepProgressDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Procedure Step Progress Description',
        'retired': ''
      },
      '0x00741007': {
        'keyword': 'ProcedureStepProgressParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Step Progress Parameters Sequence',
        'retired': ''
      },
      '0x00741008': {
        'keyword': 'ProcedureStepCommunicationsURISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Step Communications URI Sequence',
        'retired': ''
      },
      '0x0074100A': {
        'keyword': 'ContactURI',
        'vr': 'UR',
        'vm': '1',
        'name': 'Contact URI',
        'retired': ''
      },
      '0x0074100C': {
        'keyword': 'ContactDisplayName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Contact Display Name',
        'retired': ''
      },
      '0x0074100E': {
        'keyword': 'ProcedureStepDiscontinuationReasonCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Step Discontinuation Reason Code Sequence',
        'retired': ''
      },
      '0x00741020': {
        'keyword': 'BeamTaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Task Sequence',
        'retired': ''
      },
      '0x00741022': {
        'keyword': 'BeamTaskType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Task Type',
        'retired': ''
      },
      '0x00741024': {
        'keyword': 'BeamOrderIndexTrial',
        'vr': 'IS',
        'vm': '1',
        'name': 'Beam Order Index (Trial)',
        'retired': 'Retired'
      },
      '0x00741025': {
        'keyword': 'AutosequenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Autosequence Flag',
        'retired': ''
      },
      '0x00741026': {
        'keyword': 'TableTopVerticalAdjustedPosition',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Vertical Adjusted Position',
        'retired': ''
      },
      '0x00741027': {
        'keyword': 'TableTopLongitudinalAdjustedPosition',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Longitudinal Adjusted Position',
        'retired': ''
      },
      '0x00741028': {
        'keyword': 'TableTopLateralAdjustedPosition',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Lateral Adjusted Position',
        'retired': ''
      },
      '0x0074102A': {
        'keyword': 'PatientSupportAdjustedAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Patient Support Adjusted Angle',
        'retired': ''
      },
      '0x0074102B': {
        'keyword': 'TableTopEccentricAdjustedAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Eccentric Adjusted Angle',
        'retired': ''
      },
      '0x0074102C': {
        'keyword': 'TableTopPitchAdjustedAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Pitch Adjusted Angle',
        'retired': ''
      },
      '0x0074102D': {
        'keyword': 'TableTopRollAdjustedAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Table Top Roll Adjusted Angle',
        'retired': ''
      },
      '0x00741030': {
        'keyword': 'DeliveryVerificationImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Delivery Verification Image Sequence',
        'retired': ''
      },
      '0x00741032': {
        'keyword': 'VerificationImageTiming',
        'vr': 'CS',
        'vm': '1',
        'name': 'Verification Image Timing',
        'retired': ''
      },
      '0x00741034': {
        'keyword': 'DoubleExposureFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Double Exposure Flag',
        'retired': ''
      },
      '0x00741036': {
        'keyword': 'DoubleExposureOrdering',
        'vr': 'CS',
        'vm': '1',
        'name': 'Double Exposure Ordering',
        'retired': ''
      },
      '0x00741038': {
        'keyword': 'DoubleExposureMetersetTrial',
        'vr': 'DS',
        'vm': '1',
        'name': 'Double Exposure Meterset (Trial)',
        'retired': 'Retired'
      },
      '0x0074103A': {
        'keyword': 'DoubleExposureFieldDeltaTrial',
        'vr': 'DS',
        'vm': '4',
        'name': 'Double Exposure Field Delta (Trial)',
        'retired': 'Retired'
      },
      '0x00741040': {
        'keyword': 'RelatedReferenceRTImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related Reference RT Image Sequence',
        'retired': ''
      },
      '0x00741042': {
        'keyword': 'GeneralMachineVerificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'General Machine Verification Sequence',
        'retired': ''
      },
      '0x00741044': {
        'keyword': 'ConventionalMachineVerificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conventional Machine Verification Sequence',
        'retired': ''
      },
      '0x00741046': {
        'keyword': 'IonMachineVerificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Machine Verification Sequence',
        'retired': ''
      },
      '0x00741048': {
        'keyword': 'FailedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Failed Attributes Sequence',
        'retired': ''
      },
      '0x0074104A': {
        'keyword': 'OverriddenAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Overridden Attributes Sequence',
        'retired': ''
      },
      '0x0074104C': {
        'keyword': 'ConventionalControlPointVerificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conventional Control Point Verification Sequence',
        'retired': ''
      },
      '0x0074104E': {
        'keyword': 'IonControlPointVerificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Control Point Verification Sequence',
        'retired': ''
      },
      '0x00741050': {
        'keyword': 'AttributeOccurrenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Attribute Occurrence Sequence',
        'retired': ''
      },
      '0x00741052': {
        'keyword': 'AttributeOccurrencePointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Attribute Occurrence Pointer',
        'retired': ''
      },
      '0x00741054': {
        'keyword': 'AttributeItemSelector',
        'vr': 'UL',
        'vm': '1',
        'name': 'Attribute Item Selector',
        'retired': ''
      },
      '0x00741056': {
        'keyword': 'AttributeOccurrencePrivateCreator',
        'vr': 'LO',
        'vm': '1',
        'name': 'Attribute Occurrence Private Creator',
        'retired': ''
      },
      '0x00741057': {
        'keyword': 'SelectorSequencePointerItems',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Selector Sequence Pointer Items',
        'retired': ''
      },
      '0x00741200': {
        'keyword': 'ScheduledProcedureStepPriority',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scheduled Procedure Step Priority',
        'retired': ''
      },
      '0x00741202': {
        'keyword': 'WorklistLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Worklist Label',
        'retired': ''
      },
      '0x00741204': {
        'keyword': 'ProcedureStepLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Procedure Step Label',
        'retired': ''
      },
      '0x00741210': {
        'keyword': 'ScheduledProcessingParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scheduled Processing Parameters Sequence',
        'retired': ''
      },
      '0x00741212': {
        'keyword': 'PerformedProcessingParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Performed Processing Parameters Sequence',
        'retired': ''
      },
      '0x00741216': {
        'keyword': 'UnifiedProcedureStepPerformedProcedureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Unified Procedure Step Performed Procedure Sequence',
        'retired': ''
      },
      '0x00741220': {
        'keyword': 'RelatedProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related Procedure Step Sequence',
        'retired': 'Retired'
      },
      '0x00741222': {
        'keyword': 'ProcedureStepRelationshipType',
        'vr': 'LO',
        'vm': '1',
        'name': 'Procedure Step Relationship Type',
        'retired': 'Retired'
      },
      '0x00741224': {
        'keyword': 'ReplacedProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Replaced Procedure Step Sequence',
        'retired': ''
      },
      '0x00741230': {
        'keyword': 'DeletionLock',
        'vr': 'LO',
        'vm': '1',
        'name': 'Deletion Lock',
        'retired': ''
      },
      '0x00741234': {
        'keyword': 'ReceivingAE',
        'vr': 'AE',
        'vm': '1',
        'name': 'Receiving AE',
        'retired': ''
      },
      '0x00741236': {
        'keyword': 'RequestingAE',
        'vr': 'AE',
        'vm': '1',
        'name': 'Requesting AE',
        'retired': ''
      },
      '0x00741238': {
        'keyword': 'ReasonForCancellation',
        'vr': 'LT',
        'vm': '1',
        'name': 'Reason for Cancellation',
        'retired': ''
      },
      '0x00741242': {
        'keyword': 'SCPStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'SCP Status',
        'retired': ''
      },
      '0x00741244': {
        'keyword': 'SubscriptionListStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Subscription List Status',
        'retired': ''
      },
      '0x00741246': {
        'keyword': 'UnifiedProcedureStepListStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Unified Procedure Step List Status',
        'retired': ''
      },
      '0x00741324': {
        'keyword': 'BeamOrderIndex',
        'vr': 'UL',
        'vm': '1',
        'name': 'Beam Order Index',
        'retired': ''
      },
      '0x00741338': {
        'keyword': 'DoubleExposureMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Double Exposure Meterset',
        'retired': ''
      },
      '0x0074133A': {
        'keyword': 'DoubleExposureFieldDelta',
        'vr': 'FD',
        'vm': '4',
        'name': 'Double Exposure Field Delta',
        'retired': ''
      },
      '0x00741401': {
        'keyword': 'BrachyTaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Task Sequence',
        'retired': ''
      },
      '0x00741402': {
        'keyword': 'ContinuationStartTotalReferenceAirKerma',
        'vr': 'DS',
        'vm': '1',
        'name': 'Continuation Start Total Reference Air Kerma',
        'retired': ''
      },
      '0x00741403': {
        'keyword': 'ContinuationEndTotalReferenceAirKerma',
        'vr': 'DS',
        'vm': '1',
        'name': 'Continuation End Total Reference Air Kerma',
        'retired': ''
      },
      '0x00741404': {
        'keyword': 'ContinuationPulseNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Continuation Pulse Number',
        'retired': ''
      },
      '0x00741405': {
        'keyword': 'ChannelDeliveryOrderSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Delivery Order Sequence',
        'retired': ''
      },
      '0x00741406': {
        'keyword': 'ReferencedChannelNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Channel Number',
        'retired': ''
      },
      '0x00741407': {
        'keyword': 'StartCumulativeTimeWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Start Cumulative Time Weight',
        'retired': ''
      },
      '0x00741408': {
        'keyword': 'EndCumulativeTimeWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'End Cumulative Time Weight',
        'retired': ''
      },
      '0x00741409': {
        'keyword': 'OmittedChannelSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Omitted Channel Sequence',
        'retired': ''
      },
      '0x0074140A': {
        'keyword': 'ReasonForChannelOmission',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reason for Channel Omission',
        'retired': ''
      },
      '0x0074140B': {
        'keyword': 'ReasonForChannelOmissionDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reason for Channel Omission Description',
        'retired': ''
      },
      '0x0074140C': {
        'keyword': 'ChannelDeliveryOrderIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Channel Delivery Order Index',
        'retired': ''
      },
      '0x0074140D': {
        'keyword': 'ChannelDeliveryContinuationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Delivery Continuation Sequence',
        'retired': ''
      },
      '0x0074140E': {
        'keyword': 'OmittedApplicationSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Omitted Application Setup Sequence',
        'retired': ''
      },
      '0x00760001': {
        'keyword': 'ImplantAssemblyTemplateName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Assembly Template Name',
        'retired': ''
      },
      '0x00760003': {
        'keyword': 'ImplantAssemblyTemplateIssuer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Assembly Template Issuer',
        'retired': ''
      },
      '0x00760006': {
        'keyword': 'ImplantAssemblyTemplateVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Assembly Template Version',
        'retired': ''
      },
      '0x00760008': {
        'keyword': 'ReplacedImplantAssemblyTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Replaced Implant Assembly Template Sequence',
        'retired': ''
      },
      '0x0076000A': {
        'keyword': 'ImplantAssemblyTemplateType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Implant Assembly Template Type',
        'retired': ''
      },
      '0x0076000C': {
        'keyword': 'OriginalImplantAssemblyTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Original Implant Assembly Template Sequence',
        'retired': ''
      },
      '0x0076000E': {
        'keyword': 'DerivationImplantAssemblyTemplateSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Implant Assembly Template Sequence',
        'retired': ''
      },
      '0x00760010': {
        'keyword': 'ImplantAssemblyTemplateTargetAnatomySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Assembly Template Target Anatomy Sequence',
        'retired': ''
      },
      '0x00760020': {
        'keyword': 'ProcedureTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Procedure Type Code Sequence',
        'retired': ''
      },
      '0x00760030': {
        'keyword': 'SurgicalTechnique',
        'vr': 'LO',
        'vm': '1',
        'name': 'Surgical Technique',
        'retired': ''
      },
      '0x00760032': {
        'keyword': 'ComponentTypesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Component Types Sequence',
        'retired': ''
      },
      '0x00760034': {
        'keyword': 'ComponentTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Component Type Code Sequence',
        'retired': ''
      },
      '0x00760036': {
        'keyword': 'ExclusiveComponentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Exclusive Component Type',
        'retired': ''
      },
      '0x00760038': {
        'keyword': 'MandatoryComponentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Mandatory Component Type',
        'retired': ''
      },
      '0x00760040': {
        'keyword': 'ComponentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Component Sequence',
        'retired': ''
      },
      '0x00760055': {
        'keyword': 'ComponentID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component ID',
        'retired': ''
      },
      '0x00760060': {
        'keyword': 'ComponentAssemblySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Component Assembly Sequence',
        'retired': ''
      },
      '0x00760070': {
        'keyword': 'Component1ReferencedID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 1 Referenced ID',
        'retired': ''
      },
      '0x00760080': {
        'keyword': 'Component1ReferencedMatingFeatureSetID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 1 Referenced Mating Feature Set ID',
        'retired': ''
      },
      '0x00760090': {
        'keyword': 'Component1ReferencedMatingFeatureID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 1 Referenced Mating Feature ID',
        'retired': ''
      },
      '0x007600A0': {
        'keyword': 'Component2ReferencedID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 2 Referenced ID',
        'retired': ''
      },
      '0x007600B0': {
        'keyword': 'Component2ReferencedMatingFeatureSetID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 2 Referenced Mating Feature Set ID',
        'retired': ''
      },
      '0x007600C0': {
        'keyword': 'Component2ReferencedMatingFeatureID',
        'vr': 'US',
        'vm': '1',
        'name': 'Component 2 Referenced Mating Feature ID',
        'retired': ''
      },
      '0x00780001': {
        'keyword': 'ImplantTemplateGroupName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Template Group Name',
        'retired': ''
      },
      '0x00780010': {
        'keyword': 'ImplantTemplateGroupDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Implant Template Group Description',
        'retired': ''
      },
      '0x00780020': {
        'keyword': 'ImplantTemplateGroupIssuer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Template Group Issuer',
        'retired': ''
      },
      '0x00780024': {
        'keyword': 'ImplantTemplateGroupVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Template Group Version',
        'retired': ''
      },
      '0x00780026': {
        'keyword': 'ReplacedImplantTemplateGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Replaced Implant Template Group Sequence',
        'retired': ''
      },
      '0x00780028': {
        'keyword': 'ImplantTemplateGroupTargetAnatomySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Template Group Target Anatomy Sequence',
        'retired': ''
      },
      '0x0078002A': {
        'keyword': 'ImplantTemplateGroupMembersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Template Group Members Sequence',
        'retired': ''
      },
      '0x0078002E': {
        'keyword': 'ImplantTemplateGroupMemberID',
        'vr': 'US',
        'vm': '1',
        'name': 'Implant Template Group Member ID',
        'retired': ''
      },
      '0x00780050': {
        'keyword': 'ThreeDImplantTemplateGroupMemberMatchingPoint',
        'vr': 'FD',
        'vm': '3',
        'name': '3D Implant Template Group Member Matching Point',
        'retired': ''
      },
      '0x00780060': {
        'keyword': 'ThreeDImplantTemplateGroupMemberMatchingAxes',
        'vr': 'FD',
        'vm': '9',
        'name': '3D Implant Template Group Member Matching Axes',
        'retired': ''
      },
      '0x00780070': {
        'keyword': 'ImplantTemplateGroupMemberMatching2DCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Implant Template Group Member Matching 2D Coordinates Sequence',
        'retired': ''
      },
      '0x00780090': {
        'keyword': 'TwoDImplantTemplateGroupMemberMatchingPoint',
        'vr': 'FD',
        'vm': '2',
        'name': '2D Implant Template Group Member Matching Point',
        'retired': ''
      },
      '0x007800A0': {
        'keyword': 'TwoDImplantTemplateGroupMemberMatchingAxes',
        'vr': 'FD',
        'vm': '4',
        'name': '2D Implant Template Group Member Matching Axes',
        'retired': ''
      },
      '0x007800B0': {
        'keyword': 'ImplantTemplateGroupVariationDimensionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Template Group Variation Dimension Sequence',
        'retired': ''
      },
      '0x007800B2': {
        'keyword': 'ImplantTemplateGroupVariationDimensionName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Implant Template Group Variation Dimension Name',
        'retired': ''
      },
      '0x007800B4': {
        'keyword': 'ImplantTemplateGroupVariationDimensionRankSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Implant Template Group Variation Dimension Rank Sequence',
        'retired': ''
      },
      '0x007800B6': {
        'keyword': 'ReferencedImplantTemplateGroupMemberID',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Implant Template Group Member ID',
        'retired': ''
      },
      '0x007800B8': {
        'keyword': 'ImplantTemplateGroupVariationDimensionRank',
        'vr': 'US',
        'vm': '1',
        'name': 'Implant Template Group Variation Dimension Rank',
        'retired': ''
      },
      '0x00800001': {
        'keyword': 'SurfaceScanAcquisitionTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Scan Acquisition Type Code Sequence',
        'retired': ''
      },
      '0x00800002': {
        'keyword': 'SurfaceScanModeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Surface Scan Mode Code Sequence',
        'retired': ''
      },
      '0x00800003': {
        'keyword': 'RegistrationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Registration Method Code Sequence',
        'retired': ''
      },
      '0x00800004': {
        'keyword': 'ShotDurationTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Shot Duration Time',
        'retired': ''
      },
      '0x00800005': {
        'keyword': 'ShotOffsetTime',
        'vr': 'FD',
        'vm': '1',
        'name': 'Shot Offset Time',
        'retired': ''
      },
      '0x00800006': {
        'keyword': 'SurfacePointPresentationValueData',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Surface Point Presentation Value Data',
        'retired': ''
      },
      '0x00800007': {
        'keyword': 'SurfacePointColorCIELabValueData',
        'vr': 'US',
        'vm': '3-3n',
        'name': 'Surface Point Color CIELab Value Data',
        'retired': ''
      },
      '0x00800008': {
        'keyword': 'UVMappingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'UV Mapping Sequence',
        'retired': ''
      },
      '0x00800009': {
        'keyword': 'TextureLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Texture Label',
        'retired': ''
      },
      '0x00800010': {
        'keyword': 'UValueData',
        'vr': 'OF',
        'vm': '1',
        'name': 'U Value Data',
        'retired': ''
      },
      '0x00800011': {
        'keyword': 'VValueData',
        'vr': 'OF',
        'vm': '1',
        'name': 'V Value Data',
        'retired': ''
      },
      '0x00800012': {
        'keyword': 'ReferencedTextureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Texture Sequence',
        'retired': ''
      },
      '0x00800013': {
        'keyword': 'ReferencedSurfaceDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Surface Data Sequence',
        'retired': ''
      },
      '0x00820001': {
        'keyword': 'AssessmentSummary',
        'vr': 'CS',
        'vm': '1',
        'name': 'Assessment Summary',
        'retired': ''
      },
      '0x00820003': {
        'keyword': 'AssessmentSummaryDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Assessment Summary Description',
        'retired': ''
      },
      '0x00820004': {
        'keyword': 'AssessedSOPInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assessed SOP Instance Sequence',
        'retired': ''
      },
      '0x00820005': {
        'keyword': 'ReferencedComparisonSOPInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Comparison SOP Instance Sequence',
        'retired': ''
      },
      '0x00820006': {
        'keyword': 'NumberOfAssessmentObservations',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Assessment Observations',
        'retired': ''
      },
      '0x00820007': {
        'keyword': 'AssessmentObservationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assessment Observations Sequence',
        'retired': ''
      },
      '0x00820008': {
        'keyword': 'ObservationSignificance',
        'vr': 'CS',
        'vm': '1',
        'name': 'Observation Significance',
        'retired': ''
      },
      '0x0082000A': {
        'keyword': 'ObservationDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Observation Description',
        'retired': ''
      },
      '0x0082000C': {
        'keyword': 'StructuredConstraintObservationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Structured Constraint Observation Sequence',
        'retired': ''
      },
      '0x00820010': {
        'keyword': 'AssessedAttributeValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assessed Attribute Value Sequence',
        'retired': ''
      },
      '0x00820016': {
        'keyword': 'AssessmentSetID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Assessment Set ID',
        'retired': ''
      },
      '0x00820017': {
        'keyword': 'AssessmentRequesterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assessment Requester Sequence',
        'retired': ''
      },
      '0x00820018': {
        'keyword': 'SelectorAttributeName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Selector Attribute Name',
        'retired': ''
      },
      '0x00820019': {
        'keyword': 'SelectorAttributeKeyword',
        'vr': 'LO',
        'vm': '1',
        'name': 'Selector Attribute Keyword',
        'retired': ''
      },
      '0x00820021': {
        'keyword': 'AssessmentTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Assessment Type Code Sequence',
        'retired': ''
      },
      '0x00820022': {
        'keyword': 'ObservationBasisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Observation Basis Code Sequence',
        'retired': ''
      },
      '0x00820023': {
        'keyword': 'AssessmentLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Assessment Label',
        'retired': ''
      },
      '0x00820032': {
        'keyword': 'ConstraintType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Constraint Type',
        'retired': ''
      },
      '0x00820033': {
        'keyword': 'SpecificationSelectionGuidance',
        'vr': 'UT',
        'vm': '1',
        'name': 'Specification Selection Guidance',
        'retired': ''
      },
      '0x00820034': {
        'keyword': 'ConstraintValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Constraint Value Sequence',
        'retired': ''
      },
      '0x00820035': {
        'keyword': 'RecommendedDefaultValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recommended Default Value Sequence',
        'retired': ''
      },
      '0x00820036': {
        'keyword': 'ConstraintViolationSignificance',
        'vr': 'CS',
        'vm': '1',
        'name': 'Constraint Violation Significance',
        'retired': ''
      },
      '0x00820037': {
        'keyword': 'ConstraintViolationCondition',
        'vr': 'UT',
        'vm': '1',
        'name': 'Constraint Violation Condition',
        'retired': ''
      },
      '0x00820038': {
        'keyword': 'ModifiableConstraintFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modifiable Constraint Flag',
        'retired': ''
      },
      '0x00880130': {
        'keyword': 'StorageMediaFileSetID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Storage Media File-set ID',
        'retired': ''
      },
      '0x00880140': {
        'keyword': 'StorageMediaFileSetUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Storage Media File-set UID',
        'retired': ''
      },
      '0x00880200': {
        'keyword': 'IconImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Icon Image Sequence',
        'retired': ''
      },
      '0x00880904': {
        'keyword': 'TopicTitle',
        'vr': 'LO',
        'vm': '1',
        'name': 'Topic Title',
        'retired': 'Retired'
      },
      '0x00880906': {
        'keyword': 'TopicSubject',
        'vr': 'ST',
        'vm': '1',
        'name': 'Topic Subject',
        'retired': 'Retired'
      },
      '0x00880910': {
        'keyword': 'TopicAuthor',
        'vr': 'LO',
        'vm': '1',
        'name': 'Topic Author',
        'retired': 'Retired'
      },
      '0x00880912': {
        'keyword': 'TopicKeywords',
        'vr': 'LO',
        'vm': '1-32',
        'name': 'Topic Keywords',
        'retired': 'Retired'
      },
      '0x01000410': {
        'keyword': 'SOPInstanceStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'SOP Instance Status',
        'retired': ''
      },
      '0x01000420': {
        'keyword': 'SOPAuthorizationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'SOP Authorization DateTime',
        'retired': ''
      },
      '0x01000424': {
        'keyword': 'SOPAuthorizationComment',
        'vr': 'LT',
        'vm': '1',
        'name': 'SOP Authorization Comment',
        'retired': ''
      },
      '0x01000426': {
        'keyword': 'AuthorizationEquipmentCertificationNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Authorization Equipment Certification Number',
        'retired': ''
      },
      '0x04000005': {
        'keyword': 'MACIDNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'MAC ID Number',
        'retired': ''
      },
      '0x04000010': {
        'keyword': 'MACCalculationTransferSyntaxUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'MAC Calculation Transfer Syntax UID',
        'retired': ''
      },
      '0x04000015': {
        'keyword': 'MACAlgorithm',
        'vr': 'CS',
        'vm': '1',
        'name': 'MAC Algorithm',
        'retired': ''
      },
      '0x04000020': {
        'keyword': 'DataElementsSigned',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Data Elements Signed',
        'retired': ''
      },
      '0x04000100': {
        'keyword': 'DigitalSignatureUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Digital Signature UID',
        'retired': ''
      },
      '0x04000105': {
        'keyword': 'DigitalSignatureDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Digital Signature DateTime',
        'retired': ''
      },
      '0x04000110': {
        'keyword': 'CertificateType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Certificate Type',
        'retired': ''
      },
      '0x04000115': {
        'keyword': 'CertificateOfSigner',
        'vr': 'OB',
        'vm': '1',
        'name': 'Certificate of Signer',
        'retired': ''
      },
      '0x04000120': {
        'keyword': 'Signature',
        'vr': 'OB',
        'vm': '1',
        'name': 'Signature',
        'retired': ''
      },
      '0x04000305': {
        'keyword': 'CertifiedTimestampType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Certified Timestamp Type',
        'retired': ''
      },
      '0x04000310': {
        'keyword': 'CertifiedTimestamp',
        'vr': 'OB',
        'vm': '1',
        'name': 'Certified Timestamp',
        'retired': ''
      },
      '0x04000315': {
        'keyword': '',
        'vr': 'FL',
        'vm': '1',
        'name': '',
        'retired': 'Retired'
      },
      '0x04000401': {
        'keyword': 'DigitalSignaturePurposeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Digital Signature Purpose Code Sequence',
        'retired': ''
      },
      '0x04000402': {
        'keyword': 'ReferencedDigitalSignatureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Digital Signature Sequence',
        'retired': ''
      },
      '0x04000403': {
        'keyword': 'ReferencedSOPInstanceMACSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced SOP Instance MAC Sequence',
        'retired': ''
      },
      '0x04000404': {
        'keyword': 'MAC',
        'vr': 'OB',
        'vm': '1',
        'name': 'MAC',
        'retired': ''
      },
      '0x04000500': {
        'keyword': 'EncryptedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Encrypted Attributes Sequence',
        'retired': ''
      },
      '0x04000510': {
        'keyword': 'EncryptedContentTransferSyntaxUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Encrypted Content Transfer Syntax UID',
        'retired': ''
      },
      '0x04000520': {
        'keyword': 'EncryptedContent',
        'vr': 'OB',
        'vm': '1',
        'name': 'Encrypted Content',
        'retired': ''
      },
      '0x04000550': {
        'keyword': 'ModifiedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Modified Attributes Sequence',
        'retired': ''
      },
      '0x04000551': {
        'keyword': 'NonconformingModifiedAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Nonconforming Modified Attributes Sequence',
        'retired': ''
      },
      '0x04000552': {
        'keyword': 'NonconformingDataElementValue',
        'vr': 'OB',
        'vm': '1',
        'name': 'Nonconforming Data Element Value',
        'retired': ''
      },
      '0x04000561': {
        'keyword': 'OriginalAttributesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Original Attributes Sequence',
        'retired': ''
      },
      '0x04000562': {
        'keyword': 'AttributeModificationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Attribute Modification DateTime',
        'retired': ''
      },
      '0x04000563': {
        'keyword': 'ModifyingSystem',
        'vr': 'LO',
        'vm': '1',
        'name': 'Modifying System',
        'retired': ''
      },
      '0x04000564': {
        'keyword': 'SourceOfPreviousValues',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source of Previous Values',
        'retired': ''
      },
      '0x04000565': {
        'keyword': 'ReasonForTheAttributeModification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reason for the Attribute Modification',
        'retired': ''
      },
      '0x04000600': {
        'keyword': 'InstanceOriginStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Instance Origin Status',
        'retired': ''
      },
      '0x20000010': {
        'keyword': 'NumberOfCopies',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Copies',
        'retired': ''
      },
      '0x2000001E': {
        'keyword': 'PrinterConfigurationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Printer Configuration Sequence',
        'retired': ''
      },
      '0x20000020': {
        'keyword': 'PrintPriority',
        'vr': 'CS',
        'vm': '1',
        'name': 'Print Priority',
        'retired': ''
      },
      '0x20000030': {
        'keyword': 'MediumType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Medium Type',
        'retired': ''
      },
      '0x20000040': {
        'keyword': 'FilmDestination',
        'vr': 'CS',
        'vm': '1',
        'name': 'Film Destination',
        'retired': ''
      },
      '0x20000050': {
        'keyword': 'FilmSessionLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Film Session Label',
        'retired': ''
      },
      '0x20000060': {
        'keyword': 'MemoryAllocation',
        'vr': 'IS',
        'vm': '1',
        'name': 'Memory Allocation',
        'retired': ''
      },
      '0x20000061': {
        'keyword': 'MaximumMemoryAllocation',
        'vr': 'IS',
        'vm': '1',
        'name': 'Maximum Memory Allocation',
        'retired': ''
      },
      '0x20000062': {
        'keyword': 'ColorImagePrintingFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Color Image Printing Flag',
        'retired': 'Retired'
      },
      '0x20000063': {
        'keyword': 'CollationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Collation Flag',
        'retired': 'Retired'
      },
      '0x20000065': {
        'keyword': 'AnnotationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Flag',
        'retired': 'Retired'
      },
      '0x20000067': {
        'keyword': 'ImageOverlayFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Overlay Flag',
        'retired': 'Retired'
      },
      '0x20000069': {
        'keyword': 'PresentationLUTFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation LUT Flag',
        'retired': 'Retired'
      },
      '0x2000006A': {
        'keyword': 'ImageBoxPresentationLUTFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Image Box Presentation LUT Flag',
        'retired': 'Retired'
      },
      '0x200000A0': {
        'keyword': 'MemoryBitDepth',
        'vr': 'US',
        'vm': '1',
        'name': 'Memory Bit Depth',
        'retired': ''
      },
      '0x200000A1': {
        'keyword': 'PrintingBitDepth',
        'vr': 'US',
        'vm': '1',
        'name': 'Printing Bit Depth',
        'retired': ''
      },
      '0x200000A2': {
        'keyword': 'MediaInstalledSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Media Installed Sequence',
        'retired': ''
      },
      '0x200000A4': {
        'keyword': 'OtherMediaAvailableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Other Media Available Sequence',
        'retired': ''
      },
      '0x200000A8': {
        'keyword': 'SupportedImageDisplayFormatsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Supported Image Display Formats Sequence',
        'retired': ''
      },
      '0x20000500': {
        'keyword': 'ReferencedFilmBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Film Box Sequence',
        'retired': ''
      },
      '0x20000510': {
        'keyword': 'ReferencedStoredPrintSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Stored Print Sequence',
        'retired': 'Retired'
      },
      '0x20100010': {
        'keyword': 'ImageDisplayFormat',
        'vr': 'ST',
        'vm': '1',
        'name': 'Image Display Format',
        'retired': ''
      },
      '0x20100030': {
        'keyword': 'AnnotationDisplayFormatID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Annotation Display Format ID',
        'retired': ''
      },
      '0x20100040': {
        'keyword': 'FilmOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Film Orientation',
        'retired': ''
      },
      '0x20100050': {
        'keyword': 'FilmSizeID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Film Size ID',
        'retired': ''
      },
      '0x20100052': {
        'keyword': 'PrinterResolutionID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Printer Resolution ID',
        'retired': ''
      },
      '0x20100054': {
        'keyword': 'DefaultPrinterResolutionID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Default Printer Resolution ID',
        'retired': ''
      },
      '0x20100060': {
        'keyword': 'MagnificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Magnification Type',
        'retired': ''
      },
      '0x20100080': {
        'keyword': 'SmoothingType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Smoothing Type',
        'retired': ''
      },
      '0x201000A6': {
        'keyword': 'DefaultMagnificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Default Magnification Type',
        'retired': ''
      },
      '0x201000A7': {
        'keyword': 'OtherMagnificationTypesAvailable',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Other Magnification Types Available',
        'retired': ''
      },
      '0x201000A8': {
        'keyword': 'DefaultSmoothingType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Default Smoothing Type',
        'retired': ''
      },
      '0x201000A9': {
        'keyword': 'OtherSmoothingTypesAvailable',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Other Smoothing Types Available',
        'retired': ''
      },
      '0x20100100': {
        'keyword': 'BorderDensity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Border Density',
        'retired': ''
      },
      '0x20100110': {
        'keyword': 'EmptyImageDensity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Empty Image Density',
        'retired': ''
      },
      '0x20100120': {
        'keyword': 'MinDensity',
        'vr': 'US',
        'vm': '1',
        'name': 'Min Density',
        'retired': ''
      },
      '0x20100130': {
        'keyword': 'MaxDensity',
        'vr': 'US',
        'vm': '1',
        'name': 'Max Density',
        'retired': ''
      },
      '0x20100140': {
        'keyword': 'Trim',
        'vr': 'CS',
        'vm': '1',
        'name': 'Trim',
        'retired': ''
      },
      '0x20100150': {
        'keyword': 'ConfigurationInformation',
        'vr': 'ST',
        'vm': '1',
        'name': 'Configuration Information',
        'retired': ''
      },
      '0x20100152': {
        'keyword': 'ConfigurationInformationDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Configuration Information Description',
        'retired': ''
      },
      '0x20100154': {
        'keyword': 'MaximumCollatedFilms',
        'vr': 'IS',
        'vm': '1',
        'name': 'Maximum Collated Films',
        'retired': ''
      },
      '0x2010015E': {
        'keyword': 'Illumination',
        'vr': 'US',
        'vm': '1',
        'name': 'Illumination',
        'retired': ''
      },
      '0x20100160': {
        'keyword': 'ReflectedAmbientLight',
        'vr': 'US',
        'vm': '1',
        'name': 'Reflected Ambient Light',
        'retired': ''
      },
      '0x20100376': {
        'keyword': 'PrinterPixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Printer Pixel Spacing',
        'retired': ''
      },
      '0x20100500': {
        'keyword': 'ReferencedFilmSessionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Film Session Sequence',
        'retired': ''
      },
      '0x20100510': {
        'keyword': 'ReferencedImageBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Box Sequence',
        'retired': ''
      },
      '0x20100520': {
        'keyword': 'ReferencedBasicAnnotationBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Basic Annotation Box Sequence',
        'retired': ''
      },
      '0x20200010': {
        'keyword': 'ImageBoxPosition',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Box Position',
        'retired': ''
      },
      '0x20200020': {
        'keyword': 'Polarity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Polarity',
        'retired': ''
      },
      '0x20200030': {
        'keyword': 'RequestedImageSize',
        'vr': 'DS',
        'vm': '1',
        'name': 'Requested Image Size',
        'retired': ''
      },
      '0x20200040': {
        'keyword': 'RequestedDecimateCropBehavior',
        'vr': 'CS',
        'vm': '1',
        'name': 'Requested Decimate/Crop Behavior',
        'retired': ''
      },
      '0x20200050': {
        'keyword': 'RequestedResolutionID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Requested Resolution ID',
        'retired': ''
      },
      '0x202000A0': {
        'keyword': 'RequestedImageSizeFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Requested Image Size Flag',
        'retired': ''
      },
      '0x202000A2': {
        'keyword': 'DecimateCropResult',
        'vr': 'CS',
        'vm': '1',
        'name': 'Decimate/Crop Result',
        'retired': ''
      },
      '0x20200110': {
        'keyword': 'BasicGrayscaleImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Basic Grayscale Image Sequence',
        'retired': ''
      },
      '0x20200111': {
        'keyword': 'BasicColorImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Basic Color Image Sequence',
        'retired': ''
      },
      '0x20200130': {
        'keyword': 'ReferencedImageOverlayBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Overlay Box Sequence',
        'retired': 'Retired'
      },
      '0x20200140': {
        'keyword': 'ReferencedVOILUTBoxSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced VOI LUT Box Sequence',
        'retired': 'Retired'
      },
      '0x20300010': {
        'keyword': 'AnnotationPosition',
        'vr': 'US',
        'vm': '1',
        'name': 'Annotation Position',
        'retired': ''
      },
      '0x20300020': {
        'keyword': 'TextString',
        'vr': 'LO',
        'vm': '1',
        'name': 'Text String',
        'retired': ''
      },
      '0x20400010': {
        'keyword': 'ReferencedOverlayPlaneSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Overlay Plane Sequence',
        'retired': 'Retired'
      },
      '0x20400011': {
        'keyword': 'ReferencedOverlayPlaneGroups',
        'vr': 'US',
        'vm': '1-99',
        'name': 'Referenced Overlay Plane Groups',
        'retired': 'Retired'
      },
      '0x20400020': {
        'keyword': 'OverlayPixelDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Overlay Pixel Data Sequence',
        'retired': 'Retired'
      },
      '0x20400060': {
        'keyword': 'OverlayMagnificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Magnification Type',
        'retired': 'Retired'
      },
      '0x20400070': {
        'keyword': 'OverlaySmoothingType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Smoothing Type',
        'retired': 'Retired'
      },
      '0x20400072': {
        'keyword': 'OverlayOrImageMagnification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay or Image Magnification',
        'retired': 'Retired'
      },
      '0x20400074': {
        'keyword': 'MagnifyToNumberOfColumns',
        'vr': 'US',
        'vm': '1',
        'name': 'Magnify to Number of Columns',
        'retired': 'Retired'
      },
      '0x20400080': {
        'keyword': 'OverlayForegroundDensity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Foreground Density',
        'retired': 'Retired'
      },
      '0x20400082': {
        'keyword': 'OverlayBackgroundDensity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Background Density',
        'retired': 'Retired'
      },
      '0x20400090': {
        'keyword': 'OverlayMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Mode',
        'retired': 'Retired'
      },
      '0x20400100': {
        'keyword': 'ThresholdDensity',
        'vr': 'CS',
        'vm': '1',
        'name': 'Threshold Density',
        'retired': 'Retired'
      },
      '0x20400500': {
        'keyword': 'ReferencedImageBoxSequenceRetired',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Image Box Sequence (Retired)',
        'retired': 'Retired'
      },
      '0x20500010': {
        'keyword': 'PresentationLUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Presentation LUT Sequence',
        'retired': ''
      },
      '0x20500020': {
        'keyword': 'PresentationLUTShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Presentation LUT Shape',
        'retired': ''
      },
      '0x20500500': {
        'keyword': 'ReferencedPresentationLUTSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Presentation LUT Sequence',
        'retired': ''
      },
      '0x21000010': {
        'keyword': 'PrintJobID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Print Job ID',
        'retired': 'Retired'
      },
      '0x21000020': {
        'keyword': 'ExecutionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Execution Status',
        'retired': ''
      },
      '0x21000030': {
        'keyword': 'ExecutionStatusInfo',
        'vr': 'CS',
        'vm': '1',
        'name': 'Execution Status Info',
        'retired': ''
      },
      '0x21000040': {
        'keyword': 'CreationDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Creation Date',
        'retired': ''
      },
      '0x21000050': {
        'keyword': 'CreationTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Creation Time',
        'retired': ''
      },
      '0x21000070': {
        'keyword': 'Originator',
        'vr': 'AE',
        'vm': '1',
        'name': 'Originator',
        'retired': ''
      },
      '0x21000140': {
        'keyword': 'DestinationAE',
        'vr': 'AE',
        'vm': '1',
        'name': 'Destination AE',
        'retired': ''
      },
      '0x21000160': {
        'keyword': 'OwnerID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Owner ID',
        'retired': ''
      },
      '0x21000170': {
        'keyword': 'NumberOfFilms',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Films',
        'retired': ''
      },
      '0x21000500': {
        'keyword': 'ReferencedPrintJobSequencePullStoredPrint',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Print Job Sequence (Pull Stored Print)',
        'retired': 'Retired'
      },
      '0x21100010': {
        'keyword': 'PrinterStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Printer Status',
        'retired': ''
      },
      '0x21100020': {
        'keyword': 'PrinterStatusInfo',
        'vr': 'CS',
        'vm': '1',
        'name': 'Printer Status Info',
        'retired': ''
      },
      '0x21100030': {
        'keyword': 'PrinterName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Printer Name',
        'retired': ''
      },
      '0x21100099': {
        'keyword': 'PrintQueueID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Print Queue ID',
        'retired': 'Retired'
      },
      '0x21200010': {
        'keyword': 'QueueStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Queue Status',
        'retired': 'Retired'
      },
      '0x21200050': {
        'keyword': 'PrintJobDescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Print Job Description Sequence',
        'retired': 'Retired'
      },
      '0x21200070': {
        'keyword': 'ReferencedPrintJobSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Print Job Sequence',
        'retired': 'Retired'
      },
      '0x21300010': {
        'keyword': 'PrintManagementCapabilitiesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Print Management Capabilities Sequence',
        'retired': 'Retired'
      },
      '0x21300015': {
        'keyword': 'PrinterCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Printer Characteristics Sequence',
        'retired': 'Retired'
      },
      '0x21300030': {
        'keyword': 'FilmBoxContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Film Box Content Sequence',
        'retired': 'Retired'
      },
      '0x21300040': {
        'keyword': 'ImageBoxContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Box Content Sequence',
        'retired': 'Retired'
      },
      '0x21300050': {
        'keyword': 'AnnotationContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Annotation Content Sequence',
        'retired': 'Retired'
      },
      '0x21300060': {
        'keyword': 'ImageOverlayBoxContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Overlay Box Content Sequence',
        'retired': 'Retired'
      },
      '0x21300080': {
        'keyword': 'PresentationLUTContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Presentation LUT Content Sequence',
        'retired': 'Retired'
      },
      '0x213000A0': {
        'keyword': 'ProposedStudySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Proposed Study Sequence',
        'retired': ''
      },
      '0x213000C0': {
        'keyword': 'OriginalImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Original Image Sequence',
        'retired': ''
      },
      '0x22000001': {
        'keyword': 'LabelUsingInformationExtractedFromInstances',
        'vr': 'CS',
        'vm': '1',
        'name': 'Label Using Information Extracted From Instances',
        'retired': ''
      },
      '0x22000002': {
        'keyword': 'LabelText',
        'vr': 'UT',
        'vm': '1',
        'name': 'Label Text',
        'retired': ''
      },
      '0x22000003': {
        'keyword': 'LabelStyleSelection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Label Style Selection',
        'retired': ''
      },
      '0x22000004': {
        'keyword': 'MediaDisposition',
        'vr': 'LT',
        'vm': '1',
        'name': 'Media Disposition',
        'retired': ''
      },
      '0x22000005': {
        'keyword': 'BarcodeValue',
        'vr': 'LT',
        'vm': '1',
        'name': 'Barcode Value',
        'retired': ''
      },
      '0x22000006': {
        'keyword': 'BarcodeSymbology',
        'vr': 'CS',
        'vm': '1',
        'name': 'Barcode Symbology',
        'retired': ''
      },
      '0x22000007': {
        'keyword': 'AllowMediaSplitting',
        'vr': 'CS',
        'vm': '1',
        'name': 'Allow Media Splitting',
        'retired': ''
      },
      '0x22000008': {
        'keyword': 'IncludeNonDICOMObjects',
        'vr': 'CS',
        'vm': '1',
        'name': 'Include Non-DICOM Objects',
        'retired': ''
      },
      '0x22000009': {
        'keyword': 'IncludeDisplayApplication',
        'vr': 'CS',
        'vm': '1',
        'name': 'Include Display Application',
        'retired': ''
      },
      '0x2200000A': {
        'keyword': 'PreserveCompositeInstancesAfterMediaCreation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Preserve Composite Instances After Media Creation',
        'retired': ''
      },
      '0x2200000B': {
        'keyword': 'TotalNumberOfPiecesOfMediaCreated',
        'vr': 'US',
        'vm': '1',
        'name': 'Total Number of Pieces of Media Created',
        'retired': ''
      },
      '0x2200000C': {
        'keyword': 'RequestedMediaApplicationProfile',
        'vr': 'LO',
        'vm': '1',
        'name': 'Requested Media Application Profile',
        'retired': ''
      },
      '0x2200000D': {
        'keyword': 'ReferencedStorageMediaSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Storage Media Sequence',
        'retired': ''
      },
      '0x2200000E': {
        'keyword': 'FailureAttributes',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Failure Attributes',
        'retired': ''
      },
      '0x2200000F': {
        'keyword': 'AllowLossyCompression',
        'vr': 'CS',
        'vm': '1',
        'name': 'Allow Lossy Compression',
        'retired': ''
      },
      '0x22000020': {
        'keyword': 'RequestPriority',
        'vr': 'CS',
        'vm': '1',
        'name': 'Request Priority',
        'retired': ''
      },
      '0x30020002': {
        'keyword': 'RTImageLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'RT Image Label',
        'retired': ''
      },
      '0x30020003': {
        'keyword': 'RTImageName',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Image Name',
        'retired': ''
      },
      '0x30020004': {
        'keyword': 'RTImageDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'RT Image Description',
        'retired': ''
      },
      '0x3002000A': {
        'keyword': 'ReportedValuesOrigin',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reported Values Origin',
        'retired': ''
      },
      '0x3002000C': {
        'keyword': 'RTImagePlane',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Image Plane',
        'retired': ''
      },
      '0x3002000D': {
        'keyword': 'XRayImageReceptorTranslation',
        'vr': 'DS',
        'vm': '3',
        'name': 'X-Ray Image Receptor Translation',
        'retired': ''
      },
      '0x3002000E': {
        'keyword': 'XRayImageReceptorAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'X-Ray Image Receptor Angle',
        'retired': ''
      },
      '0x30020010': {
        'keyword': 'RTImageOrientation',
        'vr': 'DS',
        'vm': '6',
        'name': 'RT Image Orientation',
        'retired': ''
      },
      '0x30020011': {
        'keyword': 'ImagePlanePixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Image Plane Pixel Spacing',
        'retired': ''
      },
      '0x30020012': {
        'keyword': 'RTImagePosition',
        'vr': 'DS',
        'vm': '2',
        'name': 'RT Image Position',
        'retired': ''
      },
      '0x30020020': {
        'keyword': 'RadiationMachineName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Radiation Machine Name',
        'retired': ''
      },
      '0x30020022': {
        'keyword': 'RadiationMachineSAD',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radiation Machine SAD',
        'retired': ''
      },
      '0x30020024': {
        'keyword': 'RadiationMachineSSD',
        'vr': 'DS',
        'vm': '1',
        'name': 'Radiation Machine SSD',
        'retired': ''
      },
      '0x30020026': {
        'keyword': 'RTImageSID',
        'vr': 'DS',
        'vm': '1',
        'name': 'RT Image SID',
        'retired': ''
      },
      '0x30020028': {
        'keyword': 'SourceToReferenceObjectDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Reference Object Distance',
        'retired': ''
      },
      '0x30020029': {
        'keyword': 'FractionNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Fraction Number',
        'retired': ''
      },
      '0x30020030': {
        'keyword': 'ExposureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Exposure Sequence',
        'retired': ''
      },
      '0x30020032': {
        'keyword': 'MetersetExposure',
        'vr': 'DS',
        'vm': '1',
        'name': 'Meterset Exposure',
        'retired': ''
      },
      '0x30020034': {
        'keyword': 'DiaphragmPosition',
        'vr': 'DS',
        'vm': '4',
        'name': 'Diaphragm Position',
        'retired': ''
      },
      '0x30020040': {
        'keyword': 'FluenceMapSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fluence Map Sequence',
        'retired': ''
      },
      '0x30020041': {
        'keyword': 'FluenceDataSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fluence Data Source',
        'retired': ''
      },
      '0x30020042': {
        'keyword': 'FluenceDataScale',
        'vr': 'DS',
        'vm': '1',
        'name': 'Fluence Data Scale',
        'retired': ''
      },
      '0x30020050': {
        'keyword': 'PrimaryFluenceModeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Primary Fluence Mode Sequence',
        'retired': ''
      },
      '0x30020051': {
        'keyword': 'FluenceMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fluence Mode',
        'retired': ''
      },
      '0x30020052': {
        'keyword': 'FluenceModeID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Fluence Mode ID',
        'retired': ''
      },
      '0x30020100': {
        'keyword': 'SelectedFrameNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Selected Frame Number',
        'retired': ''
      },
      '0x30020101': {
        'keyword': 'SelectedFrameFunctionalGroupsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Selected Frame Functional Groups Sequence',
        'retired': ''
      },
      '0x30020102': {
        'keyword': 'RTImageFrameGeneralContentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame General Content Sequence',
        'retired': ''
      },
      '0x30020103': {
        'keyword': 'RTImageFrameContextSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame Context Sequence',
        'retired': ''
      },
      '0x30020104': {
        'keyword': 'RTImageScopeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Scope Sequence',
        'retired': ''
      },
      '0x30020105': {
        'keyword': 'BeamModifierCoordinatesPresenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Modifier Coordinates Presence Flag',
        'retired': ''
      },
      '0x30020106': {
        'keyword': 'StartCumulativeMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Start Cumulative Meterset',
        'retired': ''
      },
      '0x30020107': {
        'keyword': 'StopCumulativeMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Stop Cumulative Meterset',
        'retired': ''
      },
      '0x30020108': {
        'keyword': 'RTAcquisitionPatientPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Acquisition Patient Position Sequence',
        'retired': ''
      },
      '0x30020109': {
        'keyword': 'RTImageFrameImagingDevicePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame Imaging Device Position Sequence',
        'retired': ''
      },
      '0x3002010A': {
        'keyword': 'RTImageFramekVRadiationAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame kV Radiation Acquisition Sequence',
        'retired': ''
      },
      '0x3002010B': {
        'keyword': 'RTImageFrameMVRadiationAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame MV Radiation Acquisition Sequence',
        'retired': ''
      },
      '0x3002010C': {
        'keyword': 'RTImageFrameRadiationAcquisitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Image Frame Radiation Acquisition Sequence',
        'retired': ''
      },
      '0x3002010D': {
        'keyword': 'ImagingSourcePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Imaging Source Position Sequence',
        'retired': ''
      },
      '0x3002010E': {
        'keyword': 'ImageReceptorPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Image Receptor Position Sequence',
        'retired': ''
      },
      '0x3002010F': {
        'keyword': 'DevicePositionToEquipmentMappingMatrix',
        'vr': 'FD',
        'vm': '16',
        'name': 'Device Position to Equipment Mapping Matrix',
        'retired': ''
      },
      '0x30020110': {
        'keyword': 'DevicePositionParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device Position Parameter Sequence',
        'retired': ''
      },
      '0x30020111': {
        'keyword': 'ImagingSourceLocationSpecificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Imaging Source Location Specification Type',
        'retired': ''
      },
      '0x30020112': {
        'keyword': 'ImagingDeviceLocationMatrixSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Imaging Device Location Matrix Sequence',
        'retired': ''
      },
      '0x30020113': {
        'keyword': 'ImagingDeviceLocationParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Imaging Device Location Parameter Sequence',
        'retired': ''
      },
      '0x30020114': {
        'keyword': 'ImagingApertureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Imaging Aperture Sequence',
        'retired': ''
      },
      '0x30020115': {
        'keyword': 'ImagingApertureSpecificationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Imaging Aperture Specification Type',
        'retired': ''
      },
      '0x30020116': {
        'keyword': 'NumberOfAcquisitionDevices',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Acquisition Devices',
        'retired': ''
      },
      '0x30020117': {
        'keyword': 'AcquisitionDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Device Sequence',
        'retired': ''
      },
      '0x30020118': {
        'keyword': 'AcquisitionTaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Task Sequence',
        'retired': ''
      },
      '0x30020119': {
        'keyword': 'AcquisitionTaskWorkitemCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Task Workitem Code Sequence',
        'retired': ''
      },
      '0x3002011A': {
        'keyword': 'AcquisitionSubtaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Subtask Sequence',
        'retired': ''
      },
      '0x3002011B': {
        'keyword': 'SubtaskWorkitemCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Subtask Workitem Code Sequence',
        'retired': ''
      },
      '0x3002011C': {
        'keyword': 'AcquisitionTaskIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Acquisition Task Index',
        'retired': ''
      },
      '0x3002011D': {
        'keyword': 'AcquisitionSubtaskIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Acquisition Subtask Index',
        'retired': ''
      },
      '0x3002011E': {
        'keyword': 'ReferencedBaselineParametersRTRadiationInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Baseline Parameters RT Radiation Instance Sequence',
        'retired': ''
      },
      '0x3002011F': {
        'keyword': 'PositionAcquisitionTemplateIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Position Acquisition Template Identification Sequence',
        'retired': ''
      },
      '0x30020120': {
        'keyword': 'PositionAcquisitionTemplateID',
        'vr': 'ST',
        'vm': '1',
        'name': 'Position Acquisition Template ID',
        'retired': ''
      },
      '0x30020121': {
        'keyword': 'PositionAcquisitionTemplateName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Position Acquisition Template Name',
        'retired': ''
      },
      '0x30020122': {
        'keyword': 'PositionAcquisitionTemplateCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Position Acquisition Template Code Sequence',
        'retired': ''
      },
      '0x30020123': {
        'keyword': 'PositionAcquisitionTemplateDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Position Acquisition Template Description',
        'retired': ''
      },
      '0x30020124': {
        'keyword': 'AcquisitionTaskApplicabilitySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Task Applicability Sequence',
        'retired': ''
      },
      '0x30020125': {
        'keyword': 'ProjectionImagingAcquisitionParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Projection Imaging Acquisition Parameter Sequence',
        'retired': ''
      },
      '0x30020126': {
        'keyword': 'CTImagingAcquisitionParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'CT Imaging Acquisition Parameter Sequence',
        'retired': ''
      },
      '0x30020127': {
        'keyword': 'KVImagingGenerationParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'KV Imaging Generation Parameters Sequence',
        'retired': ''
      },
      '0x30020128': {
        'keyword': 'MVImagingGenerationParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MV Imaging Generation Parameters Sequence',
        'retired': ''
      },
      '0x30020129': {
        'keyword': 'AcquisitionSignalType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Signal Type',
        'retired': ''
      },
      '0x3002012A': {
        'keyword': 'AcquisitionMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Method',
        'retired': ''
      },
      '0x3002012B': {
        'keyword': 'ScanStartPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scan Start Position Sequence',
        'retired': ''
      },
      '0x3002012C': {
        'keyword': 'ScanStopPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Scan Stop Position Sequence',
        'retired': ''
      },
      '0x3002012D': {
        'keyword': 'ImagingSourceToBeamModifierDefinitionPlaneDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Imaging Source to Beam Modifier Definition Plane Distance',
        'retired': ''
      },
      '0x3002012E': {
        'keyword': 'ScanArcType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Arc Type',
        'retired': ''
      },
      '0x3002012F': {
        'keyword': 'DetectorPositioningType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Detector Positioning Type',
        'retired': ''
      },
      '0x30020130': {
        'keyword': 'AdditionalRTAccessoryDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Additional RT Accessory Device Sequence',
        'retired': ''
      },
      '0x30020131': {
        'keyword': 'DeviceSpecificAcquisitionParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device-Specific Acquisition Parameter Sequence',
        'retired': ''
      },
      '0x30020132': {
        'keyword': 'ReferencedPositionReferenceInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Position Reference Instance Sequence',
        'retired': ''
      },
      '0x30020133': {
        'keyword': 'EnergyDerivationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Energy Derivation Code Sequence',
        'retired': ''
      },
      '0x30020134': {
        'keyword': 'MaximumCumulativeMetersetExposure',
        'vr': 'FD',
        'vm': '1',
        'name': 'Maximum Cumulative Meterset Exposure',
        'retired': ''
      },
      '0x30020135': {
        'keyword': 'AcquisitionInitiationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Acquisition Initiation Sequence',
        'retired': ''
      },
      '0x30040001': {
        'keyword': 'DVHType',
        'vr': 'CS',
        'vm': '1',
        'name': 'DVH Type',
        'retired': ''
      },
      '0x30040002': {
        'keyword': 'DoseUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Units',
        'retired': ''
      },
      '0x30040004': {
        'keyword': 'DoseType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Type',
        'retired': ''
      },
      '0x30040005': {
        'keyword': 'SpatialTransformOfDose',
        'vr': 'CS',
        'vm': '1',
        'name': 'Spatial Transform of Dose',
        'retired': ''
      },
      '0x30040006': {
        'keyword': 'DoseComment',
        'vr': 'LO',
        'vm': '1',
        'name': 'Dose Comment',
        'retired': ''
      },
      '0x30040008': {
        'keyword': 'NormalizationPoint',
        'vr': 'DS',
        'vm': '3',
        'name': 'Normalization Point',
        'retired': ''
      },
      '0x3004000A': {
        'keyword': 'DoseSummationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Summation Type',
        'retired': ''
      },
      '0x3004000C': {
        'keyword': 'GridFrameOffsetVector',
        'vr': 'DS',
        'vm': '2-n',
        'name': 'Grid Frame Offset Vector',
        'retired': ''
      },
      '0x3004000E': {
        'keyword': 'DoseGridScaling',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dose Grid Scaling',
        'retired': ''
      },
      '0x30040010': {
        'keyword': 'RTDoseROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Dose ROI Sequence',
        'retired': 'Retired'
      },
      '0x30040012': {
        'keyword': 'DoseValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dose Value',
        'retired': 'Retired'
      },
      '0x30040014': {
        'keyword': 'TissueHeterogeneityCorrection',
        'vr': 'CS',
        'vm': '1-3',
        'name': 'Tissue Heterogeneity Correction',
        'retired': ''
      },
      '0x30040040': {
        'keyword': 'DVHNormalizationPoint',
        'vr': 'DS',
        'vm': '3',
        'name': 'DVH Normalization Point',
        'retired': ''
      },
      '0x30040042': {
        'keyword': 'DVHNormalizationDoseValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'DVH Normalization Dose Value',
        'retired': ''
      },
      '0x30040050': {
        'keyword': 'DVHSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DVH Sequence',
        'retired': ''
      },
      '0x30040052': {
        'keyword': 'DVHDoseScaling',
        'vr': 'DS',
        'vm': '1',
        'name': 'DVH Dose Scaling',
        'retired': ''
      },
      '0x30040054': {
        'keyword': 'DVHVolumeUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'DVH Volume Units',
        'retired': ''
      },
      '0x30040056': {
        'keyword': 'DVHNumberOfBins',
        'vr': 'IS',
        'vm': '1',
        'name': 'DVH Number of Bins',
        'retired': ''
      },
      '0x30040058': {
        'keyword': 'DVHData',
        'vr': 'DS',
        'vm': '2-2n',
        'name': 'DVH Data',
        'retired': ''
      },
      '0x30040060': {
        'keyword': 'DVHReferencedROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'DVH Referenced ROI Sequence',
        'retired': ''
      },
      '0x30040062': {
        'keyword': 'DVHROIContributionType',
        'vr': 'CS',
        'vm': '1',
        'name': 'DVH ROI Contribution Type',
        'retired': ''
      },
      '0x30040070': {
        'keyword': 'DVHMinimumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'DVH Minimum Dose',
        'retired': ''
      },
      '0x30040072': {
        'keyword': 'DVHMaximumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'DVH Maximum Dose',
        'retired': ''
      },
      '0x30040074': {
        'keyword': 'DVHMeanDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'DVH Mean Dose',
        'retired': ''
      },
      '0x30060002': {
        'keyword': 'StructureSetLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Structure Set Label',
        'retired': ''
      },
      '0x30060004': {
        'keyword': 'StructureSetName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Structure Set Name',
        'retired': ''
      },
      '0x30060006': {
        'keyword': 'StructureSetDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Structure Set Description',
        'retired': ''
      },
      '0x30060008': {
        'keyword': 'StructureSetDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Structure Set Date',
        'retired': ''
      },
      '0x30060009': {
        'keyword': 'StructureSetTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Structure Set Time',
        'retired': ''
      },
      '0x30060010': {
        'keyword': 'ReferencedFrameOfReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Frame of Reference Sequence',
        'retired': ''
      },
      '0x30060012': {
        'keyword': 'RTReferencedStudySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Referenced Study Sequence',
        'retired': ''
      },
      '0x30060014': {
        'keyword': 'RTReferencedSeriesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Referenced Series Sequence',
        'retired': ''
      },
      '0x30060016': {
        'keyword': 'ContourImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contour Image Sequence',
        'retired': ''
      },
      '0x30060018': {
        'keyword': 'PredecessorStructureSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Predecessor Structure Set Sequence',
        'retired': ''
      },
      '0x30060020': {
        'keyword': 'StructureSetROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Structure Set ROI Sequence',
        'retired': ''
      },
      '0x30060022': {
        'keyword': 'ROINumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'ROI Number',
        'retired': ''
      },
      '0x30060024': {
        'keyword': 'ReferencedFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Frame of Reference UID',
        'retired': ''
      },
      '0x30060026': {
        'keyword': 'ROIName',
        'vr': 'LO',
        'vm': '1',
        'name': 'ROI Name',
        'retired': ''
      },
      '0x30060028': {
        'keyword': 'ROIDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'ROI Description',
        'retired': ''
      },
      '0x3006002A': {
        'keyword': 'ROIDisplayColor',
        'vr': 'IS',
        'vm': '3',
        'name': 'ROI Display Color',
        'retired': ''
      },
      '0x3006002C': {
        'keyword': 'ROIVolume',
        'vr': 'DS',
        'vm': '1',
        'name': 'ROI Volume',
        'retired': ''
      },
      '0x30060030': {
        'keyword': 'RTRelatedROISequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Related ROI Sequence',
        'retired': ''
      },
      '0x30060033': {
        'keyword': 'RTROIRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT ROI Relationship',
        'retired': ''
      },
      '0x30060036': {
        'keyword': 'ROIGenerationAlgorithm',
        'vr': 'CS',
        'vm': '1',
        'name': 'ROI Generation Algorithm',
        'retired': ''
      },
      '0x30060037': {
        'keyword': 'ROIDerivationAlgorithmIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ROI Derivation Algorithm Identification Sequence',
        'retired': ''
      },
      '0x30060038': {
        'keyword': 'ROIGenerationDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'ROI Generation Description',
        'retired': ''
      },
      '0x30060039': {
        'keyword': 'ROIContourSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ROI Contour Sequence',
        'retired': ''
      },
      '0x30060040': {
        'keyword': 'ContourSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Contour Sequence',
        'retired': ''
      },
      '0x30060042': {
        'keyword': 'ContourGeometricType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Contour Geometric Type',
        'retired': ''
      },
      '0x30060044': {
        'keyword': 'ContourSlabThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Contour Slab Thickness',
        'retired': 'Retired'
      },
      '0x30060045': {
        'keyword': 'ContourOffsetVector',
        'vr': 'DS',
        'vm': '3',
        'name': 'Contour Offset Vector',
        'retired': 'Retired'
      },
      '0x30060046': {
        'keyword': 'NumberOfContourPoints',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Contour Points',
        'retired': ''
      },
      '0x30060048': {
        'keyword': 'ContourNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Contour Number',
        'retired': ''
      },
      '0x30060049': {
        'keyword': 'AttachedContours',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Attached Contours',
        'retired': 'Retired'
      },
      '0x3006004A': {
        'keyword': 'SourcePixelPlanesCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Pixel Planes Characteristics Sequence',
        'retired': ''
      },
      '0x30060050': {
        'keyword': 'ContourData',
        'vr': 'DS',
        'vm': '3-3n',
        'name': 'Contour Data',
        'retired': ''
      },
      '0x30060080': {
        'keyword': 'RTROIObservationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT ROI Observations Sequence',
        'retired': ''
      },
      '0x30060082': {
        'keyword': 'ObservationNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Observation Number',
        'retired': ''
      },
      '0x30060084': {
        'keyword': 'ReferencedROINumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced ROI Number',
        'retired': ''
      },
      '0x30060085': {
        'keyword': 'ROIObservationLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'ROI Observation Label',
        'retired': 'Retired'
      },
      '0x30060086': {
        'keyword': 'RTROIIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT ROI Identification Code Sequence',
        'retired': ''
      },
      '0x30060088': {
        'keyword': 'ROIObservationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'ROI Observation Description',
        'retired': 'Retired'
      },
      '0x300600A0': {
        'keyword': 'RelatedRTROIObservationsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related RT ROI Observations Sequence',
        'retired': ''
      },
      '0x300600A4': {
        'keyword': 'RTROIInterpretedType',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT ROI Interpreted Type',
        'retired': ''
      },
      '0x300600A6': {
        'keyword': 'ROIInterpreter',
        'vr': 'PN',
        'vm': '1',
        'name': 'ROI Interpreter',
        'retired': ''
      },
      '0x300600B0': {
        'keyword': 'ROIPhysicalPropertiesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ROI Physical Properties Sequence',
        'retired': ''
      },
      '0x300600B2': {
        'keyword': 'ROIPhysicalProperty',
        'vr': 'CS',
        'vm': '1',
        'name': 'ROI Physical Property',
        'retired': ''
      },
      '0x300600B4': {
        'keyword': 'ROIPhysicalPropertyValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'ROI Physical Property Value',
        'retired': ''
      },
      '0x300600B6': {
        'keyword': 'ROIElementalCompositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ROI Elemental Composition Sequence',
        'retired': ''
      },
      '0x300600B7': {
        'keyword': 'ROIElementalCompositionAtomicNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'ROI Elemental Composition Atomic Number',
        'retired': ''
      },
      '0x300600B8': {
        'keyword': 'ROIElementalCompositionAtomicMassFraction',
        'vr': 'FL',
        'vm': '1',
        'name': 'ROI Elemental Composition Atomic Mass Fraction',
        'retired': ''
      },
      '0x300600B9': {
        'keyword': 'AdditionalRTROIIdentificationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Additional RT ROI Identification Code Sequence',
        'retired': 'Retired'
      },
      '0x300600C0': {
        'keyword': 'FrameOfReferenceRelationshipSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Frame of Reference Relationship Sequence',
        'retired': 'Retired'
      },
      '0x300600C2': {
        'keyword': 'RelatedFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Related Frame of Reference UID',
        'retired': 'Retired'
      },
      '0x300600C4': {
        'keyword': 'FrameOfReferenceTransformationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Frame of Reference Transformation Type',
        'retired': 'Retired'
      },
      '0x300600C6': {
        'keyword': 'FrameOfReferenceTransformationMatrix',
        'vr': 'DS',
        'vm': '16',
        'name': 'Frame of Reference Transformation Matrix',
        'retired': ''
      },
      '0x300600C8': {
        'keyword': 'FrameOfReferenceTransformationComment',
        'vr': 'LO',
        'vm': '1',
        'name': 'Frame of Reference Transformation Comment',
        'retired': ''
      },
      '0x300600C9': {
        'keyword': 'PatientLocationCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Location Coordinates Sequence',
        'retired': ''
      },
      '0x300600CA': {
        'keyword': 'PatientLocationCoordinatesCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Location Coordinates Code Sequence',
        'retired': ''
      },
      '0x300600CB': {
        'keyword': 'PatientSupportPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Position Sequence',
        'retired': ''
      },
      '0x30080010': {
        'keyword': 'MeasuredDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measured Dose Reference Sequence',
        'retired': ''
      },
      '0x30080012': {
        'keyword': 'MeasuredDoseDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Measured Dose Description',
        'retired': ''
      },
      '0x30080014': {
        'keyword': 'MeasuredDoseType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Measured Dose Type',
        'retired': ''
      },
      '0x30080016': {
        'keyword': 'MeasuredDoseValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Measured Dose Value',
        'retired': ''
      },
      '0x30080020': {
        'keyword': 'TreatmentSessionBeamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Session Beam Sequence',
        'retired': ''
      },
      '0x30080021': {
        'keyword': 'TreatmentSessionIonBeamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Session Ion Beam Sequence',
        'retired': ''
      },
      '0x30080022': {
        'keyword': 'CurrentFractionNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Current Fraction Number',
        'retired': ''
      },
      '0x30080024': {
        'keyword': 'TreatmentControlPointDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Treatment Control Point Date',
        'retired': ''
      },
      '0x30080025': {
        'keyword': 'TreatmentControlPointTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Treatment Control Point Time',
        'retired': ''
      },
      '0x3008002A': {
        'keyword': 'TreatmentTerminationStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Termination Status',
        'retired': ''
      },
      '0x3008002B': {
        'keyword': 'TreatmentTerminationCode',
        'vr': 'SH',
        'vm': '1',
        'name': 'Treatment Termination Code',
        'retired': 'Retired'
      },
      '0x3008002C': {
        'keyword': 'TreatmentVerificationStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Verification Status',
        'retired': ''
      },
      '0x30080030': {
        'keyword': 'ReferencedTreatmentRecordSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Treatment Record Sequence',
        'retired': ''
      },
      '0x30080032': {
        'keyword': 'SpecifiedPrimaryMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Primary Meterset',
        'retired': ''
      },
      '0x30080033': {
        'keyword': 'SpecifiedSecondaryMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Secondary Meterset',
        'retired': ''
      },
      '0x30080036': {
        'keyword': 'DeliveredPrimaryMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Primary Meterset',
        'retired': ''
      },
      '0x30080037': {
        'keyword': 'DeliveredSecondaryMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Secondary Meterset',
        'retired': ''
      },
      '0x3008003A': {
        'keyword': 'SpecifiedTreatmentTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Treatment Time',
        'retired': ''
      },
      '0x3008003B': {
        'keyword': 'DeliveredTreatmentTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Treatment Time',
        'retired': ''
      },
      '0x30080040': {
        'keyword': 'ControlPointDeliverySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Control Point Delivery Sequence',
        'retired': ''
      },
      '0x30080041': {
        'keyword': 'IonControlPointDeliverySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Control Point Delivery Sequence',
        'retired': ''
      },
      '0x30080042': {
        'keyword': 'SpecifiedMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Meterset',
        'retired': ''
      },
      '0x30080044': {
        'keyword': 'DeliveredMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Meterset',
        'retired': ''
      },
      '0x30080045': {
        'keyword': 'MetersetRateSet',
        'vr': 'FL',
        'vm': '1',
        'name': 'Meterset Rate Set',
        'retired': ''
      },
      '0x30080046': {
        'keyword': 'MetersetRateDelivered',
        'vr': 'FL',
        'vm': '1',
        'name': 'Meterset Rate Delivered',
        'retired': ''
      },
      '0x30080047': {
        'keyword': 'ScanSpotMetersetsDelivered',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Scan Spot Metersets Delivered',
        'retired': ''
      },
      '0x30080048': {
        'keyword': 'DoseRateDelivered',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dose Rate Delivered',
        'retired': ''
      },
      '0x30080050': {
        'keyword': 'TreatmentSummaryCalculatedDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Summary Calculated Dose Reference Sequence',
        'retired': ''
      },
      '0x30080052': {
        'keyword': 'CumulativeDoseToDoseReference',
        'vr': 'DS',
        'vm': '1',
        'name': 'Cumulative Dose to Dose Reference',
        'retired': ''
      },
      '0x30080054': {
        'keyword': 'FirstTreatmentDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'First Treatment Date',
        'retired': ''
      },
      '0x30080056': {
        'keyword': 'MostRecentTreatmentDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Most Recent Treatment Date',
        'retired': ''
      },
      '0x3008005A': {
        'keyword': 'NumberOfFractionsDelivered',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Fractions Delivered',
        'retired': ''
      },
      '0x30080060': {
        'keyword': 'OverrideSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Override Sequence',
        'retired': ''
      },
      '0x30080061': {
        'keyword': 'ParameterSequencePointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Parameter Sequence Pointer',
        'retired': ''
      },
      '0x30080062': {
        'keyword': 'OverrideParameterPointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Override Parameter Pointer',
        'retired': ''
      },
      '0x30080063': {
        'keyword': 'ParameterItemIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Parameter Item Index',
        'retired': ''
      },
      '0x30080064': {
        'keyword': 'MeasuredDoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Measured Dose Reference Number',
        'retired': ''
      },
      '0x30080065': {
        'keyword': 'ParameterPointer',
        'vr': 'AT',
        'vm': '1',
        'name': 'Parameter Pointer',
        'retired': ''
      },
      '0x30080066': {
        'keyword': 'OverrideReason',
        'vr': 'ST',
        'vm': '1',
        'name': 'Override Reason',
        'retired': ''
      },
      '0x30080067': {
        'keyword': 'ParameterValueNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Parameter Value Number',
        'retired': ''
      },
      '0x30080068': {
        'keyword': 'CorrectedParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Corrected Parameter Sequence',
        'retired': ''
      },
      '0x3008006A': {
        'keyword': 'CorrectionValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Correction Value',
        'retired': ''
      },
      '0x30080070': {
        'keyword': 'CalculatedDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Calculated Dose Reference Sequence',
        'retired': ''
      },
      '0x30080072': {
        'keyword': 'CalculatedDoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Calculated Dose Reference Number',
        'retired': ''
      },
      '0x30080074': {
        'keyword': 'CalculatedDoseReferenceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Calculated Dose Reference Description',
        'retired': ''
      },
      '0x30080076': {
        'keyword': 'CalculatedDoseReferenceDoseValue',
        'vr': 'DS',
        'vm': '1',
        'name': 'Calculated Dose Reference Dose Value',
        'retired': ''
      },
      '0x30080078': {
        'keyword': 'StartMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Start Meterset',
        'retired': ''
      },
      '0x3008007A': {
        'keyword': 'EndMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'End Meterset',
        'retired': ''
      },
      '0x30080080': {
        'keyword': 'ReferencedMeasuredDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Measured Dose Reference Sequence',
        'retired': ''
      },
      '0x30080082': {
        'keyword': 'ReferencedMeasuredDoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Measured Dose Reference Number',
        'retired': ''
      },
      '0x30080090': {
        'keyword': 'ReferencedCalculatedDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Calculated Dose Reference Sequence',
        'retired': ''
      },
      '0x30080092': {
        'keyword': 'ReferencedCalculatedDoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Calculated Dose Reference Number',
        'retired': ''
      },
      '0x300800A0': {
        'keyword': 'BeamLimitingDeviceLeafPairsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Limiting Device Leaf Pairs Sequence',
        'retired': ''
      },
      '0x300800A1': {
        'keyword': 'EnhancedRTBeamLimitingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Enhanced RT Beam Limiting Device Sequence',
        'retired': ''
      },
      '0x300800A2': {
        'keyword': 'EnhancedRTBeamLimitingOpeningSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Enhanced RT Beam Limiting Opening Sequence',
        'retired': ''
      },
      '0x300800A3': {
        'keyword': 'EnhancedRTBeamLimitingDeviceDefinitionFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Enhanced RT Beam Limiting Device Definition Flag',
        'retired': ''
      },
      '0x300800A4': {
        'keyword': 'ParallelRTBeamDelimiterOpeningExtents',
        'vr': 'FD',
        'vm': '2-2n',
        'name': 'Parallel RT Beam Delimiter Opening Extents',
        'retired': ''
      },
      '0x300800B0': {
        'keyword': 'RecordedWedgeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Wedge Sequence',
        'retired': ''
      },
      '0x300800C0': {
        'keyword': 'RecordedCompensatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Compensator Sequence',
        'retired': ''
      },
      '0x300800D0': {
        'keyword': 'RecordedBlockSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Block Sequence',
        'retired': ''
      },
      '0x300800D1': {
        'keyword': 'RecordedBlockSlabSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Block Slab Sequence',
        'retired': ''
      },
      '0x300800E0': {
        'keyword': 'TreatmentSummaryMeasuredDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Summary Measured Dose Reference Sequence',
        'retired': ''
      },
      '0x300800F0': {
        'keyword': 'RecordedSnoutSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Snout Sequence',
        'retired': ''
      },
      '0x300800F2': {
        'keyword': 'RecordedRangeShifterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Range Shifter Sequence',
        'retired': ''
      },
      '0x300800F4': {
        'keyword': 'RecordedLateralSpreadingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Lateral Spreading Device Sequence',
        'retired': ''
      },
      '0x300800F6': {
        'keyword': 'RecordedRangeModulatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Range Modulator Sequence',
        'retired': ''
      },
      '0x30080100': {
        'keyword': 'RecordedSourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Source Sequence',
        'retired': ''
      },
      '0x30080105': {
        'keyword': 'SourceSerialNumber',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Serial Number',
        'retired': ''
      },
      '0x30080110': {
        'keyword': 'TreatmentSessionApplicationSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Session Application Setup Sequence',
        'retired': ''
      },
      '0x30080116': {
        'keyword': 'ApplicationSetupCheck',
        'vr': 'CS',
        'vm': '1',
        'name': 'Application Setup Check',
        'retired': ''
      },
      '0x30080120': {
        'keyword': 'RecordedBrachyAccessoryDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Brachy Accessory Device Sequence',
        'retired': ''
      },
      '0x30080122': {
        'keyword': 'ReferencedBrachyAccessoryDeviceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Brachy Accessory Device Number',
        'retired': ''
      },
      '0x30080130': {
        'keyword': 'RecordedChannelSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Channel Sequence',
        'retired': ''
      },
      '0x30080132': {
        'keyword': 'SpecifiedChannelTotalTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Channel Total Time',
        'retired': ''
      },
      '0x30080134': {
        'keyword': 'DeliveredChannelTotalTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Channel Total Time',
        'retired': ''
      },
      '0x30080136': {
        'keyword': 'SpecifiedNumberOfPulses',
        'vr': 'IS',
        'vm': '1',
        'name': 'Specified Number of Pulses',
        'retired': ''
      },
      '0x30080138': {
        'keyword': 'DeliveredNumberOfPulses',
        'vr': 'IS',
        'vm': '1',
        'name': 'Delivered Number of Pulses',
        'retired': ''
      },
      '0x3008013A': {
        'keyword': 'SpecifiedPulseRepetitionInterval',
        'vr': 'DS',
        'vm': '1',
        'name': 'Specified Pulse Repetition Interval',
        'retired': ''
      },
      '0x3008013C': {
        'keyword': 'DeliveredPulseRepetitionInterval',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivered Pulse Repetition Interval',
        'retired': ''
      },
      '0x30080140': {
        'keyword': 'RecordedSourceApplicatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Source Applicator Sequence',
        'retired': ''
      },
      '0x30080142': {
        'keyword': 'ReferencedSourceApplicatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Source Applicator Number',
        'retired': ''
      },
      '0x30080150': {
        'keyword': 'RecordedChannelShieldSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Recorded Channel Shield Sequence',
        'retired': ''
      },
      '0x30080152': {
        'keyword': 'ReferencedChannelShieldNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Channel Shield Number',
        'retired': ''
      },
      '0x30080160': {
        'keyword': 'BrachyControlPointDeliveredSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Control Point Delivered Sequence',
        'retired': ''
      },
      '0x30080162': {
        'keyword': 'SafePositionExitDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Safe Position Exit Date',
        'retired': ''
      },
      '0x30080164': {
        'keyword': 'SafePositionExitTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Safe Position Exit Time',
        'retired': ''
      },
      '0x30080166': {
        'keyword': 'SafePositionReturnDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Safe Position Return Date',
        'retired': ''
      },
      '0x30080168': {
        'keyword': 'SafePositionReturnTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Safe Position Return Time',
        'retired': ''
      },
      '0x30080171': {
        'keyword': 'PulseSpecificBrachyControlPointDeliveredSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Pulse Specific Brachy Control Point Delivered Sequence',
        'retired': ''
      },
      '0x30080172': {
        'keyword': 'PulseNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Pulse Number',
        'retired': ''
      },
      '0x30080173': {
        'keyword': 'BrachyPulseControlPointDeliveredSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Pulse Control Point Delivered Sequence',
        'retired': ''
      },
      '0x30080200': {
        'keyword': 'CurrentTreatmentStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Current Treatment Status',
        'retired': ''
      },
      '0x30080202': {
        'keyword': 'TreatmentStatusComment',
        'vr': 'ST',
        'vm': '1',
        'name': 'Treatment Status Comment',
        'retired': ''
      },
      '0x30080220': {
        'keyword': 'FractionGroupSummarySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fraction Group Summary Sequence',
        'retired': ''
      },
      '0x30080223': {
        'keyword': 'ReferencedFractionNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Fraction Number',
        'retired': ''
      },
      '0x30080224': {
        'keyword': 'FractionGroupType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fraction Group Type',
        'retired': ''
      },
      '0x30080230': {
        'keyword': 'BeamStopperPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Stopper Position',
        'retired': ''
      },
      '0x30080240': {
        'keyword': 'FractionStatusSummarySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fraction Status Summary Sequence',
        'retired': ''
      },
      '0x30080250': {
        'keyword': 'TreatmentDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Treatment Date',
        'retired': ''
      },
      '0x30080251': {
        'keyword': 'TreatmentTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Treatment Time',
        'retired': ''
      },
      '0x300A0002': {
        'keyword': 'RTPlanLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'RT Plan Label',
        'retired': ''
      },
      '0x300A0003': {
        'keyword': 'RTPlanName',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Plan Name',
        'retired': ''
      },
      '0x300A0004': {
        'keyword': 'RTPlanDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'RT Plan Description',
        'retired': ''
      },
      '0x300A0006': {
        'keyword': 'RTPlanDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'RT Plan Date',
        'retired': ''
      },
      '0x300A0007': {
        'keyword': 'RTPlanTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'RT Plan Time',
        'retired': ''
      },
      '0x300A0009': {
        'keyword': 'TreatmentProtocols',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Treatment Protocols',
        'retired': ''
      },
      '0x300A000A': {
        'keyword': 'PlanIntent',
        'vr': 'CS',
        'vm': '1',
        'name': 'Plan Intent',
        'retired': ''
      },
      '0x300A000B': {
        'keyword': 'TreatmentSites',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Treatment Sites',
        'retired': 'Retired'
      },
      '0x300A000C': {
        'keyword': 'RTPlanGeometry',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Plan Geometry',
        'retired': ''
      },
      '0x300A000E': {
        'keyword': 'PrescriptionDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Prescription Description',
        'retired': ''
      },
      '0x300A0010': {
        'keyword': 'DoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dose Reference Sequence',
        'retired': ''
      },
      '0x300A0012': {
        'keyword': 'DoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Dose Reference Number',
        'retired': ''
      },
      '0x300A0013': {
        'keyword': 'DoseReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Dose Reference UID',
        'retired': ''
      },
      '0x300A0014': {
        'keyword': 'DoseReferenceStructureType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Reference Structure Type',
        'retired': ''
      },
      '0x300A0015': {
        'keyword': 'NominalBeamEnergyUnit',
        'vr': 'CS',
        'vm': '1',
        'name': 'Nominal Beam Energy Unit',
        'retired': ''
      },
      '0x300A0016': {
        'keyword': 'DoseReferenceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Dose Reference Description',
        'retired': ''
      },
      '0x300A0018': {
        'keyword': 'DoseReferencePointCoordinates',
        'vr': 'DS',
        'vm': '3',
        'name': 'Dose Reference Point Coordinates',
        'retired': ''
      },
      '0x300A001A': {
        'keyword': 'NominalPriorDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Prior Dose',
        'retired': ''
      },
      '0x300A0020': {
        'keyword': 'DoseReferenceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Reference Type',
        'retired': ''
      },
      '0x300A0021': {
        'keyword': 'ConstraintWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Constraint Weight',
        'retired': ''
      },
      '0x300A0022': {
        'keyword': 'DeliveryWarningDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivery Warning Dose',
        'retired': ''
      },
      '0x300A0023': {
        'keyword': 'DeliveryMaximumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Delivery Maximum Dose',
        'retired': ''
      },
      '0x300A0025': {
        'keyword': 'TargetMinimumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Target Minimum Dose',
        'retired': ''
      },
      '0x300A0026': {
        'keyword': 'TargetPrescriptionDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Target Prescription Dose',
        'retired': ''
      },
      '0x300A0027': {
        'keyword': 'TargetMaximumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Target Maximum Dose',
        'retired': ''
      },
      '0x300A0028': {
        'keyword': 'TargetUnderdoseVolumeFraction',
        'vr': 'DS',
        'vm': '1',
        'name': 'Target Underdose Volume Fraction',
        'retired': ''
      },
      '0x300A002A': {
        'keyword': 'OrganAtRiskFullVolumeDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Organ at Risk Full-volume Dose',
        'retired': ''
      },
      '0x300A002B': {
        'keyword': 'OrganAtRiskLimitDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Organ at Risk Limit Dose',
        'retired': ''
      },
      '0x300A002C': {
        'keyword': 'OrganAtRiskMaximumDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Organ at Risk Maximum Dose',
        'retired': ''
      },
      '0x300A002D': {
        'keyword': 'OrganAtRiskOverdoseVolumeFraction',
        'vr': 'DS',
        'vm': '1',
        'name': 'Organ at Risk Overdose Volume Fraction',
        'retired': ''
      },
      '0x300A0040': {
        'keyword': 'ToleranceTableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Tolerance Table Sequence',
        'retired': ''
      },
      '0x300A0042': {
        'keyword': 'ToleranceTableNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Tolerance Table Number',
        'retired': ''
      },
      '0x300A0043': {
        'keyword': 'ToleranceTableLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Tolerance Table Label',
        'retired': ''
      },
      '0x300A0044': {
        'keyword': 'GantryAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Gantry Angle Tolerance',
        'retired': ''
      },
      '0x300A0046': {
        'keyword': 'BeamLimitingDeviceAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Limiting Device Angle Tolerance',
        'retired': ''
      },
      '0x300A0048': {
        'keyword': 'BeamLimitingDeviceToleranceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Limiting Device Tolerance Sequence',
        'retired': ''
      },
      '0x300A004A': {
        'keyword': 'BeamLimitingDevicePositionTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Limiting Device Position Tolerance',
        'retired': ''
      },
      '0x300A004B': {
        'keyword': 'SnoutPositionTolerance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Snout Position Tolerance',
        'retired': ''
      },
      '0x300A004C': {
        'keyword': 'PatientSupportAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Patient Support Angle Tolerance',
        'retired': ''
      },
      '0x300A004E': {
        'keyword': 'TableTopEccentricAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Eccentric Angle Tolerance',
        'retired': ''
      },
      '0x300A004F': {
        'keyword': 'TableTopPitchAngleTolerance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Top Pitch Angle Tolerance',
        'retired': ''
      },
      '0x300A0050': {
        'keyword': 'TableTopRollAngleTolerance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Top Roll Angle Tolerance',
        'retired': ''
      },
      '0x300A0051': {
        'keyword': 'TableTopVerticalPositionTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Vertical Position Tolerance',
        'retired': ''
      },
      '0x300A0052': {
        'keyword': 'TableTopLongitudinalPositionTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Longitudinal Position Tolerance',
        'retired': ''
      },
      '0x300A0053': {
        'keyword': 'TableTopLateralPositionTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Lateral Position Tolerance',
        'retired': ''
      },
      '0x300A0055': {
        'keyword': 'RTPlanRelationship',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Plan Relationship',
        'retired': ''
      },
      '0x300A0070': {
        'keyword': 'FractionGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fraction Group Sequence',
        'retired': ''
      },
      '0x300A0071': {
        'keyword': 'FractionGroupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Fraction Group Number',
        'retired': ''
      },
      '0x300A0072': {
        'keyword': 'FractionGroupDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Fraction Group Description',
        'retired': ''
      },
      '0x300A0078': {
        'keyword': 'NumberOfFractionsPlanned',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Fractions Planned',
        'retired': ''
      },
      '0x300A0079': {
        'keyword': 'NumberOfFractionPatternDigitsPerDay',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Fraction Pattern Digits Per Day',
        'retired': ''
      },
      '0x300A007A': {
        'keyword': 'RepeatFractionCycleLength',
        'vr': 'IS',
        'vm': '1',
        'name': 'Repeat Fraction Cycle Length',
        'retired': ''
      },
      '0x300A007B': {
        'keyword': 'FractionPattern',
        'vr': 'LT',
        'vm': '1',
        'name': 'Fraction Pattern',
        'retired': ''
      },
      '0x300A0080': {
        'keyword': 'NumberOfBeams',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Beams',
        'retired': ''
      },
      '0x300A0082': {
        'keyword': 'BeamDoseSpecificationPoint',
        'vr': 'DS',
        'vm': '3',
        'name': 'Beam Dose Specification Point',
        'retired': 'Retired'
      },
      '0x300A0083': {
        'keyword': 'ReferencedDoseReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Dose Reference UID',
        'retired': ''
      },
      '0x300A0084': {
        'keyword': 'BeamDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Dose',
        'retired': ''
      },
      '0x300A0086': {
        'keyword': 'BeamMeterset',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Meterset',
        'retired': ''
      },
      '0x300A0088': {
        'keyword': 'BeamDosePointDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Beam Dose Point Depth',
        'retired': ''
      },
      '0x300A0089': {
        'keyword': 'BeamDosePointEquivalentDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Beam Dose Point Equivalent Depth',
        'retired': ''
      },
      '0x300A008A': {
        'keyword': 'BeamDosePointSSD',
        'vr': 'FL',
        'vm': '1',
        'name': 'Beam Dose Point SSD',
        'retired': ''
      },
      '0x300A008B': {
        'keyword': 'BeamDoseMeaning',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Dose Meaning',
        'retired': ''
      },
      '0x300A008C': {
        'keyword': 'BeamDoseVerificationControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Dose Verification Control Point Sequence',
        'retired': ''
      },
      '0x300A008D': {
        'keyword': 'AverageBeamDosePointDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Average Beam Dose Point Depth',
        'retired': 'Retired'
      },
      '0x300A008E': {
        'keyword': 'AverageBeamDosePointEquivalentDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Average Beam Dose Point Equivalent Depth',
        'retired': 'Retired'
      },
      '0x300A008F': {
        'keyword': 'AverageBeamDosePointSSD',
        'vr': 'FL',
        'vm': '1',
        'name': 'Average Beam Dose Point SSD',
        'retired': 'Retired'
      },
      '0x300A0090': {
        'keyword': 'BeamDoseType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Dose Type',
        'retired': ''
      },
      '0x300A0091': {
        'keyword': 'AlternateBeamDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Alternate Beam Dose',
        'retired': ''
      },
      '0x300A0092': {
        'keyword': 'AlternateBeamDoseType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Alternate Beam Dose Type',
        'retired': ''
      },
      '0x300A0093': {
        'keyword': 'DepthValueAveragingFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Depth Value Averaging Flag',
        'retired': ''
      },
      '0x300A0094': {
        'keyword': 'BeamDosePointSourceToExternalContourDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Dose Point Source to External Contour Distance',
        'retired': ''
      },
      '0x300A00A0': {
        'keyword': 'NumberOfBrachyApplicationSetups',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Brachy Application Setups',
        'retired': ''
      },
      '0x300A00A2': {
        'keyword': 'BrachyApplicationSetupDoseSpecificationPoint',
        'vr': 'DS',
        'vm': '3',
        'name': 'Brachy Application Setup Dose Specification Point',
        'retired': ''
      },
      '0x300A00A4': {
        'keyword': 'BrachyApplicationSetupDose',
        'vr': 'DS',
        'vm': '1',
        'name': 'Brachy Application Setup Dose',
        'retired': ''
      },
      '0x300A00B0': {
        'keyword': 'BeamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Sequence',
        'retired': ''
      },
      '0x300A00B2': {
        'keyword': 'TreatmentMachineName',
        'vr': 'SH',
        'vm': '1',
        'name': 'Treatment Machine Name',
        'retired': ''
      },
      '0x300A00B3': {
        'keyword': 'PrimaryDosimeterUnit',
        'vr': 'CS',
        'vm': '1',
        'name': 'Primary Dosimeter Unit',
        'retired': ''
      },
      '0x300A00B4': {
        'keyword': 'SourceAxisDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source-Axis Distance',
        'retired': ''
      },
      '0x300A00B6': {
        'keyword': 'BeamLimitingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Limiting Device Sequence',
        'retired': ''
      },
      '0x300A00B8': {
        'keyword': 'RTBeamLimitingDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Beam Limiting Device Type',
        'retired': ''
      },
      '0x300A00BA': {
        'keyword': 'SourceToBeamLimitingDeviceDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Beam Limiting Device Distance',
        'retired': ''
      },
      '0x300A00BB': {
        'keyword': 'IsocenterToBeamLimitingDeviceDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Beam Limiting Device Distance',
        'retired': ''
      },
      '0x300A00BC': {
        'keyword': 'NumberOfLeafJawPairs',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Leaf/Jaw Pairs',
        'retired': ''
      },
      '0x300A00BE': {
        'keyword': 'LeafPositionBoundaries',
        'vr': 'DS',
        'vm': '3-n',
        'name': 'Leaf Position Boundaries',
        'retired': ''
      },
      '0x300A00C0': {
        'keyword': 'BeamNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Beam Number',
        'retired': ''
      },
      '0x300A00C2': {
        'keyword': 'BeamName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Beam Name',
        'retired': ''
      },
      '0x300A00C3': {
        'keyword': 'BeamDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Beam Description',
        'retired': ''
      },
      '0x300A00C4': {
        'keyword': 'BeamType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Type',
        'retired': ''
      },
      '0x300A00C5': {
        'keyword': 'BeamDeliveryDurationLimit',
        'vr': 'FD',
        'vm': '1',
        'name': 'Beam Delivery Duration Limit',
        'retired': ''
      },
      '0x300A00C6': {
        'keyword': 'RadiationType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Radiation Type',
        'retired': ''
      },
      '0x300A00C7': {
        'keyword': 'HighDoseTechniqueType',
        'vr': 'CS',
        'vm': '1',
        'name': 'High-Dose Technique Type',
        'retired': ''
      },
      '0x300A00C8': {
        'keyword': 'ReferenceImageNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Reference Image Number',
        'retired': ''
      },
      '0x300A00CA': {
        'keyword': 'PlannedVerificationImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planned Verification Image Sequence',
        'retired': ''
      },
      '0x300A00CC': {
        'keyword': 'ImagingDeviceSpecificAcquisitionParameters',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Imaging Device-Specific Acquisition Parameters',
        'retired': ''
      },
      '0x300A00CE': {
        'keyword': 'TreatmentDeliveryType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Delivery Type',
        'retired': ''
      },
      '0x300A00D0': {
        'keyword': 'NumberOfWedges',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Wedges',
        'retired': ''
      },
      '0x300A00D1': {
        'keyword': 'WedgeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Wedge Sequence',
        'retired': ''
      },
      '0x300A00D2': {
        'keyword': 'WedgeNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Wedge Number',
        'retired': ''
      },
      '0x300A00D3': {
        'keyword': 'WedgeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Wedge Type',
        'retired': ''
      },
      '0x300A00D4': {
        'keyword': 'WedgeID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Wedge ID',
        'retired': ''
      },
      '0x300A00D5': {
        'keyword': 'WedgeAngle',
        'vr': 'IS',
        'vm': '1',
        'name': 'Wedge Angle',
        'retired': ''
      },
      '0x300A00D6': {
        'keyword': 'WedgeFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Factor',
        'retired': ''
      },
      '0x300A00D7': {
        'keyword': 'TotalWedgeTrayWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Total Wedge Tray Water-Equivalent Thickness',
        'retired': ''
      },
      '0x300A00D8': {
        'keyword': 'WedgeOrientation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Wedge Orientation',
        'retired': ''
      },
      '0x300A00D9': {
        'keyword': 'IsocenterToWedgeTrayDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Wedge Tray Distance',
        'retired': ''
      },
      '0x300A00DA': {
        'keyword': 'SourceToWedgeTrayDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Wedge Tray Distance',
        'retired': ''
      },
      '0x300A00DB': {
        'keyword': 'WedgeThinEdgePosition',
        'vr': 'FL',
        'vm': '1',
        'name': 'Wedge Thin Edge Position',
        'retired': ''
      },
      '0x300A00DC': {
        'keyword': 'BolusID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Bolus ID',
        'retired': ''
      },
      '0x300A00DD': {
        'keyword': 'BolusDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Bolus Description',
        'retired': ''
      },
      '0x300A00DE': {
        'keyword': 'EffectiveWedgeAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Effective Wedge Angle',
        'retired': ''
      },
      '0x300A00E0': {
        'keyword': 'NumberOfCompensators',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Compensators',
        'retired': ''
      },
      '0x300A00E1': {
        'keyword': 'MaterialID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Material ID',
        'retired': ''
      },
      '0x300A00E2': {
        'keyword': 'TotalCompensatorTrayFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Total Compensator Tray Factor',
        'retired': ''
      },
      '0x300A00E3': {
        'keyword': 'CompensatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Compensator Sequence',
        'retired': ''
      },
      '0x300A00E4': {
        'keyword': 'CompensatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Compensator Number',
        'retired': ''
      },
      '0x300A00E5': {
        'keyword': 'CompensatorID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Compensator ID',
        'retired': ''
      },
      '0x300A00E6': {
        'keyword': 'SourceToCompensatorTrayDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Compensator Tray Distance',
        'retired': ''
      },
      '0x300A00E7': {
        'keyword': 'CompensatorRows',
        'vr': 'IS',
        'vm': '1',
        'name': 'Compensator Rows',
        'retired': ''
      },
      '0x300A00E8': {
        'keyword': 'CompensatorColumns',
        'vr': 'IS',
        'vm': '1',
        'name': 'Compensator Columns',
        'retired': ''
      },
      '0x300A00E9': {
        'keyword': 'CompensatorPixelSpacing',
        'vr': 'DS',
        'vm': '2',
        'name': 'Compensator Pixel Spacing',
        'retired': ''
      },
      '0x300A00EA': {
        'keyword': 'CompensatorPosition',
        'vr': 'DS',
        'vm': '2',
        'name': 'Compensator Position',
        'retired': ''
      },
      '0x300A00EB': {
        'keyword': 'CompensatorTransmissionData',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Compensator Transmission Data',
        'retired': ''
      },
      '0x300A00EC': {
        'keyword': 'CompensatorThicknessData',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Compensator Thickness Data',
        'retired': ''
      },
      '0x300A00ED': {
        'keyword': 'NumberOfBoli',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Boli',
        'retired': ''
      },
      '0x300A00EE': {
        'keyword': 'CompensatorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compensator Type',
        'retired': ''
      },
      '0x300A00EF': {
        'keyword': 'CompensatorTrayID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Compensator Tray ID',
        'retired': ''
      },
      '0x300A00F0': {
        'keyword': 'NumberOfBlocks',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Blocks',
        'retired': ''
      },
      '0x300A00F2': {
        'keyword': 'TotalBlockTrayFactor',
        'vr': 'DS',
        'vm': '1',
        'name': 'Total Block Tray Factor',
        'retired': ''
      },
      '0x300A00F3': {
        'keyword': 'TotalBlockTrayWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Total Block Tray Water-Equivalent Thickness',
        'retired': ''
      },
      '0x300A00F4': {
        'keyword': 'BlockSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Block Sequence',
        'retired': ''
      },
      '0x300A00F5': {
        'keyword': 'BlockTrayID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Block Tray ID',
        'retired': ''
      },
      '0x300A00F6': {
        'keyword': 'SourceToBlockTrayDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Block Tray Distance',
        'retired': ''
      },
      '0x300A00F7': {
        'keyword': 'IsocenterToBlockTrayDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Block Tray Distance',
        'retired': ''
      },
      '0x300A00F8': {
        'keyword': 'BlockType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Block Type',
        'retired': ''
      },
      '0x300A00F9': {
        'keyword': 'AccessoryCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Accessory Code',
        'retired': ''
      },
      '0x300A00FA': {
        'keyword': 'BlockDivergence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Block Divergence',
        'retired': ''
      },
      '0x300A00FB': {
        'keyword': 'BlockMountingPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Block Mounting Position',
        'retired': ''
      },
      '0x300A00FC': {
        'keyword': 'BlockNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Block Number',
        'retired': ''
      },
      '0x300A00FE': {
        'keyword': 'BlockName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Block Name',
        'retired': ''
      },
      '0x300A0100': {
        'keyword': 'BlockThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Block Thickness',
        'retired': ''
      },
      '0x300A0102': {
        'keyword': 'BlockTransmission',
        'vr': 'DS',
        'vm': '1',
        'name': 'Block Transmission',
        'retired': ''
      },
      '0x300A0104': {
        'keyword': 'BlockNumberOfPoints',
        'vr': 'IS',
        'vm': '1',
        'name': 'Block Number of Points',
        'retired': ''
      },
      '0x300A0106': {
        'keyword': 'BlockData',
        'vr': 'DS',
        'vm': '2-2n',
        'name': 'Block Data',
        'retired': ''
      },
      '0x300A0107': {
        'keyword': 'ApplicatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Applicator Sequence',
        'retired': ''
      },
      '0x300A0108': {
        'keyword': 'ApplicatorID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Applicator ID',
        'retired': ''
      },
      '0x300A0109': {
        'keyword': 'ApplicatorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Applicator Type',
        'retired': ''
      },
      '0x300A010A': {
        'keyword': 'ApplicatorDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Applicator Description',
        'retired': ''
      },
      '0x300A010C': {
        'keyword': 'CumulativeDoseReferenceCoefficient',
        'vr': 'DS',
        'vm': '1',
        'name': 'Cumulative Dose Reference Coefficient',
        'retired': ''
      },
      '0x300A010E': {
        'keyword': 'FinalCumulativeMetersetWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Final Cumulative Meterset Weight',
        'retired': ''
      },
      '0x300A0110': {
        'keyword': 'NumberOfControlPoints',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Control Points',
        'retired': ''
      },
      '0x300A0111': {
        'keyword': 'ControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Control Point Sequence',
        'retired': ''
      },
      '0x300A0112': {
        'keyword': 'ControlPointIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Control Point Index',
        'retired': ''
      },
      '0x300A0114': {
        'keyword': 'NominalBeamEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Beam Energy',
        'retired': ''
      },
      '0x300A0115': {
        'keyword': 'DoseRateSet',
        'vr': 'DS',
        'vm': '1',
        'name': 'Dose Rate Set',
        'retired': ''
      },
      '0x300A0116': {
        'keyword': 'WedgePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Wedge Position Sequence',
        'retired': ''
      },
      '0x300A0118': {
        'keyword': 'WedgePosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Wedge Position',
        'retired': ''
      },
      '0x300A011A': {
        'keyword': 'BeamLimitingDevicePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Limiting Device Position Sequence',
        'retired': ''
      },
      '0x300A011C': {
        'keyword': 'LeafJawPositions',
        'vr': 'DS',
        'vm': '2-2n',
        'name': 'Leaf/Jaw Positions',
        'retired': ''
      },
      '0x300A011E': {
        'keyword': 'GantryAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Gantry Angle',
        'retired': ''
      },
      '0x300A011F': {
        'keyword': 'GantryRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gantry Rotation Direction',
        'retired': ''
      },
      '0x300A0120': {
        'keyword': 'BeamLimitingDeviceAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Beam Limiting Device Angle',
        'retired': ''
      },
      '0x300A0121': {
        'keyword': 'BeamLimitingDeviceRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Limiting Device Rotation Direction',
        'retired': ''
      },
      '0x300A0122': {
        'keyword': 'PatientSupportAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Patient Support Angle',
        'retired': ''
      },
      '0x300A0123': {
        'keyword': 'PatientSupportRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Support Rotation Direction',
        'retired': ''
      },
      '0x300A0124': {
        'keyword': 'TableTopEccentricAxisDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Eccentric Axis Distance',
        'retired': ''
      },
      '0x300A0125': {
        'keyword': 'TableTopEccentricAngle',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Eccentric Angle',
        'retired': ''
      },
      '0x300A0126': {
        'keyword': 'TableTopEccentricRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Table Top Eccentric Rotation Direction',
        'retired': ''
      },
      '0x300A0128': {
        'keyword': 'TableTopVerticalPosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Vertical Position',
        'retired': ''
      },
      '0x300A0129': {
        'keyword': 'TableTopLongitudinalPosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Longitudinal Position',
        'retired': ''
      },
      '0x300A012A': {
        'keyword': 'TableTopLateralPosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Lateral Position',
        'retired': ''
      },
      '0x300A012C': {
        'keyword': 'IsocenterPosition',
        'vr': 'DS',
        'vm': '3',
        'name': 'Isocenter Position',
        'retired': ''
      },
      '0x300A012E': {
        'keyword': 'SurfaceEntryPoint',
        'vr': 'DS',
        'vm': '3',
        'name': 'Surface Entry Point',
        'retired': ''
      },
      '0x300A0130': {
        'keyword': 'SourceToSurfaceDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source to Surface Distance',
        'retired': ''
      },
      '0x300A0131': {
        'keyword': 'AverageBeamDosePointSourceToExternalContourDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Average Beam Dose Point Source to External Contour Distance',
        'retired': ''
      },
      '0x300A0132': {
        'keyword': 'SourceToExternalContourDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Source to External Contour Distance',
        'retired': ''
      },
      '0x300A0133': {
        'keyword': 'ExternalContourEntryPoint',
        'vr': 'FL',
        'vm': '3',
        'name': 'External Contour Entry Point',
        'retired': ''
      },
      '0x300A0134': {
        'keyword': 'CumulativeMetersetWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Cumulative Meterset Weight',
        'retired': ''
      },
      '0x300A0140': {
        'keyword': 'TableTopPitchAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Top Pitch Angle',
        'retired': ''
      },
      '0x300A0142': {
        'keyword': 'TableTopPitchRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Table Top Pitch Rotation Direction',
        'retired': ''
      },
      '0x300A0144': {
        'keyword': 'TableTopRollAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Table Top Roll Angle',
        'retired': ''
      },
      '0x300A0146': {
        'keyword': 'TableTopRollRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Table Top Roll Rotation Direction',
        'retired': ''
      },
      '0x300A0148': {
        'keyword': 'HeadFixationAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Head Fixation Angle',
        'retired': ''
      },
      '0x300A014A': {
        'keyword': 'GantryPitchAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Gantry Pitch Angle',
        'retired': ''
      },
      '0x300A014C': {
        'keyword': 'GantryPitchRotationDirection',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gantry Pitch Rotation Direction',
        'retired': ''
      },
      '0x300A014E': {
        'keyword': 'GantryPitchAngleTolerance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Gantry Pitch Angle Tolerance',
        'retired': ''
      },
      '0x300A0150': {
        'keyword': 'FixationEye',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fixation Eye',
        'retired': ''
      },
      '0x300A0151': {
        'keyword': 'ChairHeadFramePosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Chair Head Frame Position',
        'retired': ''
      },
      '0x300A0152': {
        'keyword': 'HeadFixationAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Head Fixation Angle Tolerance',
        'retired': ''
      },
      '0x300A0153': {
        'keyword': 'ChairHeadFramePositionTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Chair Head Frame Position Tolerance',
        'retired': ''
      },
      '0x300A0154': {
        'keyword': 'FixationLightAzimuthalAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Fixation Light Azimuthal Angle Tolerance',
        'retired': ''
      },
      '0x300A0155': {
        'keyword': 'FixationLightPolarAngleTolerance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Fixation Light Polar Angle Tolerance',
        'retired': ''
      },
      '0x300A0180': {
        'keyword': 'PatientSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Setup Sequence',
        'retired': ''
      },
      '0x300A0182': {
        'keyword': 'PatientSetupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Patient Setup Number',
        'retired': ''
      },
      '0x300A0183': {
        'keyword': 'PatientSetupLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Setup Label',
        'retired': ''
      },
      '0x300A0184': {
        'keyword': 'PatientAdditionalPosition',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Additional Position',
        'retired': ''
      },
      '0x300A0190': {
        'keyword': 'FixationDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fixation Device Sequence',
        'retired': ''
      },
      '0x300A0192': {
        'keyword': 'FixationDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fixation Device Type',
        'retired': ''
      },
      '0x300A0194': {
        'keyword': 'FixationDeviceLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Fixation Device Label',
        'retired': ''
      },
      '0x300A0196': {
        'keyword': 'FixationDeviceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Fixation Device Description',
        'retired': ''
      },
      '0x300A0198': {
        'keyword': 'FixationDevicePosition',
        'vr': 'SH',
        'vm': '1',
        'name': 'Fixation Device Position',
        'retired': ''
      },
      '0x300A0199': {
        'keyword': 'FixationDevicePitchAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Fixation Device Pitch Angle',
        'retired': ''
      },
      '0x300A019A': {
        'keyword': 'FixationDeviceRollAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Fixation Device Roll Angle',
        'retired': ''
      },
      '0x300A01A0': {
        'keyword': 'ShieldingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Shielding Device Sequence',
        'retired': ''
      },
      '0x300A01A2': {
        'keyword': 'ShieldingDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Shielding Device Type',
        'retired': ''
      },
      '0x300A01A4': {
        'keyword': 'ShieldingDeviceLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Shielding Device Label',
        'retired': ''
      },
      '0x300A01A6': {
        'keyword': 'ShieldingDeviceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Shielding Device Description',
        'retired': ''
      },
      '0x300A01A8': {
        'keyword': 'ShieldingDevicePosition',
        'vr': 'SH',
        'vm': '1',
        'name': 'Shielding Device Position',
        'retired': ''
      },
      '0x300A01B0': {
        'keyword': 'SetupTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Setup Technique',
        'retired': ''
      },
      '0x300A01B2': {
        'keyword': 'SetupTechniqueDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Setup Technique Description',
        'retired': ''
      },
      '0x300A01B4': {
        'keyword': 'SetupDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Setup Device Sequence',
        'retired': ''
      },
      '0x300A01B6': {
        'keyword': 'SetupDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Setup Device Type',
        'retired': ''
      },
      '0x300A01B8': {
        'keyword': 'SetupDeviceLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Setup Device Label',
        'retired': ''
      },
      '0x300A01BA': {
        'keyword': 'SetupDeviceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Setup Device Description',
        'retired': ''
      },
      '0x300A01BC': {
        'keyword': 'SetupDeviceParameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Setup Device Parameter',
        'retired': ''
      },
      '0x300A01D0': {
        'keyword': 'SetupReferenceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Setup Reference Description',
        'retired': ''
      },
      '0x300A01D2': {
        'keyword': 'TableTopVerticalSetupDisplacement',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Vertical Setup Displacement',
        'retired': ''
      },
      '0x300A01D4': {
        'keyword': 'TableTopLongitudinalSetupDisplacement',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Longitudinal Setup Displacement',
        'retired': ''
      },
      '0x300A01D6': {
        'keyword': 'TableTopLateralSetupDisplacement',
        'vr': 'DS',
        'vm': '1',
        'name': 'Table Top Lateral Setup Displacement',
        'retired': ''
      },
      '0x300A0200': {
        'keyword': 'BrachyTreatmentTechnique',
        'vr': 'CS',
        'vm': '1',
        'name': 'Brachy Treatment Technique',
        'retired': ''
      },
      '0x300A0202': {
        'keyword': 'BrachyTreatmentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Brachy Treatment Type',
        'retired': ''
      },
      '0x300A0206': {
        'keyword': 'TreatmentMachineSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Machine Sequence',
        'retired': ''
      },
      '0x300A0210': {
        'keyword': 'SourceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Sequence',
        'retired': ''
      },
      '0x300A0212': {
        'keyword': 'SourceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Source Number',
        'retired': ''
      },
      '0x300A0214': {
        'keyword': 'SourceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Source Type',
        'retired': ''
      },
      '0x300A0216': {
        'keyword': 'SourceManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Manufacturer',
        'retired': ''
      },
      '0x300A0218': {
        'keyword': 'ActiveSourceDiameter',
        'vr': 'DS',
        'vm': '1',
        'name': 'Active Source Diameter',
        'retired': ''
      },
      '0x300A021A': {
        'keyword': 'ActiveSourceLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Active Source Length',
        'retired': ''
      },
      '0x300A021B': {
        'keyword': 'SourceModelID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Source Model ID',
        'retired': ''
      },
      '0x300A021C': {
        'keyword': 'SourceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Description',
        'retired': ''
      },
      '0x300A0222': {
        'keyword': 'SourceEncapsulationNominalThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Encapsulation Nominal Thickness',
        'retired': ''
      },
      '0x300A0224': {
        'keyword': 'SourceEncapsulationNominalTransmission',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Encapsulation Nominal Transmission',
        'retired': ''
      },
      '0x300A0226': {
        'keyword': 'SourceIsotopeName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Isotope Name',
        'retired': ''
      },
      '0x300A0228': {
        'keyword': 'SourceIsotopeHalfLife',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Isotope Half Life',
        'retired': ''
      },
      '0x300A0229': {
        'keyword': 'SourceStrengthUnits',
        'vr': 'CS',
        'vm': '1',
        'name': 'Source Strength Units',
        'retired': ''
      },
      '0x300A022A': {
        'keyword': 'ReferenceAirKermaRate',
        'vr': 'DS',
        'vm': '1',
        'name': 'Reference Air Kerma Rate',
        'retired': ''
      },
      '0x300A022B': {
        'keyword': 'SourceStrength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Strength',
        'retired': ''
      },
      '0x300A022C': {
        'keyword': 'SourceStrengthReferenceDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Source Strength Reference Date',
        'retired': ''
      },
      '0x300A022E': {
        'keyword': 'SourceStrengthReferenceTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Source Strength Reference Time',
        'retired': ''
      },
      '0x300A0230': {
        'keyword': 'ApplicationSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Application Setup Sequence',
        'retired': ''
      },
      '0x300A0232': {
        'keyword': 'ApplicationSetupType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Application Setup Type',
        'retired': ''
      },
      '0x300A0234': {
        'keyword': 'ApplicationSetupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Application Setup Number',
        'retired': ''
      },
      '0x300A0236': {
        'keyword': 'ApplicationSetupName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Application Setup Name',
        'retired': ''
      },
      '0x300A0238': {
        'keyword': 'ApplicationSetupManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Application Setup Manufacturer',
        'retired': ''
      },
      '0x300A0240': {
        'keyword': 'TemplateNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Template Number',
        'retired': ''
      },
      '0x300A0242': {
        'keyword': 'TemplateType',
        'vr': 'SH',
        'vm': '1',
        'name': 'Template Type',
        'retired': ''
      },
      '0x300A0244': {
        'keyword': 'TemplateName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Template Name',
        'retired': ''
      },
      '0x300A0250': {
        'keyword': 'TotalReferenceAirKerma',
        'vr': 'DS',
        'vm': '1',
        'name': 'Total Reference Air Kerma',
        'retired': ''
      },
      '0x300A0260': {
        'keyword': 'BrachyAccessoryDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Accessory Device Sequence',
        'retired': ''
      },
      '0x300A0262': {
        'keyword': 'BrachyAccessoryDeviceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Brachy Accessory Device Number',
        'retired': ''
      },
      '0x300A0263': {
        'keyword': 'BrachyAccessoryDeviceID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Brachy Accessory Device ID',
        'retired': ''
      },
      '0x300A0264': {
        'keyword': 'BrachyAccessoryDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Brachy Accessory Device Type',
        'retired': ''
      },
      '0x300A0266': {
        'keyword': 'BrachyAccessoryDeviceName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Brachy Accessory Device Name',
        'retired': ''
      },
      '0x300A026A': {
        'keyword': 'BrachyAccessoryDeviceNominalThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Brachy Accessory Device Nominal Thickness',
        'retired': ''
      },
      '0x300A026C': {
        'keyword': 'BrachyAccessoryDeviceNominalTransmission',
        'vr': 'DS',
        'vm': '1',
        'name': 'Brachy Accessory Device Nominal Transmission',
        'retired': ''
      },
      '0x300A0271': {
        'keyword': 'ChannelEffectiveLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Effective Length',
        'retired': ''
      },
      '0x300A0272': {
        'keyword': 'ChannelInnerLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Inner Length',
        'retired': ''
      },
      '0x300A0273': {
        'keyword': 'AfterloaderChannelID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Afterloader Channel ID',
        'retired': ''
      },
      '0x300A0274': {
        'keyword': 'SourceApplicatorTipLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Applicator Tip Length',
        'retired': ''
      },
      '0x300A0280': {
        'keyword': 'ChannelSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Sequence',
        'retired': ''
      },
      '0x300A0282': {
        'keyword': 'ChannelNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Channel Number',
        'retired': ''
      },
      '0x300A0284': {
        'keyword': 'ChannelLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Length',
        'retired': ''
      },
      '0x300A0286': {
        'keyword': 'ChannelTotalTime',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Total Time',
        'retired': ''
      },
      '0x300A0288': {
        'keyword': 'SourceMovementType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Source Movement Type',
        'retired': ''
      },
      '0x300A028A': {
        'keyword': 'NumberOfPulses',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Pulses',
        'retired': ''
      },
      '0x300A028C': {
        'keyword': 'PulseRepetitionInterval',
        'vr': 'DS',
        'vm': '1',
        'name': 'Pulse Repetition Interval',
        'retired': ''
      },
      '0x300A0290': {
        'keyword': 'SourceApplicatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Source Applicator Number',
        'retired': ''
      },
      '0x300A0291': {
        'keyword': 'SourceApplicatorID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Source Applicator ID',
        'retired': ''
      },
      '0x300A0292': {
        'keyword': 'SourceApplicatorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Source Applicator Type',
        'retired': ''
      },
      '0x300A0294': {
        'keyword': 'SourceApplicatorName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Applicator Name',
        'retired': ''
      },
      '0x300A0296': {
        'keyword': 'SourceApplicatorLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Applicator Length',
        'retired': ''
      },
      '0x300A0298': {
        'keyword': 'SourceApplicatorManufacturer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Source Applicator Manufacturer',
        'retired': ''
      },
      '0x300A029C': {
        'keyword': 'SourceApplicatorWallNominalThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Applicator Wall Nominal Thickness',
        'retired': ''
      },
      '0x300A029E': {
        'keyword': 'SourceApplicatorWallNominalTransmission',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Applicator Wall Nominal Transmission',
        'retired': ''
      },
      '0x300A02A0': {
        'keyword': 'SourceApplicatorStepSize',
        'vr': 'DS',
        'vm': '1',
        'name': 'Source Applicator Step Size',
        'retired': ''
      },
      '0x300A02A1': {
        'keyword': 'ApplicatorShapeReferencedROINumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Applicator Shape Referenced ROI Number',
        'retired': ''
      },
      '0x300A02A2': {
        'keyword': 'TransferTubeNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Transfer Tube Number',
        'retired': ''
      },
      '0x300A02A4': {
        'keyword': 'TransferTubeLength',
        'vr': 'DS',
        'vm': '1',
        'name': 'Transfer Tube Length',
        'retired': ''
      },
      '0x300A02B0': {
        'keyword': 'ChannelShieldSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Channel Shield Sequence',
        'retired': ''
      },
      '0x300A02B2': {
        'keyword': 'ChannelShieldNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Channel Shield Number',
        'retired': ''
      },
      '0x300A02B3': {
        'keyword': 'ChannelShieldID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Channel Shield ID',
        'retired': ''
      },
      '0x300A02B4': {
        'keyword': 'ChannelShieldName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Channel Shield Name',
        'retired': ''
      },
      '0x300A02B8': {
        'keyword': 'ChannelShieldNominalThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Shield Nominal Thickness',
        'retired': ''
      },
      '0x300A02BA': {
        'keyword': 'ChannelShieldNominalTransmission',
        'vr': 'DS',
        'vm': '1',
        'name': 'Channel Shield Nominal Transmission',
        'retired': ''
      },
      '0x300A02C8': {
        'keyword': 'FinalCumulativeTimeWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Final Cumulative Time Weight',
        'retired': ''
      },
      '0x300A02D0': {
        'keyword': 'BrachyControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Control Point Sequence',
        'retired': ''
      },
      '0x300A02D2': {
        'keyword': 'ControlPointRelativePosition',
        'vr': 'DS',
        'vm': '1',
        'name': 'Control Point Relative Position',
        'retired': ''
      },
      '0x300A02D4': {
        'keyword': 'ControlPoint3DPosition',
        'vr': 'DS',
        'vm': '3',
        'name': 'Control Point 3D Position',
        'retired': ''
      },
      '0x300A02D6': {
        'keyword': 'CumulativeTimeWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Cumulative Time Weight',
        'retired': ''
      },
      '0x300A02E0': {
        'keyword': 'CompensatorDivergence',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compensator Divergence',
        'retired': ''
      },
      '0x300A02E1': {
        'keyword': 'CompensatorMountingPosition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compensator Mounting Position',
        'retired': ''
      },
      '0x300A02E2': {
        'keyword': 'SourceToCompensatorDistance',
        'vr': 'DS',
        'vm': '1-n',
        'name': 'Source to Compensator Distance',
        'retired': ''
      },
      '0x300A02E3': {
        'keyword': 'TotalCompensatorTrayWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Total Compensator Tray Water-Equivalent Thickness',
        'retired': ''
      },
      '0x300A02E4': {
        'keyword': 'IsocenterToCompensatorTrayDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Compensator Tray Distance',
        'retired': ''
      },
      '0x300A02E5': {
        'keyword': 'CompensatorColumnOffset',
        'vr': 'FL',
        'vm': '1',
        'name': 'Compensator Column Offset',
        'retired': ''
      },
      '0x300A02E6': {
        'keyword': 'IsocenterToCompensatorDistances',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Isocenter to Compensator Distances',
        'retired': ''
      },
      '0x300A02E7': {
        'keyword': 'CompensatorRelativeStoppingPowerRatio',
        'vr': 'FL',
        'vm': '1',
        'name': 'Compensator Relative Stopping Power Ratio',
        'retired': ''
      },
      '0x300A02E8': {
        'keyword': 'CompensatorMillingToolDiameter',
        'vr': 'FL',
        'vm': '1',
        'name': 'Compensator Milling Tool Diameter',
        'retired': ''
      },
      '0x300A02EA': {
        'keyword': 'IonRangeCompensatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Range Compensator Sequence',
        'retired': ''
      },
      '0x300A02EB': {
        'keyword': 'CompensatorDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Compensator Description',
        'retired': ''
      },
      '0x300A0302': {
        'keyword': 'RadiationMassNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Radiation Mass Number',
        'retired': ''
      },
      '0x300A0304': {
        'keyword': 'RadiationAtomicNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Radiation Atomic Number',
        'retired': ''
      },
      '0x300A0306': {
        'keyword': 'RadiationChargeState',
        'vr': 'SS',
        'vm': '1',
        'name': 'Radiation Charge State',
        'retired': ''
      },
      '0x300A0308': {
        'keyword': 'ScanMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Mode',
        'retired': ''
      },
      '0x300A0309': {
        'keyword': 'ModulatedScanModeType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Modulated Scan Mode Type',
        'retired': ''
      },
      '0x300A030A': {
        'keyword': 'VirtualSourceAxisDistances',
        'vr': 'FL',
        'vm': '2',
        'name': 'Virtual Source-Axis Distances',
        'retired': ''
      },
      '0x300A030C': {
        'keyword': 'SnoutSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Snout Sequence',
        'retired': ''
      },
      '0x300A030D': {
        'keyword': 'SnoutPosition',
        'vr': 'FL',
        'vm': '1',
        'name': 'Snout Position',
        'retired': ''
      },
      '0x300A030F': {
        'keyword': 'SnoutID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Snout ID',
        'retired': ''
      },
      '0x300A0312': {
        'keyword': 'NumberOfRangeShifters',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Range Shifters',
        'retired': ''
      },
      '0x300A0314': {
        'keyword': 'RangeShifterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Range Shifter Sequence',
        'retired': ''
      },
      '0x300A0316': {
        'keyword': 'RangeShifterNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Range Shifter Number',
        'retired': ''
      },
      '0x300A0318': {
        'keyword': 'RangeShifterID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Range Shifter ID',
        'retired': ''
      },
      '0x300A0320': {
        'keyword': 'RangeShifterType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Range Shifter Type',
        'retired': ''
      },
      '0x300A0322': {
        'keyword': 'RangeShifterDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Range Shifter Description',
        'retired': ''
      },
      '0x300A0330': {
        'keyword': 'NumberOfLateralSpreadingDevices',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Lateral Spreading Devices',
        'retired': ''
      },
      '0x300A0332': {
        'keyword': 'LateralSpreadingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lateral Spreading Device Sequence',
        'retired': ''
      },
      '0x300A0334': {
        'keyword': 'LateralSpreadingDeviceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Lateral Spreading Device Number',
        'retired': ''
      },
      '0x300A0336': {
        'keyword': 'LateralSpreadingDeviceID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Lateral Spreading Device ID',
        'retired': ''
      },
      '0x300A0338': {
        'keyword': 'LateralSpreadingDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Lateral Spreading Device Type',
        'retired': ''
      },
      '0x300A033A': {
        'keyword': 'LateralSpreadingDeviceDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Lateral Spreading Device Description',
        'retired': ''
      },
      '0x300A033C': {
        'keyword': 'LateralSpreadingDeviceWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Lateral Spreading Device Water Equivalent Thickness',
        'retired': ''
      },
      '0x300A0340': {
        'keyword': 'NumberOfRangeModulators',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Range Modulators',
        'retired': ''
      },
      '0x300A0342': {
        'keyword': 'RangeModulatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Range Modulator Sequence',
        'retired': ''
      },
      '0x300A0344': {
        'keyword': 'RangeModulatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Range Modulator Number',
        'retired': ''
      },
      '0x300A0346': {
        'keyword': 'RangeModulatorID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Range Modulator ID',
        'retired': ''
      },
      '0x300A0348': {
        'keyword': 'RangeModulatorType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Range Modulator Type',
        'retired': ''
      },
      '0x300A034A': {
        'keyword': 'RangeModulatorDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Range Modulator Description',
        'retired': ''
      },
      '0x300A034C': {
        'keyword': 'BeamCurrentModulationID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Beam Current Modulation ID',
        'retired': ''
      },
      '0x300A0350': {
        'keyword': 'PatientSupportType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Support Type',
        'retired': ''
      },
      '0x300A0352': {
        'keyword': 'PatientSupportID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Patient Support ID',
        'retired': ''
      },
      '0x300A0354': {
        'keyword': 'PatientSupportAccessoryCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Patient Support Accessory Code',
        'retired': ''
      },
      '0x300A0355': {
        'keyword': 'TrayAccessoryCode',
        'vr': 'LO',
        'vm': '1',
        'name': 'Tray Accessory Code',
        'retired': ''
      },
      '0x300A0356': {
        'keyword': 'FixationLightAzimuthalAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Fixation Light Azimuthal Angle',
        'retired': ''
      },
      '0x300A0358': {
        'keyword': 'FixationLightPolarAngle',
        'vr': 'FL',
        'vm': '1',
        'name': 'Fixation Light Polar Angle',
        'retired': ''
      },
      '0x300A035A': {
        'keyword': 'MetersetRate',
        'vr': 'FL',
        'vm': '1',
        'name': 'Meterset Rate',
        'retired': ''
      },
      '0x300A0360': {
        'keyword': 'RangeShifterSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Range Shifter Settings Sequence',
        'retired': ''
      },
      '0x300A0362': {
        'keyword': 'RangeShifterSetting',
        'vr': 'LO',
        'vm': '1',
        'name': 'Range Shifter Setting',
        'retired': ''
      },
      '0x300A0364': {
        'keyword': 'IsocenterToRangeShifterDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Range Shifter Distance',
        'retired': ''
      },
      '0x300A0366': {
        'keyword': 'RangeShifterWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Range Shifter Water Equivalent Thickness',
        'retired': ''
      },
      '0x300A0370': {
        'keyword': 'LateralSpreadingDeviceSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Lateral Spreading Device Settings Sequence',
        'retired': ''
      },
      '0x300A0372': {
        'keyword': 'LateralSpreadingDeviceSetting',
        'vr': 'LO',
        'vm': '1',
        'name': 'Lateral Spreading Device Setting',
        'retired': ''
      },
      '0x300A0374': {
        'keyword': 'IsocenterToLateralSpreadingDeviceDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Lateral Spreading Device Distance',
        'retired': ''
      },
      '0x300A0380': {
        'keyword': 'RangeModulatorSettingsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Range Modulator Settings Sequence',
        'retired': ''
      },
      '0x300A0382': {
        'keyword': 'RangeModulatorGatingStartValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Range Modulator Gating Start Value',
        'retired': ''
      },
      '0x300A0384': {
        'keyword': 'RangeModulatorGatingStopValue',
        'vr': 'FL',
        'vm': '1',
        'name': 'Range Modulator Gating Stop Value',
        'retired': ''
      },
      '0x300A0386': {
        'keyword': 'RangeModulatorGatingStartWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Range Modulator Gating Start Water Equivalent Thickness',
        'retired': ''
      },
      '0x300A0388': {
        'keyword': 'RangeModulatorGatingStopWaterEquivalentThickness',
        'vr': 'FL',
        'vm': '1',
        'name': 'Range Modulator Gating Stop Water Equivalent Thickness',
        'retired': ''
      },
      '0x300A038A': {
        'keyword': 'IsocenterToRangeModulatorDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Isocenter to Range Modulator Distance',
        'retired': ''
      },
      '0x300A038F': {
        'keyword': 'ScanSpotTimeOffset',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Scan Spot Time Offset',
        'retired': ''
      },
      '0x300A0390': {
        'keyword': 'ScanSpotTuneID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Scan Spot Tune ID',
        'retired': ''
      },
      '0x300A0391': {
        'keyword': 'ScanSpotPrescribedIndices',
        'vr': 'IS',
        'vm': '1-n',
        'name': 'Scan Spot Prescribed Indices',
        'retired': ''
      },
      '0x300A0392': {
        'keyword': 'NumberOfScanSpotPositions',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Scan Spot Positions',
        'retired': ''
      },
      '0x300A0393': {
        'keyword': 'ScanSpotReordered',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Spot Reordered',
        'retired': ''
      },
      '0x300A0394': {
        'keyword': 'ScanSpotPositionMap',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Scan Spot Position Map',
        'retired': ''
      },
      '0x300A0395': {
        'keyword': 'ScanSpotReorderingAllowed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Spot Reordering Allowed',
        'retired': ''
      },
      '0x300A0396': {
        'keyword': 'ScanSpotMetersetWeights',
        'vr': 'FL',
        'vm': '1-n',
        'name': 'Scan Spot Meterset Weights',
        'retired': ''
      },
      '0x300A0398': {
        'keyword': 'ScanningSpotSize',
        'vr': 'FL',
        'vm': '2',
        'name': 'Scanning Spot Size',
        'retired': ''
      },
      '0x300A0399': {
        'keyword': 'ScanSpotSizesDelivered',
        'vr': 'FL',
        'vm': '2-2n',
        'name': 'Scan Spot Sizes Delivered',
        'retired': ''
      },
      '0x300A039A': {
        'keyword': 'NumberOfPaintings',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Paintings',
        'retired': ''
      },
      '0x300A03A0': {
        'keyword': 'IonToleranceTableSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Tolerance Table Sequence',
        'retired': ''
      },
      '0x300A03A2': {
        'keyword': 'IonBeamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Beam Sequence',
        'retired': ''
      },
      '0x300A03A4': {
        'keyword': 'IonBeamLimitingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Beam Limiting Device Sequence',
        'retired': ''
      },
      '0x300A03A6': {
        'keyword': 'IonBlockSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Block Sequence',
        'retired': ''
      },
      '0x300A03A8': {
        'keyword': 'IonControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Control Point Sequence',
        'retired': ''
      },
      '0x300A03AA': {
        'keyword': 'IonWedgeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Wedge Sequence',
        'retired': ''
      },
      '0x300A03AC': {
        'keyword': 'IonWedgePositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Ion Wedge Position Sequence',
        'retired': ''
      },
      '0x300A0401': {
        'keyword': 'ReferencedSetupImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Setup Image Sequence',
        'retired': ''
      },
      '0x300A0402': {
        'keyword': 'SetupImageComment',
        'vr': 'ST',
        'vm': '1',
        'name': 'Setup Image Comment',
        'retired': ''
      },
      '0x300A0410': {
        'keyword': 'MotionSynchronizationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Motion Synchronization Sequence',
        'retired': ''
      },
      '0x300A0412': {
        'keyword': 'ControlPointOrientation',
        'vr': 'FL',
        'vm': '3',
        'name': 'Control Point Orientation',
        'retired': ''
      },
      '0x300A0420': {
        'keyword': 'GeneralAccessorySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'General Accessory Sequence',
        'retired': ''
      },
      '0x300A0421': {
        'keyword': 'GeneralAccessoryID',
        'vr': 'SH',
        'vm': '1',
        'name': 'General Accessory ID',
        'retired': ''
      },
      '0x300A0422': {
        'keyword': 'GeneralAccessoryDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'General Accessory Description',
        'retired': ''
      },
      '0x300A0423': {
        'keyword': 'GeneralAccessoryType',
        'vr': 'CS',
        'vm': '1',
        'name': 'General Accessory Type',
        'retired': ''
      },
      '0x300A0424': {
        'keyword': 'GeneralAccessoryNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'General Accessory Number',
        'retired': ''
      },
      '0x300A0425': {
        'keyword': 'SourceToGeneralAccessoryDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Source to General Accessory Distance',
        'retired': ''
      },
      '0x300A0426': {
        'keyword': 'IsocenterToGeneralAccessoryDistance',
        'vr': 'DS',
        'vm': '1',
        'name': 'Isocenter to General Accessory Distance',
        'retired': ''
      },
      '0x300A0431': {
        'keyword': 'ApplicatorGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Applicator Geometry Sequence',
        'retired': ''
      },
      '0x300A0432': {
        'keyword': 'ApplicatorApertureShape',
        'vr': 'CS',
        'vm': '1',
        'name': 'Applicator Aperture Shape',
        'retired': ''
      },
      '0x300A0433': {
        'keyword': 'ApplicatorOpening',
        'vr': 'FL',
        'vm': '1',
        'name': 'Applicator Opening',
        'retired': ''
      },
      '0x300A0434': {
        'keyword': 'ApplicatorOpeningX',
        'vr': 'FL',
        'vm': '1',
        'name': 'Applicator Opening X',
        'retired': ''
      },
      '0x300A0435': {
        'keyword': 'ApplicatorOpeningY',
        'vr': 'FL',
        'vm': '1',
        'name': 'Applicator Opening Y',
        'retired': ''
      },
      '0x300A0436': {
        'keyword': 'SourceToApplicatorMountingPositionDistance',
        'vr': 'FL',
        'vm': '1',
        'name': 'Source to Applicator Mounting Position Distance',
        'retired': ''
      },
      '0x300A0440': {
        'keyword': 'NumberOfBlockSlabItems',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Block Slab Items',
        'retired': ''
      },
      '0x300A0441': {
        'keyword': 'BlockSlabSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Block Slab Sequence',
        'retired': ''
      },
      '0x300A0442': {
        'keyword': 'BlockSlabThickness',
        'vr': 'DS',
        'vm': '1',
        'name': 'Block Slab Thickness',
        'retired': ''
      },
      '0x300A0443': {
        'keyword': 'BlockSlabNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Block Slab Number',
        'retired': ''
      },
      '0x300A0450': {
        'keyword': 'DeviceMotionControlSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device Motion Control Sequence',
        'retired': ''
      },
      '0x300A0451': {
        'keyword': 'DeviceMotionExecutionMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Device Motion Execution Mode',
        'retired': ''
      },
      '0x300A0452': {
        'keyword': 'DeviceMotionObservationMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Device Motion Observation Mode',
        'retired': ''
      },
      '0x300A0453': {
        'keyword': 'DeviceMotionParameterCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device Motion Parameter Code Sequence',
        'retired': ''
      },
      '0x300A0501': {
        'keyword': 'DistalDepthFraction',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distal Depth Fraction',
        'retired': ''
      },
      '0x300A0502': {
        'keyword': 'DistalDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Distal Depth',
        'retired': ''
      },
      '0x300A0503': {
        'keyword': 'NominalRangeModulationFractions',
        'vr': 'FL',
        'vm': '2',
        'name': 'Nominal Range Modulation Fractions',
        'retired': ''
      },
      '0x300A0504': {
        'keyword': 'NominalRangeModulatedRegionDepths',
        'vr': 'FL',
        'vm': '2',
        'name': 'Nominal Range Modulated Region Depths',
        'retired': ''
      },
      '0x300A0505': {
        'keyword': 'DepthDoseParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Depth Dose Parameters Sequence',
        'retired': ''
      },
      '0x300A0506': {
        'keyword': 'DeliveredDepthDoseParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Delivered Depth Dose Parameters Sequence',
        'retired': ''
      },
      '0x300A0507': {
        'keyword': 'DeliveredDistalDepthFraction',
        'vr': 'FL',
        'vm': '1',
        'name': 'Delivered Distal Depth Fraction',
        'retired': ''
      },
      '0x300A0508': {
        'keyword': 'DeliveredDistalDepth',
        'vr': 'FL',
        'vm': '1',
        'name': 'Delivered Distal Depth',
        'retired': ''
      },
      '0x300A0509': {
        'keyword': 'DeliveredNominalRangeModulationFractions',
        'vr': 'FL',
        'vm': '2',
        'name': 'Delivered Nominal Range Modulation Fractions',
        'retired': ''
      },
      '0x300A0510': {
        'keyword': 'DeliveredNominalRangeModulatedRegionDepths',
        'vr': 'FL',
        'vm': '2',
        'name': 'Delivered Nominal Range Modulated Region Depths',
        'retired': ''
      },
      '0x300A0511': {
        'keyword': 'DeliveredReferenceDoseDefinition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Delivered Reference Dose Definition',
        'retired': ''
      },
      '0x300A0512': {
        'keyword': 'ReferenceDoseDefinition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reference Dose Definition',
        'retired': ''
      },
      '0x300A0600': {
        'keyword': 'RTControlPointIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Control Point Index',
        'retired': ''
      },
      '0x300A0601': {
        'keyword': 'RadiationGenerationModeIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Radiation Generation Mode Index',
        'retired': ''
      },
      '0x300A0602': {
        'keyword': 'ReferencedDefinedDeviceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Defined Device Index',
        'retired': ''
      },
      '0x300A0603': {
        'keyword': 'RadiationDoseIdentificationIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Radiation Dose Identification Index',
        'retired': ''
      },
      '0x300A0604': {
        'keyword': 'NumberOfRTControlPoints',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of RT Control Points',
        'retired': ''
      },
      '0x300A0605': {
        'keyword': 'ReferencedRadiationGenerationModeIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Radiation Generation Mode Index',
        'retired': ''
      },
      '0x300A0606': {
        'keyword': 'TreatmentPositionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Treatment Position Index',
        'retired': ''
      },
      '0x300A0607': {
        'keyword': 'ReferencedDeviceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Device Index',
        'retired': ''
      },
      '0x300A0608': {
        'keyword': 'TreatmentPositionGroupLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Treatment Position Group Label',
        'retired': ''
      },
      '0x300A0609': {
        'keyword': 'TreatmentPositionGroupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Treatment Position Group UID',
        'retired': ''
      },
      '0x300A060A': {
        'keyword': 'TreatmentPositionGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Position Group Sequence',
        'retired': ''
      },
      '0x300A060B': {
        'keyword': 'ReferencedTreatmentPositionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Treatment Position Index',
        'retired': ''
      },
      '0x300A060C': {
        'keyword': 'ReferencedRadiationDoseIdentificationIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Radiation Dose Identification Index',
        'retired': ''
      },
      '0x300A060D': {
        'keyword': 'RTAccessoryHolderWaterEquivalentThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Accessory Holder Water-Equivalent Thickness',
        'retired': ''
      },
      '0x300A060E': {
        'keyword': 'ReferencedRTAccessoryHolderDeviceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced RT Accessory Holder Device Index',
        'retired': ''
      },
      '0x300A060F': {
        'keyword': 'RTAccessoryHolderSlotExistenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Accessory Holder Slot Existence Flag',
        'retired': ''
      },
      '0x300A0610': {
        'keyword': 'RTAccessoryHolderSlotSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Accessory Holder Slot Sequence',
        'retired': ''
      },
      '0x300A0611': {
        'keyword': 'RTAccessoryHolderSlotID',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Accessory Holder Slot ID',
        'retired': ''
      },
      '0x300A0612': {
        'keyword': 'RTAccessoryHolderSlotDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Accessory Holder Slot Distance',
        'retired': ''
      },
      '0x300A0613': {
        'keyword': 'RTAccessorySlotDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Accessory Slot Distance',
        'retired': ''
      },
      '0x300A0614': {
        'keyword': 'RTAccessoryHolderDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Accessory Holder Definition Sequence',
        'retired': ''
      },
      '0x300A0615': {
        'keyword': 'RTAccessoryDeviceSlotID',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Accessory Device Slot ID',
        'retired': ''
      },
      '0x300A0616': {
        'keyword': 'RTRadiationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Radiation Sequence',
        'retired': ''
      },
      '0x300A0617': {
        'keyword': 'RadiationDoseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Dose Sequence',
        'retired': ''
      },
      '0x300A0618': {
        'keyword': 'RadiationDoseIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Dose Identification Sequence',
        'retired': ''
      },
      '0x300A0619': {
        'keyword': 'RadiationDoseIdentificationLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Radiation Dose Identification Label',
        'retired': ''
      },
      '0x300A061A': {
        'keyword': 'ReferenceDoseType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reference Dose Type',
        'retired': ''
      },
      '0x300A061B': {
        'keyword': 'PrimaryDoseValueIndicator',
        'vr': 'CS',
        'vm': '1',
        'name': 'Primary Dose Value Indicator',
        'retired': ''
      },
      '0x300A061C': {
        'keyword': 'DoseValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dose Values Sequence',
        'retired': ''
      },
      '0x300A061D': {
        'keyword': 'DoseValuePurpose',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Dose Value Purpose',
        'retired': ''
      },
      '0x300A061E': {
        'keyword': 'ReferenceDosePointCoordinates',
        'vr': 'FD',
        'vm': '3',
        'name': 'Reference Dose Point Coordinates',
        'retired': ''
      },
      '0x300A061F': {
        'keyword': 'RadiationDoseValuesParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Dose Values Parameters Sequence',
        'retired': ''
      },
      '0x300A0620': {
        'keyword': 'MetersetToDoseMappingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Meterset to Dose Mapping Sequence',
        'retired': ''
      },
      '0x300A0621': {
        'keyword': 'ExpectedInVivoMeasurementValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Expected In-Vivo Measurement Values Sequence',
        'retired': ''
      },
      '0x300A0622': {
        'keyword': 'ExpectedInVivoMeasurementValueIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Expected In-Vivo Measurement Value Index',
        'retired': ''
      },
      '0x300A0623': {
        'keyword': 'RadiationDoseInVivoMeasurementLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Radiation Dose In-Vivo Measurement Label',
        'retired': ''
      },
      '0x300A0624': {
        'keyword': 'RadiationDoseCentralAxisDisplacement',
        'vr': 'FD',
        'vm': '2',
        'name': 'Radiation Dose Central Axis Displacement',
        'retired': ''
      },
      '0x300A0625': {
        'keyword': 'RadiationDoseValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Dose Value',
        'retired': ''
      },
      '0x300A0626': {
        'keyword': 'RadiationDoseSourceToSkinDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Dose Source to Skin Distance',
        'retired': ''
      },
      '0x300A0627': {
        'keyword': 'RadiationDoseMeasurementPointCoordinates',
        'vr': 'FD',
        'vm': '3',
        'name': 'Radiation Dose Measurement Point Coordinates',
        'retired': ''
      },
      '0x300A0628': {
        'keyword': 'RadiationDoseSourceToExternalContourDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Dose Source to External Contour Distance',
        'retired': ''
      },
      '0x300A0629': {
        'keyword': 'RTToleranceSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Tolerance Set Sequence',
        'retired': ''
      },
      '0x300A062A': {
        'keyword': 'RTToleranceSetLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Tolerance Set Label',
        'retired': ''
      },
      '0x300A062B': {
        'keyword': 'AttributeToleranceValuesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Attribute Tolerance Values Sequence',
        'retired': ''
      },
      '0x300A062C': {
        'keyword': 'ToleranceValue',
        'vr': 'FD',
        'vm': '1',
        'name': 'Tolerance Value',
        'retired': ''
      },
      '0x300A062D': {
        'keyword': 'PatientSupportPositionToleranceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Position Tolerance Sequence',
        'retired': ''
      },
      '0x300A062E': {
        'keyword': 'TreatmentTimeLimit',
        'vr': 'FD',
        'vm': '1',
        'name': 'Treatment Time Limit',
        'retired': ''
      },
      '0x300A062F': {
        'keyword': 'CArmPhotonElectronControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'C-Arm Photon-Electron Control Point Sequence',
        'retired': ''
      },
      '0x300A0630': {
        'keyword': 'ReferencedRTRadiationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Radiation Sequence',
        'retired': ''
      },
      '0x300A0631': {
        'keyword': 'ReferencedRTInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Instance Sequence',
        'retired': ''
      },
      '0x300A0632': {
        'keyword': 'ReferencedRTPatientSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Patient Setup Sequence',
        'retired': 'Retired'
      },
      '0x300A0634': {
        'keyword': 'SourceToPatientSurfaceDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Source to Patient Surface Distance',
        'retired': ''
      },
      '0x300A0635': {
        'keyword': 'TreatmentMachineSpecialModeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Machine Special Mode Code Sequence',
        'retired': ''
      },
      '0x300A0636': {
        'keyword': 'IntendedNumberOfFractions',
        'vr': 'US',
        'vm': '1',
        'name': 'Intended Number of Fractions',
        'retired': ''
      },
      '0x300A0637': {
        'keyword': 'RTRadiationSetIntent',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Radiation Set Intent',
        'retired': ''
      },
      '0x300A0638': {
        'keyword': 'RTRadiationPhysicalAndGeometricContentDetailFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Radiation Physical and Geometric Content Detail Flag',
        'retired': ''
      },
      '0x300A0639': {
        'keyword': 'RTRecordFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Record Flag',
        'retired': ''
      },
      '0x300A063A': {
        'keyword': 'TreatmentDeviceIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Device Identification Sequence',
        'retired': ''
      },
      '0x300A063B': {
        'keyword': 'ReferencedRTPhysicianIntentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Physician Intent Sequence',
        'retired': ''
      },
      '0x300A063C': {
        'keyword': 'CumulativeMeterset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Cumulative Meterset',
        'retired': ''
      },
      '0x300A063D': {
        'keyword': 'DeliveryRate',
        'vr': 'FD',
        'vm': '1',
        'name': 'Delivery Rate',
        'retired': ''
      },
      '0x300A063E': {
        'keyword': 'DeliveryRateUnitSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Delivery Rate Unit Sequence',
        'retired': ''
      },
      '0x300A063F': {
        'keyword': 'TreatmentPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Position Sequence',
        'retired': ''
      },
      '0x300A0640': {
        'keyword': 'RadiationSourceAxisDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Source-Axis Distance',
        'retired': ''
      },
      '0x300A0641': {
        'keyword': 'NumberOfRTBeamLimitingDevices',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of RT Beam Limiting Devices',
        'retired': ''
      },
      '0x300A0642': {
        'keyword': 'RTBeamLimitingDeviceProximalDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Beam Limiting Device Proximal Distance',
        'retired': ''
      },
      '0x300A0643': {
        'keyword': 'RTBeamLimitingDeviceDistalDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Beam Limiting Device Distal Distance',
        'retired': ''
      },
      '0x300A0644': {
        'keyword': 'ParallelRTBeamDelimiterDeviceOrientationLabelCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name':
            'Parallel RT Beam Delimiter Device Orientation Label Code Sequence',
        'retired': ''
      },
      '0x300A0645': {
        'keyword': 'BeamModifierOrientationAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Beam Modifier Orientation Angle',
        'retired': ''
      },
      '0x300A0646': {
        'keyword': 'FixedRTBeamDelimiterDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fixed RT Beam Delimiter Device Sequence',
        'retired': ''
      },
      '0x300A0647': {
        'keyword': 'ParallelRTBeamDelimiterDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Parallel RT Beam Delimiter Device Sequence',
        'retired': ''
      },
      '0x300A0648': {
        'keyword': 'NumberOfParallelRTBeamDelimiters',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Parallel RT Beam Delimiters',
        'retired': ''
      },
      '0x300A0649': {
        'keyword': 'ParallelRTBeamDelimiterBoundaries',
        'vr': 'FD',
        'vm': '2-n',
        'name': 'Parallel RT Beam Delimiter Boundaries',
        'retired': ''
      },
      '0x300A064A': {
        'keyword': 'ParallelRTBeamDelimiterPositions',
        'vr': 'FD',
        'vm': '2-n',
        'name': 'Parallel RT Beam Delimiter Positions',
        'retired': ''
      },
      '0x300A064B': {
        'keyword': 'RTBeamLimitingDeviceOffset',
        'vr': 'FD',
        'vm': '2',
        'name': 'RT Beam Limiting Device Offset',
        'retired': ''
      },
      '0x300A064C': {
        'keyword': 'RTBeamDelimiterGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Beam Delimiter Geometry Sequence',
        'retired': ''
      },
      '0x300A064D': {
        'keyword': 'RTBeamLimitingDeviceDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Beam Limiting Device Definition Sequence',
        'retired': ''
      },
      '0x300A064E': {
        'keyword': 'ParallelRTBeamDelimiterOpeningMode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Parallel RT Beam Delimiter Opening Mode',
        'retired': ''
      },
      '0x300A064F': {
        'keyword': 'ParallelRTBeamDelimiterLeafMountingSide',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Parallel RT Beam Delimiter Leaf Mounting Side',
        'retired': ''
      },
      '0x300A0650': {
        'keyword': 'PatientSetupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Patient Setup UID',
        'retired': 'Retired'
      },
      '0x300A0651': {
        'keyword': 'WedgeDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Wedge Definition Sequence',
        'retired': ''
      },
      '0x300A0652': {
        'keyword': 'RadiationBeamWedgeAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Wedge Angle',
        'retired': ''
      },
      '0x300A0653': {
        'keyword': 'RadiationBeamWedgeThinEdgeDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Wedge Thin Edge Distance',
        'retired': ''
      },
      '0x300A0654': {
        'keyword': 'RadiationBeamEffectiveWedgeAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Effective Wedge Angle',
        'retired': ''
      },
      '0x300A0655': {
        'keyword': 'NumberOfWedgePositions',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Wedge Positions',
        'retired': ''
      },
      '0x300A0656': {
        'keyword': 'RTBeamLimitingDeviceOpeningSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Beam Limiting Device Opening Sequence',
        'retired': ''
      },
      '0x300A0657': {
        'keyword': 'NumberOfRTBeamLimitingDeviceOpenings',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of RT Beam Limiting Device Openings',
        'retired': ''
      },
      '0x300A0658': {
        'keyword': 'RadiationDosimeterUnitSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Dosimeter Unit Sequence',
        'retired': ''
      },
      '0x300A0659': {
        'keyword': 'RTDeviceDistanceReferenceLocationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Device Distance Reference Location Code Sequence',
        'retired': ''
      },
      '0x300A065A': {
        'keyword': 'RadiationDeviceConfigurationAndCommissioningKeySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Device Configuration and Commissioning Key Sequence',
        'retired': ''
      },
      '0x300A065B': {
        'keyword': 'PatientSupportPositionParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Position Parameter Sequence',
        'retired': ''
      },
      '0x300A065C': {
        'keyword': 'PatientSupportPositionSpecificationMethod',
        'vr': 'CS',
        'vm': '1',
        'name': 'Patient Support Position Specification Method',
        'retired': ''
      },
      '0x300A065D': {
        'keyword': 'PatientSupportPositionDeviceParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Position Device Parameter Sequence',
        'retired': ''
      },
      '0x300A065E': {
        'keyword': 'DeviceOrderIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Device Order Index',
        'retired': ''
      },
      '0x300A065F': {
        'keyword': 'PatientSupportPositionParameterOrderIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Patient Support Position Parameter Order Index',
        'retired': ''
      },
      '0x300A0660': {
        'keyword': 'PatientSupportPositionDeviceToleranceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Position Device Tolerance Sequence',
        'retired': ''
      },
      '0x300A0661': {
        'keyword': 'PatientSupportPositionToleranceOrderIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Patient Support Position Tolerance Order Index',
        'retired': ''
      },
      '0x300A0662': {
        'keyword': 'CompensatorDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Compensator Definition Sequence',
        'retired': ''
      },
      '0x300A0663': {
        'keyword': 'CompensatorMapOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Compensator Map Orientation',
        'retired': ''
      },
      '0x300A0664': {
        'keyword': 'CompensatorProximalThicknessMap',
        'vr': 'OF',
        'vm': '1',
        'name': 'Compensator Proximal Thickness Map',
        'retired': ''
      },
      '0x300A0665': {
        'keyword': 'CompensatorDistalThicknessMap',
        'vr': 'OF',
        'vm': '1',
        'name': 'Compensator Distal Thickness Map',
        'retired': ''
      },
      '0x300A0666': {
        'keyword': 'CompensatorBasePlaneOffset',
        'vr': 'FD',
        'vm': '1',
        'name': 'Compensator Base Plane Offset',
        'retired': ''
      },
      '0x300A0667': {
        'keyword': 'CompensatorShapeFabricationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Compensator Shape Fabrication Code Sequence',
        'retired': ''
      },
      '0x300A0668': {
        'keyword': 'CompensatorShapeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Compensator Shape Sequence',
        'retired': ''
      },
      '0x300A0669': {
        'keyword': 'RadiationBeamCompensatorMillingToolDiameter',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Compensator Milling Tool Diameter',
        'retired': ''
      },
      '0x300A066A': {
        'keyword': 'BlockDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Block Definition Sequence',
        'retired': ''
      },
      '0x300A066B': {
        'keyword': 'BlockEdgeData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Block Edge Data',
        'retired': ''
      },
      '0x300A066C': {
        'keyword': 'BlockOrientation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Block Orientation',
        'retired': ''
      },
      '0x300A066D': {
        'keyword': 'RadiationBeamBlockThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Block Thickness',
        'retired': ''
      },
      '0x300A066E': {
        'keyword': 'RadiationBeamBlockSlabThickness',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Beam Block Slab Thickness',
        'retired': ''
      },
      '0x300A066F': {
        'keyword': 'BlockEdgeDataSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Block Edge Data Sequence',
        'retired': ''
      },
      '0x300A0670': {
        'keyword': 'NumberOfRTAccessoryHolders',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of RT Accessory Holders',
        'retired': ''
      },
      '0x300A0671': {
        'keyword': 'GeneralAccessoryDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'General Accessory Definition Sequence',
        'retired': ''
      },
      '0x300A0672': {
        'keyword': 'NumberOfGeneralAccessories',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of General Accessories',
        'retired': ''
      },
      '0x300A0673': {
        'keyword': 'BolusDefinitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Bolus Definition Sequence',
        'retired': ''
      },
      '0x300A0674': {
        'keyword': 'NumberOfBoluses',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Boluses',
        'retired': ''
      },
      '0x300A0675': {
        'keyword': 'EquipmentFrameOfReferenceUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Equipment Frame of Reference UID',
        'retired': ''
      },
      '0x300A0676': {
        'keyword': 'EquipmentFrameOfReferenceDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Equipment Frame of Reference Description',
        'retired': ''
      },
      '0x300A0677': {
        'keyword': 'EquipmentReferencePointCoordinatesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equipment Reference Point Coordinates Sequence',
        'retired': ''
      },
      '0x300A0678': {
        'keyword': 'EquipmentReferencePointCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equipment Reference Point Code Sequence',
        'retired': ''
      },
      '0x300A0679': {
        'keyword': 'RTBeamLimitingDeviceAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Beam Limiting Device Angle',
        'retired': ''
      },
      '0x300A067A': {
        'keyword': 'SourceRollAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Source Roll Angle',
        'retired': ''
      },
      '0x300A067B': {
        'keyword': 'RadiationGenerationModeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation GenerationMode Sequence',
        'retired': ''
      },
      '0x300A067C': {
        'keyword': 'RadiationGenerationModeLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Radiation GenerationMode Label',
        'retired': ''
      },
      '0x300A067D': {
        'keyword': 'RadiationGenerationModeDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Radiation GenerationMode Description',
        'retired': ''
      },
      '0x300A067E': {
        'keyword': 'RadiationGenerationModeMachineCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation GenerationMode Machine Code Sequence',
        'retired': ''
      },
      '0x300A067F': {
        'keyword': 'RadiationTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Type Code Sequence',
        'retired': ''
      },
      '0x300A0680': {
        'keyword': 'NominalEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Nominal Energy',
        'retired': ''
      },
      '0x300A0681': {
        'keyword': 'MinimumNominalEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Minimum Nominal Energy',
        'retired': ''
      },
      '0x300A0682': {
        'keyword': 'MaximumNominalEnergy',
        'vr': 'DS',
        'vm': '1',
        'name': 'Maximum Nominal Energy',
        'retired': ''
      },
      '0x300A0683': {
        'keyword': 'RadiationFluenceModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiation Fluence Modifier Code Sequence',
        'retired': ''
      },
      '0x300A0684': {
        'keyword': 'EnergyUnitCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Energy Unit Code Sequence',
        'retired': ''
      },
      '0x300A0685': {
        'keyword': 'NumberOfRadiationGenerationModes',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Radiation GenerationModes',
        'retired': ''
      },
      '0x300A0686': {
        'keyword': 'PatientSupportDevicesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Devices Sequence',
        'retired': ''
      },
      '0x300A0687': {
        'keyword': 'NumberOfPatientSupportDevices',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Patient Support Devices',
        'retired': ''
      },
      '0x300A0688': {
        'keyword': 'RTBeamModifierDefinitionDistance',
        'vr': 'FD',
        'vm': '1',
        'name': 'RT Beam Modifier Definition Distance',
        'retired': ''
      },
      '0x300A0689': {
        'keyword': 'BeamAreaLimitSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Area Limit Sequence',
        'retired': ''
      },
      '0x300A068A': {
        'keyword': 'ReferencedRTPrescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Prescription Sequence',
        'retired': ''
      },
      '0x300A068B': {
        'keyword': 'DoseValueInterpretation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Value Interpretation',
        'retired': ''
      },
      '0x300A0700': {
        'keyword': 'TreatmentSessionUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Treatment Session UID',
        'retired': ''
      },
      '0x300A0701': {
        'keyword': 'RTRadiationUsage',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Radiation Usage',
        'retired': ''
      },
      '0x300A0702': {
        'keyword': 'ReferencedRTRadiationSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Radiation Set Sequence',
        'retired': ''
      },
      '0x300A0703': {
        'keyword': 'ReferencedRTRadiationRecordSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Radiation Record Sequence',
        'retired': ''
      },
      '0x300A0704': {
        'keyword': 'RTRadiationSetDeliveryNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Radiation Set Delivery Number',
        'retired': ''
      },
      '0x300A0705': {
        'keyword': 'ClinicalFractionNumber',
        'vr': 'US',
        'vm': '1',
        'name': 'Clinical Fraction Number',
        'retired': ''
      },
      '0x300A0706': {
        'keyword': 'RTTreatmentFractionCompletionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Treatment Fraction Completion Status',
        'retired': ''
      },
      '0x300A0707': {
        'keyword': 'RTRadiationSetUsage',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Radiation Set Usage',
        'retired': ''
      },
      '0x300A0708': {
        'keyword': 'TreatmentDeliveryContinuationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Delivery Continuation Flag',
        'retired': ''
      },
      '0x300A0709': {
        'keyword': 'TreatmentRecordContentOrigin',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Record Content Origin',
        'retired': ''
      },
      '0x300A0714': {
        'keyword': 'RTTreatmentTerminationStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Treatment Termination Status',
        'retired': ''
      },
      '0x300A0715': {
        'keyword': 'RTTreatmentTerminationReasonCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Treatment Termination Reason Code Sequence',
        'retired': ''
      },
      '0x300A0716': {
        'keyword': 'MachineSpecificTreatmentTerminationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Machine-Specific Treatment Termination Code Sequence',
        'retired': ''
      },
      '0x300A0722': {
        'keyword': 'RTRadiationSalvageRecordControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Radiation Salvage Record Control Point Sequence',
        'retired': ''
      },
      '0x300A0723': {
        'keyword': 'StartingMetersetValueKnownFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Starting Meterset Value Known Flag',
        'retired': ''
      },
      '0x300A0730': {
        'keyword': 'TreatmentTerminationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Treatment Termination Description',
        'retired': ''
      },
      '0x300A0731': {
        'keyword': 'TreatmentToleranceViolationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Sequence',
        'retired': ''
      },
      '0x300A0732': {
        'keyword': 'TreatmentToleranceViolationCategory',
        'vr': 'CS',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Category',
        'retired': ''
      },
      '0x300A0733': {
        'keyword': 'TreatmentToleranceViolationAttributeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Attribute Sequence',
        'retired': ''
      },
      '0x300A0734': {
        'keyword': 'TreatmentToleranceViolationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Description',
        'retired': ''
      },
      '0x300A0735': {
        'keyword': 'TreatmentToleranceViolationIdentification',
        'vr': 'ST',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Identification',
        'retired': ''
      },
      '0x300A0736': {
        'keyword': 'TreatmentToleranceViolationDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Treatment Tolerance Violation DateTime',
        'retired': ''
      },
      '0x300A073A': {
        'keyword': 'RecordedRTControlPointDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Recorded RT Control Point DateTime',
        'retired': ''
      },
      '0x300A073B': {
        'keyword': 'ReferencedRadiationRTControlPointIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Radiation RT Control Point Index',
        'retired': ''
      },
      '0x300A073E': {
        'keyword': 'AlternateValueSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Alternate Value Sequence',
        'retired': ''
      },
      '0x300A073F': {
        'keyword': 'ConfirmationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Confirmation Sequence',
        'retired': ''
      },
      '0x300A0740': {
        'keyword': 'InterlockSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interlock Sequence',
        'retired': ''
      },
      '0x300A0741': {
        'keyword': 'InterlockDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Interlock DateTime',
        'retired': ''
      },
      '0x300A0742': {
        'keyword': 'InterlockDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Interlock Description',
        'retired': ''
      },
      '0x300A0743': {
        'keyword': 'InterlockOriginatingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interlock Originating Device Sequence',
        'retired': ''
      },
      '0x300A0744': {
        'keyword': 'InterlockCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interlock Code Sequence',
        'retired': ''
      },
      '0x300A0745': {
        'keyword': 'InterlockResolutionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interlock Resolution Code Sequence',
        'retired': ''
      },
      '0x300A0746': {
        'keyword': 'InterlockResolutionUserSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interlock Resolution User Sequence',
        'retired': ''
      },
      '0x300A0760': {
        'keyword': 'OverrideDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Override DateTime',
        'retired': ''
      },
      '0x300A0761': {
        'keyword': 'TreatmentToleranceViolationTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Type Code Sequence',
        'retired': ''
      },
      '0x300A0762': {
        'keyword': 'TreatmentToleranceViolationCauseCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Tolerance Violation Cause Code Sequence',
        'retired': ''
      },
      '0x300A0772': {
        'keyword': 'MeasuredMetersetToDoseMappingSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Measured Meterset to Dose Mapping Sequence',
        'retired': ''
      },
      '0x300A0773': {
        'keyword': 'ReferencedExpectedInVivoMeasurementValueIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Expected In-Vivo Measurement Value Index',
        'retired': ''
      },
      '0x300A0774': {
        'keyword': 'DoseMeasurementDeviceCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dose Measurement Device Code Sequence',
        'retired': ''
      },
      '0x300A0780': {
        'keyword': 'AdditionalParameterRecordingInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Additional Parameter Recording Instance Sequence',
        'retired': ''
      },
      '0x300A0782': {
        'keyword': '',
        'vr': 'US',
        'vm': '1',
        'name': '',
        'retired': 'Retired'
      },
      '0x300A0783': {
        'keyword': 'InterlockOriginDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Interlock Origin Description',
        'retired': ''
      },
      '0x300A0784': {
        'keyword': 'RTPatientPositionScopeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Patient Position Scope Sequence',
        'retired': ''
      },
      '0x300A0785': {
        'keyword': 'ReferencedTreatmentPositionGroupUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Treatment Position Group UID',
        'retired': ''
      },
      '0x300A0786': {
        'keyword': 'RadiationOrderIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Radiation Order Index',
        'retired': ''
      },
      '0x300A0787': {
        'keyword': 'OmittedRadiationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Omitted Radiation Sequence',
        'retired': ''
      },
      '0x300A0788': {
        'keyword': 'ReasonForOmissionCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Reason for Omission Code Sequence',
        'retired': ''
      },
      '0x300A0789': {
        'keyword': 'RTDeliveryStartPatientPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Delivery Start Patient Position Sequence',
        'retired': ''
      },
      '0x300A078A': {
        'keyword': 'RTTreatmentPreparationPatientPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Treatment Preparation Patient Position Sequence',
        'retired': ''
      },
      '0x300A078B': {
        'keyword': 'ReferencedRTTreatmentPreparationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Treatment Preparation Sequence',
        'retired': ''
      },
      '0x300A078C': {
        'keyword': 'ReferencedPatientSetupPhotoSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Patient Setup Photo Sequence',
        'retired': ''
      },
      '0x300A078D': {
        'keyword': 'PatientTreatmentPreparationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Preparation Method Code Sequence',
        'retired': ''
      },
      '0x300A078E': {
        'keyword': 'PatientTreatmentPreparationProcedureParameterDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Patient Treatment Preparation Procedure Parameter Description',
        'retired': ''
      },
      '0x300A078F': {
        'keyword': 'PatientTreatmentPreparationDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Preparation Device Sequence',
        'retired': ''
      },
      '0x300A0790': {
        'keyword': 'PatientTreatmentPreparationProcedureSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Preparation Procedure Sequence',
        'retired': ''
      },
      '0x300A0791': {
        'keyword': 'PatientTreatmentPreparationProcedureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Preparation Procedure Code Sequence',
        'retired': ''
      },
      '0x300A0792': {
        'keyword': 'PatientTreatmentPreparationMethodDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Patient Treatment Preparation Method Description',
        'retired': ''
      },
      '0x300A0793': {
        'keyword': 'PatientTreatmentPreparationProcedureParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Preparation Procedure Parameter Sequence',
        'retired': ''
      },
      '0x300A0794': {
        'keyword': 'PatientSetupPhotoDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Patient Setup Photo Description',
        'retired': ''
      },
      '0x300A0795': {
        'keyword': 'PatientTreatmentPreparationProcedureIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Patient Treatment Preparation Procedure Index',
        'retired': ''
      },
      '0x300A0796': {
        'keyword': 'ReferencedPatientSetupProcedureIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Patient Setup Procedure Index',
        'retired': ''
      },
      '0x300A0797': {
        'keyword': 'RTRadiationTaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Radiation Task Sequence',
        'retired': ''
      },
      '0x300A0798': {
        'keyword': 'RTPatientPositionDisplacementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Patient Position Displacement Sequence',
        'retired': ''
      },
      '0x300A0799': {
        'keyword': 'RTPatientPositionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Patient Position Sequence',
        'retired': ''
      },
      '0x300A079A': {
        'keyword': 'DisplacementReferenceLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Displacement Reference Label',
        'retired': ''
      },
      '0x300A079B': {
        'keyword': 'DisplacementMatrix',
        'vr': 'FD',
        'vm': '16',
        'name': 'Displacement Matrix',
        'retired': ''
      },
      '0x300A079C': {
        'keyword': 'PatientSupportDisplacementSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Support Displacement Sequence',
        'retired': ''
      },
      '0x300A079D': {
        'keyword': 'DisplacementReferenceLocationCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Displacement Reference Location Code Sequence',
        'retired': ''
      },
      '0x300A079E': {
        'keyword': 'RTRadiationSetDeliveryUsage',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Radiation Set Delivery Usage',
        'retired': ''
      },
      '0x300C0002': {
        'keyword': 'ReferencedRTPlanSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Plan Sequence',
        'retired': ''
      },
      '0x300C0004': {
        'keyword': 'ReferencedBeamSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Beam Sequence',
        'retired': ''
      },
      '0x300C0006': {
        'keyword': 'ReferencedBeamNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Beam Number',
        'retired': ''
      },
      '0x300C0007': {
        'keyword': 'ReferencedReferenceImageNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Reference Image Number',
        'retired': ''
      },
      '0x300C0008': {
        'keyword': 'StartCumulativeMetersetWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'Start Cumulative Meterset Weight',
        'retired': ''
      },
      '0x300C0009': {
        'keyword': 'EndCumulativeMetersetWeight',
        'vr': 'DS',
        'vm': '1',
        'name': 'End Cumulative Meterset Weight',
        'retired': ''
      },
      '0x300C000A': {
        'keyword': 'ReferencedBrachyApplicationSetupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Brachy Application Setup Sequence',
        'retired': ''
      },
      '0x300C000C': {
        'keyword': 'ReferencedBrachyApplicationSetupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Brachy Application Setup Number',
        'retired': ''
      },
      '0x300C000E': {
        'keyword': 'ReferencedSourceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Source Number',
        'retired': ''
      },
      '0x300C0020': {
        'keyword': 'ReferencedFractionGroupSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Fraction Group Sequence',
        'retired': ''
      },
      '0x300C0022': {
        'keyword': 'ReferencedFractionGroupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Fraction Group Number',
        'retired': ''
      },
      '0x300C0040': {
        'keyword': 'ReferencedVerificationImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Verification Image Sequence',
        'retired': ''
      },
      '0x300C0042': {
        'keyword': 'ReferencedReferenceImageSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Reference Image Sequence',
        'retired': ''
      },
      '0x300C0050': {
        'keyword': 'ReferencedDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Dose Reference Sequence',
        'retired': ''
      },
      '0x300C0051': {
        'keyword': 'ReferencedDoseReferenceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Dose Reference Number',
        'retired': ''
      },
      '0x300C0055': {
        'keyword': 'BrachyReferencedDoseReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Brachy Referenced Dose Reference Sequence',
        'retired': ''
      },
      '0x300C0060': {
        'keyword': 'ReferencedStructureSetSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Structure Set Sequence',
        'retired': ''
      },
      '0x300C006A': {
        'keyword': 'ReferencedPatientSetupNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Patient Setup Number',
        'retired': ''
      },
      '0x300C0080': {
        'keyword': 'ReferencedDoseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Dose Sequence',
        'retired': ''
      },
      '0x300C00A0': {
        'keyword': 'ReferencedToleranceTableNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Tolerance Table Number',
        'retired': ''
      },
      '0x300C00B0': {
        'keyword': 'ReferencedBolusSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Bolus Sequence',
        'retired': ''
      },
      '0x300C00C0': {
        'keyword': 'ReferencedWedgeNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Wedge Number',
        'retired': ''
      },
      '0x300C00D0': {
        'keyword': 'ReferencedCompensatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Compensator Number',
        'retired': ''
      },
      '0x300C00E0': {
        'keyword': 'ReferencedBlockNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Block Number',
        'retired': ''
      },
      '0x300C00F0': {
        'keyword': 'ReferencedControlPointIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Control Point Index',
        'retired': ''
      },
      '0x300C00F2': {
        'keyword': 'ReferencedControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Control Point Sequence',
        'retired': ''
      },
      '0x300C00F4': {
        'keyword': 'ReferencedStartControlPointIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Start Control Point Index',
        'retired': ''
      },
      '0x300C00F6': {
        'keyword': 'ReferencedStopControlPointIndex',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Stop Control Point Index',
        'retired': ''
      },
      '0x300C0100': {
        'keyword': 'ReferencedRangeShifterNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Range Shifter Number',
        'retired': ''
      },
      '0x300C0102': {
        'keyword': 'ReferencedLateralSpreadingDeviceNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Lateral Spreading Device Number',
        'retired': ''
      },
      '0x300C0104': {
        'keyword': 'ReferencedRangeModulatorNumber',
        'vr': 'IS',
        'vm': '1',
        'name': 'Referenced Range Modulator Number',
        'retired': ''
      },
      '0x300C0111': {
        'keyword': 'OmittedBeamTaskSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Omitted Beam Task Sequence',
        'retired': ''
      },
      '0x300C0112': {
        'keyword': 'ReasonForOmission',
        'vr': 'CS',
        'vm': '1',
        'name': 'Reason for Omission',
        'retired': ''
      },
      '0x300C0113': {
        'keyword': 'ReasonForOmissionDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reason for Omission Description',
        'retired': ''
      },
      '0x300C0114': {
        'keyword': 'PrescriptionOverviewSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Prescription Overview Sequence',
        'retired': ''
      },
      '0x300C0115': {
        'keyword': 'TotalPrescriptionDose',
        'vr': 'FL',
        'vm': '1',
        'name': 'Total Prescription Dose',
        'retired': ''
      },
      '0x300C0116': {
        'keyword': 'PlanOverviewSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Plan Overview Sequence',
        'retired': ''
      },
      '0x300C0117': {
        'keyword': 'PlanOverviewIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Plan Overview Index',
        'retired': ''
      },
      '0x300C0118': {
        'keyword': 'ReferencedPlanOverviewIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Plan Overview Index',
        'retired': ''
      },
      '0x300C0119': {
        'keyword': 'NumberOfFractionsIncluded',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Fractions Included',
        'retired': ''
      },
      '0x300C0120': {
        'keyword': 'DoseCalibrationConditionsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dose Calibration Conditions Sequence',
        'retired': ''
      },
      '0x300C0121': {
        'keyword': 'AbsorbedDoseToMetersetRatio',
        'vr': 'FD',
        'vm': '1',
        'name': 'Absorbed Dose to Meterset Ratio',
        'retired': ''
      },
      '0x300C0122': {
        'keyword': 'DelineatedRadiationFieldSize',
        'vr': 'FD',
        'vm': '2',
        'name': 'Delineated Radiation Field Size',
        'retired': ''
      },
      '0x300C0123': {
        'keyword': 'DoseCalibrationConditionsVerifiedFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dose Calibration Conditions Verified Flag',
        'retired': ''
      },
      '0x300C0124': {
        'keyword': 'CalibrationReferencePointDepth',
        'vr': 'FD',
        'vm': '1',
        'name': 'Calibration Reference Point Depth',
        'retired': ''
      },
      '0x300C0125': {
        'keyword': 'GatingBeamHoldTransitionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Gating Beam Hold Transition Sequence',
        'retired': ''
      },
      '0x300C0126': {
        'keyword': 'BeamHoldTransition',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Hold Transition',
        'retired': ''
      },
      '0x300C0127': {
        'keyword': 'BeamHoldTransitionDateTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Beam Hold Transition DateTime',
        'retired': ''
      },
      '0x300C0128': {
        'keyword': 'BeamHoldOriginatingDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Beam Hold Originating Device Sequence',
        'retired': ''
      },
      '0x300C0129': {
        'keyword': 'BeamHoldTransitionTriggerSource',
        'vr': 'CS',
        'vm': '1',
        'name': 'Beam Hold Transition Trigger Source',
        'retired': ''
      },
      '0x300E0002': {
        'keyword': 'ApprovalStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Approval Status',
        'retired': ''
      },
      '0x300E0004': {
        'keyword': 'ReviewDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Review Date',
        'retired': ''
      },
      '0x300E0005': {
        'keyword': 'ReviewTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Review Time',
        'retired': ''
      },
      '0x300E0008': {
        'keyword': 'ReviewerName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Reviewer Name',
        'retired': ''
      },
      '0x30100001': {
        'keyword': 'RadiobiologicalDoseEffectSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Radiobiological Dose Effect Sequence',
        'retired': ''
      },
      '0x30100002': {
        'keyword': 'RadiobiologicalDoseEffectFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Radiobiological Dose Effect Flag',
        'retired': ''
      },
      '0x30100003': {
        'keyword': 'EffectiveDoseCalculationMethodCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Effective Dose Calculation Method Category Code Sequence',
        'retired': ''
      },
      '0x30100004': {
        'keyword': 'EffectiveDoseCalculationMethodCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Effective Dose Calculation Method Code Sequence',
        'retired': ''
      },
      '0x30100005': {
        'keyword': 'EffectiveDoseCalculationMethodDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Effective Dose Calculation Method Description',
        'retired': ''
      },
      '0x30100006': {
        'keyword': 'ConceptualVolumeUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Conceptual Volume UID',
        'retired': ''
      },
      '0x30100007': {
        'keyword': 'OriginatingSOPInstanceReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Originating SOP Instance Reference Sequence',
        'retired': ''
      },
      '0x30100008': {
        'keyword': 'ConceptualVolumeConstituentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Constituent Sequence',
        'retired': ''
      },
      '0x30100009': {
        'keyword': 'EquivalentConceptualVolumeInstanceReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equivalent Conceptual Volume Instance Reference Sequence',
        'retired': ''
      },
      '0x3010000A': {
        'keyword': 'EquivalentConceptualVolumesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Equivalent Conceptual Volumes Sequence',
        'retired': ''
      },
      '0x3010000B': {
        'keyword': 'ReferencedConceptualVolumeUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Conceptual Volume UID',
        'retired': ''
      },
      '0x3010000C': {
        'keyword': 'ConceptualVolumeCombinationExpression',
        'vr': 'UT',
        'vm': '1',
        'name': 'Conceptual Volume Combination Expression',
        'retired': ''
      },
      '0x3010000D': {
        'keyword': 'ConceptualVolumeConstituentIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Conceptual Volume Constituent Index',
        'retired': ''
      },
      '0x3010000E': {
        'keyword': 'ConceptualVolumeCombinationFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Conceptual Volume Combination Flag',
        'retired': ''
      },
      '0x3010000F': {
        'keyword': 'ConceptualVolumeCombinationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Conceptual Volume Combination Description',
        'retired': ''
      },
      '0x30100010': {
        'keyword': 'ConceptualVolumeSegmentationDefinedFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Conceptual Volume Segmentation Defined Flag',
        'retired': ''
      },
      '0x30100011': {
        'keyword': 'ConceptualVolumeSegmentationReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Segmentation Reference Sequence',
        'retired': ''
      },
      '0x30100012': {
        'keyword': 'ConceptualVolumeConstituentSegmentationReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Constituent Segmentation Reference Sequence',
        'retired': ''
      },
      '0x30100013': {
        'keyword': 'ConstituentConceptualVolumeUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Constituent Conceptual Volume UID',
        'retired': ''
      },
      '0x30100014': {
        'keyword': 'DerivationConceptualVolumeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Derivation Conceptual Volume Sequence',
        'retired': ''
      },
      '0x30100015': {
        'keyword': 'SourceConceptualVolumeUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Source Conceptual Volume UID',
        'retired': ''
      },
      '0x30100016': {
        'keyword': 'ConceptualVolumeDerivationAlgorithmSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Derivation Algorithm Sequence',
        'retired': ''
      },
      '0x30100017': {
        'keyword': 'ConceptualVolumeDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Conceptual Volume Description',
        'retired': ''
      },
      '0x30100018': {
        'keyword': 'SourceConceptualVolumeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Source Conceptual Volume Sequence',
        'retired': ''
      },
      '0x30100019': {
        'keyword': 'AuthorIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Author Identification Sequence',
        'retired': ''
      },
      '0x3010001A': {
        'keyword': 'ManufacturerModelVersion',
        'vr': 'LO',
        'vm': '1',
        'name': 'Manufacturer\'s Model Version',
        'retired': ''
      },
      '0x3010001B': {
        'keyword': 'DeviceAlternateIdentifier',
        'vr': 'UC',
        'vm': '1',
        'name': 'Device Alternate Identifier',
        'retired': ''
      },
      '0x3010001C': {
        'keyword': 'DeviceAlternateIdentifierType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Device Alternate Identifier Type',
        'retired': ''
      },
      '0x3010001D': {
        'keyword': 'DeviceAlternateIdentifierFormat',
        'vr': 'LT',
        'vm': '1',
        'name': 'Device Alternate Identifier Format',
        'retired': ''
      },
      '0x3010001E': {
        'keyword': 'SegmentationCreationTemplateLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Segmentation Creation Template Label',
        'retired': ''
      },
      '0x3010001F': {
        'keyword': 'SegmentationTemplateUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Segmentation Template UID',
        'retired': ''
      },
      '0x30100020': {
        'keyword': 'ReferencedSegmentReferenceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Segment Reference Index',
        'retired': ''
      },
      '0x30100021': {
        'keyword': 'SegmentReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Reference Sequence',
        'retired': ''
      },
      '0x30100022': {
        'keyword': 'SegmentReferenceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Segment Reference Index',
        'retired': ''
      },
      '0x30100023': {
        'keyword': 'DirectSegmentReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Direct Segment Reference Sequence',
        'retired': ''
      },
      '0x30100024': {
        'keyword': 'CombinationSegmentReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Combination Segment Reference Sequence',
        'retired': ''
      },
      '0x30100025': {
        'keyword': 'ConceptualVolumeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Sequence',
        'retired': ''
      },
      '0x30100026': {
        'keyword': 'SegmentedRTAccessoryDeviceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segmented RT Accessory Device Sequence',
        'retired': ''
      },
      '0x30100027': {
        'keyword': 'SegmentCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Characteristics Sequence',
        'retired': ''
      },
      '0x30100028': {
        'keyword': 'RelatedSegmentCharacteristicsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Related Segment Characteristics Sequence',
        'retired': ''
      },
      '0x30100029': {
        'keyword': 'SegmentCharacteristicsPrecedence',
        'vr': 'US',
        'vm': '1',
        'name': 'Segment Characteristics Precedence',
        'retired': ''
      },
      '0x3010002A': {
        'keyword': 'RTSegmentAnnotationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Segment Annotation Sequence',
        'retired': ''
      },
      '0x3010002B': {
        'keyword': 'SegmentAnnotationCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Annotation Category Code Sequence',
        'retired': ''
      },
      '0x3010002C': {
        'keyword': 'SegmentAnnotationTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Annotation Type Code Sequence',
        'retired': ''
      },
      '0x3010002D': {
        'keyword': 'DeviceLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Device Label',
        'retired': ''
      },
      '0x3010002E': {
        'keyword': 'DeviceTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Device Type Code Sequence',
        'retired': ''
      },
      '0x3010002F': {
        'keyword': 'SegmentAnnotationTypeModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Segment Annotation Type Modifier Code Sequence',
        'retired': ''
      },
      '0x30100030': {
        'keyword': 'PatientEquipmentRelationshipCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Equipment Relationship Code Sequence',
        'retired': ''
      },
      '0x30100031': {
        'keyword': 'ReferencedFiducialsUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Fiducials UID',
        'retired': ''
      },
      '0x30100032': {
        'keyword': 'PatientTreatmentOrientationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Patient Treatment Orientation Sequence',
        'retired': ''
      },
      '0x30100033': {
        'keyword': 'UserContentLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'User Content Label',
        'retired': ''
      },
      '0x30100034': {
        'keyword': 'UserContentLongLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'User Content Long Label',
        'retired': ''
      },
      '0x30100035': {
        'keyword': 'EntityLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Entity Label',
        'retired': ''
      },
      '0x30100036': {
        'keyword': 'EntityName',
        'vr': 'LO',
        'vm': '1',
        'name': 'Entity Name',
        'retired': ''
      },
      '0x30100037': {
        'keyword': 'EntityDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'Entity Description',
        'retired': ''
      },
      '0x30100038': {
        'keyword': 'EntityLongLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Entity Long Label',
        'retired': ''
      },
      '0x30100039': {
        'keyword': 'DeviceIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Device Index',
        'retired': ''
      },
      '0x3010003A': {
        'keyword': 'RTTreatmentPhaseIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Treatment Phase Index',
        'retired': ''
      },
      '0x3010003B': {
        'keyword': 'RTTreatmentPhaseUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'RT Treatment Phase UID',
        'retired': ''
      },
      '0x3010003C': {
        'keyword': 'RTPrescriptionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Prescription Index',
        'retired': ''
      },
      '0x3010003D': {
        'keyword': 'RTSegmentAnnotationIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Segment Annotation Index',
        'retired': ''
      },
      '0x3010003E': {
        'keyword': 'BasisRTTreatmentPhaseIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Basis RT Treatment Phase Index',
        'retired': ''
      },
      '0x3010003F': {
        'keyword': 'RelatedRTTreatmentPhaseIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Related RT Treatment Phase Index',
        'retired': ''
      },
      '0x30100040': {
        'keyword': 'ReferencedRTTreatmentPhaseIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced RT Treatment Phase Index',
        'retired': ''
      },
      '0x30100041': {
        'keyword': 'ReferencedRTPrescriptionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced RT Prescription Index',
        'retired': ''
      },
      '0x30100042': {
        'keyword': 'ReferencedParentRTPrescriptionIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced Parent RT Prescription Index',
        'retired': ''
      },
      '0x30100043': {
        'keyword': 'ManufacturerDeviceIdentifier',
        'vr': 'ST',
        'vm': '1',
        'name': 'Manufacturer\'s Device Identifier',
        'retired': ''
      },
      '0x30100044': {
        'keyword': 'InstanceLevelReferencedPerformedProcedureStepSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Instance-Level Referenced Performed Procedure Step Sequence',
        'retired': ''
      },
      '0x30100045': {
        'keyword': 'RTTreatmentPhaseIntentPresenceFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Treatment Phase Intent Presence Flag',
        'retired': ''
      },
      '0x30100046': {
        'keyword': 'RadiotherapyTreatmentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Radiotherapy Treatment Type',
        'retired': ''
      },
      '0x30100047': {
        'keyword': 'TeletherapyRadiationType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Teletherapy Radiation Type',
        'retired': ''
      },
      '0x30100048': {
        'keyword': 'BrachytherapySourceType',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Brachytherapy Source Type',
        'retired': ''
      },
      '0x30100049': {
        'keyword': 'ReferencedRTTreatmentPhaseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced RT Treatment Phase Sequence',
        'retired': ''
      },
      '0x3010004A': {
        'keyword': 'ReferencedDirectSegmentInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Direct Segment Instance Sequence',
        'retired': ''
      },
      '0x3010004B': {
        'keyword': 'IntendedRTTreatmentPhaseSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Intended RT Treatment Phase Sequence',
        'retired': ''
      },
      '0x3010004C': {
        'keyword': 'IntendedPhaseStartDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Intended Phase Start Date',
        'retired': ''
      },
      '0x3010004D': {
        'keyword': 'IntendedPhaseEndDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Intended Phase End Date',
        'retired': ''
      },
      '0x3010004E': {
        'keyword': 'RTTreatmentPhaseIntervalSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Treatment Phase Interval Sequence',
        'retired': ''
      },
      '0x3010004F': {
        'keyword': 'TemporalRelationshipIntervalAnchor',
        'vr': 'CS',
        'vm': '1',
        'name': 'Temporal Relationship Interval Anchor',
        'retired': ''
      },
      '0x30100050': {
        'keyword': 'MinimumNumberOfIntervalDays',
        'vr': 'FD',
        'vm': '1',
        'name': 'Minimum Number of Interval Days',
        'retired': ''
      },
      '0x30100051': {
        'keyword': 'MaximumNumberOfIntervalDays',
        'vr': 'FD',
        'vm': '1',
        'name': 'Maximum Number of Interval Days',
        'retired': ''
      },
      '0x30100052': {
        'keyword': 'PertinentSOPClassesInStudy',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Pertinent SOP Classes in Study',
        'retired': ''
      },
      '0x30100053': {
        'keyword': 'PertinentSOPClassesInSeries',
        'vr': 'UI',
        'vm': '1-n',
        'name': 'Pertinent SOP Classes in Series',
        'retired': ''
      },
      '0x30100054': {
        'keyword': 'RTPrescriptionLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Prescription Label',
        'retired': ''
      },
      '0x30100055': {
        'keyword': 'RTPhysicianIntentPredecessorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Physician Intent Predecessor Sequence',
        'retired': ''
      },
      '0x30100056': {
        'keyword': 'RTTreatmentApproachLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'RT Treatment Approach Label',
        'retired': ''
      },
      '0x30100057': {
        'keyword': 'RTPhysicianIntentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Physician Intent Sequence',
        'retired': ''
      },
      '0x30100058': {
        'keyword': 'RTPhysicianIntentIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'RT Physician Intent Index',
        'retired': ''
      },
      '0x30100059': {
        'keyword': 'RTTreatmentIntentType',
        'vr': 'CS',
        'vm': '1',
        'name': 'RT Treatment Intent Type',
        'retired': ''
      },
      '0x3010005A': {
        'keyword': 'RTPhysicianIntentNarrative',
        'vr': 'UT',
        'vm': '1',
        'name': 'RT Physician Intent Narrative',
        'retired': ''
      },
      '0x3010005B': {
        'keyword': 'RTProtocolCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Protocol Code Sequence',
        'retired': ''
      },
      '0x3010005C': {
        'keyword': 'ReasonForSuperseding',
        'vr': 'ST',
        'vm': '1',
        'name': 'Reason for Superseding',
        'retired': ''
      },
      '0x3010005D': {
        'keyword': 'RTDiagnosisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Diagnosis Code Sequence',
        'retired': ''
      },
      '0x3010005E': {
        'keyword': 'ReferencedRTPhysicianIntentIndex',
        'vr': 'US',
        'vm': '1',
        'name': 'Referenced RT Physician Intent Index',
        'retired': ''
      },
      '0x3010005F': {
        'keyword': 'RTPhysicianIntentInputInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Physician Intent Input Instance Sequence',
        'retired': ''
      },
      '0x30100060': {
        'keyword': 'RTAnatomicPrescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Anatomic Prescription Sequence',
        'retired': ''
      },
      '0x30100061': {
        'keyword': 'PriorTreatmentDoseDescription',
        'vr': 'UT',
        'vm': '1',
        'name': 'Prior Treatment Dose Description',
        'retired': ''
      },
      '0x30100062': {
        'keyword': 'PriorTreatmentReferenceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Prior Treatment Reference Sequence',
        'retired': ''
      },
      '0x30100063': {
        'keyword': 'DosimetricObjectiveEvaluationScope',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dosimetric Objective Evaluation Scope',
        'retired': ''
      },
      '0x30100064': {
        'keyword': 'TherapeuticRoleCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Therapeutic Role Category Code Sequence',
        'retired': ''
      },
      '0x30100065': {
        'keyword': 'TherapeuticRoleTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Therapeutic Role Type Code Sequence',
        'retired': ''
      },
      '0x30100066': {
        'keyword': 'ConceptualVolumeOptimizationPrecedence',
        'vr': 'US',
        'vm': '1',
        'name': 'Conceptual Volume Optimization Precedence',
        'retired': ''
      },
      '0x30100067': {
        'keyword': 'ConceptualVolumeCategoryCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Category Code Sequence',
        'retired': ''
      },
      '0x30100068': {
        'keyword': 'ConceptualVolumeBlockingConstraint',
        'vr': 'CS',
        'vm': '1',
        'name': 'Conceptual Volume Blocking Constraint',
        'retired': ''
      },
      '0x30100069': {
        'keyword': 'ConceptualVolumeTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Type Code Sequence',
        'retired': ''
      },
      '0x3010006A': {
        'keyword': 'ConceptualVolumeTypeModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Type Modifier Code Sequence',
        'retired': ''
      },
      '0x3010006B': {
        'keyword': 'RTPrescriptionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Prescription Sequence',
        'retired': ''
      },
      '0x3010006C': {
        'keyword': 'DosimetricObjectiveSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dosimetric Objective Sequence',
        'retired': ''
      },
      '0x3010006D': {
        'keyword': 'DosimetricObjectiveTypeCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dosimetric Objective Type Code Sequence',
        'retired': ''
      },
      '0x3010006E': {
        'keyword': 'DosimetricObjectiveUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Dosimetric Objective UID',
        'retired': ''
      },
      '0x3010006F': {
        'keyword': 'ReferencedDosimetricObjectiveUID',
        'vr': 'UI',
        'vm': '1',
        'name': 'Referenced Dosimetric Objective UID',
        'retired': ''
      },
      '0x30100070': {
        'keyword': 'DosimetricObjectiveParameterSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Dosimetric Objective Parameter Sequence',
        'retired': ''
      },
      '0x30100071': {
        'keyword': 'ReferencedDosimetricObjectivesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Dosimetric Objectives Sequence',
        'retired': ''
      },
      '0x30100073': {
        'keyword': 'AbsoluteDosimetricObjectiveFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Absolute Dosimetric Objective Flag',
        'retired': ''
      },
      '0x30100074': {
        'keyword': 'DosimetricObjectiveWeight',
        'vr': 'FD',
        'vm': '1',
        'name': 'Dosimetric Objective Weight',
        'retired': ''
      },
      '0x30100075': {
        'keyword': 'DosimetricObjectivePurpose',
        'vr': 'CS',
        'vm': '1',
        'name': 'Dosimetric Objective Purpose',
        'retired': ''
      },
      '0x30100076': {
        'keyword': 'PlanningInputInformationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Planning Input Information Sequence',
        'retired': ''
      },
      '0x30100077': {
        'keyword': 'TreatmentSite',
        'vr': 'LO',
        'vm': '1',
        'name': 'Treatment Site',
        'retired': ''
      },
      '0x30100078': {
        'keyword': 'TreatmentSiteCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Site Code Sequence',
        'retired': ''
      },
      '0x30100079': {
        'keyword': 'FractionPatternSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fraction Pattern Sequence',
        'retired': ''
      },
      '0x3010007A': {
        'keyword': 'TreatmentTechniqueNotes',
        'vr': 'UT',
        'vm': '1',
        'name': 'Treatment Technique Notes',
        'retired': ''
      },
      '0x3010007B': {
        'keyword': 'PrescriptionNotes',
        'vr': 'UT',
        'vm': '1',
        'name': 'Prescription Notes',
        'retired': ''
      },
      '0x3010007C': {
        'keyword': 'NumberOfIntervalFractions',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Interval Fractions',
        'retired': ''
      },
      '0x3010007D': {
        'keyword': 'NumberOfFractions',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Fractions',
        'retired': ''
      },
      '0x3010007E': {
        'keyword': 'IntendedDeliveryDuration',
        'vr': 'US',
        'vm': '1',
        'name': 'Intended Delivery Duration',
        'retired': ''
      },
      '0x3010007F': {
        'keyword': 'FractionationNotes',
        'vr': 'UT',
        'vm': '1',
        'name': 'Fractionation Notes',
        'retired': ''
      },
      '0x30100080': {
        'keyword': 'RTTreatmentTechniqueCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'RT Treatment Technique Code Sequence',
        'retired': ''
      },
      '0x30100081': {
        'keyword': 'PrescriptionNotesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Prescription Notes Sequence',
        'retired': ''
      },
      '0x30100082': {
        'keyword': 'FractionBasedRelationshipSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Fraction-Based Relationship Sequence',
        'retired': ''
      },
      '0x30100083': {
        'keyword': 'FractionBasedRelationshipIntervalAnchor',
        'vr': 'CS',
        'vm': '1',
        'name': 'Fraction-Based Relationship Interval Anchor',
        'retired': ''
      },
      '0x30100084': {
        'keyword': 'MinimumHoursBetweenFractions',
        'vr': 'FD',
        'vm': '1',
        'name': 'Minimum Hours between Fractions',
        'retired': ''
      },
      '0x30100085': {
        'keyword': 'IntendedFractionStartTime',
        'vr': 'TM',
        'vm': '1-n',
        'name': 'Intended Fraction Start Time',
        'retired': ''
      },
      '0x30100086': {
        'keyword': 'IntendedStartDayOfWeek',
        'vr': 'LT',
        'vm': '1',
        'name': 'Intended Start Day of Week',
        'retired': ''
      },
      '0x30100087': {
        'keyword': 'WeekdayFractionPatternSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Weekday Fraction Pattern Sequence',
        'retired': ''
      },
      '0x30100088': {
        'keyword': 'DeliveryTimeStructureCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Delivery Time Structure Code Sequence',
        'retired': ''
      },
      '0x30100089': {
        'keyword': 'TreatmentSiteModifierCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Treatment Site Modifier Code Sequence',
        'retired': ''
      },
      '0x30100090': {
        'keyword': 'RoboticBaseLocationIndicator',
        'vr': 'CS',
        'vm': '1',
        'name': 'Robotic Base Location Indicator',
        'retired': 'Retired'
      },
      '0x30100091': {
        'keyword': 'RoboticPathNodeSetCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Robotic Path Node Set Code Sequence',
        'retired': ''
      },
      '0x30100092': {
        'keyword': 'RoboticNodeIdentifier',
        'vr': 'UL',
        'vm': '1',
        'name': 'Robotic Node Identifier',
        'retired': ''
      },
      '0x30100093': {
        'keyword': 'RTTreatmentSourceCoordinates',
        'vr': 'FD',
        'vm': '3',
        'name': 'RT Treatment Source Coordinates',
        'retired': ''
      },
      '0x30100094': {
        'keyword': 'RadiationSourceCoordinateSystemYawAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Source Coordinate SystemYaw Angle',
        'retired': ''
      },
      '0x30100095': {
        'keyword': 'RadiationSourceCoordinateSystemRollAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Source Coordinate SystemRoll Angle',
        'retired': ''
      },
      '0x30100096': {
        'keyword': 'RadiationSourceCoordinateSystemPitchAngle',
        'vr': 'FD',
        'vm': '1',
        'name': 'Radiation Source Coordinate System Pitch Angle',
        'retired': ''
      },
      '0x30100097': {
        'keyword': 'RoboticPathControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Robotic Path Control Point Sequence',
        'retired': ''
      },
      '0x30100098': {
        'keyword': 'TomotherapeuticControlPointSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Tomotherapeutic Control Point Sequence',
        'retired': ''
      },
      '0x30100099': {
        'keyword': 'TomotherapeuticLeafOpenDurations',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Tomotherapeutic Leaf Open Durations',
        'retired': ''
      },
      '0x3010009A': {
        'keyword': 'TomotherapeuticLeafInitialClosedDurations',
        'vr': 'FD',
        'vm': '1-n',
        'name': 'Tomotherapeutic Leaf Initial Closed Durations',
        'retired': ''
      },
      '0x301000A0': {
        'keyword': 'ConceptualVolumeIdentificationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Conceptual Volume Identification Sequence',
        'retired': ''
      },
      '0x40000010': {
        'keyword': 'Arbitrary',
        'vr': 'LT',
        'vm': '1',
        'name': 'Arbitrary',
        'retired': 'Retired'
      },
      '0x40004000': {
        'keyword': 'TextComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Text Comments',
        'retired': 'Retired'
      },
      '0x40080040': {
        'keyword': 'ResultsID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Results ID',
        'retired': 'Retired'
      },
      '0x40080042': {
        'keyword': 'ResultsIDIssuer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Results ID Issuer',
        'retired': 'Retired'
      },
      '0x40080050': {
        'keyword': 'ReferencedInterpretationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced Interpretation Sequence',
        'retired': 'Retired'
      },
      '0x400800FF': {
        'keyword': 'ReportProductionStatusTrial',
        'vr': 'CS',
        'vm': '1',
        'name': 'Report Production Status (Trial)',
        'retired': 'Retired'
      },
      '0x40080100': {
        'keyword': 'InterpretationRecordedDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Interpretation Recorded Date',
        'retired': 'Retired'
      },
      '0x40080101': {
        'keyword': 'InterpretationRecordedTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Interpretation Recorded Time',
        'retired': 'Retired'
      },
      '0x40080102': {
        'keyword': 'InterpretationRecorder',
        'vr': 'PN',
        'vm': '1',
        'name': 'Interpretation Recorder',
        'retired': 'Retired'
      },
      '0x40080103': {
        'keyword': 'ReferenceToRecordedSound',
        'vr': 'LO',
        'vm': '1',
        'name': 'Reference to Recorded Sound',
        'retired': 'Retired'
      },
      '0x40080108': {
        'keyword': 'InterpretationTranscriptionDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Interpretation Transcription Date',
        'retired': 'Retired'
      },
      '0x40080109': {
        'keyword': 'InterpretationTranscriptionTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Interpretation Transcription Time',
        'retired': 'Retired'
      },
      '0x4008010A': {
        'keyword': 'InterpretationTranscriber',
        'vr': 'PN',
        'vm': '1',
        'name': 'Interpretation Transcriber',
        'retired': 'Retired'
      },
      '0x4008010B': {
        'keyword': 'InterpretationText',
        'vr': 'ST',
        'vm': '1',
        'name': 'Interpretation Text',
        'retired': 'Retired'
      },
      '0x4008010C': {
        'keyword': 'InterpretationAuthor',
        'vr': 'PN',
        'vm': '1',
        'name': 'Interpretation Author',
        'retired': 'Retired'
      },
      '0x40080111': {
        'keyword': 'InterpretationApproverSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interpretation Approver Sequence',
        'retired': 'Retired'
      },
      '0x40080112': {
        'keyword': 'InterpretationApprovalDate',
        'vr': 'DA',
        'vm': '1',
        'name': 'Interpretation Approval Date',
        'retired': 'Retired'
      },
      '0x40080113': {
        'keyword': 'InterpretationApprovalTime',
        'vr': 'TM',
        'vm': '1',
        'name': 'Interpretation Approval Time',
        'retired': 'Retired'
      },
      '0x40080114': {
        'keyword': 'PhysicianApprovingInterpretation',
        'vr': 'PN',
        'vm': '1',
        'name': 'Physician Approving Interpretation',
        'retired': 'Retired'
      },
      '0x40080115': {
        'keyword': 'InterpretationDiagnosisDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Interpretation Diagnosis Description',
        'retired': 'Retired'
      },
      '0x40080117': {
        'keyword': 'InterpretationDiagnosisCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Interpretation Diagnosis Code Sequence',
        'retired': 'Retired'
      },
      '0x40080118': {
        'keyword': 'ResultsDistributionListSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Results Distribution List Sequence',
        'retired': 'Retired'
      },
      '0x40080119': {
        'keyword': 'DistributionName',
        'vr': 'PN',
        'vm': '1',
        'name': 'Distribution Name',
        'retired': 'Retired'
      },
      '0x4008011A': {
        'keyword': 'DistributionAddress',
        'vr': 'LO',
        'vm': '1',
        'name': 'Distribution Address',
        'retired': 'Retired'
      },
      '0x40080200': {
        'keyword': 'InterpretationID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Interpretation ID',
        'retired': 'Retired'
      },
      '0x40080202': {
        'keyword': 'InterpretationIDIssuer',
        'vr': 'LO',
        'vm': '1',
        'name': 'Interpretation ID Issuer',
        'retired': 'Retired'
      },
      '0x40080210': {
        'keyword': 'InterpretationTypeID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Interpretation Type ID',
        'retired': 'Retired'
      },
      '0x40080212': {
        'keyword': 'InterpretationStatusID',
        'vr': 'CS',
        'vm': '1',
        'name': 'Interpretation Status ID',
        'retired': 'Retired'
      },
      '0x40080300': {
        'keyword': 'Impressions',
        'vr': 'ST',
        'vm': '1',
        'name': 'Impressions',
        'retired': 'Retired'
      },
      '0x40084000': {
        'keyword': 'ResultsComments',
        'vr': 'ST',
        'vm': '1',
        'name': 'Results Comments',
        'retired': 'Retired'
      },
      '0x40100001': {
        'keyword': 'LowEnergyDetectors',
        'vr': 'CS',
        'vm': '1',
        'name': 'Low Energy Detectors',
        'retired': ''
      },
      '0x40100002': {
        'keyword': 'HighEnergyDetectors',
        'vr': 'CS',
        'vm': '1',
        'name': 'High Energy Detectors',
        'retired': ''
      },
      '0x40100004': {
        'keyword': 'DetectorGeometrySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Detector Geometry Sequence',
        'retired': ''
      },
      '0x40101001': {
        'keyword': 'ThreatROIVoxelSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Threat ROI Voxel Sequence',
        'retired': ''
      },
      '0x40101004': {
        'keyword': 'ThreatROIBase',
        'vr': 'FL',
        'vm': '3',
        'name': 'Threat ROI Base',
        'retired': ''
      },
      '0x40101005': {
        'keyword': 'ThreatROIExtents',
        'vr': 'FL',
        'vm': '3',
        'name': 'Threat ROI Extents',
        'retired': ''
      },
      '0x40101006': {
        'keyword': 'ThreatROIBitmap',
        'vr': 'OB',
        'vm': '1',
        'name': 'Threat ROI Bitmap',
        'retired': ''
      },
      '0x40101007': {
        'keyword': 'RouteSegmentID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Route Segment ID',
        'retired': ''
      },
      '0x40101008': {
        'keyword': 'GantryType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Gantry Type',
        'retired': ''
      },
      '0x40101009': {
        'keyword': 'OOIOwnerType',
        'vr': 'CS',
        'vm': '1',
        'name': 'OOI Owner Type',
        'retired': ''
      },
      '0x4010100A': {
        'keyword': 'RouteSegmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Route Segment Sequence',
        'retired': ''
      },
      '0x40101010': {
        'keyword': 'PotentialThreatObjectID',
        'vr': 'US',
        'vm': '1',
        'name': 'Potential Threat Object ID',
        'retired': ''
      },
      '0x40101011': {
        'keyword': 'ThreatSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Threat Sequence',
        'retired': ''
      },
      '0x40101012': {
        'keyword': 'ThreatCategory',
        'vr': 'CS',
        'vm': '1',
        'name': 'Threat Category',
        'retired': ''
      },
      '0x40101013': {
        'keyword': 'ThreatCategoryDescription',
        'vr': 'LT',
        'vm': '1',
        'name': 'Threat Category Description',
        'retired': ''
      },
      '0x40101014': {
        'keyword': 'ATDAbilityAssessment',
        'vr': 'CS',
        'vm': '1',
        'name': 'ATD Ability Assessment',
        'retired': ''
      },
      '0x40101015': {
        'keyword': 'ATDAssessmentFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'ATD Assessment Flag',
        'retired': ''
      },
      '0x40101016': {
        'keyword': 'ATDAssessmentProbability',
        'vr': 'FL',
        'vm': '1',
        'name': 'ATD Assessment Probability',
        'retired': ''
      },
      '0x40101017': {
        'keyword': 'Mass',
        'vr': 'FL',
        'vm': '1',
        'name': 'Mass',
        'retired': ''
      },
      '0x40101018': {
        'keyword': 'Density',
        'vr': 'FL',
        'vm': '1',
        'name': 'Density',
        'retired': ''
      },
      '0x40101019': {
        'keyword': 'ZEffective',
        'vr': 'FL',
        'vm': '1',
        'name': 'Z Effective',
        'retired': ''
      },
      '0x4010101A': {
        'keyword': 'BoardingPassID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Boarding Pass ID',
        'retired': ''
      },
      '0x4010101B': {
        'keyword': 'CenterOfMass',
        'vr': 'FL',
        'vm': '3',
        'name': 'Center of Mass',
        'retired': ''
      },
      '0x4010101C': {
        'keyword': 'CenterOfPTO',
        'vr': 'FL',
        'vm': '3',
        'name': 'Center of PTO',
        'retired': ''
      },
      '0x4010101D': {
        'keyword': 'BoundingPolygon',
        'vr': 'FL',
        'vm': '6-n',
        'name': 'Bounding Polygon',
        'retired': ''
      },
      '0x4010101E': {
        'keyword': 'RouteSegmentStartLocationID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Route Segment Start Location ID',
        'retired': ''
      },
      '0x4010101F': {
        'keyword': 'RouteSegmentEndLocationID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Route Segment End Location ID',
        'retired': ''
      },
      '0x40101020': {
        'keyword': 'RouteSegmentLocationIDType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Route Segment Location ID Type',
        'retired': ''
      },
      '0x40101021': {
        'keyword': 'AbortReason',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Abort Reason',
        'retired': ''
      },
      '0x40101023': {
        'keyword': 'VolumeOfPTO',
        'vr': 'FL',
        'vm': '1',
        'name': 'Volume of PTO',
        'retired': ''
      },
      '0x40101024': {
        'keyword': 'AbortFlag',
        'vr': 'CS',
        'vm': '1',
        'name': 'Abort Flag',
        'retired': ''
      },
      '0x40101025': {
        'keyword': 'RouteSegmentStartTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Route Segment Start Time',
        'retired': ''
      },
      '0x40101026': {
        'keyword': 'RouteSegmentEndTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Route Segment End Time',
        'retired': ''
      },
      '0x40101027': {
        'keyword': 'TDRType',
        'vr': 'CS',
        'vm': '1',
        'name': 'TDR Type',
        'retired': ''
      },
      '0x40101028': {
        'keyword': 'InternationalRouteSegment',
        'vr': 'CS',
        'vm': '1',
        'name': 'International Route Segment',
        'retired': ''
      },
      '0x40101029': {
        'keyword': 'ThreatDetectionAlgorithmAndVersion',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Threat Detection Algorithm and Version',
        'retired': ''
      },
      '0x4010102A': {
        'keyword': 'AssignedLocation',
        'vr': 'SH',
        'vm': '1',
        'name': 'Assigned Location',
        'retired': ''
      },
      '0x4010102B': {
        'keyword': 'AlarmDecisionTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'Alarm Decision Time',
        'retired': ''
      },
      '0x40101031': {
        'keyword': 'AlarmDecision',
        'vr': 'CS',
        'vm': '1',
        'name': 'Alarm Decision',
        'retired': ''
      },
      '0x40101033': {
        'keyword': 'NumberOfTotalObjects',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Total Objects',
        'retired': ''
      },
      '0x40101034': {
        'keyword': 'NumberOfAlarmObjects',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Alarm Objects',
        'retired': ''
      },
      '0x40101037': {
        'keyword': 'PTORepresentationSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PTO Representation Sequence',
        'retired': ''
      },
      '0x40101038': {
        'keyword': 'ATDAssessmentSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'ATD Assessment Sequence',
        'retired': ''
      },
      '0x40101039': {
        'keyword': 'TIPType',
        'vr': 'CS',
        'vm': '1',
        'name': 'TIP Type',
        'retired': ''
      },
      '0x4010103A': {
        'keyword': 'DICOSVersion',
        'vr': 'CS',
        'vm': '1',
        'name': 'DICOS Version',
        'retired': ''
      },
      '0x40101041': {
        'keyword': 'OOIOwnerCreationTime',
        'vr': 'DT',
        'vm': '1',
        'name': 'OOI Owner Creation Time',
        'retired': ''
      },
      '0x40101042': {
        'keyword': 'OOIType',
        'vr': 'CS',
        'vm': '1',
        'name': 'OOI Type',
        'retired': ''
      },
      '0x40101043': {
        'keyword': 'OOISize',
        'vr': 'FL',
        'vm': '3',
        'name': 'OOI Size',
        'retired': ''
      },
      '0x40101044': {
        'keyword': 'AcquisitionStatus',
        'vr': 'CS',
        'vm': '1',
        'name': 'Acquisition Status',
        'retired': ''
      },
      '0x40101045': {
        'keyword': 'BasisMaterialsCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Basis Materials Code Sequence',
        'retired': ''
      },
      '0x40101046': {
        'keyword': 'PhantomType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Phantom Type',
        'retired': ''
      },
      '0x40101047': {
        'keyword': 'OOIOwnerSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'OOI Owner Sequence',
        'retired': ''
      },
      '0x40101048': {
        'keyword': 'ScanType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Scan Type',
        'retired': ''
      },
      '0x40101051': {
        'keyword': 'ItineraryID',
        'vr': 'LO',
        'vm': '1',
        'name': 'Itinerary ID',
        'retired': ''
      },
      '0x40101052': {
        'keyword': 'ItineraryIDType',
        'vr': 'SH',
        'vm': '1',
        'name': 'Itinerary ID Type',
        'retired': ''
      },
      '0x40101053': {
        'keyword': 'ItineraryIDAssigningAuthority',
        'vr': 'LO',
        'vm': '1',
        'name': 'Itinerary ID Assigning Authority',
        'retired': ''
      },
      '0x40101054': {
        'keyword': 'RouteID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Route ID',
        'retired': ''
      },
      '0x40101055': {
        'keyword': 'RouteIDAssigningAuthority',
        'vr': 'SH',
        'vm': '1',
        'name': 'Route ID Assigning Authority',
        'retired': ''
      },
      '0x40101056': {
        'keyword': 'InboundArrivalType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Inbound Arrival Type',
        'retired': ''
      },
      '0x40101058': {
        'keyword': 'CarrierID',
        'vr': 'SH',
        'vm': '1',
        'name': 'Carrier ID',
        'retired': ''
      },
      '0x40101059': {
        'keyword': 'CarrierIDAssigningAuthority',
        'vr': 'CS',
        'vm': '1',
        'name': 'Carrier ID Assigning Authority',
        'retired': ''
      },
      '0x40101060': {
        'keyword': 'SourceOrientation',
        'vr': 'FL',
        'vm': '3',
        'name': 'Source Orientation',
        'retired': ''
      },
      '0x40101061': {
        'keyword': 'SourcePosition',
        'vr': 'FL',
        'vm': '3',
        'name': 'Source Position',
        'retired': ''
      },
      '0x40101062': {
        'keyword': 'BeltHeight',
        'vr': 'FL',
        'vm': '1',
        'name': 'Belt Height',
        'retired': ''
      },
      '0x40101064': {
        'keyword': 'AlgorithmRoutingCodeSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Algorithm Routing Code Sequence',
        'retired': ''
      },
      '0x40101067': {
        'keyword': 'TransportClassification',
        'vr': 'CS',
        'vm': '1',
        'name': 'Transport Classification',
        'retired': ''
      },
      '0x40101068': {
        'keyword': 'OOITypeDescriptor',
        'vr': 'LT',
        'vm': '1',
        'name': 'OOI Type Descriptor',
        'retired': ''
      },
      '0x40101069': {
        'keyword': 'TotalProcessingTime',
        'vr': 'FL',
        'vm': '1',
        'name': 'Total Processing Time',
        'retired': ''
      },
      '0x4010106C': {
        'keyword': 'DetectorCalibrationData',
        'vr': 'OB',
        'vm': '1',
        'name': 'Detector Calibration Data',
        'retired': ''
      },
      '0x4010106D': {
        'keyword': 'AdditionalScreeningPerformed',
        'vr': 'CS',
        'vm': '1',
        'name': 'Additional Screening Performed',
        'retired': ''
      },
      '0x4010106E': {
        'keyword': 'AdditionalInspectionSelectionCriteria',
        'vr': 'CS',
        'vm': '1',
        'name': 'Additional Inspection Selection Criteria',
        'retired': ''
      },
      '0x4010106F': {
        'keyword': 'AdditionalInspectionMethodSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Additional Inspection Method Sequence',
        'retired': ''
      },
      '0x40101070': {
        'keyword': 'AITDeviceType',
        'vr': 'CS',
        'vm': '1',
        'name': 'AIT Device Type',
        'retired': ''
      },
      '0x40101071': {
        'keyword': 'QRMeasurementsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'QR Measurements Sequence',
        'retired': ''
      },
      '0x40101072': {
        'keyword': 'TargetMaterialSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Target Material Sequence',
        'retired': ''
      },
      '0x40101073': {
        'keyword': 'SNRThreshold',
        'vr': 'FD',
        'vm': '1',
        'name': 'SNR Threshold',
        'retired': ''
      },
      '0x40101075': {
        'keyword': 'ImageScaleRepresentation',
        'vr': 'DS',
        'vm': '1',
        'name': 'Image Scale Representation',
        'retired': ''
      },
      '0x40101076': {
        'keyword': 'ReferencedPTOSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced PTO Sequence',
        'retired': ''
      },
      '0x40101077': {
        'keyword': 'ReferencedTDRInstanceSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Referenced TDR Instance Sequence',
        'retired': ''
      },
      '0x40101078': {
        'keyword': 'PTOLocationDescription',
        'vr': 'ST',
        'vm': '1',
        'name': 'PTO Location Description',
        'retired': ''
      },
      '0x40101079': {
        'keyword': 'AnomalyLocatorIndicatorSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Anomaly Locator Indicator Sequence',
        'retired': ''
      },
      '0x4010107A': {
        'keyword': 'AnomalyLocatorIndicator',
        'vr': 'FL',
        'vm': '3',
        'name': 'Anomaly Locator Indicator',
        'retired': ''
      },
      '0x4010107B': {
        'keyword': 'PTORegionSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'PTO Region Sequence',
        'retired': ''
      },
      '0x4010107C': {
        'keyword': 'InspectionSelectionCriteria',
        'vr': 'CS',
        'vm': '1',
        'name': 'Inspection Selection Criteria',
        'retired': ''
      },
      '0x4010107D': {
        'keyword': 'SecondaryInspectionMethodSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Secondary Inspection Method Sequence',
        'retired': ''
      },
      '0x4010107E': {
        'keyword': 'PRCSToRCSOrientation',
        'vr': 'DS',
        'vm': '6',
        'name': 'PRCS to RCS Orientation',
        'retired': ''
      },
      '0x4FFE0001': {
        'keyword': 'MACParametersSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'MAC Parameters Sequence',
        'retired': ''
      },
      '0x52009229': {
        'keyword': 'SharedFunctionalGroupsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Shared Functional Groups Sequence',
        'retired': ''
      },
      '0x52009230': {
        'keyword': 'PerFrameFunctionalGroupsSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Per-Frame Functional Groups Sequence',
        'retired': ''
      },
      '0x54000100': {
        'keyword': 'WaveformSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Waveform Sequence',
        'retired': ''
      },
      '0x54000110': {
        'keyword': 'ChannelMinimumValue',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Channel Minimum Value',
        'retired': ''
      },
      '0x54000112': {
        'keyword': 'ChannelMaximumValue',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Channel Maximum Value',
        'retired': ''
      },
      '0x54001004': {
        'keyword': 'WaveformBitsAllocated',
        'vr': 'US',
        'vm': '1',
        'name': 'Waveform Bits Allocated',
        'retired': ''
      },
      '0x54001006': {
        'keyword': 'WaveformSampleInterpretation',
        'vr': 'CS',
        'vm': '1',
        'name': 'Waveform Sample Interpretation',
        'retired': ''
      },
      '0x5400100A': {
        'keyword': 'WaveformPaddingValue',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Waveform Padding Value',
        'retired': ''
      },
      '0x54001010': {
        'keyword': 'WaveformData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Waveform Data',
        'retired': ''
      },
      '0x56000010': {
        'keyword': 'FirstOrderPhaseCorrectionAngle',
        'vr': 'OF',
        'vm': '1',
        'name': 'First Order Phase Correction Angle',
        'retired': ''
      },
      '0x56000020': {
        'keyword': 'SpectroscopyData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Spectroscopy Data',
        'retired': ''
      },
      '0x7FE00001': {
        'keyword': 'ExtendedOffsetTable',
        'vr': 'OV',
        'vm': '1',
        'name': 'Extended Offset Table',
        'retired': ''
      },
      '0x7FE00002': {
        'keyword': 'ExtendedOffsetTableLengths',
        'vr': 'OV',
        'vm': '1',
        'name': 'Extended Offset Table Lengths',
        'retired': ''
      },
      '0x7FE00003': {
        'keyword': 'EncapsulatedPixelDataValueTotalLength',
        'vr': 'UV',
        'vm': '1',
        'name': 'Encapsulated Pixel Data Value Total Length',
        'retired': ''
      },
      '0x7FE00008': {
        'keyword': 'FloatPixelData',
        'vr': 'OF',
        'vm': '1',
        'name': 'Float Pixel Data',
        'retired': ''
      },
      '0x7FE00009': {
        'keyword': 'DoubleFloatPixelData',
        'vr': 'OD',
        'vm': '1',
        'name': 'Double Float Pixel Data',
        'retired': ''
      },
      '0x7FE00010': {
        'keyword': 'PixelData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Pixel Data',
        'retired': ''
      },
      '0x7FE00020': {
        'keyword': 'CoefficientsSDVN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Coefficients SDVN',
        'retired': 'Retired'
      },
      '0x7FE00030': {
        'keyword': 'CoefficientsSDHN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Coefficients SDHN',
        'retired': 'Retired'
      },
      '0x7FE00040': {
        'keyword': 'CoefficientsSDDN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Coefficients SDDN',
        'retired': 'Retired'
      },
      '0xFFFAFFFA': {
        'keyword': 'DigitalSignaturesSequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Digital Signatures Sequence',
        'retired': ''
      },
      '0xFFFCFFFC': {
        'keyword': 'DataSetTrailingPadding',
        'vr': 'OB',
        'vm': '1',
        'name': 'Data Set Trailing Padding',
        'retired': ''
      },
      '0xFFFEE000': {
        'keyword': 'Item',
        'vr': 'NONE',
        'vm': '1',
        'name': 'Item',
        'retired': ''
      },
      '0xFFFEE00D': {
        'keyword': 'ItemDelimitationItem',
        'vr': 'NONE',
        'vm': '1',
        'name': 'Item Delimitation Item',
        'retired': ''
      },
      '0xFFFEE0DD': {
        'keyword': 'SequenceDelimitationItem',
        'vr': 'NONE',
        'vm': '1',
        'name': 'Sequence Delimitation Item',
        'retired': ''
      }
    },
    'mask': {
      '002031xx': {
        'keyword': 'SourceImageIDs',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Source Image IDs',
        'retired': 'Retired'
      },
      '002804x0': {
        'keyword': 'RowsForNthOrderCoefficients',
        'vr': 'US',
        'vm': '1',
        'name': 'Rows For Nth Order Coefficients',
        'retired': 'Retired'
      },
      '002804x1': {
        'keyword': 'ColumnsForNthOrderCoefficients',
        'vr': 'US',
        'vm': '1',
        'name': 'Columns For Nth Order Coefficients',
        'retired': 'Retired'
      },
      '002804x2': {
        'keyword': 'CoefficientCoding',
        'vr': 'LO',
        'vm': '1-n',
        'name': 'Coefficient Coding',
        'retired': 'Retired'
      },
      '002804x3': {
        'keyword': 'CoefficientCodingPointers',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Coefficient Coding Pointers',
        'retired': 'Retired'
      },
      '002808x0': {
        'keyword': 'CodeLabel',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Code Label',
        'retired': 'Retired'
      },
      '002808x2': {
        'keyword': 'NumberOfTables',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Tables',
        'retired': 'Retired'
      },
      '002808x3': {
        'keyword': 'CodeTableLocation',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Code Table Location',
        'retired': 'Retired'
      },
      '002808x4': {
        'keyword': 'BitsForCodeWord',
        'vr': 'US',
        'vm': '1',
        'name': 'Bits For Code Word',
        'retired': 'Retired'
      },
      '002808x8': {
        'keyword': 'ImageDataLocation',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Image Data Location',
        'retired': 'Retired'
      },
      '1000xxx0': {
        'keyword': 'EscapeTriplet',
        'vr': 'US',
        'vm': '3',
        'name': 'Escape Triplet',
        'retired': 'Retired'
      },
      '1000xxx1': {
        'keyword': 'RunLengthTriplet',
        'vr': 'US',
        'vm': '3',
        'name': 'Run Length Triplet',
        'retired': 'Retired'
      },
      '1000xxx2': {
        'keyword': 'HuffmanTableSize',
        'vr': 'US',
        'vm': '1',
        'name': 'Huffman Table Size',
        'retired': 'Retired'
      },
      '1000xxx3': {
        'keyword': 'HuffmanTableTriplet',
        'vr': 'US',
        'vm': '3',
        'name': 'Huffman Table Triplet',
        'retired': 'Retired'
      },
      '1000xxx4': {
        'keyword': 'ShiftTableSize',
        'vr': 'US',
        'vm': '1',
        'name': 'Shift Table Size',
        'retired': 'Retired'
      },
      '1000xxx5': {
        'keyword': 'ShiftTableTriplet',
        'vr': 'US',
        'vm': '3',
        'name': 'Shift Table Triplet',
        'retired': 'Retired'
      },
      '1010xxxx': {
        'keyword': 'ZonalMap',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Zonal Map',
        'retired': 'Retired'
      },
      '50xx0005': {
        'keyword': 'CurveDimensions',
        'vr': 'US',
        'vm': '1',
        'name': 'Curve Dimensions',
        'retired': 'Retired'
      },
      '50xx0010': {
        'keyword': 'NumberOfPoints',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Points',
        'retired': 'Retired'
      },
      '50xx0020': {
        'keyword': 'TypeOfData',
        'vr': 'CS',
        'vm': '1',
        'name': 'Type of Data',
        'retired': 'Retired'
      },
      '50xx0022': {
        'keyword': 'CurveDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Curve Description',
        'retired': 'Retired'
      },
      '50xx0030': {
        'keyword': 'AxisUnits',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Axis Units',
        'retired': 'Retired'
      },
      '50xx0040': {
        'keyword': 'AxisLabels',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Axis Labels',
        'retired': 'Retired'
      },
      '50xx0103': {
        'keyword': 'DataValueRepresentation',
        'vr': 'US',
        'vm': '1',
        'name': 'Data Value Representation',
        'retired': 'Retired'
      },
      '50xx0104': {
        'keyword': 'MinimumCoordinateValue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Minimum Coordinate Value',
        'retired': 'Retired'
      },
      '50xx0105': {
        'keyword': 'MaximumCoordinateValue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Maximum Coordinate Value',
        'retired': 'Retired'
      },
      '50xx0106': {
        'keyword': 'CurveRange',
        'vr': 'SH',
        'vm': '1-n',
        'name': 'Curve Range',
        'retired': 'Retired'
      },
      '50xx0110': {
        'keyword': 'CurveDataDescriptor',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Curve Data Descriptor',
        'retired': 'Retired'
      },
      '50xx0112': {
        'keyword': 'CoordinateStartValue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Coordinate Start Value',
        'retired': 'Retired'
      },
      '50xx0114': {
        'keyword': 'CoordinateStepValue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Coordinate Step Value',
        'retired': 'Retired'
      },
      '50xx1001': {
        'keyword': 'CurveActivationLayer',
        'vr': 'CS',
        'vm': '1',
        'name': 'Curve Activation Layer',
        'retired': 'Retired'
      },
      '50xx2000': {
        'keyword': 'AudioType',
        'vr': 'US',
        'vm': '1',
        'name': 'Audio Type',
        'retired': 'Retired'
      },
      '50xx2002': {
        'keyword': 'AudioSampleFormat',
        'vr': 'US',
        'vm': '1',
        'name': 'Audio Sample Format',
        'retired': 'Retired'
      },
      '50xx2004': {
        'keyword': 'NumberOfChannels',
        'vr': 'US',
        'vm': '1',
        'name': 'Number of Channels',
        'retired': 'Retired'
      },
      '50xx2006': {
        'keyword': 'NumberOfSamples',
        'vr': 'UL',
        'vm': '1',
        'name': 'Number of Samples',
        'retired': 'Retired'
      },
      '50xx2008': {
        'keyword': 'SampleRate',
        'vr': 'UL',
        'vm': '1',
        'name': 'Sample Rate',
        'retired': 'Retired'
      },
      '50xx200A': {
        'keyword': 'TotalTime',
        'vr': 'UL',
        'vm': '1',
        'name': 'Total Time',
        'retired': 'Retired'
      },
      '50xx200C': {
        'keyword': 'AudioSampleData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Audio Sample Data',
        'retired': 'Retired'
      },
      '50xx200E': {
        'keyword': 'AudioComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Audio Comments',
        'retired': 'Retired'
      },
      '50xx2500': {
        'keyword': 'CurveLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Curve Label',
        'retired': 'Retired'
      },
      '50xx2600': {
        'keyword': 'CurveReferencedOverlaySequence',
        'vr': 'SQ',
        'vm': '1',
        'name': 'Curve Referenced Overlay Sequence',
        'retired': 'Retired'
      },
      '50xx2610': {
        'keyword': 'CurveReferencedOverlayGroup',
        'vr': 'US',
        'vm': '1',
        'name': 'Curve Referenced Overlay Group',
        'retired': 'Retired'
      },
      '50xx3000': {
        'keyword': 'CurveData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Curve Data',
        'retired': 'Retired'
      },
      '60xx0010': {
        'keyword': 'OverlayRows',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Rows',
        'retired': ''
      },
      '60xx0011': {
        'keyword': 'OverlayColumns',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Columns',
        'retired': ''
      },
      '60xx0012': {
        'keyword': 'OverlayPlanes',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Planes',
        'retired': 'Retired'
      },
      '60xx0015': {
        'keyword': 'NumberOfFramesInOverlay',
        'vr': 'IS',
        'vm': '1',
        'name': 'Number of Frames in Overlay',
        'retired': ''
      },
      '60xx0022': {
        'keyword': 'OverlayDescription',
        'vr': 'LO',
        'vm': '1',
        'name': 'Overlay Description',
        'retired': ''
      },
      '60xx0040': {
        'keyword': 'OverlayType',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Type',
        'retired': ''
      },
      '60xx0045': {
        'keyword': 'OverlaySubtype',
        'vr': 'LO',
        'vm': '1',
        'name': 'Overlay Subtype',
        'retired': ''
      },
      '60xx0050': {
        'keyword': 'OverlayOrigin',
        'vr': 'SS',
        'vm': '2',
        'name': 'Overlay Origin',
        'retired': ''
      },
      '60xx0051': {
        'keyword': 'ImageFrameOrigin',
        'vr': 'US',
        'vm': '1',
        'name': 'Image Frame Origin',
        'retired': ''
      },
      '60xx0052': {
        'keyword': 'OverlayPlaneOrigin',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Plane Origin',
        'retired': 'Retired'
      },
      '60xx0060': {
        'keyword': 'OverlayCompressionCode',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Compression Code',
        'retired': 'Retired'
      },
      '60xx0061': {
        'keyword': 'OverlayCompressionOriginator',
        'vr': 'SH',
        'vm': '1',
        'name': 'Overlay Compression Originator',
        'retired': 'Retired'
      },
      '60xx0062': {
        'keyword': 'OverlayCompressionLabel',
        'vr': 'SH',
        'vm': '1',
        'name': 'Overlay Compression Label',
        'retired': 'Retired'
      },
      '60xx0063': {
        'keyword': 'OverlayCompressionDescription',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Compression Description',
        'retired': 'Retired'
      },
      '60xx0066': {
        'keyword': 'OverlayCompressionStepPointers',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Overlay Compression Step Pointers',
        'retired': 'Retired'
      },
      '60xx0068': {
        'keyword': 'OverlayRepeatInterval',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Repeat Interval',
        'retired': 'Retired'
      },
      '60xx0069': {
        'keyword': 'OverlayBitsGrouped',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Bits Grouped',
        'retired': 'Retired'
      },
      '60xx0100': {
        'keyword': 'OverlayBitsAllocated',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Bits Allocated',
        'retired': ''
      },
      '60xx0102': {
        'keyword': 'OverlayBitPosition',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Bit Position',
        'retired': ''
      },
      '60xx0110': {
        'keyword': 'OverlayFormat',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Format',
        'retired': 'Retired'
      },
      '60xx0200': {
        'keyword': 'OverlayLocation',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Location',
        'retired': 'Retired'
      },
      '60xx0800': {
        'keyword': 'OverlayCodeLabel',
        'vr': 'CS',
        'vm': '1-n',
        'name': 'Overlay Code Label',
        'retired': 'Retired'
      },
      '60xx0802': {
        'keyword': 'OverlayNumberOfTables',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Number of Tables',
        'retired': 'Retired'
      },
      '60xx0803': {
        'keyword': 'OverlayCodeTableLocation',
        'vr': 'AT',
        'vm': '1-n',
        'name': 'Overlay Code Table Location',
        'retired': 'Retired'
      },
      '60xx0804': {
        'keyword': 'OverlayBitsForCodeWord',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Bits For Code Word',
        'retired': 'Retired'
      },
      '60xx1001': {
        'keyword': 'OverlayActivationLayer',
        'vr': 'CS',
        'vm': '1',
        'name': 'Overlay Activation Layer',
        'retired': ''
      },
      '60xx1100': {
        'keyword': 'OverlayDescriptorGray',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Descriptor - Gray',
        'retired': 'Retired'
      },
      '60xx1101': {
        'keyword': 'OverlayDescriptorRed',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Descriptor - Red',
        'retired': 'Retired'
      },
      '60xx1102': {
        'keyword': 'OverlayDescriptorGreen',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Descriptor - Green',
        'retired': 'Retired'
      },
      '60xx1103': {
        'keyword': 'OverlayDescriptorBlue',
        'vr': 'US',
        'vm': '1',
        'name': 'Overlay Descriptor - Blue',
        'retired': 'Retired'
      },
      '60xx1200': {
        'keyword': 'OverlaysGray',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Overlays - Gray',
        'retired': 'Retired'
      },
      '60xx1201': {
        'keyword': 'OverlaysRed',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Overlays - Red',
        'retired': 'Retired'
      },
      '60xx1202': {
        'keyword': 'OverlaysGreen',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Overlays - Green',
        'retired': 'Retired'
      },
      '60xx1203': {
        'keyword': 'OverlaysBlue',
        'vr': 'US',
        'vm': '1-n',
        'name': 'Overlays - Blue',
        'retired': 'Retired'
      },
      '60xx1301': {
        'keyword': 'ROIArea',
        'vr': 'IS',
        'vm': '1',
        'name': 'ROI Area',
        'retired': ''
      },
      '60xx1302': {
        'keyword': 'ROIMean',
        'vr': 'DS',
        'vm': '1',
        'name': 'ROI Mean',
        'retired': ''
      },
      '60xx1303': {
        'keyword': 'ROIStandardDeviation',
        'vr': 'DS',
        'vm': '1',
        'name': 'ROI Standard Deviation',
        'retired': ''
      },
      '60xx1500': {
        'keyword': 'OverlayLabel',
        'vr': 'LO',
        'vm': '1',
        'name': 'Overlay Label',
        'retired': ''
      },
      '60xx3000': {
        'keyword': 'OverlayData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Overlay Data',
        'retired': ''
      },
      '60xx4000': {
        'keyword': 'OverlayComments',
        'vr': 'LT',
        'vm': '1',
        'name': 'Overlay Comments',
        'retired': 'Retired'
      },
      '7Fxx0010': {
        'keyword': 'VariablePixelData',
        'vr': 'OB or OW',
        'vm': '1',
        'name': 'Variable Pixel Data',
        'retired': 'Retired'
      },
      '7Fxx0011': {
        'keyword': 'VariableNextDataGroup',
        'vr': 'US',
        'vm': '1',
        'name': 'Variable Next Data Group',
        'retired': 'Retired'
      },
      '7Fxx0020': {
        'keyword': 'VariableCoefficientsSDVN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Variable Coefficients SDVN',
        'retired': 'Retired'
      },
      '7Fxx0030': {
        'keyword': 'VariableCoefficientsSDHN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Variable Coefficients SDHN',
        'retired': 'Retired'
      },
      '7Fxx0040': {
        'keyword': 'VariableCoefficientsSDDN',
        'vr': 'OW',
        'vm': '1',
        'name': 'Variable Coefficients SDDN',
        'retired': 'Retired'
      }
    }
  }
};