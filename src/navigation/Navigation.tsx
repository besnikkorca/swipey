import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import StackNavigator from "./StackNavigator";
import useUserData from "../hooks/useUserData";
import AppDrawer from "./DrawerNavigator/AppDrawer";
import { themeModeColors } from "_constants/theme";
import useNavigation from "hooks/useNavigation";

export default function () {
  const { user } = useUserData();

  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <StackNavigator />}
    </NavigationContainer>
  );
}
