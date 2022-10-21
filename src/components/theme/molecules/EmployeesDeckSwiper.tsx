import Swiper from 'components/theme/molecules/Swiper'
import cards from './Swiper/userTestData'
import { Card } from './Swiper/types'

export default function EmployeesDeckSwiper() {
  // const images = Array.from(new Array(5)).map((_, idx) =>
  //   FileManager.getFileDownloadUrl(`${CloudDirs.images}/nature${idx + 1}.jpeg`)
  // );

  const handleGoBack = () => alert('Go back not implemented')
  const handleDislike = () => alert('Dislike candidate not implemented')
  const handleStar = () => alert('Star candidate not implemented')
  const handleLike = () => alert('Like candidate not implemented')

  return (
    <Swiper
      {...{
        cards: cards as Card[],
        handleGoBack,
        handleDislike,
        handleStar,
        handleLike,
      }}
    />
  )
}
