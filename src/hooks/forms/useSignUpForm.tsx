import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  email: '',
  firstName: '',
  lastName: '',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useSignUpForm() {
  return useForm(formConfig)
}
