import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenNames } from "../navigation/types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

type Props = {
  navigation: NavigationProp<any>;
};

export default function AboutScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>About screen bo ya!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to home"
        onPress={() => navigation.navigate(ScreenNames.home)}
      />
    </View>
  );
}
