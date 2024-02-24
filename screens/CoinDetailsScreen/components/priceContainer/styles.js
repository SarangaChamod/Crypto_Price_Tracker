import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  name: { color: "white", fontSize: 15 },
  currentPrice: { color: "white", fontSize: 30, fontWeight: "bold" },
  pricePresent: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    paddingHorizontal: 3,
  },
  iconContainer: (percentageColor) => ({
    backgroundColor: percentageColor,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  }),
});

export default styles;
