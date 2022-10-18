import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'
import useUserData from '../hooks/useUserData'
import AppDrawer from './DrawerNavigator/AppDrawer'

export default function Navigation() {
  const { isLoggedIn } = useUserData()

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppDrawer /> : <StackNavigator />}
    </NavigationContainer>
  )
}
