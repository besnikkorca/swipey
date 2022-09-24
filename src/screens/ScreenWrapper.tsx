import { Box, KeyboardAvoidingView } from 'native-base'
import { themeModeColors } from '_constants/theme'

interface Props {
  themeColors?: any
  children?: React.ReactChild | React.ReactChild[]
  safeArea?: boolean
  safeAreaBottom?: boolean
}

export default function ScreenWrapper({
  children,
  themeColors = themeModeColors,
  safeArea = true,
  safeAreaBottom = false,
}: Props) {
  return (
    <Box
      {...themeColors}
      safeArea={safeArea ? true : 0}
      safeAreaBottom={safeAreaBottom ? true : 0}
      flex={1}
    >
      <KeyboardAvoidingView flex={1}>
        <Box flex={1}>{children}</Box>
      </KeyboardAvoidingView>
    </Box>
  )
}
