import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
        title="Go to Component Demo"
        onPress={() => {
          navigate("Component");
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigate("FlatList");
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => {
          navigate("Image");
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
