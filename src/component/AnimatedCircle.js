import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { circles } from "./Photos";

const AnimatedCircle = (props) => {
  const colors = ["red", "green", "blue", "orange", "black"];
  const [item, setItem] = useState();

  useEffect(() => {
    const { itemId } = props;
    setItem(itemId);
  }, []);

  let colorCircle = `circles.${colors[item - 1]}.uri`;
  console.log(colorCircle);

  return (
    <View>
      <AnimatedLottieView
        source={colorCircle}
        style={styles.circleStyle}
        autoPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: 170,
    height: 170,
  },
});

export default AnimatedCircle;
