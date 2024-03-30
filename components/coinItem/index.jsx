import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ marketCoin }) => {
  const navigation = useNavigation(); // Correct usage of useNavigation hook

  const {
    name,
    image,
    symbol,
    market_cap,
    current_price,
    market_cap_rank,
    price_change_24h,
  } = marketCoin;

  const percentageColor = price_change_24h < 0 ? "#ea3943" : "#16c784";

  const nomalizeMarketCap = (marketCap) => {
    if (market_cap > 1_000_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000_000)} T`;
    }
    if (market_cap > 1_000_000_000) {
      return `${Math.floor(marketCap / 1_000_000_000)} B`;
    }
    if (market_cap > 1_000_000) {
      return `${Math.floor(marketCap / 1_000_000)} M`;
    }
    if (market_cap > 1_000) {
      return `${Math.floor(marketCap / 1_000)} K`;
    }
    return marketCap;
  };

  return (
    <Pressable
      style={styles.CoinItem}
      onPress={() => navigation.navigate("CoinDetailsScreen")} // Using navigation object directly
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.CoinRate}>
          <View style={styles.rankNoCover}>
            <Text style={styles.rankNo}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_24h < 0 ? "caretdown" : "caretup"}
            size={11}
            color={percentageColor}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_24h.toFixed(3)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.rankNo}>{current_price.toFixed(2)}</Text>
        <Text style={styles.text}>MCap {nomalizeMarketCap(market_cap)}</Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
