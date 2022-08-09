import React from "react";
import { Box } from "native-base";

import DocumentPicker from "components/Form/DocumentPicker";
import { CloudDirs } from "types/global";
import useUploadFile from "hooks/files/useUploadFile";

interface Props {
  cloudDir?: CloudDirs;
  text?: string;
}

export default function ({
  cloudDir = CloudDirs.documents,
  text,
}: Props): JSX.Element {
  const { handleFileUpload, isLoading, loadPercentage } =
    useUploadFile(cloudDir);

  return (
    <Box>
      <DocumentPicker
        text={text}
        onPick={handleFileUpload}
        isLoading={isLoading}
        loadPercentage={loadPercentage}
      />
    </Box>
  );
}
