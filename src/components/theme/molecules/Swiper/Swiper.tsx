import { View } from 'native-base'
import { CardSharedData, SectionSharedData } from 'types/employee'
import CardsContainer from './CardsContainer'
import { SwiperProps } from './types'

export default function Swiper<
  T extends CardSharedData<K>,
  K extends SectionSharedData
>({
  handleGoBack,
  handleDislike,
  handleStar,
  handleLike,
  cards,
  renderSection,
  renderCardDetails,
}: SwiperProps<T, K>) {
  const buttons = [
    {
      iconName: 'replay',
      onPress: handleGoBack,
      color: 'orange.400',
    },
    {
      iconName: 'close',
      onPress: handleDislike,
      color: 'red.400',
    },
    {
      iconName: 'star',
      onPress: handleStar,
      color: 'yellow.400',
    },
    {
      iconName: 'thumb-up-alt',
      onPress: handleLike,
      color: 'blue.400',
    },
  ]

  return (
    <View flex={1} my={3}>
      <CardsContainer<T, K>
        renderCardDetails={renderCardDetails}
        renderSection={renderSection}
        buttons={buttons}
        cards={cards}
      />
    </View>
  )
}
