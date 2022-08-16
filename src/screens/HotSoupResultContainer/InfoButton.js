import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";

const InfoButton = () => {
  const handlePress = () => {
    console.log("Cliked!");
  };

  return (
    <Pressable onPress={handlePress} style={styles.infoBtn}>
      <View>
        <Image
          source={require("./info.png")}
          style={{ width: 25, height: 25, tintColor: "white" }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  infoBtn: {
    flex: 0.1,
    marginLeft: 10,
    marginTop: 22.5,
    marginRight: 12,
    marginBottom: 20,
  },
});

export default InfoButton;
