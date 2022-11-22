import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const data = [
  { id: "1", name: "Uzor", job: "Developer", age: 20 },
  { id: "2", name: "Mark", job: "Doctor" , age: 20},
  { id: "3", name: "Fred", job: "Photographer", age: 20 },
  { id: "4", name: "Fred", job: "Photographer", age: 20 },
  { id: "5", name: "Fred", job: "Photographer", age: 20 },
  { id: "6", name: "Fred", job: "Photographer", age: 20 },
];

const FlatListScreen = () => {
  return (
    <View>
      <Text>FlatListScreen</Text>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.listItem}>
              <Text>My name is {item.name}</Text>
              <Text>I am a {item.job}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 50,
    marginHorizontal: 5,
  },
});

export default FlatListScreen;
