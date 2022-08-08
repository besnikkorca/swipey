import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  Switch,
  Text,
  useColorMode,
  View,
  VStack,
} from "native-base";
import StackNavigator from "../StackNavigator";
import SessionManager from "../../services/SessionManager";
import useUserData from "../../hooks/useUserData";

const Drawer = createDrawerNavigator();

const getIcon = (screenName: string) => {
  switch (screenName) {
    case "Inbox":
      return "email";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Spam":
      return "alert-circle";
    default:
      return undefined;
  }
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <VStack
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        space="6"
        my="2"
        mx="1"
      >
        <Box px="4">
          <Text bold color="gray.700">
            Swipey
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="5">
            <VStack space="3" px="5">
              <ToggleDarkMode />
            </VStack>
            <VStack space="3">
              <Pressable px="5" py="3" onPress={SessionManager.logOut}>
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="bookmark" />}
                  />
                  <Text fontWeight="500" color="gray.700">
                    Logout
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="App" component={StackNavigator} />
    </Drawer.Navigator>
  );
}

export default function () {
  const { user } = useUserData();
  return (
    <NavigationContainer>
      {user ? (
        <AppDrawer />
      ) : (
        <Box safeArea flex={1}>
          <StackNavigator />
        </Box>
      )}
    </NavigationContainer>
  );
}
