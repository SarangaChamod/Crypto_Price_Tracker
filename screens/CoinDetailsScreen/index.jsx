import React from "react";

import Header from "../CoinDetailsScreen/components/header/header";
import PriceContainer from "./components/priceContainer";

import coin from "../../assets/data/crypto.json";

import { View, Text } from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

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

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <Header image={small} symbol={symbol} marketCapRank={market_cap_rank} />
      <PriceContainer
        name={name}
        currentPrice={current_price}
        priceChangePercentage24h={price_change_percentage_24h}
      />

      <View style={{ flex: 1 }}>
        <LineChart
          data={chartData}
          width={Dimensions.get("window").width - 20} // Adjust width as needed
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
