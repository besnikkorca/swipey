import React, { ReactChild } from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  },
});

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

type Props = {
  children: ReactChild;
};

export default function StylingProvider({ children }: Props) {
  return (
    <NativeBaseProvider config={config} theme={theme}>
      {children}
    </NativeBaseProvider>
  );
}
