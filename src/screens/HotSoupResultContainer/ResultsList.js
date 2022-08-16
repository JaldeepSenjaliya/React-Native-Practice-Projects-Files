import React from "react";
import { View, StyleSheet } from "react-native";
import LocationName from "./LocationName";
import Distance from "./Distance";
import InfoButton from "./InfoButton";

const ResultsList = ({ locationName, distance }) => {
  return (
    <View style={styles.listContainer}>
      <LocationName locationName={locationName} />
      <Distance distance={distance} />
      <InfoButton />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ResultsList;
