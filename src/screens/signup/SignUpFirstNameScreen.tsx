import React from 'react'
import { SignUpScreens } from 'navigation/types'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import useSignUpData from 'hooks/useSignUpData'
import useFirstNameForm from 'hooks/forms/useFirstNameForm'
import { ValidationRules } from 'types/form'

const rules: ValidationRules = {
  maxLength: {
    value: 35,
    message: 'First name cannot contain more than 35 characters',
  },
  minLength: {
    value: 2,
    message: 'First name must have at least 2 characters',
  },
  required: 'First name is required',
}

export default function SignUpFirstNameScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpLastName)

  const { control, handleSubmit, formState } = useFirstNameForm()
  const error = (formState.errors?.firstName?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      rules={rules}
      error={error}
      control={control}
      fieldName="firstName"
      onPress={handleSubmit(handleUpdate)}
      titleText="My first name is"
      placeholder="First Name"
    />
  )
}
