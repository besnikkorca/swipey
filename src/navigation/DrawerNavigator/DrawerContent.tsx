import React, { useEffect } from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import SessionManager from 'services/SessionManager'
import ToggleDarkMode from 'components/theme/ToggleDarkMode'
import useUserData from 'hooks/useUserData'
import useNavigation from 'hooks/useNavigation'
import { AppScreens, TabsScreens } from 'navigation/types'

export default function DrawerContent(props: DrawerContentComponentProps) {
  const { user, isRecruiter } = useUserData()

  const buttons = [
    {
      iconName: 'briefcase-plus',
      label: 'add job',
      onPress: () => {
        console.log(`Navigate to - `, AppScreens.addJobPosting)
        return props.navigation.navigate(AppScreens.addJobPosting)
      },
    },
    { iconName: 'bookmark', label: 'logout', onPress: SessionManager.logOut },
  ]

  return (
    <DrawerContentScrollView {...props}>
      <VStack
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        space="6"
        my="2"
        mx="1"
      >
        <Box px="4">
          <Text bold color="gray.700">
            Swipey
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            {user?.displayName || user?.email} -{' '}
            {isRecruiter ? 'recruiter' : 'user'}
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="5">
            <VStack space="3" px="5">
              <ToggleDarkMode />
            </VStack>
            <VStack space="3">
              {buttons.map(({ label, onPress, iconName }) => (
                <Pressable key={label} px="5" py="3" onPress={onPress}>
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name={iconName} />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      {label}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  )
}
