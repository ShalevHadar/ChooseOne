import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

function ChooseOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ChooseOne;
