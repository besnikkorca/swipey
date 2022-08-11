import React from "react";
import { Box } from "native-base";
import { themeModeColorsBAW } from "_constants/theme";
import ScreenWrapper from "../ScreenWrapper";
import Title from "components/theme/atoms/text/Title";
import Subtitle from "components/theme/atoms/text/Subtitle";
import ContinueButton from "components/Form/buttons/ContinueButton";
import KeyboardAvoidingView from "components/KeyboardAvoidingView";
import { KeyboardVerticalOffset } from "_constants/header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BrandIconSimpleSmall from "components/theme/atoms/icons/BrandIconSimpleSmall";
import TextArticle from "components/theme/molecules/TextArticle";
import useNavigation from "hooks/useNavigation";
import { SignUpScreens } from "navigation/types";

export default function () {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleOnContinue = () =>
    navigation.navigate(SignUpScreens.signUpFirstName);
  return (
    <ScreenWrapper
      safeArea={true}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="flex-start" mx="10">
        <Box flex={1} mt="10">
          <BrandIconSimpleSmall />
          <Box flex={1}>
            <Title fontSize="2xl" textAlign="center" my="4">
              Welcome to Swipey.
            </Title>
            <Subtitle color="gray.400" fontSize="md" textAlign="center" mb="5">
              Please behave nice, besides feeling better for yourself you'll
              have a better chance at getting what you want.
            </Subtitle>
            <TextArticle
              title="Veritas"
              content="Make sure the info in your CV and bio is correct. Be yourself!"
            />
            <TextArticle
              title="Stay professional"
              content="A true professional never loses their composure even if the counterpart does."
            />
            <TextArticle title="No tolerance" content="Report bad behavior." />
          </Box>
        </Box>
        <KeyboardAvoidingView
          keyboardVerticalOffset={KeyboardVerticalOffset + insets.bottom}
          flex={1}
          justifyContent="flex-end"
          alignSelf="stretch"
        >
          <ContinueButton isValid={true} onPress={handleOnContinue}>
            continue
          </ContinueButton>
        </KeyboardAvoidingView>
      </Box>
    </ScreenWrapper>
  );
}
