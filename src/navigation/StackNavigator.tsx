import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./types";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import UserContext from "../contexts/UserContext";
import { Box } from "native-base";

const Stack = createNativeStackNavigator();

const options = { headerShown: false };

type Props = {};

export default function ({}: Props) {
  const { user } = useContext(UserContext);
  return (
    <Box flex={1} safeAreaBottom>
      <Stack.Navigator>
        {!!user ? (
          <>
            <Stack.Screen
              options={options}
              name={ScreenNames.home}
              component={HomeScreen}
            />
            <Stack.Screen
              options={options}
              name={ScreenNames.about}
              component={AboutScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={options}
              name={ScreenNames.login}
              component={LoginScreen}
            ></Stack.Screen>
            <Stack.Screen
              options={options}
              name={ScreenNames.signUp}
              component={SignUpScreen}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </Box>
  );
}
