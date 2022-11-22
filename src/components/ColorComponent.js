import { View, Text } from "react-native";
import React from "react";

const ColorComponent = ({ color }) => {
  return (
    <View style={{ height: 100, width: 100, backgroundColor: color }}>
    </View>
  );
};

export default ColorComponent;
