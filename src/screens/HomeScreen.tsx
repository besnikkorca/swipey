import React from "react";
import { Text, HStack, Center, Heading, VStack, Box } from "native-base";
import CompanyIcon from "../components/CompanyIcon";
import { NavigationProp } from "@react-navigation/native";

import Button from "components/Form/Button";
import DocumentUploader from "components/Form/DocumentUploader";
import { CloudDirs } from "types/global";

type Props = {
  navigation: NavigationProp<any>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <Box flex={1} alignItems="center" mt="5">
      <Heading size="lg">Welcome to Swipey</Heading>
      <Box flex={1} justifyContent="center">
        <CompanyIcon />
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
