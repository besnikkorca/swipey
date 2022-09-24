import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  lastName: '',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useLastNameForm() {
  return useForm(formConfig)
}
