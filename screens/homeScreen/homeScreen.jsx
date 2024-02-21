import React from "react";
import { FlatList } from "react-native";
import CoinItem from "../../components/coinItem/index";
import Cryptocurrencies from "../../assets/data/cryptocurrencies.json";

const HomeScreen = () => {
    return(
        <FlatList data={Cryptocurrencies}
      renderItem={({item}) => <CoinItem marketCoin={item}/>}/>
    )
}

export default HomeScreen;