import React from 'react'
import { Animated, ImageSourcePropType } from 'react-native'
import { GenericVoidFunc } from 'types/global'

type Button = {
  iconName: string
  onPress: GenericVoidFunc
  color: string
}

export interface Job {
  position: string
  companyName: string
  startDate: string
  endDate: string
  description: string
}

interface SectionSharedData {
  id: number
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

export type Section = SectionSharedData & (JobSpecificData | ImageSpecificData)

export interface Card {
  uid: number
  firstName: string
  age: number
  hobbies: string[]
  sections: Section[]
}

export interface CardsProps {
  isCurrentCard: boolean
  isNextCard: boolean
  card: Card
  sectionIdx: number
  position: Animated.ValueXY
  buttons: Button[]
  handlePressLeft: GenericVoidFunc
  handlePressRight: GenericVoidFunc
  handlePressInfo: GenericVoidFunc
}

export interface CardsContainerProps {
  cards: Card[]
  buttons: Button[]
}

export interface SwiperProps {
  cards: Card[]
  handleGoBack: GenericVoidFunc
  handleDislike: GenericVoidFunc
  handleStar: GenericVoidFunc
  handleLike: GenericVoidFunc
}
