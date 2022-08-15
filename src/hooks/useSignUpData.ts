import SignUpContext from "contexts/SignUpContext";
import { ScreenNames } from "navigation/types";
import { useCallback, useContext } from "react";
import useNavigation from "./useNavigation";

export default function (screenName?: ScreenNames) {
  const navigation = useNavigation();
  const { data, onChange } = useContext(SignUpContext);

  const handleUpdate = useCallback(
    (data: any) => {
      console.log("data $$$$$$$$$$$ ", data);
      const keys = Object.keys(data);

      console.log("RUNNING ??? ", data);

      keys.forEach((key) => onChange(key)(data[key]));

      return screenName && navigation.navigate(screenName);
    },
    [onChange, navigation.navigate, screenName]
  );

  return { data, handleUpdate };
}
