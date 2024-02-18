import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({marketCoin}) => {
  const{name, current_price, } = marketCoin;
  return (
    <View style={styles.CoinItem}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={styles.CoinRate}>
          <View style={styles.rankNoCover}>
            <Text style={styles.rankNo}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign name="caretdown" size={12} color="white" />
          <Text style={styles.text}>1.02%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.text}>56265.09</Text>
        <Text style={styles.text}>MCap 1.076 T</Text>
      </View>
    </View>
  );
};


export default CoinItem;
