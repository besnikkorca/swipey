import React from 'react'
import { SignUpScreens } from 'navigation/types'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import useSignUpData from 'hooks/useSignUpData'
import useLastNameForm from 'hooks/forms/useLastNameForm'
import { ValidationRules } from 'types/form'

const rules: ValidationRules = {
  maxLength: {
    value: 35,
    message: 'Last name cannot contain more than 35 characters',
  },
  minLength: {
    value: 2,
    message: 'Last name must have at least 2 characters',
  },
  required: 'Last name is required',
}

export default function SignUpLastNameScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpCV)

  const { control, handleSubmit, formState } = useLastNameForm()
  const error = (formState.errors?.lastName?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      fieldName="lastName"
      onPress={handleSubmit(handleUpdate)}
      control={control}
      rules={rules}
      error={error}
      titleText="My last name is"
      placeholder="Last Name"
    />
  )
}
