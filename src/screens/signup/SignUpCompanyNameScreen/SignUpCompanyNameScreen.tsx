import React from 'react'
import { SignUpScreens } from 'navigation/types'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import useSignUpData from 'hooks/useSignUpData'
import useCompanyNameForm from 'hooks/forms/useCompanyNameForm'
import rules from './rules.json'
import { ValidationRules } from 'types/form'

export default function SignUpCompanyNameScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpPassword)

  const { control, handleSubmit, formState } = useCompanyNameForm()
  const error = (formState.errors?.companyName?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      rules={rules as ValidationRules}
      error={error}
      control={control}
      fieldName="companyName"
      onPress={handleSubmit(handleUpdate)}
      titleText="I'm Recruiting for"
      placeholder="Company Name"
    />
  )
}
