import { RouteProp, useRoute as useRNRoute } from '@react-navigation/native'

type RouteParamList = {
  // [SignUpScreens.rules]: { email: string };
  // [SignUpScreens.signUpFirstName]: { email: string, firstName: string; };
}

type RoutesProps = RouteProp<RouteParamList>

export default function useRoute() {
  const navigation = useRNRoute<RoutesProps>()

  return navigation
}
