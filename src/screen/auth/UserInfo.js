import {StyleSheet, Text, View} from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import {scale} from "../../../utils/scale";
import TextInputCustom from "../../components/tags/TextInputCustom";
import SubmitBtn from "../../components/buttons/SubmitBtn";

const UserInfo = () => {
  return (
    <MainLayout>
      <View style={styles.heading}>
        <Text style={[styles.headingText]}>Hello,</Text>
        <Text style={[styles.headingText, {fontWeight: "600", color: "black"}]}>
          There
        </Text>
      </View>
      <Text style={styles.text}>
        Enter your information below to get started your trips
      </Text>
      <View style={styles.inputContainer}>
        <TextInputCustom label={"NAME"} />
        <TextInputCustom label={"EMAIL"} />
        <TextInputCustom label={" PASSWORD"} secureTextEntry={true} />
      </View>
      <View>
        <SubmitBtn title={"get started"} style={{marginTop: 20}} />
      </View>
    </MainLayout>
  );
};

export default UserInfo;

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
