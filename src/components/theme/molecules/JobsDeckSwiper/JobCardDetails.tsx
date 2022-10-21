import { Box, HStack, View, VStack } from 'native-base'
import RoundButton from 'components/Form/buttons/RoundButton'
import Text from '../../atoms/text/Text'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { GenericVoidFunc } from 'types/global'
import Icon from 'components/theme/atoms/Icon'
import { JobPosting } from 'types/jobposting'

const styles = StyleSheet.create({
  opacityStyles: { flex: 1 },
})

type Props = {
  card: JobPosting
  buttons: { iconName: string; onPress: GenericVoidFunc; color: string }[]
  handlePressInfo: GenericVoidFunc
}

export default function JobCardDetails({
  card,
  buttons,
  handlePressInfo,
}: Props) {
  return (
    <Box
      top={0}
      left={0}
      position="absolute"
      height="100%"
      width="100%"
      zIndex={101}
    >
      <VStack flex={1} justifyContent="flex-end">
        <HStack
          borderRadius={10}
          flex={0.4}
          backgroundColor={{
            linearGradient: {
              colors: ['transparent', 'black'],
            },
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.opacityStyles}
            onPress={handlePressInfo}
          >
            <VStack flex={1} justifyContent="flex-end">
              <VStack mx="2" my="4">
                <HStack justifyContent="space-between" mb="2">
                  <HStack alignItems="center">
                    <Text>Contact: {card.contact}</Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Text>Read more &nbsp;</Text>
                    <Icon
                      size="3xl"
                      fontWeight={700}
                      name="info"
                      color="white"
                    />
                  </HStack>
                </HStack>
                <HStack>
                  {card.technologies.map((hobby, idx) => (
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
  )
}
