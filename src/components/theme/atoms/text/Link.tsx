import { Link } from "native-base";
import { InterfaceLinkProps } from "native-base/lib/typescript/components/primitives/Link/types";

export default function ({ children, href, ...props }: InterfaceLinkProps) {
  return (
    <Link
      _text={{
        color: "white",
        fontWeight: "semibold",
      }}
      onPress={() => alert("would have opened site " + href)}
      {...props}
    >
      {children}
    </Link>
  );
}
