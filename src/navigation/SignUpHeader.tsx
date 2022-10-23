import { Box, HStack } from 'native-base'
import NavigateBackButton from 'components/theme/molecules/NavigateBackButton'
import { HeaderHeight } from '_constants/header'

export default function SignUpHeader(): JSX.Element {
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
        <NavigateBackButton />
      </HStack>
    </>
  )
}
