import React from 'react'
import TabsNavigator from '../BottomTabsNavigator/BottomTabsNavigator'
import DrawerContent from './DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from 'navigation/Header'
import { AppScreens } from 'navigation/types'
import AddJobScreen from 'screens/recruiter/AddJobScreen'

const Drawer = createDrawerNavigator()

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: Header,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={AppScreens.addJobPosting} component={AddJobScreen} />
      <Drawer.Screen name={AppScreens.app} component={TabsNavigator} />
    </Drawer.Navigator>
  )
}
