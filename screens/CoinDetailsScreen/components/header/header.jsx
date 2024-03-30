import React from "react";
import { Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  
  const navigation = useNavigation();

  const { image, symbol, marketCapRank } = props;
  return (
    <View style={styles.main}>
      <Ionicons
        name="chevron-back"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.coinName}>
        <Image source={{ uri: image }} style={{ width: 30, height: 30 }} />
        <Text style={styles.symbolOfCoinName}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankNoCover}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default Header;
