import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import AnimatedCircle from "../component/AnimatedCircle";

function ChooseOne({ navigation }) {
  const [touchArray, setTouchArray] = useState([]);
  const [isPress, setIsPress] = useState(false);

  const startTimer = () => {
    console.log("start");
  };

  const stopTimer = () => {
    console.log("stop");
  };

  return (
    <View
      onStartShouldSetResponder={(event) => {
        setTouchArray(event.nativeEvent.touches);
        setIsPress(true);
        startTimer();
      }}
      style={styles.homeStyle}
      onTouchEnd={(e) => {
        const { pageX, pageY } = touchArray;
        stopTimer();
        setTouchArray([]);
        setIsPress(false);
      }}
    >
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.identifier}
        data={touchArray}
        renderItem={({ item }) => {
          const { pageX, pageY } = item;
          return (
            <View
              style={[
                {
                  position: "absolute",
                  left: item.pageX - 100,
                  top: item.pageY - 100,
                },
              ]}
            >
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
    backgroundColor: "white",
  },
});

export default ChooseOne;
