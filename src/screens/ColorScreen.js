import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ColorComponent from "../components/ColorComponent";
import CustomButton from "../components/CustomButton";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const MAX_RGB_VALUE = 256;

/**
 * @returns A random number between 0 and 255
 */
const getColor = () => {
  return Math.floor(Math.random() * MAX_RGB_VALUE);
};

/**
 * @return A random rgb color
 */
const getRgbColor = () => {
  return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const handleAddColor = () => {
    const rgb = getRgbColor();
    setColors((old) => [
      ...old,
      {
        color: rgb,
        key: Date.now().toString(),
      },
    ]);
  };

  const handleDelete = (key) => {
    setColors((old) => {
      return old.filter((color) => color.key !== key);
    });
  };

  return (
    <View>
      <Text>ColorScreen</Text>
      <CustomButton title="Add Color" onPress={handleAddColor} />
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <ColorComponent
            color={item.color}
            onPress={() => handleDelete(item.key)}
          />
        )}
      />
    </View>
  );
};

export default ColorScreen;
