import React, { useReducer } from 'react'
import { Box, Input } from 'native-base'
import Button from '../../components/Form/Button'
import Lottie from 'lottie-react-native'
import SessionManager from '../../services/SessionManager'
import { themeModeColors } from '_constants/theme'

const initialFormValue = {
  email: `besnik.korca${Math.round(Math.random() * 100)}@gmail.com`,
  password: 'testtest1',
}

function userFormReducer(state: any, action: any) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    default:
      return state
  }
}

export default function SignUpRecruiterScreen() {
  const [{ email, password }, dispatch] = useReducer(
    userFormReducer,
    initialFormValue
  )

  const handleChange = (key: string) => (payload: string) =>
    dispatch({ type: key, payload })

  const handleSignUp = () => SessionManager.signUp(email, password)
  return (
    <Box flex={1} {...themeModeColors}>
      <Box flex={1}>
        <Lottie
          source={require('assets/animations/lottie/logo.json')}
          autoPlay
        />
      </Box>
      <Box flex={2} alignItems={'center'} justifyContent="flex-start">
        <Input
          mx="3"
          mb="3"
          placeholder="Email"
          w="75%"
          maxWidth="300px"
          value={email}
          onChangeText={handleChange('email')}
        />
        <Input
          mx="3"
          mb="3"
          placeholder="Password"
          type="password"
          w="75%"
          maxWidth="300px"
          value={password}
          onChangeText={handleChange('password')}
        />
        <Button onPress={handleSignUp} size="lg">
          CreateAccount
        </Button>
      </Box>
    </Box>
  )
}
