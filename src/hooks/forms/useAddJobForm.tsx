import { useForm, UseFormProps } from 'react-hook-form'

export interface AddJobForm {
  title?: string | undefined
  description?: string | undefined
  files?: (string | undefined)[]
}

const defaultValues: AddJobForm = {
  title: '',
  description: '',
  files: [],
}

const formConfig: UseFormProps<AddJobForm> = {
  defaultValues,
  mode: 'onChange',
  reValidateMode: 'onBlur',
}

export default function useAddJobForm() {
  return useForm(formConfig)
}
