import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ColorComponent = ({ color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.text}>{color}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    marginVertical: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#fff",
  },
});
export default ColorComponent;
