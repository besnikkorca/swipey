import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { AuthScreens, SignUpScreens } from './types'

import InitialScreen from 'screens/InitialScreen'
import LoginScreen from 'screens/signup/LoginScreen/LoginScreen'
import SignUpEmailScreen from 'screens/signup/SignUpEmailScreen'
import SignUpFirstNameScreen from 'screens/signup/SignUpFirstNameScreen'
import SignUpLastNameScreen from 'screens/signup/SignUpLastNameScreen'
import SignUpCompanyNameScreen from 'screens/signup/SignUpCompanyNameScreen'
import SignUpCVScreen from 'screens/signup/SignUpCVScreen'
import SignUpPasswordScreen from 'screens/signup/SignUpPasswordScreen'
import SignUpPerformScreen from 'screens/signup/SignUpPerformScreen'
import RulesScreen from 'screens/signup/RulesScreen'
import SignUpHeader from 'navigation/SignUpHeader'
import Header from 'navigation/Header'
import useUserData from 'hooks/useUserData'

const Stack = createNativeStackNavigator()

const options: NativeStackNavigationOptions = {
  headerShown: false,
}

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={options}>
        <>
          <Stack.Screen name={AuthScreens.initial} component={InitialScreen} />
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
              name={SignUpScreens.signUpCompanyName}
              component={SignUpCompanyNameScreen}
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
        </>
      </Stack.Group>
    </Stack.Navigator>
  )
}
