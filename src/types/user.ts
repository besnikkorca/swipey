import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { ImageSourcePropType } from 'react-native'
import { Job } from './Job'

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

type JobSection = {
  id: number
  type: 'job'
  job: Job
}

type ImageSection = {
  id: number
  type: 'image'
  src: ImageSourcePropType
  path: string
}

type Section = JobSection | ImageSection

export type UserWithDetails = {
  uid: number
  firstName: string
  age: number
  hobbies: string[]
  sections: Section[]
}
