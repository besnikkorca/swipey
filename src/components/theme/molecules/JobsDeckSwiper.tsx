import cards from './Swiper/userTestData'
import { Card } from './Swiper/types'
import Swiper from './Swiper'
// import Text from "./theme/atoms/text/Text";

export default function JobsDeckSwiper() {
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
        handleGoBack,
        handleDislike,
        handleStar,
        handleLike,
        cards: cards as Card[],
      }}
    />
  )
}
