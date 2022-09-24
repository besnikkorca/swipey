import React from 'react'
import { SignUpScreens } from 'navigation/types'
import { ValidationRules } from 'types/form'
import usePasswordForm from 'hooks/forms/usePasswordForm'
import useSignUpData from 'hooks/useSignUpData'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import isValidPassword from 'utils/validation/isValidPassword'

const rules: ValidationRules = {
  maxLength: {
    value: 35,
    message: 'Password cannot contain more than 35 characters',
  },
  minLength: {
    value: 8,
    message: 'Password must have at least 8 characters',
  },
  required: 'Password is required',
  validate: isValidPassword,
}

export default function SignUpPasswordScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpPerform)

  const { control, handleSubmit, formState } = usePasswordForm()
  const error = (formState.errors?.password?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      onPress={handleSubmit(handleUpdate)}
      autoCompleteType="password"
      type="password"
      autoCorrect={false}
      fieldName="password"
      rules={rules}
      control={control}
      error={error}
      titleText="My password is"
      subText="Try to remember your password or better of put it in a password manager."
      placeholder="Enter password"
    />
  )
}
