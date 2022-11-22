import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <CustomButton
        title="Go to Component Demo"
        onPress={() => {
          navigate("Component");
        }}
      />
      <CustomButton
        title="Go to List Demo"
        onPress={() => {
          navigate("FlatList");
        }}
      />
      <CustomButton
        title="Go to Image Demo"
        onPress={() => {
          navigate("Image");
        }}
      />
      <CustomButton
        title="Go to Counter Demo"
        onPress={() => {
          navigate("Counter");
        }}
      />
      <CustomButton
        title="Go to Color Demo"
        onPress={() => {
          navigate("Color");
        }}
      />
      <CustomButton
        title="Go to Color Adjuster Demo"
        onPress={() => {
          navigate("ColorAdjuster");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 10,
  },
  grid: {
    button: {
      marginVertical: 10,
    },
  },
});

export default HomeScreen;
