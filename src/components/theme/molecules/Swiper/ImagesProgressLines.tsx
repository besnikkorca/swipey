import { HStack, View } from 'native-base'
import { Card } from './types'

type Props = { card: Card; imageIdx: number }

export default function ImagesProgressLines({ card, imageIdx }: Props) {
  return (
    <HStack position="absolute" zIndex={101} top={2} mx={2}>
      {card.sections.length > 1 &&
        card.sections.map(({ id }, idx) => (
          <View
            mx={1}
            key={id}
            justifyContent="space-around"
            rounded="full"
            shadow={2}
            backgroundColor={
              idx === imageIdx ? 'white' : 'rgba(200,200,200,0.5)'
            }
            flex={1}
            height={1}
          ></View>
        ))}
    </HStack>
  )
}
