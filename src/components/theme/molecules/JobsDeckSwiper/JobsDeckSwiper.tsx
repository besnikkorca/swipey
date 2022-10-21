import cards from '../Swiper/jobTestData'
import { RenderCardDetailsFunc } from '../Swiper/types'
import Swiper from '../Swiper'
import { Image, ImageStyle } from 'react-native'
import JobOfferDetails from './JobOfferDetails'
import JobCardDetails from './JobCardDetails'
import { JobPosting, JobPostingSection } from 'types/jobposting'

export default function JobsDeckSwiper() {
  // const images = Array.from(new Array(5)).map((_, idx) =>
  //   FileManager.getFileDownloadUrl(`${CloudDirs.images}/nature${idx + 1}.jpeg`)
  // );

  const imageStyle: ImageStyle = {
    flex: 1,
    height: 'auto',
    width: 'auto',
    resizeMode: 'cover',
    borderRadius: 10,
  }

  const handleGoBack = () => alert('Go back not implemented')
  const handleDislike = () => alert('Dislike candidate not implemented')
  const handleStar = () => alert('Star candidate not implemented')
  const handleLike = () => alert('Like candidate not implemented')

  const renderSection = (section: JobPostingSection) => {
    return (
      <>
        {section.type === 'image' ? (
          <Image style={imageStyle} source={section?.src} />
        ) : (
          <JobOfferDetails job={section.job} />
        )}
      </>
    )
  }

  const renderCardDetails: RenderCardDetailsFunc<
    JobPosting,
    JobPostingSection
  > = ({ card, buttons, handlePressInfo }) => {
    return (
      <JobCardDetails
        {...{
          card,
          buttons,
          handlePressInfo,
        }}
      />
    )
  }

  return (
    <Swiper<JobPosting, JobPostingSection>
      cards={cards as JobPosting[]}
      renderSection={renderSection}
      {...{
        handleGoBack,
        handleDislike,
        handleStar,
        handleLike,
        // renderSection,
        renderCardDetails,
      }}
    />
  )
}
