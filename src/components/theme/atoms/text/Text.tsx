import React from "react";
import { Text } from "native-base";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";

export default function ({
  children,
  color = "white",
  textAlign = "center",
  fontWeight = "medium",
  ...props
}: InterfaceTextProps): JSX.Element {
  return (
    <Text
      {...props}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
    >
      {children}
    </Text>
  );
}
