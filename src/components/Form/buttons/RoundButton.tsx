import { Icon, IconButton, IIconButtonProps } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = { iconName: string } & IIconButtonProps

export default function RoundButton({
  color = 'white',
  iconName,
  ...props
}: Props) {
  return (
    <IconButton
      {...props}
      borderWidth={1}
      borderColor={color}
      rounded="full"
      w="50"
      h="50"
      icon={
        <Icon size="4xl" as={MaterialIcons} name={iconName} color={color} />
      }
    />
  )
}
