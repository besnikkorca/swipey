import { View } from 'native-base'
import Swiper from 'react-native-deck-swiper'
import FileManager from 'services/FileManager'
import { CloudDirs } from 'types/global'
import { themeModeColors } from '_constants/theme'
import CandidateCard from './CandidateCard'
import users from './userTestData'
// import Text from "./theme/atoms/text/Text";

export default function () {
  // const images = Array.from(new Array(5)).map((_, idx) =>
  //   FileManager.getFileDownloadUrl(`${CloudDirs.images}/nature${idx + 1}.jpeg`)
  // );

  const handleGoBack = () => alert('Go back not implemented')
  const handleDislike = () => alert('Dislike candidate not implemented')
  const handleStar = () => alert('Star candidate not implemented')
  const handleLike = () => alert('Like candidate not implemented')

  return (
    <View flex={1} margin="2">
      <Swiper
        cardVerticalMargin={80}
        cardHorizontalMargin={0}
        cards={users}
        keyExtractor={({ uid }) => uid.toString()}
        cardStyle={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 'auto',
          height: 'auto',
        }}
        renderCard={(user) => (
          <CandidateCard
            {...{
              user,
              handleGoBack,
              handleDislike,
              handleStar,
              handleLike,
            }}
          />
        )}
        onSwiped={(cardIndex) => {
          console.log(cardIndex)
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll')
        }}
        backgroundColor="#fff"
        cardIndex={0}
        stackSize={3}
      />
    </View>
  )
}
