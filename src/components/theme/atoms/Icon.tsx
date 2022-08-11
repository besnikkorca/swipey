import { Icon, IIconProps } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {} & IIconProps;

export default function ({
  size = "xl",
  fontWeight = 700,
  color = "gray.600",
  ...props
}: Props) {
  return (
    <Icon
      as={MaterialIcons}
      size={size}
      fontWeight={fontWeight}
      color={color}
      {...props}
    />
  );
}
