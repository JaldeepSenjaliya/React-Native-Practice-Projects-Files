import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import ResultsListContainer from "./src/screens/ResultsListContainer";
import { restaurantList } from "./src/screens/restaurantList";

export default function App() {
  return (
    <View>
      <ResultsListContainer restaurantList={restaurantList} />
    </View>
  );
}

const styles = StyleSheet.create({});
