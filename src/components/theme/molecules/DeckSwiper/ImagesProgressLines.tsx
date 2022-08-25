import { HStack, View } from "native-base";

export default function ({
  user,
  imageIdx,
}: {
  user: {
    uid: number;
    firstName: string;
    age: number;
    hobbies: string[];
    imagesPaths: string[];
    images: any[];
  };
  imageIdx: number;
}) {
  return (
    <HStack position="absolute" zIndex={100} top={2} mx={2}>
      {user.imagesPaths.length > 1 &&
        user.imagesPaths.map((path, idx) => (
          <View
            mx={1}
            key={path}
            justifyContent="space-around"
            rounded="full"
            shadow={2}
            backgroundColor={
              idx === imageIdx ? "white" : "rgba(200,200,200,0.5)"
            }
            flex={1}
            height={1}
          ></View>
        ))}
    </HStack>
  );
}
