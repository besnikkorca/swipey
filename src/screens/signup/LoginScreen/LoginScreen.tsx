import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { Icon, Box } from 'native-base'
import { Platform } from 'react-native'
import SessionManager from 'services/SessionManager'

import { SignUpScreens } from 'navigation/types'
import useNavigation from 'hooks/useNavigation'
import ScreenWrapper from '../../ScreenWrapper'

import { MaterialIcons } from '@expo/vector-icons'

import BrandIconUncolored from 'components/theme/atoms/icons/BrandIconUncolored'
import PrimaryButton from 'components/Form/buttons/PrimaryButton'
import LinkButton from 'components/Form/buttons/LinkButton'
import Text from 'components/theme/atoms/text/Text'
import Link from 'components/theme/atoms/text/Link'
import { AppLinks } from '_constants/links'
import InputUnderline from 'components/Form/inputs/InputUnderline'
import useLoginForm from 'hooks/forms/useLoginForm'
import rules from './rules.json'
import { FieldValues } from 'react-hook-form'

interface Props {
  navigation: NavigationProp<any>
}

export default function LoginScreen() {
  const navigation = useNavigation()

  const { control, handleSubmit, formState } = useLoginForm()
  const error = (formState.errors?.companyName?.message || '') as string

  const handleLogin = ({ email, password }: FieldValues) =>
    SessionManager.login(email, password)
  const handleLoginAnonymous = () => SessionManager.loginAnonymous()
  const handleForgotPassword = () => window.alert('Not implemented yet!')
  const handleSignUp = () => navigation.navigate(SignUpScreens.signUpEmail)
  const handleTroubleSigningIn = () => {
    alert('not implemented yet')
  }
  return (
    <ScreenWrapper>
      <Box flex={1} px="5">
        <Icon
          onPress={() => navigation.goBack()}
          size="xl"
          fontWeight={700}
          as={MaterialIcons}
          name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
          color="white"
        />
      </Box>
      <Box flex={2} px="10">
        <Box flex={1}>
          <BrandIconUncolored />
        </Box>
        <Box flex={1} justifyContent="flex-end">
          <>
            <Text my="3">
              By tapping Create Account or Sign In, you agree to our&nbsp;
              <Link isExternal href={AppLinks.terms}>
                terms
              </Link>
              . Learn how we process your data in our{' '}
              <Link isExternal href={AppLinks.privacy}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link isExternal href={AppLinks.cookies}>
                Cookies Policy
              </Link>
            </Text>
            <InputUnderline
              autoFocus
              placeholder="email"
              fieldName="email"
              control={control}
              error={error}
              rules={rules.email}
              color="white"
              autoCapitalize="none"
              borderBottomColor="white"
              placeholderTextColor="rgba(255,255,255,0.6)"
            />
            <InputUnderline
              placeholder="password"
              fieldName="password"
              type="password"
              control={control}
              error={error}
              rules={rules.password}
              color="white"
              borderBottomColor="white"
              placeholderTextColor="rgba(255,255,255,0.6)"
            />
            <PrimaryButton onPress={handleSubmit(handleLogin)}>
              Sign in
            </PrimaryButton>
            <LinkButton variant="link" onPress={handleTroubleSigningIn}>
              Trouble Signing in?
            </LinkButton>
          </>
        </Box>
      </Box>
    </ScreenWrapper>
  )
}
