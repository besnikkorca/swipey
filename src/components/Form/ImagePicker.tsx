import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Box, Image, Progress, View } from "native-base";

import Button from "components/Form/Button";
import { SharedProps } from "./types";

type Props = {
  onPick?: (filePath: string) => void;
  isLoading?: boolean;
  loadPercentage?: number;
} & SharedProps;

export default function ({
  loadPercentage = 0,
  isLoading = false,
  text = "Pick Image",
  onPick,
}: Props) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function getImageAlt() {
    const splitName = image?.split("/");
    return splitName?.[splitName?.length - 1];
  }

  useEffect(() => {
    if (onPick && image) onPick(image);
  }, [image]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button isLoading={isLoading} onPress={pickImage}>
        {text}
      </Button>
      {image && (
        <>
          <Box flex={1}>
            <Image
              source={{ uri: image }}
              alt={getImageAlt()}
              style={{ width: 200, height: 200 }}
            />
            {loadPercentage !== 0 && (
              <Progress my="2" colorScheme="emerald" value={loadPercentage} />
            )}
          </Box>
        </>
      )}
    </View>
  );
}

/*
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, View } from "native-base";
import storage from "@react-native-firebase/storage";

import Button from "components/Form/Button";

export default function () {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const filename = "flower.jpg";
    const reference = storage().ref(filename);

    if (!result.cancelled) {
      setImage(result.uri);
      try {
        console.log("executing !!!");
        const task = reference.putFile(result.uri);

        task.on("state_changed", (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
          );
        });

        task.then(() => {
          console.log("Image uploaded to the bucket!");
        });
      } catch (err) {
        console.error("err !!!! ", err);
      }
    }
  };

  function getImageAlt() {
    const splitName = image?.split("/");
    return splitName?.[splitName?.length - 1];
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={pickImage}>Pick an image from camera roll</Button>
      {image && (
        <Image
          source={{ uri: image }}
          alt={getImageAlt()}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}

*/
