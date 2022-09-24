import { HStack, View } from 'native-base'
import { UserWithDetails } from 'types/user'

type Props = { user: UserWithDetails; imageIdx: number }

export default function ImagesProgressLines({ user, imageIdx }: Props) {
  return (
    <HStack position="absolute" zIndex={100} top={2} mx={2}>
      {user.sections.length > 1 &&
        user.sections.map(({ id }, idx) => (
          <View
            mx={1}
            key={id}
            justifyContent="space-around"
            rounded="full"
            shadow={2}
            backgroundColor={
              idx === imageIdx ? 'white' : 'rgba(200,200,200,0.5)'
            }
            flex={1}
            height={1}
          ></View>
        ))}
    </HStack>
  )
}
