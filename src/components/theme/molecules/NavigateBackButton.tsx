import { Icon, IconButton } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import useNavigation from 'hooks/useNavigation'

export default function NavigateBackButton({ color = 'gray.600' }) {
  const navigation = useNavigation()
  const handlePressBack = () => navigation.goBack()
  return (
    <IconButton
      icon={
        <Icon
          onPress={handlePressBack}
          size="xl"
          fontWeight={700}
          as={MaterialIcons}
          name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
          color={color}
        />
      }
    />
  )
}
