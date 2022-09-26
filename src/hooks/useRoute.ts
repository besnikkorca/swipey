import { RouteProp, useRoute as useRNRoute } from '@react-navigation/native'
import { SignUpScreens } from 'navigation/types'

type RouteParamList = {
  [SignUpScreens.signUpEmail]: { isRecruiter?: boolean }
}

type RoutesProps = RouteProp<RouteParamList>

export default function useRoute() {
  const navigation = useRNRoute<RoutesProps>()

  return navigation
}
