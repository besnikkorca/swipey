import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { Box } from "native-base";
import { themeModeColorsBAW } from "_constants/theme";
import ScreenWrapper from "../ScreenWrapper";
import Text from "components/theme/atoms/text/Text";
import Title from "components/theme/atoms/text/Title";
import InputUnderline from "components/Form/inputs/InputUnderline";
import ContinueButton from "components/Form/buttons/ContinueButton";
import KeyboardAvoidingView from "components/KeyboardAvoidingView";
import { KeyboardVerticalOffset } from "_constants/header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useNavigation from "hooks/useNavigation";
import { AuthScreens, SignUpScreens } from "navigation/types";

export default function () {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleOnContinue = () => navigation.navigate(SignUpScreens.rules);

  return (
    <ScreenWrapper
      safeArea={false}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="flex-start" mx="10">
        <Box flex={1}>
          <Title>What's your email ?</Title>
          <Text color="gray.400" fontSize="md" textAlign="left" mb="5">
            Increase your hiring chances, verify your email.
          </Text>
          <InputUnderline
            autoCapitalize="none"
            autoFocus
            placeholder="Enter email"
          />
        </Box>
        <KeyboardAvoidingView
          keyboardVerticalOffset={KeyboardVerticalOffset + insets.bottom}
          flex={1}
          justifyContent="flex-end"
          alignSelf="stretch"
        >
          <ContinueButton onPress={handleOnContinue}>continue</ContinueButton>
        </KeyboardAvoidingView>
      </Box>
    </ScreenWrapper>
  );
}
