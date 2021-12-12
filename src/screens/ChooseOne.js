import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
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
        const { pageX, pageY } = touchArray;
        console.log(pageX, pageY);
        setTouchArray([]);
        setIsPress(false);
      }}
    >
      <FlatList
        keyExtractor={(item) => item.identifier}
        data={touchArray}
        renderItem={({ item }) => {
          const { pageX, pageY } = item;
          console.log(pageX, pageY);
          return (
            <View
              style={[
                {
                  position: "absolute",
                  left: item.pageX - 85,
                  top: item.pageY - 85,
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
    borderWidth: 1,
    margin: 0,
    borderColor: "black",
  },
});

export default ChooseOne;
