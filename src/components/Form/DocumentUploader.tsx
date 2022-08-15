import React from "react";
import { Box, FormControl } from "native-base";
import { Controller } from "react-hook-form";

import DocumentPicker from "components/Form/DocumentPicker";
import { CloudDirs, GenericVoidFunc } from "types/global";
import useUploadFile from "hooks/files/useUploadFile";
import { FormInputProps } from "types/form";
import ContinueButton from "./buttons/ContinueButton";

type Props = {
  cloudDir?: CloudDirs;
  text?: string;
  onUpload?: GenericVoidFunc;
} & FormInputProps;

export default function ({
  cloudDir = CloudDirs.documents,
  text,
  control,
  fieldName,
  rules,
  onUpload,
}: Props): JSX.Element {
  const { handleFileUpload, isLoading, loadPercentage } =
    useUploadFile(cloudDir);

  return (
    <FormControl>
      <Controller
        control={control}
        name={fieldName}
        rules={rules}
        render={({ field: { onChange } }) => (
          <DocumentPicker
            text={text}
            onPick={handleFileUpload(onChange, onUpload)}
            isLoading={isLoading}
            loadPercentage={loadPercentage}
          />
        )}
      />
    </FormControl>
  );
}
