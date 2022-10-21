import { View } from 'native-base'
import CardsContainer from './CardsContainer'
import { SwiperProps } from './types'

export default function Swiper({
  handleGoBack,
  handleDislike,
  handleStar,
  handleLike,
  cards,
}: SwiperProps) {
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
      <CardsContainer buttons={buttons} cards={cards} />
    </View>
  )
}
