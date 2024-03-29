import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    text: {
      color: "white",
      marginRight: 4,
    },
    
    CoinItem: {
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#282828",
      padding: 15,
    },
    CoinRate: {
      flexDirection: "row",
      alignItems: "center",
    },
    rankNo: {
      color: "white",
      fontWeight: "bold",
    },
    rankNoCover: {
      backgroundColor: "#585858",
      paddingHorizontal: 5,
      borderRadius: 5,
      marginRight: 5,
    },
  });

  export default styles;