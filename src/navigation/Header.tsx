import { Box, HStack, Icon, IconButton } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { HeaderHeight } from '_constants/header'
import BrandIcon from 'components/theme/atoms/icons/BrandIcon'
import { themeModeColorsBAW } from '_constants/theme'

type Props = {
  // TODO: fix type of drawer navigation
  navigation: any
}

export default function Header({ navigation }: Props): JSX.Element {
  const handleToggleDrawer = () => navigation.openDrawer()
  return (
    <>
      <Box safeAreaTop {...themeModeColorsBAW} />
      <HStack
        {...themeModeColorsBAW}
        px="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h={HeaderHeight}
      >
        <IconButton
          icon={
            <Icon
              onPress={handleToggleDrawer}
              size="xl"
              fontWeight={700}
              as={MaterialIcons}
              name="menu"
              color="gray.600"
            />
          }
        />
        <Box w="130">
          <BrandIcon />
        </Box>
        <Box w="50" />
      </HStack>
    </>
  )
}
