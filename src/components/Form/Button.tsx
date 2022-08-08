import React from "react";
import { Button, IButtonProps } from "native-base";

export default function ({
  onPress,
  children,
  variant,
}: IButtonProps): JSX.Element {
  return (
    <Button onPress={onPress} variant={variant}>
      {children}
    </Button>
  );
}
