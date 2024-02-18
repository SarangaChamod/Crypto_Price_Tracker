import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList} from "react-native";
import CoinItem from "./components/coinItem";
import Cryptocurrencies from "./assets/data/cryptocurrencies.json";


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={Cryptocurrencies}
      renderItem={({item}) => <CoinItem marketCoin={item}/>}/>
      
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