import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import SpinningWheel from "../component/SpinningWheel";

function ChooseOne({ navigation }) {
  const [isPress, setIsPress] = useState(false);
  return (
    <View
      style={styles.homeStyle}
      onTouchStart={(e) => {
        console.log(e.nativeEvent.identifier);
        setIsPress(true);
      }}
      onTouchEnd={(e) => {
        setIsPress(false);
      }}
    >
      {/* <FlatList
        keyExtractor={(item) => item}
        data={position}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>yo</Text>
            </View>
          );
        }}
      /> */}
      {isPress ? (
        <>
          <SpinningWheel />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  SquareStyle: {
    height: 100,
    width: 100,
  },
});

export default ChooseOne;
