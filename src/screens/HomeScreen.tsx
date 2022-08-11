import React from "react";
import { Text, HStack, Center, Heading, VStack, Box } from "native-base";

import DocumentUploader from "components/Form/DocumentUploader";
import { CloudDirs } from "types/global";
import useNavigation from "hooks/useNavigation";
import BrandIcon from "components/theme/atoms/icons/BrandIcon";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} alignItems="center" mt="5">
      <Heading size="lg">Welcome to Swipey</Heading>
      <Box flex={1} justifyContent="center">
        <BrandIcon />
      </Box>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <HStack space={2}>
            <Text>Upload your CV before you start looking for jobs!</Text>
          </HStack>
          <DocumentUploader
            cloudDir={CloudDirs.documents}
            text="Upload your CV"
          />
          {/* <ImageUploader /> */}
        </VStack>
      </Center>
    </Box>
  );
}
