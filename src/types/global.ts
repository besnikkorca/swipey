import { GestureResponderEvent } from "react-native";

export type OnPress = ((event: GestureResponderEvent) => void) | undefined;
