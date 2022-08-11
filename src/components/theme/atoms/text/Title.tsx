import React from "react";
import { Text } from "native-base";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";

export default function ({
  children,
  color = "black",
  fontSize = "4xl",
  fontWeight = "normal",
  ...props
}: InterfaceTextProps): JSX.Element {
  return (
    <Text {...props} color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </Text>
  );
}
