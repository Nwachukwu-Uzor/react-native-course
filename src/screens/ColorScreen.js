import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ColorComponent from "../components/ColorComponent";
import CustomButton from "../components/CustomButton";

const MAX_RGB_VALUE = 255;

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const handleAddColor = () => {
    const rgb = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    setColors((old) => [
      ...old,
      {
        color: rgb,
        key: Date.now().toString(),
      },
    ]);
  };

  // Returns a random color between 0 and 255
  const getColor = () => {
    return Math.floor(Math.random() * MAX_RGB_VALUE);
  };
  return (
    <View>
      <Text>ColorScreen</Text>
      <CustomButton title="Add Color" onPress={handleAddColor} />
      <ColorComponent color="rgb(43, 210, 122)" />
      <FlatList
        data={colors}
        renderItem={({ item }) => <ColorComponent color={item.color} />}
      />
    </View>
  );
};

export default ColorScreen;
