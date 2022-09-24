import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'
import useUserData from '../hooks/useUserData'
import AppDrawer from './DrawerNavigator/AppDrawer'

export default function Navigation() {
  const { user } = useUserData()

  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <StackNavigator />}
    </NavigationContainer>
  )
}
