import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwipeCompaniesScreen from 'screens/SwipeCompaniesScreen'
import LikedByCompaniesScreen from 'screens/LikedByCompaniesScreen'
import MatchedCompaniesScreen from 'screens/MatchedCompaniesScreen'
import { TabsScreens } from 'navigation/types'

const Tab = createBottomTabNavigator()

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={TabsScreens.swipeCompanies}
        component={SwipeCompaniesScreen}
      ></Tab.Screen>
      <Tab.Screen
        name={TabsScreens.likedByCompanies}
        component={LikedByCompaniesScreen}
      ></Tab.Screen>
      <Tab.Screen
        name={TabsScreens.matchedCompanies}
        component={MatchedCompaniesScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}
