import { useForm, UseFormProps } from 'react-hook-form'

const defaultValues = {
  companyName: '',
}

const formConfig: UseFormProps = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useCompanyNameForm() {
  return useForm(formConfig)
}
