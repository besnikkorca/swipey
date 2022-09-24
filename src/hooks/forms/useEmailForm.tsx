import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  email: '',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useEmailForm() {
  return useForm(formConfig)
}
