import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import PhoneNum from "../../components/tags/PhoneNum";
import {SafeAreaView} from "react-native-safe-area-context";
import MainLayout from "../../components/MainLayout";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import {scale} from "../../../utils/scale";

const InputMobile = ({navigation}) => {
  const [number, setNumber] = useState("");
  return (
    <MainLayout isHeader={true}>
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            // fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 32,
            lineHeight: 40,
            textTransform: "capitalize",
            color: "#272D37",
          }}>
          What’s your
        </Text>
        <Text
          style={{
            // fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 32,
            lineHeight: 40,
            textTransform: "capitalize",
            color: "#272D37",
          }}>
          Phone Number?
        </Text>
      </View>
      <PhoneNum value={number} setValue={setNumber} />
      <View style={{marginTop: scale(30)}}>
        <SubmitBtn
          onPress={() => navigation?.navigate("otp")}
          title={"SEND CODE"}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: scale(40),
        }}>
        <Text
          style={{
            //   fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 19,
            textAlign: "center",
            color: "#9299A0",
          }}>
          Or
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={{height: 40, width: 40}}
            source={{
              uri: "https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: scale(50),
          flexDirection: "row",
        }}>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 22,
            color: "#8F9CA9",
          }}>
          Already have an account?
        </Text>

        <TouchableOpacity
          title={"Sign In"}
          onPress={() => navigation?.navigate("login")}>
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 22,
              color: "#1F75EC",
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default InputMobile;

const styles = StyleSheet.create({
  socialIcon: {
    backgroundColor: "#F5F7F9",
    borderRadius: 100,
    height: 66,
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
