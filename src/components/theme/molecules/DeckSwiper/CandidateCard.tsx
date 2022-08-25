import { useEffect, useState } from 'react'
import { Image, View } from 'native-base'
import getImageAlt from 'utils/file/getImageAlt'
import ImagesProgressLines from './ImagesProgressLines'
import { ImageDetails } from './ImageDetails'
import JobDetails from './JobDetails'
import { UserWithDetails } from 'types/user'

type Props = {
  user: UserWithDetails
  handleGoBack: () => void
  handleDislike: () => void
  handleStar: () => void
  handleLike: () => void
}

const USER_DETAILS_IDX = 0

export default function ({
  user,
  handleGoBack,
  handleDislike,
  handleStar,
  handleLike,
}: Props): JSX.Element | null {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [showTutorial, setShowTutorial] = useState(true)
  const [showMore, setShowMore] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTutorial(false)
    }, 3000)
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const handlePressLeft = () => {
    if (sectionIdx !== 0) setSectionIdx(sectionIdx - 1)
    console.log('PRESS left')
  }
  const handlePressRight = () => {
    if (sectionIdx !== user.sections.length - 1) setSectionIdx(sectionIdx + 1)
    console.log('PRESS right')
  }

  const handlePressInfo = () => {
    setShowMore(!showMore)
  }
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
    <View flex={1} position="relative" rounded="xl" overflow="hidden">
      <View position="relative" flex={1}>
        {user.sections.map((section, idx) => (
          <View
            key={section.id}
            position="absolute"
            width="100%"
            height="100%"
            zIndex={1}
            display={sectionIdx === idx ? 'flex' : 'none'}
            backgroundColor="yellow.500"
          >
            {section.type === 'job' ? (
              <JobDetails job={section.job} />
            ) : (
              <Image
                flex={1}
                source={section.src}
                alt={getImageAlt(section.path)}
                resizeMode="cover"
              />
            )}

            <ImagesProgressLines {...{ user, imageIdx: sectionIdx }} />

            <ImageDetails
              {...{
                showUserDetails: USER_DETAILS_IDX === sectionIdx,
                showTutorial,
                user,
                buttons,
                handlePressLeft,
                handlePressRight,
                handlePressInfo,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
