import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthScreens, AppScreens, SignUpScreens } from "navigation/types";

type StackParamList = Record<
  SignUpScreens | AuthScreens | AppScreens,
  {} | undefined
>;

type NavigationProps = NativeStackNavigationProp<StackParamList>;

export default function () {
  const navigation = useNavigation<NavigationProps>();

  return navigation;
}
