import React from "react";
import ResultsList from "./ResultsList";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

const ResultsListContainer = ({ restaurantList }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {restaurantList.map((users, i) => {
          return (
            <ResultsList
              key={i}
              locationName={restaurantList[i].restaurantName}
              distance={restaurantList[i].distance}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#000000",
    marginHorizontal: 0,
  },
});

export default ResultsListContainer;
