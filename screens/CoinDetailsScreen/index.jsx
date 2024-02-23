import React from "react";
import Header from "../CoinDetailsScreen/components/header/header";
import { View, Text } from "react-native";
import coin from "../../assets/data/crypto.json";
import styles from "./components/header/styles";
import { AntDesign } from "@expo/vector-icons";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;
  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Header image={small} symbol={symbol} marketCapRank={market_cap_rank} />
      <View style={styles.priceContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop:10
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 15 }}>{name}</Text>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              ${current_price.usd}
            </Text>
          </View>
          <View style={{backgroundColor:percentageColor,padding: 5, borderRadius:5, flexDirection:'row',alignItems:'center'}}>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={11}
            color={'white'}
          />
          <Text style={{ color: "white", fontSize: 17,fontWeight:500, paddingHorizontal:3 }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
