import { useEffect, useState } from "react";
import { Image, View } from "native-base";
import getImageAlt from "utils/file/getImageAlt";
import { TouchableOpacity } from "react-native";
import ImagesProgressLines from "./ImagesProgressLines";
import { ImageDetails } from "./ImageDetails";

export default function ({
  user,
  handleGoBack,
  handleDislike,
  handleStar,
  handleLike,
}: {
  user: {
    uid: number;
    firstName: string;
    age: number;
    hobbies: string[];
    imagesPaths: string[];
    images: any[];
  };
  handleGoBack: () => void;
  handleDislike: () => void;
  handleStar: () => void;
  handleLike: () => void;
}): JSX.Element | null {
  const [imageIdx, setImageIdx] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTutorial(false);
    }, 3000);
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handlePressLeft = () => {
    if (imageIdx !== 0) setImageIdx(imageIdx - 1);
    console.log("PRESS left");
  };
  const handlePressRight = () => {
    if (imageIdx !== user.imagesPaths.length - 1) setImageIdx(imageIdx + 1);
    console.log("PRESS right");
  };

  const handlePressInfo = () => {
    alert("PRESS info not implemented yet!");
  };
  const buttons = [
    {
      iconName: "replay",
      onPress: handleGoBack,
      color: "orange.400",
    },
    {
      iconName: "close",
      onPress: handleDislike,
      color: "red.400",
    },
    {
      iconName: "star",
      onPress: handleStar,
      color: "yellow.400",
    },
    {
      iconName: "thumb-up-alt",
      onPress: handleLike,
      color: "blue.400",
    },
  ];

  return (
    <View flex={1} position="relative" rounded="xl" overflow="hidden">
      <View position="relative" flex={1}>
        {user.imagesPaths.map((_, idx) => (
          <Image
            position="absolute"
            zIndex={imageIdx === idx ? 1 : 0}
            key={user.imagesPaths[idx]}
            width="100%"
            height="100%"
            source={user.images[idx]}
            alt={getImageAlt(user.imagesPaths[idx])}
            resizeMode="cover"
          />
        ))}
      </View>
      <ImagesProgressLines {...{ user, imageIdx }} />

      <ImageDetails
        {...{
          showTutorial,
          user,
          buttons,
          handlePressLeft,
          handlePressRight,
          handlePressInfo,
        }}
      />
    </View>
  );
}
