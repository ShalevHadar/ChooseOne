import LottieView from "lottie-react-native";
import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeStyle}>
      <Text style={styles.textStyle}>Welcome to ChooseOne</Text>

      <LottieView
        style={styles.homeImage}
        source={require("../../assets/lottie/19934-flirting-dog.json")}
        autoPlay
      />
      <View style={styles.position}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Choose")}
        >
          <Text style={styles.text}>Go Pick !</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    width: 230,
    height: 330,
  },
  textStyle: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#064663",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  position: {
    paddingTop: 60,
  },
});

export default HomeScreen;
