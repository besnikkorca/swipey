import { Dimensions } from 'react-native'
import { View } from 'native-base'
import { CardsProps } from './types'
import ImagesProgressLines from './ImagesProgressLines'
import SwipeText from './SwipeText'
import { CardSharedData, SectionSharedData } from 'types/employee'

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export default function Cards<
  T extends CardSharedData<K>,
  K extends SectionSharedData
>({
  isCurrentCard,
  isNextCard,
  card,
  sectionIdx,
  position,
  buttons,
  handlePressLeft,
  handlePressRight,
  handlePressInfo,
  renderSection,
  renderCardDetails,
}: CardsProps<T, K>) {
  return (
    <>
      <ImagesProgressLines
        card={card}
        imageIdx={isCurrentCard ? sectionIdx : 0}
      />
      <SwipeText isCurrent={isCurrentCard} position={position} />
      {card.sections.map((section, sIdx) => {
        const isCurrentSection = sIdx === sectionIdx
        const isNextSection = sIdx === sectionIdx + 1

        if (
          (isCurrentCard && ![sectionIdx, sectionIdx + 1].includes(sIdx)) ||
          (isNextCard && sIdx !== 0)
        )
          return null

        return (
          <View
            key={section.id}
            position="absolute"
            width="auto"
            height="auto"
            top={0}
            left={0}
            bottom={0}
            right={0}
            backgroundColor="yellow.500"
            borderRadius={10}
            zIndex={isCurrentSection ? 100 : isNextSection ? 99 : 0}
          >
            {renderSection(section)}
          </View>
        )
      })}
      {renderCardDetails({
        card,
        buttons,
        handlePressInfo,
      })}
    </>
  )
}
