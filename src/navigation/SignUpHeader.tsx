import { Box, HStack, Icon, IconButton } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import useNavigation from 'hooks/useNavigation'
import { HeaderHeight } from '_constants/header'

export default function SignUpHeader(): JSX.Element {
  const navigation = useNavigation()
  const handlePressBack = () => navigation.goBack()
  return (
    <>
      <Box safeAreaTop />
      <HStack
        px="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h={HeaderHeight}
      >
        <IconButton
          icon={
            <Icon
              onPress={handlePressBack}
              size="xl"
              fontWeight={700}
              as={MaterialIcons}
              name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
              color="gray.600"
            />
          }
        />
      </HStack>
    </>
  )
}
