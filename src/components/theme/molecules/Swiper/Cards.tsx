import { Dimensions, Image, ImageStyle } from 'react-native'
import ImagesProgressLines from './ImagesProgressLines'
import JobDetails from './JobDetails'
import { ImageDetails } from './ImageDetails'
import SwipeText from './SwipeText'
import { View } from 'native-base'
import { CardsProps } from './types'

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

const USER_DETAILS_IDX = 0

export default function Cards({
  isCurrentCard,
  isNextCard,
  card,
  sectionIdx,
  position,
  buttons,
  handlePressLeft,
  handlePressRight,
  handlePressInfo,
}: CardsProps) {
  const imageStyle: ImageStyle = {
    flex: 1,
    height: 'auto',
    width: 'auto',
    resizeMode: 'cover',
    borderRadius: 10,
  }

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
            {section.type === 'image' ? (
              <Image style={imageStyle} source={section?.src} />
            ) : (
              <JobDetails job={section.job} />
            )}
          </View>
        )
      })}
      <ImageDetails
        {...{
          showUserDetails: USER_DETAILS_IDX === sectionIdx,
          showTutorial: false,
          user: card,
          buttons,
          handlePressLeft,
          handlePressRight,
          handlePressInfo,
        }}
      />
    </>
  )
}
