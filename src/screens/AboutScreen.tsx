import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import useNavigation from "hooks/useNavigation";
import { Button, StyleSheet, Text, View } from "react-native";
import { AppScreens } from "../navigation/types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function AboutScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>About screen bo ya!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to home"
        onPress={() => navigation.navigate(AppScreens.home)}
      />
    </View>
  );
}
