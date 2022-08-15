import { RouteProp, useRoute } from "@react-navigation/native";

type RouteParamList = {
  // [SignUpScreens.rules]: { email: string };
  // [SignUpScreens.signUpFirstName]: { email: string, firstName: string; };
};

type RoutesProps = RouteProp<RouteParamList>;

export default function () {
  const navigation = useRoute<RoutesProps>();

  return navigation;
}
