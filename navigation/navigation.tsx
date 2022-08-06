import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./types";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const options = { headerShown: false };

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.login}
          component={LoginScreen}
        ></Stack.Screen>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
