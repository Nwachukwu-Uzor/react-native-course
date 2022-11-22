import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const ColorAdjuster = ({ color, onReduce, onIncrease }) => {
  return (
    <View style={styles.container}>
      <Text>{color.toUpperCase()}</Text>
      <CustomButton onPress={onReduce} title={`Less ${color}`} />
      <CustomButton onPress={onIncrease} title={`More ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default ColorAdjuster;
