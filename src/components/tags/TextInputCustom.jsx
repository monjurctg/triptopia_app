import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {MaterialIcons} from "@expo/vector-icons";
import {scale} from "../../../utils/scale";
import { Feather } from '@expo/vector-icons';
const TextInputCustom = ({
  value,
  label,

  name,
  err,
  setErr,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  console.log(err?.type);

  return (
    <View>
      <View style={styles.container}>
        {err?.type !== undefined && err?.type === name && (
          <View
            style={{
              marginBottom: 10,
              paddingRight: 10,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
            <MaterialIcons name="error" size={24} color="red" />

            <Text style={{textAlign: "right", color: "red"}}>
              {err?.message}
            </Text>
          </View>
        )}
        <View
          style={[
            styles.borderLine,
            isFocused && styles.focusedBorderLine,
            err?.type && err.type === name && styles.isError,
          ]}>
          <TextInput
            style={[styles.inputText]}
            // placeholder="Email"
            placeholder={placeholder}
            secureTextEntry={secureTextEntry ? isShowPassword : false}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => {
              if (setErr) {
                setErr({});
              }

              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
          />
          {secureTextEntry && isShowPassword && <Feather onPress={(() => setIsShowPassword(false))} name="eye-off" size={24} color="gray" />}
          {secureTextEntry && !isShowPassword && <Feather onPress={(() => setIsShowPassword(true))} name="eye" size={24} color="gray" />}
          <View
            style={[
              styles.placeholder,
              isFocused && styles.focusedPlaceholder,
            ]}>
            <Text
              style={[
                styles.placeholderText,
                {color: "#8F9CA9"},

                isFocused && {color: "#1F75EC"},
                err?.type && {color: err.type === name && "red"},
              ]}>
              {label}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 100,
    paddingVertical: 10,
    marginTop: scale(15),
    // paddingHorizontal: 16,
  },
  borderLine: {
    borderWidth: 1,
    // borderColor: "#b4b4b4",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F9FAFE",
    borderRadius: 12,
    boxSizing: "border-box",

    borderColor: "#8F9CA9",
    borderWidth: 1.5,
  },
  focusedBorderLine: {
    borderColor: "#1f75ec",
  },
  isError: {
    borderColor: "red",
  },
  inputText: {
    flex: 1,
    fontSize: scale(14),
    marginLeft: 8,
    height: scale(35),
    // color: "#333333",

    // borderRadius: 12,
  },
  placeholder: {
    position: "absolute",
    left: 18,
    top: -10,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
  },
  focusedPlaceholder: {
    top: -10,
  },
  placeholderText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    textTransform: "uppercase",
    color: "#1F75EC",
  },
});

export default TextInputCustom;
