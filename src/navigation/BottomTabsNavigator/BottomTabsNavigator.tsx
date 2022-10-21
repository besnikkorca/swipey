import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SwipeCompaniesScreen from 'screens/SwipeCompaniesScreen'
import SwipeEmployeesScreen from 'screens/recruiter/SwipeEmployeesScreen'
import LikedByCompaniesScreen from 'screens/LikedByCompaniesScreen'
import MatchedCompaniesScreen from 'screens/MatchedCompaniesScreen'
import { TabsScreens } from 'navigation/types'
import useUserData from 'hooks/useUserData'

const Tab = createBottomTabNavigator()

export default function BottomTabsNavigator() {
  const { isRecruiter } = useUserData()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isRecruiter ? (
        <>
          <Tab.Screen
            name={TabsScreens.swipeEmployees}
            component={SwipeEmployeesScreen}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name={TabsScreens.swipeCompanies}
            component={SwipeCompaniesScreen}
          />
          <Tab.Screen
            name={TabsScreens.likedByCompanies}
            component={LikedByCompaniesScreen}
          />
          <Tab.Screen
            name={TabsScreens.matchedCompanies}
            component={MatchedCompaniesScreen}
          />
        </>
      )}
    </Tab.Navigator>
  )
}
