import React from 'react'
import { Box } from 'native-base'
import { themeModeColorsBAW } from '_constants/theme'
import ScreenWrapper from '../ScreenWrapper'
import Title from 'components/theme/atoms/text/Title'
import Subtitle from 'components/theme/atoms/text/Subtitle'
import ContinueButton from 'components/Form/buttons/ContinueButton'
import KeyboardAvoidingView from 'components/KeyboardAvoidingView'
import { KeyboardVerticalOffset } from '_constants/header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BrandIconSimpleSmall from 'components/theme/atoms/icons/BrandIconSimpleSmall'
import TextArticle from 'components/theme/molecules/TextArticle'
import useNavigation from 'hooks/useNavigation'
import { SignUpScreens } from 'navigation/types'
import useTextArticles from './hooks/useTextArticles'
import useRoute from 'hooks/useRoute'

export default function RulesScreen() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { params } = useRoute()

  const handleOnContinue = () =>
    navigation.navigate(SignUpScreens.signUpFirstName, params)

  const textArticles = useTextArticles()
  return (
    <ScreenWrapper
      safeArea={true}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="flex-start" mx="10">
        <Box flex={1} mt="10">
          <BrandIconSimpleSmall />
          <Box flex={1}>
            <Title fontSize="2xl" textAlign="center" my="4">
              Welcome to Swipey.
            </Title>
            <Subtitle color="gray.400" fontSize="md" textAlign="center" mb="5">
              Please behave nice, besides feeling better for yourself you'll
              have a better chance at getting what you want.
            </Subtitle>
            {textArticles.map(({ title, content }) => (
              <TextArticle key={title} title={title} content={content} />
            ))}
          </Box>
        </Box>
        <KeyboardAvoidingView
          keyboardVerticalOffset={KeyboardVerticalOffset + insets.bottom}
          flex={1}
          justifyContent="flex-end"
          alignSelf="stretch"
        >
          <ContinueButton isValid={true} onPress={handleOnContinue}>
            continue
          </ContinueButton>
        </KeyboardAvoidingView>
      </Box>
    </ScreenWrapper>
  )
}
