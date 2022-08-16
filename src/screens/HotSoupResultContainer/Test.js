import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
// import LocationName from "./LocationName";
// import Distance from "./Distance";
// import InfoButton from "./InfoButton";

const Test = (props) => {

    const handlePress = () => {
        console.log("Cliked!");
      };

  return (
    <View style={styles.listContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{props.locationName}</Text>
      </View>
      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>{props.distance}</Text>
      </View>
      <Pressable onPress={handlePress} style={styles.infoBtn}>
        <View>
          <Image
            source={require("./info.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
        </View>
      </Pressable>
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
  infoBtn: {
    flex: 0.1,
    marginLeft: 10,
    marginTop: 22.5,
    marginRight: 12,
    marginBottom: 20,
  },
});

export default Test;
