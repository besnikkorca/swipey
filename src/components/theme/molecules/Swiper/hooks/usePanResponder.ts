import React, { useMemo } from 'react'
import { Animated, Dimensions, PanResponder } from 'react-native'
import { GenericNumberVoidFunc, GenericVoidFunc } from 'types/global'
import { Card } from '../types'
const SCREEN_WIDTH = Dimensions.get('window').width

export default function usePanResponder(
  position: React.MutableRefObject<Animated.ValueXY>,
  sectionIdx: number,
  handlePressLeft: GenericVoidFunc,
  cards: Card[],
  cardIdx: number,
  handlePressRight: GenericVoidFunc,
  setCardIdx: GenericNumberVoidFunc
) {
  return useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
          position.current.setValue({ x: gestureState.dx, y: gestureState.dy })
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx < 1 && gestureState.dx > -1) {
            // if the user didn't move the card
            // then we want to go to the next image
            const isLeftClick = gestureState.x0 < SCREEN_WIDTH / 2

            if (isLeftClick && sectionIdx > 0) {
              handlePressLeft()
              position.current.setValue({ x: 0, y: 0 })
              return
            } else if (
              !isLeftClick &&
              sectionIdx < cards[cardIdx].sections.length - 1
            ) {
              handlePressRight()
              position.current.setValue({ x: 0, y: 0 })
              return
            }
          }

          if (gestureState.dx > 120) {
            Animated.spring(position.current, {
              useNativeDriver: true,
              toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            }).start(() => {
              setCardIdx(cardIdx + 1)
              position.current.setValue({ x: 0, y: 0 })
            })
          } else if (gestureState.dx < -120) {
            Animated.spring(position.current, {
              useNativeDriver: true,
              toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            }).start(() => {
              setCardIdx(cardIdx + 1)
              position.current.setValue({ x: 0, y: 0 })
            })
          } else {
            Animated.spring(position.current, {
              useNativeDriver: true,
              toValue: { x: 0, y: 0 },
              friction: 4,
            }).start()
          }
        },
      }),
    [cardIdx, setCardIdx, sectionIdx, handlePressLeft, handlePressRight]
  )
}
