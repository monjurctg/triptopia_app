import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import BookingSlider from "./src/screen/BookingSlider";
import {NativeBaseProvider, Box} from "native-base";
import TextInputCustom from "./src/components/tags/TextInputCustom";
import PhoneNum from "./src/components/tags/PhoneNum";
import CalenderCustom from "./src/screen/CalenderCustom";
import InputMobile from "./src/screen/auth/InputMobile";
import UserInfo from "./src/screen/auth/UserInfo";
import SignIn from "./src/screen/auth/SignIn";

export default function App() {
  // const [loaded, error] = useFonts({
  //   "Popins-Medium": require("./assets/fonts/Poppins-Medium"),
  //   "Popins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  //   "Popins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  // });
  // if (loaded) {
  //   console.log(loaded, error);
  //   return <Text preset="p1">Font Loaded...</Text>;
  // }
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <BookingSlider /> */}
        {/* <InputMobile /> */}
        {/* <UserInfo /> */}
        <SignIn />

        {/* <TextInputCustom label={"Phone "} />
        <TextInputCustom /> */}
        {/* <CalenderCustom /> */}

        {/* <PhoneNum /> */}

        {/* <StatusBar style="auto" /> */}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
