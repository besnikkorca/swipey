import { ImageSourcePropType } from 'react-native'
import { CardSharedData, SectionSharedData } from './employee'

export interface JobPostingJob {
  position: string
  companyName: string
  postedOn: string
  description: string
}

interface ImageSpecificData extends SectionSharedData {
  type: 'image'
  path: string
  src: ImageSourcePropType
}

export interface JobSpecificData extends SectionSharedData {
  type: 'job'
  job: JobPostingJob
}

export type JobPostingSection = ImageSpecificData | JobSpecificData

export type JobPosting = {
  uid: number
  contact: string
  technologies: string[]
} & CardSharedData<JobPostingSection>
