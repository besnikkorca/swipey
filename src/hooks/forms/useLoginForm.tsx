import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  email: 'labinot.krasniqi1@gmail.com',
  password: 'testtest1',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useLoginForm() {
  return useForm(formConfig)
}
