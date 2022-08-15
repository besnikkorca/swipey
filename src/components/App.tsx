import React from "react";
import DrawerNavigator from "navigation/index";
import StylingProvider from "./StylingProvider";
import UserProvider from "./contextProviders/UserProvider";
import SignUpProvider from "./contextProviders/SignUpProvider";
import "react-native-gesture-handler";

export default function App() {
  return (
    <UserProvider>
      <SignUpProvider>
        <StylingProvider>
          <DrawerNavigator />
        </StylingProvider>
      </SignUpProvider>
    </UserProvider>
  );
}
