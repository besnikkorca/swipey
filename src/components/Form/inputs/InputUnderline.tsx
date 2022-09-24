import { FormControl, IInputProps, Input } from 'native-base'
import { Controller } from 'react-hook-form'
import { FormInputProps } from 'types/form'

type InputProps = IInputProps & FormInputProps

export default function InputUnderline({
  fontSize = 'xl',
  placeholder = 'enter email',
  w = '100%',
  fieldName,
  control,
  type,
  rules,
  error,
  ...props
}: InputProps) {
  return (
    <FormControl isInvalid={!!error} isRequired>
      <Controller
        control={control}
        name={fieldName}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            type={type}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            fontSize={fontSize}
            placeholder={placeholder}
            borderBottomColor="yellow.500"
            {...props}
            w={w}
            variant="underlined"
          />
        )}
      />
      {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
    </FormControl>
  )
}
