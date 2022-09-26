import React from 'react'
import { SignUpScreens } from 'navigation/types'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import useSignUpData from 'hooks/useSignUpData'
import useFirstNameForm from 'hooks/forms/useFirstNameForm'
import { ValidationRules } from 'types/form'
import rules from './rules.json'

export default function SignUpFirstNameScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpLastName)

  const { control, handleSubmit, formState } = useFirstNameForm()
  const error = (formState.errors?.firstName?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      rules={rules as ValidationRules}
      error={error}
      control={control}
      fieldName="firstName"
      onPress={handleSubmit(handleUpdate)}
      titleText="My first name is"
      placeholder="First Name"
    />
  )
}
