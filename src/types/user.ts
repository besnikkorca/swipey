import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type User = FirebaseAuthTypes.User | null
export interface UserDetails extends FirebaseFirestoreTypes.DocumentData {
  firstName: string
  lastName: string
  cvPath: string
  isRecruiter: boolean
}

export interface UserContextType {
  user: User
  userDetails: UserDetails | undefined
  initializing: boolean
}
