import { Animated } from 'react-native'
import { CardSharedData, SectionSharedData } from 'types/employee'
import { GenericVoidFunc } from 'types/global'

type Button = {
  iconName: string
  onPress: GenericVoidFunc
  color: string
}
export interface CardsProps<
  T extends CardSharedData<K>,
  K extends SectionSharedData
> {
  isCurrentCard: boolean
  isNextCard: boolean
  card: T
  sectionIdx: number
  position: Animated.ValueXY
  buttons: Button[]
  handlePressLeft: GenericVoidFunc
  handlePressRight: GenericVoidFunc
  handlePressInfo: GenericVoidFunc
  renderSection: (section: K) => JSX.Element
  renderCardDetails: RenderCardDetailsFunc<T, K>
}

export interface CardsContainerProps<
  T extends CardSharedData<K>,
  K extends SectionSharedData
> {
  cards: T[]
  buttons: Button[]
  renderSection: (section: K) => JSX.Element
  renderCardDetails: RenderCardDetailsFunc<T, K>
}
export interface SwiperProps<
  T extends CardSharedData<K>,
  K extends SectionSharedData
> {
  cards: T[]
  renderSection: (section: K) => JSX.Element
  renderCardDetails: RenderCardDetailsFunc<T, K>
  handleGoBack: GenericVoidFunc
  handleDislike: GenericVoidFunc
  handleStar: GenericVoidFunc
  handleLike: GenericVoidFunc
}

export type RenderCardDetailsFunc<
  T extends CardSharedData<K>,
  K extends SectionSharedData
> = ({
  card,
  buttons,
  handlePressInfo,
}: {
  card: T
  buttons: Button[]
  handlePressInfo: GenericVoidFunc
}) => JSX.Element
