import React from "react";
import StackNavigator from "../StackNavigator";
import DrawerContent from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="App" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
