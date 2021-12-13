import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { circles } from "./Photos";

const Winner = ({ winner }) => {
  const colors = ["red", "green", "blue", "orange", "black"];
  const [colorStates, setColorStates] = useState([
    circles.red.hexCode,
    circles.green.hexCode,
    circles.blue.hexCode,
    circles.orange.hexCode,
    circles.black.hexCode,
  ]);
  let winnerColor = colorStates[winner];

  return (
    <View style={{ ...styles.container, backgroundColor: winnerColor }}>
      <Text>{colors[winner]} Wins !</Text>
    </View>
  );
};

const styles = (props) => StyleSheet.create({});

export default Winner;
