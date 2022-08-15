import { GestureResponderEvent } from "react-native";

export type OnPress = ((event: GestureResponderEvent) => void) | undefined;

export enum CloudDirs {
  documents = "documents",
  images = "images",
}

export type GenericStringVoidFunc = (str: string) => void;
export type GenericVoidFunc = () => void;
