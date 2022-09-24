import React from 'react'
import { SignUpScreens } from 'navigation/types'
import DocumentUploadScreen from 'components/theme/organisms/DocumentUploadScreen'
import useSignUpData from 'hooks/useSignUpData'
import useLastNameForm from 'hooks/forms/useLastNameForm'
import { ValidationRules } from 'types/form'

const rules: ValidationRules = {
  maxLength: 100,
  minLength: 5,
}

export default function SignUpCVScreen() {
  const { handleUpdate } = useSignUpData(SignUpScreens.signUpPassword)

  const { control, handleSubmit, formState, getValues } = useLastNameForm()
  const error = (formState.errors?.cvPath?.message || '') as string

  return (
    <DocumentUploadScreen
      onUpload={handleSubmit(handleUpdate)}
      fieldName="cvPath"
      buttonText="Upload"
      control={control}
      rules={rules}
      error={error}
      titleText="Curriculum Vitae"
      subText="The easiest way to let us know who you are and what you're good at is to upload your CV."
    />
  )
}
