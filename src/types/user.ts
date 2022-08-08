import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type User = FirebaseAuthTypes.User | null;
export interface UserContextType {
  user: User;
  initializing: boolean;
}
