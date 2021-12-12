import AnimatedLottieView from "lottie-react-native";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function SpinningWheel() {
  return (
    <View>
      <AnimatedLottieView
        style={styles.SquareStyle}
        source={require("../../assets/lottie/88425-multiple-spinning-dotted-rings-loading.json")}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SquareStyle: {
    height: 150,
    width: 150,
  },
});

export default SpinningWheel;
