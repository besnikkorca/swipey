import * as DocumentPicker from "expo-document-picker";
import { Box } from "native-base";

import Progress from "components/loading/Progress";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

interface Props {
  text?: string;
  onPick?: (documentPath: string) => void;
  isLoading?: boolean;
  loadPercentage?: number;
}

export default function ({
  loadPercentage = 0,
  isLoading = false,
  text = "Pick document",
  onPick,
}: Props) {
  const handlePickDocument = async () => {
    const res = await DocumentPicker.getDocumentAsync();
    if (res.type === "success") {
      if (onPick) onPick(res.uri);
    }
  };

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
  );
}
