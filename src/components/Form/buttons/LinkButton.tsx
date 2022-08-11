import React from "react";
import { Button, IButtonProps } from "native-base";

export default function PrimaryButton({
  onPress,
  children,
  variant = "link",
}: IButtonProps): JSX.Element {
  return (
    <Button
      onPress={onPress}
      variant={variant}
      mx="4"
      my="2"
      py="3"
      borderRadius={50}
      borderColor="white"
      _text={{
        color: "white",
        fontWeight: "semibold",
        // fontSize: "md",
      }}
    >
      {children}
    </Button>
  );
}
