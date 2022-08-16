import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LocationName = (props) => {
  return (
    <View style={styles.locationContainer}>
      <Text style={styles.locationText}>{props.locationName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    backgroundColor: "#232323",
    flex: 0.75,
    marginLeft: 12,
    marginTop: 20,
    marginBottom: 20,
    height: 35,
  },
  locationText: {
    color: "#ffffff",
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
});

export default LocationName;
