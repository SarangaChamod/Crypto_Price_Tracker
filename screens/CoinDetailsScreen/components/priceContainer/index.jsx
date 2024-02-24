import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "./styles";

const priceContainer = (props) => {
  const { name, currentPrice, priceChangePercentage24h } = props;
  const percentageColor = priceChangePercentage24h < 0 ? "#ea3943" : "#16c784";
  return (
    <View style={styles.priceContainer}>
      <View style={styles.main}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${currentPrice.usd}</Text>
        </View>
        <View style={styles.iconContainer(percentageColor)}>
          <AntDesign
            name={priceChangePercentage24h < 0 ? "caretdown" : "caretup"}
            size={11}
            color={"white"}
          />
          <Text style={styles.pricePresent}>
            {priceChangePercentage24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};
export default priceContainer;
