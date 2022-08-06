import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { Box, Input, KeyboardAvoidingView, View } from "native-base";
import Button from "../components/Form/Button";
import Lottie from "lottie-react-native";
import { Platform } from "react-native";

interface Props {
  navigation: NavigationProp<any>;
}

export default function ({}: Props) {
  const handleLogin = () => window.alert("logged in");
  const handleForgotPassword = () => window.alert("forgot password");
  const handleLoginAnonymous = () => window.alert("anonymous login");
  const handleSignup = () => window.alert("sign up");
  return (
    <KeyboardAvoidingView
      h={{
        base: "400px",
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box flex={1}>
        <Box flex={1}>
          <Lottie
            source={require("../assets/animations/lottie/logo.json")}
            autoPlay
          />
        </Box>
        <Box flex={2} alignItems={"center"} justifyContent="flex-start">
          <Input
            mx="3"
            mb="3"
            placeholder="Username"
            w="75%"
            maxWidth="300px"
          />
          <Input
            mx="3"
            mb="3"
            placeholder="Password"
            type="password"
            w="75%"
            maxWidth="300px"
          />
          <Button onPress={handleLogin} size="lg">
            Login
          </Button>
          <Button onPress={handleLoginAnonymous} variant="link">
            Sign in anonymously
          </Button>
          <Button onPress={handleForgotPassword} variant="link">
            Forgot your password?
          </Button>
          <Button onPress={handleSignup} variant="link">
            No account! Sign up?
          </Button>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
