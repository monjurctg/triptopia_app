import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import MainLayout from "../components/MainLayout";
import SubmitBtn from "../components/buttons/SubmitBtn";
import {scale} from "../../utils/scale";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (text) => {
    setOtp(text);
  };

  return (
    <MainLayout isHeader={true}>
      <View style={{marginBottom: 52}}>
        <View style={{display: "flex", flexDirection: "row", marginBottom: 8}}>
          <Text
            style={{
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 32,
              lineHeight: 40,
              textTransform: "capitalize",
              color: "#272D37",
            }}>
            Verification{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: 32,
              lineHeight: 40,
              color: "#272D37",
            }}>
            code!
          </Text>
        </View>
        <Text
          style={{
            color: "#8F9CA9",
            fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 22,
          }}>
          We sent you a verification code to your mobile{" "}
          <Text
            style={{
              color: "#272D37",
              fontWeight: "700",
            }}>
            +880-123456789
          </Text>
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[0]}
            onChangeText={(text) => handleOtpChange(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[1]}
            onChangeText={(text) => handleOtpChange(otp[0] + text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[2]}
            onChangeText={(text) => handleOtpChange(otp[0] + otp[1] + text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[3]}
            onChangeText={(text) =>
              handleOtpChange(otp[0] + otp[1] + otp[2] + text)
            }
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "#8F9CA9",
            fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 22,
            marginBottom: 24,
          }}>
          Resend:{" "}
          <Text
            style={{
              color: "#272D37",
              fontWeight: "700",
            }}>
            60s
          </Text>
        </Text>
        <SubmitBtn title={"SUBMIT"} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  inputContainer: {
    width: scale(57),
    height: scale(54),
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 7,
    borderRadius: 12,
  },
  input: {
    width: "100%",
    padding: 5,
    fontSize: 25,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default OTPVerification;
