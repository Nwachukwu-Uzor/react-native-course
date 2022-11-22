import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default CustomButton;
