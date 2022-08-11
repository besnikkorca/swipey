import React from "react";
import { Button, IButtonProps } from "native-base";

export default function PrimaryButton({
  onPress,
  children,
  variant,
  mx = 0,
  my = 2,
  py = 3,
  shadow = 2,
  fontWeight = "semibold",
  fontSize = "2xl",
  bgColor = "white",
  isValid = false,
  ...props
}: IButtonProps): JSX.Element {
  return (
    <Button
      onPress={onPress}
      variant={variant}
      mx={mx}
      my={my}
      py={py}
      shadow={shadow}
      fontWeight={fontWeight}
      fontSize={fontSize}
      borderRadius={50}
      bgColor={isValid ? "yellow.300" : bgColor}
      _text={{
        color: isValid ? "white" : "gray.500",
        shadow: 2,
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
