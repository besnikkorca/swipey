import React from 'react'
import { SignUpScreens } from 'navigation/types'
import { ValidationRules } from 'types/form'
import useEmailForm from 'hooks/forms/useEmailForm'
import useSignUpData from 'hooks/useSignUpData'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import isValidEmail from 'utils/validation/isValidEmail'

const rules: ValidationRules = {
  maxLength: {
    value: 35,
    message: 'Email cannot contain more than 35 characters',
  },
  minLength: {
    value: 5,
    message: 'Email must have at least 5 characters',
  },
  required: 'Email is required',
  validate: isValidEmail,
}

export default function SignUpEmailScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.rules)

  const { control, handleSubmit, formState } = useEmailForm()
  const error = (formState.errors?.email?.message || '') as string

  return (
    <QuestionScreen
      onPress={handleSubmit(handleUpdate)}
      isValid={formState.isValid}
      autoCompleteType="email"
      autoCorrect={false}
      fieldName="email"
      rules={rules}
      control={control}
      error={error}
      titleText="What's your email ?"
      subText="Increase your hiring chances, verify your email."
      placeholder="Enter email"
    />
  )
}
