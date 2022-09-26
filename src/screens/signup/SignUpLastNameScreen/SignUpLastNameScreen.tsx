import React from 'react'
import { SignUpScreens } from 'navigation/types'
import QuestionScreen from 'components/theme/organisms/QuestionScreen'
import useSignUpData from 'hooks/useSignUpData'
import useLastNameForm from 'hooks/forms/useLastNameForm'
import useRoute from 'hooks/useRoute'
import rules from './rules.json'
import { ValidationRules } from 'types/form'

export default function SignUpLastNameScreen() {
  const {
    params: { isRecruiter },
  } = useRoute()
  const { handleUpdate } = useSignUpData(
    isRecruiter ? SignUpScreens.signUpCompanyName : SignUpScreens.signUpCV
  )

  const { control, handleSubmit, formState } = useLastNameForm()
  const error = (formState.errors?.lastName?.message || '') as string

  return (
    <QuestionScreen
      isValid={formState.isValid}
      fieldName="lastName"
      onPress={handleSubmit(handleUpdate)}
      control={control}
      rules={rules as ValidationRules}
      error={error}
      titleText="My last name is"
      placeholder="Last Name"
    />
  )
}
