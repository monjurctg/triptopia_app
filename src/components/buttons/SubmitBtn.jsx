import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {scale} from "../../../utils/scale";

const SubmitBtn = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      {children}
    </TouchableOpacity>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#1F75EC",
    borderRadius: 14,
    height: scale(45),

    justifyContent: "center",
    alignItems: "center",
  },
});
