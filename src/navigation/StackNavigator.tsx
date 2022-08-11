import { useContext } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { AuthScreens, AppScreens, SignUpScreens } from "./types";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import InitialScreen from "../screens/InitialScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpEmailScreen from "../screens/signup/SignUpEmailScreen";
import SignUpFirstNameScreen from "../screens/signup/SignUpFirstNameScreen";
import SignUpLastNameScreen from "../screens/signup/SignUpLastNameScreen";
import SignUpRecruiterScreen from "../screens/signup/SignUpRecruiterScreen";
import RulesScreen from "../screens/signup/RulesScreen";
import UserContext from "../contexts/UserContext";
import Header from "navigation/Header";
import { Box } from "native-base";
import KeyboardAvoidingView from "components/KeyboardAvoidingView";
import { themeModeColors } from "_constants/theme";
import useNavigation from "hooks/useNavigation";

const Stack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

type Props = {};

export default function ({}: Props) {
  const { user } = useContext(UserContext);
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={options}>
        {!!user ? (
          <>
            <Stack.Screen name={AppScreens.home} component={HomeScreen} />
            <Stack.Screen name={AppScreens.about} component={AboutScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name={AuthScreens.initial}
              component={InitialScreen}
            />
            <Stack.Screen name={AuthScreens.login} component={LoginScreen} />
            <Stack.Screen name={SignUpScreens.rules} component={RulesScreen} />
            <Stack.Group
              screenOptions={{
                headerShown: true,
                header: Header,
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: true,
                  animation: "slide_from_bottom",
                  header: Header,
                }}
                name={SignUpScreens.signUpEmail}
                component={SignUpEmailScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpFirstName}
                component={SignUpFirstNameScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpLastName}
                component={SignUpLastNameScreen}
              />
            </Stack.Group>
            <Stack.Screen
              name={SignUpScreens.signUpRecruiter}
              component={SignUpRecruiterScreen}
            />
          </>
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
}
