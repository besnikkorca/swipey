import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import StackNavigator from "./StackNavigator";
import useUserData from "../hooks/useUserData";
import AppDrawer from "./DrawerNavigator/AppDrawer";

export default function () {
  const { user } = useUserData();
  return (
    <NavigationContainer>
      {user ? (
        <AppDrawer />
      ) : (
        <Box safeArea flex={1}>
          <StackNavigator />
        </Box>
      )}
    </NavigationContainer>
  );
}
