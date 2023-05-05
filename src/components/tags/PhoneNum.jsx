import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";
import {Image} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import {scale} from "../../../utils/scale";

const PhoneNum = ({value, setValue}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.borderLine, isFocused && styles.focusedBorderLine]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/asian-and-oceania-flags/100/Bangladesh-512.png",
              }}
              alt="Alternate Text"
              style={{height: 30, width: 30}}
            />
            <AntDesign
              name="down"
              size={18}
              style={{marginLeft: 10, fontWeight: "bold"}}
              color="#94A3B8"
            />
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 20,
              }}>
              +88
            </Text>
            <View
              style={{
                width: 2,
                height: 20,
                backgroundColor: "#66737F",
                marginLeft: 4,
              }}></View>
            <TextInput
              style={styles.inputText}
              // placeholder="Email"
              keyboardType="decimal-pad"
              value={value}
              onChange={(text) => setValue(text)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
          <TouchableOpacity onPress={() => setValue("")}>
            <AntDesign name="close" size={20} color="#1F75EC" />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.placeholder, isFocused && styles.focusedPlaceholder]}>
          <Text style={styles.placeholderText}>Mobile number</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 10,

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

    borderColor: "#1F75EC",
    borderWidth: 1.5,
  },
  focusedBorderLine: {
    borderColor: "#1f75ec",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    height: scale(35),
    color: "#272D37",
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
    fontSize: scale(10),
    lineHeight: scale(14),
    letterSpacing: 0.04,
    textTransform: "uppercase",
    color: "#1F75EC",
  },
});

export default PhoneNum;
