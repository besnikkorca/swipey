import { useNavigation as useRNNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ScreenNames } from 'navigation/types'

type StackParamList = Record<ScreenNames, {} | undefined>

type NavigationProps = NativeStackNavigationProp<StackParamList>

export default function useNavigation() {
  const navigation = useRNNavigation<NavigationProps>()

  return navigation
}
