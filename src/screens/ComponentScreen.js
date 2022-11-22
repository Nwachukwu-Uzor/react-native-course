import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.header}>ComponentScreen</Text>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
});

export default ComponentScreen;
