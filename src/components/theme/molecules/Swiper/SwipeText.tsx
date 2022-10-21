import Text from 'components/theme/atoms/text/Text'
import { Animated, Dimensions, TextStyle, ViewStyle } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('window').width

type Props = { isCurrent: boolean; position: Animated.ValueXY }

export default function SwipeText({ isCurrent, position }: Props) {
  if (!isCurrent) return null

  const likeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  })

  const nopeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  })

  const animatedViewStyle: ViewStyle = {
    position: 'absolute',
    top: 50,
    zIndex: 1000,
  }

  const textStyle: TextStyle = {
    borderWidth: 1,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '800',
    padding: 10,
  }

  return (
    <>
      <Animated.View
        style={[
          {
            opacity: likeOpacity,
            transform: [{ rotate: '-30deg' }],
            left: 40,
          },
          animatedViewStyle,
        ]}
      >
        <Text
          style={[
            {
              borderColor: 'green',
              color: 'green',
            },
            textStyle,
          ]}
        >
          LIKE
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: nopeOpacity,
            transform: [{ rotate: '30deg' }],
            right: 40,
          },
          animatedViewStyle,
        ]}
      >
        <Text
          style={[
            {
              borderColor: 'red',
              color: 'red',
            },
            textStyle,
          ]}
        >
          NOPE
        </Text>
      </Animated.View>
    </>
  )
}
