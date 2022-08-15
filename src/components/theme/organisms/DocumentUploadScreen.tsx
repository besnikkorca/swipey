import React from "react";
import { Box } from "native-base";
import { themeModeColorsBAW } from "_constants/theme";
import ScreenWrapper from "screens/ScreenWrapper";
import Title from "components/theme/atoms/text/Title";
import InputUnderline from "components/Form/inputs/InputUnderline";
import ContinueButton from "components/Form/buttons/ContinueButton";
import KeyboardAvoidingView from "components/KeyboardAvoidingView";
import { KeyboardVerticalOffset } from "_constants/header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../atoms/text/Text";
import { FormInputProps } from "types/form";
import DocumentUploader from "components/Form/DocumentUploader";
import PrimaryButton from "components/Form/buttons/PrimaryButton";
import { GenericVoidFunc } from "types/global";

type Props = {
  titleText: string;
  subText?: string;
  ctaText?: string;
  error?: string | undefined;
  buttonText?: string;
  onUpload?: GenericVoidFunc;
} & FormInputProps;

export default function ({
  titleText,
  subText,
  fieldName,
  control,
  rules,
  error,
  buttonText,
  onUpload,
}: Props) {
  return (
    <ScreenWrapper
      safeArea={false}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="stretch" mx="10">
        <Box flex={1}>
          <Title>{titleText}</Title>
          {subText && (
            <Text color="gray.400" fontSize="md" textAlign="left" mb="5" mt="2">
              {subText}
            </Text>
          )}
          <DocumentUploader
            onUpload={onUpload}
            text={buttonText}
            rules={rules}
            fieldName={fieldName}
            control={control}
            error={error}
          />
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
