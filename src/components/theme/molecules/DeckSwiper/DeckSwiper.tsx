import { View } from "native-base";
import Swiper from "react-native-deck-swiper";
import FileManager from "services/FileManager";
import { CloudDirs } from "types/global";
import { themeModeColors } from "_constants/theme";
import CandidateCard from "./CandidateCard";
// import Text from "./theme/atoms/text/Text";

const users = [
  {
    uid: 1,
    firstName: "Arber",
    age: 27,
    hobbies: ["Movies", "E-games", "Chilling"],
    imagesPaths: [
      `../../../../assets/images/tests/arber1.jpg`,
      `../../../../assets/images/tests/arber2.jpg`,
    ],
    images: [
      require(`../../../../assets/images/tests/arber1.jpg`),
      require(`../../../../assets/images/tests/arber2.jpg`),
    ],
  },
  {
    uid: 2,
    firstName: "Besnik",
    age: 27,
    hobbies: ["Sports", "Comics", "Music", "Batman"],
    imagesPaths: [
      "../../../../assets/images/tests/besnik1.jpg",
      "../../../../assets/images/tests/besnik2.jpg",
      "../../../../assets/images/tests/besnik3.jpg",
    ],
    images: [
      require("../../../../assets/images/tests/besnik1.jpg"),
      require("../../../../assets/images/tests/besnik2.jpg"),
      require("../../../../assets/images/tests/besnik3.jpg"),
    ],
  },
  {
    uid: 3,
    firstName: "Butrint",
    age: 27,
    hobbies: ["Darth Bacius", "Comics", "Music", "Batman"],
    imagesPaths: [
      `../../../../assets/images/tests/butrint1.jpg`,
      `../../../../assets/images/tests/butrint2.jpg`,
      `../../../../assets/images/tests/butrint3.jpg`,
    ],
    images: [
      require(`../../../../assets/images/tests/butrint1.jpg`),
      require(`../../../../assets/images/tests/butrint2.jpg`),
      require(`../../../../assets/images/tests/butrint3.jpg`),
    ],
  },
  {
    uid: 4,
    firstName: "Labinot",
    age: 27,
    hobbies: ["Basketball", "DC", "Music", "The dark knight"],
    imagesPaths: [
      `../../../../assets/images/tests/labinot1.jpg`,
      `../../../../assets/images/tests/labinot2.jpg`,
      `../../../../assets/images/tests/labinot3.jpg`,
    ],
    images: [
      require(`../../../../assets/images/tests/labinot1.jpg`),
      require(`../../../../assets/images/tests/labinot2.jpg`),
      require(`../../../../assets/images/tests/labinot3.jpg`),
    ],
  },
  {
    uid: 5,
    firstName: "Edon",
    age: 28,
    hobbies: ["Sports", "Comics", "Music", "Batman"],
    imagesPaths: [`../../../../assets/images/tests/edon1.jpg`],
    images: [require(`../../../../assets/images/tests/edon1.jpg`)],
  },
];

export default function () {
  // const images = Array.from(new Array(5)).map((_, idx) =>
  //   FileManager.getFileDownloadUrl(`${CloudDirs.images}/nature${idx + 1}.jpeg`)
  // );

  const handleGoBack = () => alert("Go back not implemented");
  const handleDislike = () => alert("Dislike candidate not implemented");
  const handleStar = () => alert("Star candidate not implemented");
  const handleLike = () => alert("Like candidate not implemented");

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
          width: "auto",
          height: "auto",
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
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        backgroundColor="#fff"
        cardIndex={0}
        stackSize={3}
      />
    </View>
  );
}
