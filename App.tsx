import React, { useState, useEffect } from "react";
import DrawerNavigator from "./navigation/DrawerNavigator/DrawerNavigator";
import StylingProvider from "./components/StylingProvider";
import UserProvider from "./components/contexts/UserContext/UserProvider";
import { User } from "./src/types/user";
import auth from "@react-native-firebase/auth";
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
