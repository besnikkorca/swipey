import { KeyboardAvoidingView } from "native-base";
import { InterfaceKeyboardAvoidingViewProps } from "native-base/lib/typescript/components/basic/KeyboardAvoidingView/types";
import { Platform } from "react-native";

import { themeModeColors } from "_constants/theme";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
} & InterfaceKeyboardAvoidingViewProps;

export default function ({ children, ...props }: Props) {
  return (
    <KeyboardAvoidingView
      {...themeModeColors}
      flex={1}
      h={{
        base: "400px",
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
