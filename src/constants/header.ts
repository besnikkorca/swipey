import { StatusBar } from "react-native";

export const HeaderHeight = 45;

const BottomPadding = 20;

console.log(
  "🚀 ~ file: header.ts ~ line 9 ~ StatusBar.currentHeight",
  StatusBar.currentHeight
);
export const KeyboardVerticalOffset =
  HeaderHeight + BottomPadding + (StatusBar.currentHeight || 0);
