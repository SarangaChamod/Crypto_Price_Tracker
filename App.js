import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import HomeScreen from "./screens/homeScreen/homeScreen";
import CoinDetailsScreen from "./screens/CoinDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailsScreen />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 25,
  },
});
