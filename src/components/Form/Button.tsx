import React from "react";
import { Button, IButtonProps } from "native-base";

export default function ({
  onPress,
  children,
  variant,
}: IButtonProps): JSX.Element {
  return (
    <Button
      textTransform="uppercase"
      onPress={onPress}
      variant={variant}
      mx="4"
      my="2"
      borderRadius={50}
    >
      {children}
    </Button>
  );
}
