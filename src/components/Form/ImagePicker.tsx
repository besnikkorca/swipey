import React, { useEffect, useState } from 'react'
import * as EImagePicker from 'expo-image-picker'
import { Box, Image, Progress, View } from 'native-base'

import Button from 'components/Form/Button'
import { SharedProps } from './types'
import getImageAlt from 'utils/file/getImageAlt'

type Props = {
  onPick?: (filePath: string) => void
  isLoading?: boolean
  loadPercentage?: number
} & SharedProps

export default function ImagePicker({
  loadPercentage = 0,
  isLoading = false,
  text = 'Pick Image',
  onPick,
}: Props) {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await EImagePicker.launchImageLibraryAsync({
      mediaTypes: EImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  useEffect(() => {
    if (onPick && image) onPick(image)
  }, [image])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button isLoading={isLoading} onPress={pickImage}>
        {text}
      </Button>
      {image && (
        <>
          <Box flex={1}>
            <Image
              source={{ uri: image }}
              alt={getImageAlt(image)}
              style={{ width: 200, height: 200 }}
            />
            {loadPercentage !== 0 && (
              <Progress my="2" colorScheme="emerald" value={loadPercentage} />
            )}
          </Box>
        </>
      )}
    </View>
  )
}
