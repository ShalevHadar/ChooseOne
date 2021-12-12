import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import AnimatedCircle from "../component/AnimatedCircle";

function ChooseOne({ navigation }) {
  const [touchArray, setTouchArray] = useState([]);
  const [isPress, setIsPress] = useState(false);
  return (
    <View
      onStartShouldSetResponder={(event) => {
        setTouchArray(event.nativeEvent.touches);
        setIsPress(true);
      }}
      style={styles.homeStyle}
      onTouchEnd={(e) => {
        //console.log(touchArray);
        setTouchArray([]);
        setIsPress(false);
      }}
    >
      <FlatList
        keyExtractor={(item) => item.identifier}
        data={touchArray}
        renderItem={({ item }) => {
          return (
            <View>
              {isPress ? <AnimatedCircle itemId={item.identifier} /> : null}
            </View>
          );
        }}
      />
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
    flexDirection: "row",
  },
  wheelStyle: {},
});

export default ChooseOne;
