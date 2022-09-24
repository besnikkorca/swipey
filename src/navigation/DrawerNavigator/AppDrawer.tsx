import React from 'react'
import TabsNavigator from '../BottomTabsNavigator/BottomTabsNavigator'
import DrawerContent from './DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from 'navigation/Header'

const Drawer = createDrawerNavigator()

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: Header,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="App" component={TabsNavigator} />
    </Drawer.Navigator>
  )
}
