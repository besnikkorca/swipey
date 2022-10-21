import { Animated } from 'react-native'
import { useRef } from 'react'
import useSwiperData from './hooks/useSwiperData'
import useSwiperPanResponder from './hooks/useSwiperPanResponderData'
import { CardsContainerProps } from './types'
import { View } from 'native-base'
import Cards from './Cards'
import { CardSharedData, SectionSharedData } from 'types/employee'

export default function CardsContainer<
  T extends CardSharedData<K>,
  K extends SectionSharedData
>({
  cards,
  buttons,
  renderSection,
  renderCardDetails,
}: CardsContainerProps<T, K>) {
  const {
    cardIdx,
    setCardIdx,
    sectionIdx,
    showMore,
    setShowMore,
    handlePressLeft,
    handlePressRight,
    handlePressInfo,
  } = useSwiperData(cards)

  const position = useRef(new Animated.ValueXY())

  const { panResponder, rotateAndTranslate, nextCardOpacity, nextCardScale } =
    useSwiperPanResponder({
      cards,
      position,
      sectionIdx,
      cardIdx,
      setCardIdx,
      handlePressLeft,
      handlePressRight,
    })

  return (
    <View flex={1}>
      {cards.map((card, idx) => {
        const isCurrentCard = idx === cardIdx
        const isNextCard = idx === cardIdx + 1

        if (idx < cardIdx || idx > cardIdx + 1) return null

        return (
          <Animated.View
            key={card.uid}
            {...(isCurrentCard && panResponder.panHandlers)}
            style={[
              isCurrentCard && rotateAndTranslate,
              isNextCard && {
                opacity: nextCardOpacity,
                transform: [{ scale: nextCardScale }],
              },
              {
                height: 'auto',
                width: 'auto',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                zIndex: isCurrentCard ? 100 : isNextCard ? 99 : 0,
              },
            ]}
          >
            <View
              position="absolute"
              width="auto"
              height="auto"
              top={0}
              left={0}
              bottom={0}
              right={0}
              mx="2"
            >
              <Cards<T, K>
                {...{
                  renderSection,
                  renderCardDetails,
                  isCurrentCard,
                  isNextCard,
                  card,
                  sectionIdx,
                  position: position.current,
                  buttons,
                  handlePressLeft,
                  handlePressRight,
                  handlePressInfo,
                }}
              />
            </View>
          </Animated.View>
        )
      })}
    </View>
  )
}
