import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import AnimatedCircle from "../component/AnimatedCircle";

function ChooseOne({ navigation }) {
  const [touchArray, setTouchArray] = useState([]);
  const [isPress, setIsPress] = useState(false);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer === 0) {
      console.log("Done!");
    }

    if (!timer || isPress === false) return;

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, isPress]);

  const startTimer = () => {
    console.log("start");
    setTimer(5);
  };

  const stopTimer = () => {
    setTimer(5);
    console.log("stop");
  };

  return (
    <>
      <View
        onStartShouldSetResponder={(event) => {
          setTouchArray(event.nativeEvent.touches);
          startTimer();
          setIsPress(true);
        }}
        style={styles.homeStyle}
        onTouchEnd={(e) => {
          const { pageX, pageY } = touchArray;
          setTouchArray([]);
          setIsPress(false);
          stopTimer();
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
        {isPress ? (
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 280,
            }}
          >
            <Text style={{ fontSize: 85, fontWeight: "bold" }}>{timer}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ChooseOne;
