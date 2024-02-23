import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    // paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  coinName: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolOfCoinName: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rankNoCover: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
