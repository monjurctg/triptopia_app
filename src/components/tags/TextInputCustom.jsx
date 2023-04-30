import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {MaterialIcons} from "@expo/vector-icons";
const TextInputCustom = ({
  value,
  setValue,
  name,
  err,
  setErr,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        {err?.type === name && (
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
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => {
              setErr({});
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
          />
          <View
            style={[
              styles.placeholder,
              isFocused && styles.focusedPlaceholder,
            ]}>
            <Text
              style={[
                styles.placeholderText,
                isFocused && {color: "#1F75EC"},
                err?.type && {color: err.type === name && "red"},
              ]}>
              Phone number
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
    paddingHorizontal: 16,
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

    borderColor: "#1F75EC",
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
    fontSize: 16,
    marginLeft: 8,
    height: 35,
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
