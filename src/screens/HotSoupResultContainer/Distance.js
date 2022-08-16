import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Distance = ({ distance }) => {
  return (
    <View style={styles.distanceContainer}>
      <Text style={styles.distanceText}>{distance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  distanceContainer: {
    flex: 0.14,
    backgroundColor: "#4F4F4F",
    borderRadius: 5,
    marginLeft: 7,
    marginTop: 22.5,
    marginBottom: 20,
    height: 30,
  },
  distanceText: {
    color: "#B2FFC3",
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
});

export default Distance;
