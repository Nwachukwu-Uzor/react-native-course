import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current count: {counter}</Text>
      <CustomButton
        title="Decrement"
        onPress={() => {
          setCounter((old) => old - 1);
        }}
      />
      <CustomButton
        title="Increment"
        onPress={() => {
          setCounter((old) => old + 1);
        }}
      />
    </View>
  );
};

export default CounterScreen;
