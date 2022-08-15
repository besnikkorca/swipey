import React from "react";
import { Button, IButtonProps } from "native-base";

export default function PrimaryButton({
  onPress,
  children,
  variant,
  mx = "4",
  my = "2",
  py = "3",
  ...props
}: IButtonProps): JSX.Element {
  return (
    <Button
      onPress={onPress}
      variant={variant}
      mx={mx}
      my={my}
      py={py}
      borderRadius={50}
      bgColor="white"
      shadow={2}
      _text={{
        color: "gray.500",
        textTransform: "uppercase",
        fontWeight: "semibold",
        // fontSize: "md",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
