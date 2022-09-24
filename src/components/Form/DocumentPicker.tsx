import * as EDocumentPicker from 'expo-document-picker'

import Progress from 'components/loading/Progress'
import PrimaryButton from './buttons/PrimaryButton'

interface Props {
  text?: string
  onPick?: (documentPath: string) => void
  isLoading?: boolean
  loadPercentage?: number
}

export default function DocumentPicker({
  loadPercentage = 0,
  isLoading = false,
  text = 'Pick document',
  onPick,
}: Props) {
  const handlePickDocument = async () => {
    const res = await EDocumentPicker.getDocumentAsync()
    if (res.type === 'success') {
      if (onPick) onPick(res.uri)
    }
  }

  return (
    <>
      <PrimaryButton
        isLoading={isLoading}
        onPress={handlePickDocument}
        color="black"
      >
        {text}
      </PrimaryButton>
      <Progress
        isVisible={loadPercentage !== 0}
        loadPercentage={loadPercentage}
      />
    </>
  )
}
