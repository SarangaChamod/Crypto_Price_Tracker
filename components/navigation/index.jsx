import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/homeScreen/homeScreen.jsx";
import CoinDetailsScreen from "../../screens/CoinDetailsScreen/index.jsx";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"CoinDetailsScreen"} component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};
export default Navigation;
