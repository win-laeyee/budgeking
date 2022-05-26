import React from "react";
import { StyleSheet, View } from "react-native";
import colours from "../config/colours";
import { BlackButton } from "../config/reusableButton";

function LoginSignupPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <BlackButton
        text={"Login"}
        moreStyle={styles.loginButton}
        handlePress={() => navigation.navigate("Login Page")}
      />
      <BlackButton text={"Sign Up"} moreStyle={styles.signUpButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    position: "relative",
    top: 20,
    width: 196,
    height: 172,
    backgroundColor: "#D9D9D9",
  },
  loginButton: {
    position: "relative",
    top: 30,
  },
  signUpButton: {
    position: "absolute",
    bottom: 100,
  },
});

export default LoginSignupPage;
