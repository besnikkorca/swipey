import React, { ReactChild } from "react";
import { extendTheme, NativeBaseProvider } from "native-base";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

type Props = {
  children: ReactChild;
};

export default function StylingProvider({ children }: Props) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}