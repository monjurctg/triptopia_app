import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {scale} from "../../../utils/scale";

const SubmitBtn = ({children, onPress, title, style, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {...style}]}>
      <Text
        style={{
          ...textStyle,
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 16,
          // lineHeight: 10,
          textAlign: "center",
          letterSpacing: 0.04,
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}>
        {title}
      </Text>
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
