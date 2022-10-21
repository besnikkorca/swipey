import React from 'react'
import { Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { GenericNumberVoidFunc, GenericVoidFunc } from 'types/global'
import { Card } from '../types'
import usePanResponder from './usePanResponder'
const SCREEN_WIDTH = Dimensions.get('window').width

type Params = {
  cards: Card[]
  position: React.MutableRefObject<Animated.ValueXY>
  sectionIdx: number
  cardIdx: number
  setCardIdx: GenericNumberVoidFunc
  handlePressLeft: GenericVoidFunc
  handlePressRight: GenericVoidFunc
}

export default function useSwiperPanResponderData({
  cards,
  position,
  sectionIdx,
  cardIdx,
  setCardIdx,
  handlePressLeft,
  handlePressRight,
}: Params) {
  const panResponder = usePanResponder(
    position,
    sectionIdx,
    handlePressLeft,
    cards,
    cardIdx,
    handlePressRight,
    setCardIdx
  )

  const inputRange = [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2]
  const extrapolate = 'clamp'

  const rotate = position.current.x.interpolate({
    inputRange,
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate,
  })

  const rotateAndTranslate = {
    transform: [
      {
        rotate,
      },
      ...position.current.getTranslateTransform(),
    ],
  }

  const nextCardOpacity = position.current.x.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
    extrapolate,
  })

  const nextCardScale = position.current.x.interpolate({
    inputRange,
    outputRange: [1, 0.8, 1],
    extrapolate,
  })

  return {
    panResponder,
    rotateAndTranslate,
    nextCardOpacity,
    nextCardScale,
  }
}
