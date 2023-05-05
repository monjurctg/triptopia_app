import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import MainLayout from "../../components/MainLayout";
import {scale} from "../../../utils/scale";
import TextInputCustom from "../../components/tags/TextInputCustom";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import PhoneNum from "../../components/tags/PhoneNum";

const ForgotPassword = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState("Email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleButtonPress = (index) => {
    setActiveButtonIndex(index);
  };
  return (
    <MainLayout isHeader={true}>
      <View style={styles.heading}>
        <Text style={[styles.headingText]}>Forgot </Text>
        <Text style={[styles.headingText, {fontWeight: "600", color: "black"}]}>
          password?
        </Text>
      </View>
      <Text style={styles.text}>
        Don’t worry! Just fill in your email and we’ll send a code to reset your
        password.
      </Text>
      {/* active bar */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButtonIndex === "Email" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("Email")}>
          <Text>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButtonIndex === "Phone" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("Phone")}>
          <Text>phone</Text>
        </TouchableOpacity>
      </View>
      {activeButtonIndex === "Email" && (
        <TextInputCustom
          label={"EMAIL"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder={"percy jackson@gmail.com"}
        />
      )}

      {activeButtonIndex === "Phone" && (
        <PhoneNum value={phone} setValue={setPhone} />
      )}
      <SubmitBtn title={"Send Code"} style={{marginTop: scale(25)}} />
    </MainLayout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  heading: {
    // marginTop: scale(10),
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
    width: "90%",
    marginTop: scale(3),
  },
  inputContainer: {
    marginTop: scale(20),
  },
  buttonRow: {
    marginTop: scale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6F7F9",
    width: "100%",
    padding: scale(5),
    // paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#F6F7F9",
    width: 160,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#FFFFFF",
  },
});
