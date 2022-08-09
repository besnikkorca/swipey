import * as DocumentPicker from "expo-document-picker";
import { Box } from "native-base";

import Progress from "components/loading/Progress";
import Button from "components/Form/Button";

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
    console.log("res !!!!! ", res);
    if (res.type === "success") {
      if (onPick) onPick(res.uri);
    }
  };

  return (
    <Box flex={1}>
      <Button onPress={handlePickDocument}>{text}</Button>
      <Progress
        isVisible={loadPercentage !== 0}
        loadPercentage={loadPercentage}
      />
    </Box>
  );
}
