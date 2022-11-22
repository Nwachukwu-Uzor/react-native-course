import { View, Text } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail title="Mountain" />
      <ImageDetail title="Beach"/>
      <ImageDetail title="Forest"/>
    </View>
  );
};

export default ImageScreen;
