import { Icon as NBIcon, IIconProps } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = IIconProps

export default function Icon({
  size = 'xl',
  fontWeight = 700,
  color = 'gray.600',
  ...props
}: Props) {
  return (
    <NBIcon
      as={MaterialIcons}
      size={size}
      fontWeight={fontWeight}
      color={color}
      {...props}
    />
  )
}
