import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import coin from "../../../../assets/data/crypto.json";

const Header = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = coin;
  return (
    <View style={styles.main}>
      <Ionicons name="chevron-back" size={30} color="white" />
      <View style={styles.coinName}>
        <Image source={{ uri: small }} style={{ width: 30, height: 30 }} />
        <Text style={styles.symbolOfCoinName}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankNoCover}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default Header;
