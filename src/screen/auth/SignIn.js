import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { scale } from "../../../utils/scale";
import PhoneNum from "../../components/tags/PhoneNum";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import TextInputCustom from "../../components/tags/TextInputCustom";
import Checkbox from "expo-checkbox";

const SignIn = () => {
  const [segmentActive, setSegmentActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(true);

  let [fontsLoaded] = useFonts({
    Gilroy: require("../../../assets/fonts/Gilroy-Light.otf"),
    GilroyBold: require("../../../assets/fonts/Gilroy-ExtraBold.otf"),
    poppins: require("../../../assets/fonts/Poppins-Bold.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [!fontsLoaded]);
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <MainLayout>
      <View style={[styles.heading]}>
        <Text
          style={{
            fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 32,
            lineHeight: 40,
            textTransform: "capitalize",
            color: "#272D37",
          }}
        >
          Welcome back!
        </Text>
      </View>
      <View style={styles.segmentControl}>
        <TouchableOpacity
          onPress={() => {
            setSegmentActive(true);
          }}
          style={{
            width: "50%",
          }}
        >
          <Text style={[segmentActive ? styles.segmentActive : styles.segment]}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSegmentActive(false);
          }}
          style={{
            width: "50%",
          }}
        >
          <Text style={[segmentActive ? styles.segment : styles.segmentActive]}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
        }}
      >
        {segmentActive ? (
          <TextInputCustom
            label={"EMAIL"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        ) : (
          <PhoneNum />
        )}

        <TextInputCustom
          value={password}
          label={" PASSWORD"}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#1F75EC" : undefined}
            />
            <Text style={styles.label}>Remember Me</Text>
          </View>
          <View>
            <Pressable>
              <Text style={[styles.label, { textDecorationLine: "underline" }]}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <SubmitBtn title={"SIGN IN"} />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: scale(20),
        }}
      >
        <Text
          style={{
            //   fontFamily: "Gilroy",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 19,
            textAlign: "center",
            color: "#9299A0",
          }}
        >
          Or
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={{ height: 30, width: 30 }}
            source={{
              uri: "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image
            style={{ height: 40, width: 40 }}
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
          paddingVertical: scale(20),
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 22,
            color: "#8F9CA9",
          }}
        >
          Don't have an account?
        </Text>

        <TouchableOpacity title={"Sign In"}>
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 22,
              color: "#1F75EC",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
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
    fontFamily: "Gilroy",
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
  socialIcon: {
    backgroundColor: "#F5F7F9",
    borderRadius: 100,
    height: 66,
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  segmentControl: {
    backgroundColor: "#F6F7F9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    borderRadius: 5,
    marginTop: 40,
  },
  segment: {
    textAlign: "center",
    padding: 8,
    borderRadius: 10,
    color: "#66737F",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
  },
  segmentActive: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 8,
    borderRadius: 5,
    color: "#0F182E",
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#848D94",
  },
});

export default SignIn;
