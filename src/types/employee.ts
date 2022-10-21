import { ImageSourcePropType } from 'react-native'

export interface SectionSharedData {
  id: number
}

export interface Job {
  position: string
  companyName: string
  startDate: string
  endDate: string
  description: string
}

interface JobSpecificData {
  type: 'job'
  job: Job
}

interface ImageSpecificData {
  type: 'image'
  path: string
  src: ImageSourcePropType
}

export type EmployeeSection = SectionSharedData &
  (JobSpecificData | ImageSpecificData)

export interface CardSharedData<K extends SectionSharedData> {
  uid: number
  sections: K[]
}

export type Employee = {
  firstName: string
  age: number
  hobbies: string[]
} & CardSharedData<EmployeeSection>
