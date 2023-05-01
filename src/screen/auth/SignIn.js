import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { scale } from "../../../utils/scale";

const SignIn = () => {
  return (
    <MainLayout>
      <Text>sign in</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: scale(20),
    flexDirection: "row",
  },

  headingText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 33,
    lineHeight: 49,
    color: "#272D37",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: scale(12),
    lineHeight: 22,
    color: "#8F9CA9",
    width: scale(230),
    marginTop: scale(3),
  },
  inputContainer: {
    marginTop: scale(20),
  },
});

export default SignIn;
