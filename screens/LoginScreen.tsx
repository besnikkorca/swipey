import React, { useReducer } from "react";
import { NavigationProp } from "@react-navigation/native";
import { Box, Input, KeyboardAvoidingView, View } from "native-base";
import Button from "../components/Form/Button";
import Lottie from "lottie-react-native";
import {
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
} from "react-native";
import SessionManager from "../services/SessionManager";
import { ScreenNames } from "../navigation/types";
interface Props {
  navigation: NavigationProp<any>;
}

const initialFormValue = {
  email: "besnik.korca1@gmail.com",
  password: "testtest",
};

function userFormReducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default function ({ navigation }: Props) {
  const [{ email, password }, dispatch] = useReducer(
    userFormReducer,
    initialFormValue
  );

  const handleChange = (key: string) => (payload: string) =>
    dispatch({ type: key, payload });

  const handleLogin = () => SessionManager.login(email, password);
  const handleLoginAnonymous = () => SessionManager.loginAnonymous();
  const handleForgotPassword = () => window.alert("Not implemented yet!");
  const handleSignUp = () => navigation.navigate(ScreenNames.signUp);
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
            placeholder="Email"
            w="75%"
            maxWidth="300px"
            value={email}
            onChangeText={handleChange("email")}
          />
          <Input
            mx="3"
            mb="3"
            placeholder="Password"
            type="password"
            w="75%"
            maxWidth="300px"
            value={password}
            onChangeText={handleChange("password")}
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
          <Button onPress={handleSignUp} variant="link">
            No account! Sign up?
          </Button>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
