import { useContext } from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { AuthScreens, AppScreens, SignUpScreens } from './types'

import HomeScreen from 'screens/HomeScreen'
import AboutScreen from 'screens/AboutScreen'
import InitialScreen from 'screens/InitialScreen'
import LoginScreen from 'screens/LoginScreen'
import SignUpEmailScreen from 'screens/signup/SignUpEmailScreen'
import SignUpFirstNameScreen from 'screens/signup/SignUpFirstNameScreen'
import SignUpLastNameScreen from 'screens/signup/SignUpLastNameScreen'
import SignUpCVScreen from 'screens/signup/SignUpCVScreen'
import SignUpPasswordScreen from 'screens/signup/SignUpPasswordScreen'
import SignUpPerformScreen from 'screens/signup/SignUpPerformScreen'
import SignUpRecruiterScreen from 'screens/signup/SignUpRecruiterScreen'
import RulesScreen from 'screens/signup/RulesScreen'
import UserContext from 'contexts/UserContext'
import SignUpHeader from 'navigation/SignUpHeader'
import Header from 'navigation/Header'

const Stack = createNativeStackNavigator()

const options: NativeStackNavigationOptions = {
  headerShown: false,
}

export default function StackNavigator() {
  const { user } = useContext(UserContext)
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={options}>
        {user ? (
          <Stack.Group
            screenOptions={
              {
                // headerShown: true,
                // header: Header,
              }
            }
          >
            <Stack.Screen name={AppScreens.home} component={HomeScreen} />
            <Stack.Screen name={AppScreens.about} component={AboutScreen} />
          </Stack.Group>
        ) : (
          <>
            <Stack.Screen
              name={AuthScreens.initial}
              component={InitialScreen}
            />
            <Stack.Screen name={AuthScreens.login} component={LoginScreen} />
            <Stack.Screen name={SignUpScreens.rules} component={RulesScreen} />
            <Stack.Group
              screenOptions={{
                headerShown: true,
                header: SignUpHeader,
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: true,
                  animation: 'slide_from_bottom',
                  header: Header,
                }}
                name={SignUpScreens.signUpEmail}
                component={SignUpEmailScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpFirstName}
                component={SignUpFirstNameScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpLastName}
                component={SignUpLastNameScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpCV}
                component={SignUpCVScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpPassword}
                component={SignUpPasswordScreen}
              />
              <Stack.Screen
                name={SignUpScreens.signUpPerform}
                component={SignUpPerformScreen}
              />
            </Stack.Group>
            <Stack.Screen
              name={SignUpScreens.signUpRecruiter}
              component={SignUpRecruiterScreen}
            />
          </>
        )}
      </Stack.Group>
    </Stack.Navigator>
  )
}
