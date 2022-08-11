import { IInputProps, Input } from "native-base";

export default function ({
  fontSize = "xl",
  placeholder = "enter email",
  w = "100%",
  ...props
}: IInputProps) {
  return (
    <Input fontSize={fontSize} placeholder={placeholder} {...props} w={w} />
  );
}
