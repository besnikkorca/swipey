import Swiper from 'components/theme/molecules/Swiper'
import cards from '../Swiper/userTestData'
import { RenderCardDetailsFunc } from '../Swiper/types'
import JobDetails from './JobDetails'
import { Image, ImageStyle } from 'react-native'
import CardDetails from './CardDetails'
import { Employee, EmployeeSection } from 'types/employee'

export default function EmployeesDeckSwiper() {
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

  const renderSection = (section: EmployeeSection) => {
    return (
      <>
        {section.type === 'image' ? (
          <Image style={imageStyle} source={section?.src} />
        ) : (
          <JobDetails job={section.job} />
        )}
      </>
    )
  }

  const renderCardDetails: RenderCardDetailsFunc<Employee, EmployeeSection> = ({
    card,
    buttons,
    handlePressInfo,
  }) => {
    return (
      <CardDetails
        {...{
          card,
          buttons,
          handlePressInfo,
        }}
      />
    )
  }

  return (
    <Swiper<Employee, EmployeeSection>
      {...{
        cards: cards as Employee[],
        handleGoBack,
        handleDislike,
        handleStar,
        handleLike,
        renderSection,
        renderCardDetails,
      }}
    />
  )
}
