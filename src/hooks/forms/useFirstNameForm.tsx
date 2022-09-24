import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  firstName: '',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useFirstNameForm() {
  return useForm(formConfig)
}
