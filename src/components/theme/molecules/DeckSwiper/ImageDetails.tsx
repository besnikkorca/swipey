import { Box, HStack, View, VStack } from "native-base";
import RoundButton from "components/Form/buttons/RoundButton";
import Text from "../../atoms/text/Text";
import Title from "../../atoms/text/Title";
import Subtitle from "../../atoms/text/Subtitle";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GenericVoidFunc } from "types/global";

const styles = StyleSheet.create({
  opacityStyles: { flex: 1 },
});

export function ImageDetails({
  user,
  buttons,
  handlePressLeft,
  handlePressRight,
  handlePressInfo,
  showTutorial,
}: {
  showTutorial: boolean;
  user: {
    uid: number;
    firstName: string;
    age: number;
    hobbies: string[];
    imagesPaths: string[];
    images: any[];
  };
  buttons: { iconName: string; onPress: () => void; color: string }[];
  handlePressLeft: GenericVoidFunc;
  handlePressRight: GenericVoidFunc;
  handlePressInfo: GenericVoidFunc;
}) {
  return (
    <Box
      top={0}
      left={0}
      position="absolute"
      height="100%"
      width="100%"
      zIndex={101}
    >
      <VStack flex={1}>
        <HStack flex={1}>
          <TouchableOpacity
            style={styles.opacityStyles}
            onPress={handlePressLeft}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.opacityStyles}
            onPress={handlePressRight}
          ></TouchableOpacity>
        </HStack>
        <HStack
          flex={0.4}
          backgroundColor={{
            linearGradient: {
              colors: ["transparent", "black"],
            },
          }}
        >
          <TouchableOpacity
            style={styles.opacityStyles}
            onPress={handlePressInfo}
          >
            <VStack flex={1} justifyContent="flex-end">
              <VStack mx="2" my="4">
                <HStack alignItems="flex-end" mb="2">
                  <Title fontWeight="bold" color="white">
                    {user.firstName}
                  </Title>
                  <Subtitle fontSize="3xl" color="white" mb={1}>
                    &nbsp;
                    {user.age}
                  </Subtitle>
                </HStack>
                <HStack>
                  {user.hobbies.map((hobby, idx) => (
                    <View
                      key={hobby}
                      ml={idx === 0 ? 0 : 2}
                      px="3"
                      py="1"
                      backgroundColor="gray.400"
                      rounded="full"
                    >
                      <Text>{hobby}</Text>
                    </View>
                  ))}
                </HStack>
              </VStack>
              <HStack justifyContent="space-around" pt="2" pb="4" shadow="9">
                {buttons.map(({ iconName, onPress, color }) => (
                  <RoundButton
                    key={iconName}
                    iconName={iconName}
                    onPress={onPress}
                    color={color}
                  />
                ))}
              </HStack>
            </VStack>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  );
}
