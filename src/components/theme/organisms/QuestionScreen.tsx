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
import useNavigation from "hooks/useNavigation";
import { ScreenNames, SignUpScreens } from "navigation/types";

type Props = {
  nextScreen: ScreenNames;
  titleText: string;
  ctaText?: string;
  placeholder: string;
};

export default function ({
  nextScreen,
  titleText,
  ctaText = "continue",
  placeholder,
}: Props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleOnContinue = () => navigation.navigate(nextScreen);

  return (
    <ScreenWrapper
      safeArea={false}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="stretch" mx="10">
        <Box flex={1}>
          <Title>{titleText}</Title>
          <InputUnderline
            autoCapitalize="none"
            autoFocus
            placeholder={placeholder}
          />
        </Box>
        <KeyboardAvoidingView
          keyboardVerticalOffset={KeyboardVerticalOffset + insets.bottom}
          flex={1}
          justifyContent="flex-end"
          alignSelf="stretch"
        >
          <ContinueButton onPress={handleOnContinue}>{ctaText}</ContinueButton>
        </KeyboardAvoidingView>
      </Box>
    </ScreenWrapper>
  );
}
