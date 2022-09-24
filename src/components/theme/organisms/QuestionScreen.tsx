import React from 'react'
import { Box } from 'native-base'
import { themeModeColorsBAW } from '_constants/theme'
import ScreenWrapper from 'screens/ScreenWrapper'
import Title from 'components/theme/atoms/text/Title'
import InputUnderline from 'components/Form/inputs/InputUnderline'
import ContinueButton from 'components/Form/buttons/ContinueButton'
import KeyboardAvoidingView from 'components/KeyboardAvoidingView'
import { KeyboardVerticalOffset } from '_constants/header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Text from '../atoms/text/Text'
import { FormInputProps } from 'types/form'
import { GenericVoidFunc } from 'types/global'

type Props = {
  titleText: string
  subText?: string
  ctaText?: string
  placeholder: string
  error?: string | undefined
  onPress: GenericVoidFunc
  // TODO: Fix types
  autoCompleteType?: any
  autoCorrect?: any
  type?: 'text' | 'password'
  isValid: boolean
} & FormInputProps

export default function QuestionScreen({
  titleText,
  subText,
  ctaText = 'continue',
  placeholder,
  fieldName,
  control,
  rules,
  error,
  onPress,
  autoCompleteType,
  autoCorrect,
  type,
  isValid,
}: Props) {
  const insets = useSafeAreaInsets()

  return (
    <ScreenWrapper
      safeArea={false}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} alignItems="stretch" mx="10">
        <Box flex={1}>
          <Title>{titleText}</Title>
          {subText && (
            <Text color="gray.400" fontSize="md" textAlign="left" mb="5">
              {subText}
            </Text>
          )}
          <InputUnderline
            error={error}
            rules={rules}
            type={type}
            autoCompleteType={autoCompleteType}
            autoCorrect={autoCorrect}
            fieldName={fieldName}
            control={control}
            autoCapitalize="none"
            autoFocus
            placeholder={placeholder}
          />
        </Box>
        <KeyboardAvoidingView
          keyboardVerticalOffset={KeyboardVerticalOffset + insets.bottom}
          flex={1}
          justifyContent="flex-end"
          alignSelf="stretch"
        >
          <ContinueButton isValid={isValid} onPress={onPress}>
            {ctaText}
          </ContinueButton>
        </KeyboardAvoidingView>
      </Box>
    </ScreenWrapper>
  )
}
