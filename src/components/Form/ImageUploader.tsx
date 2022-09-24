import React from 'react'
import ImagePicker from './ImagePicker'
import { CloudDirs } from 'types/global'

import { SharedProps } from './types'
import useUploadFile from 'hooks/files/useUploadFile'

type Props = {
  cloudDir?: CloudDirs
} & SharedProps

export default function ImageUploader({
  cloudDir = CloudDirs.images,
  text,
}: Props) {
  const { handleFileUpload, isLoading, loadPercentage } =
    useUploadFile(cloudDir)

  return (
    <ImagePicker
      onPick={handleFileUpload}
      isLoading={isLoading}
      loadPercentage={loadPercentage}
      text={text}
    />
  )
}
