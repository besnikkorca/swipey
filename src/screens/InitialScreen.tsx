import { Box, Icon } from "native-base";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import BrandIconUncolored from "components/theme/atoms/icons/BrandIconUncolored";
import PrimaryButton from "components/Form/buttons/PrimaryButton";
import SecondaryButton from "components/Form/buttons/SecondaryButton";
import LinkButton from "components/Form/buttons/LinkButton";
import Text from "components/theme/atoms/text/Text";
import Link from "components/theme/atoms/text/Link";
import { AuthScreens, SignUpScreens } from "navigation/types";
import useNavigation from "hooks/useNavigation";
import { AppLinks } from "_constants/links";
import { Platform } from "react-native";
import ScreenWrapper from "screens/ScreenWrapper";

export default function () {
  const navigation = useNavigation();
  const [showRoles, setShowRoles] = useState(true);
  const handleShowRoles = () => setShowRoles(!showRoles);
  // TODO: Implement signIn
  const handleSignIn = () => alert("Implement sign in");
  // TODO: Implement signIn
  const handleTroubleSigningIn = () => alert("Implement trouble signing in");

  const handleSignUpUser = () => navigation.navigate(SignUpScreens.signUpEmail);

  const handleSignUpRecruiter = () =>
    navigation.navigate(SignUpScreens.signUpRecruiter);
  return (
    <ScreenWrapper>
      <Box flex={1} px="5">
        {showRoles && (
          <Icon
            onPress={handleShowRoles}
            size="xl"
            fontWeight={700}
            as={MaterialIcons}
            name={Platform.OS === "ios" ? "arrow-back-ios" : "arrow-back"}
            color="white"
          />
        )}
      </Box>
      <Box flex={2} px="10">
        <Box flex={1}>
          <BrandIconUncolored />
        </Box>
        <Box flex={1} justifyContent="flex-end">
          {showRoles ? (
            <>
              <Box flex={1}>
                <Text mb="3">
                  You're looking to recruit people to work on projects.
                </Text>
                <SecondaryButton onPress={handleSignUpRecruiter}>
                  Sign up as recruiter
                </SecondaryButton>
              </Box>
              <Box flex={1}>
                <Text mb="3">You're looking for a job or your next gig.</Text>
                <SecondaryButton onPress={handleSignUpUser}>
                  Sign up to find jobs
                </SecondaryButton>
              </Box>
            </>
          ) : (
            <>
              <Text my="3">
                By tapping Create Account or Sign In, you agree to our&nbsp;
                <Link isExternal href={AppLinks.terms}>
                  terms
                </Link>
                . Learn how we process your data in our{" "}
                <Link isExternal href={AppLinks.privacy}>
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link isExternal href={AppLinks.cookies}>
                  Cookies Policy
                </Link>
              </Text>
              <PrimaryButton onPress={handleShowRoles}>
                Create account
              </PrimaryButton>
              <SecondaryButton onPress={handleSignIn}>Sign in</SecondaryButton>
              <LinkButton variant="link" onPress={handleTroubleSigningIn}>
                Trouble Signing in?
              </LinkButton>
            </>
          )}
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
