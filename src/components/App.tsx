import React from "react";
import DrawerNavigator from "navigation/index";
import StylingProvider from "./StylingProvider";
import UserProvider from "./contextProviders/UserProvider";
import "react-native-gesture-handler";

export default function App() {
  return (
    <UserProvider>
      <StylingProvider>
        <DrawerNavigator />
      </StylingProvider>
    </UserProvider>
  );
}
