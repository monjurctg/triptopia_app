import {useFonts} from "expo-font";

import {StyleSheet, View} from "react-native";
import BookingSlider from "./src/screen/BookingSlider";
import {NativeBaseProvider} from "native-base";
import CalenderCustom from "./src/screen/CalenderCustom";
import InputMobile from "./src/screen/auth/InputMobile";
import UserInfo from "./src/screen/auth/UserInfo";
import SignIn from "./src/screen/auth/SignIn";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

import Home from "./src/screen/home/Home";
import OTPVerification from "./src/screen/OTPVerification";
import SearchLocation from "./src/screen/SearchLocation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import ForgotPassword from "./src/screen/auth/ForgotPassword";
// import Test from "./src/components/Test";
// import Home from "./src/screen/home/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy-Light.otf"),
    GilroyBold: require("./assets/fonts/Gilroy-ExtraBold.otf"),
    // poppins: require("./assets/fonts/Poppins-Bold.ttf"),
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

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerMode: "screen",
            }}>
            <Stack.Screen name="booking" component={BookingSlider} />
            <Stack.Screen name="mobileInput" component={InputMobile} />
            <Stack.Screen name="otp" component={OTPVerification} />
            <Stack.Screen name="userInfo" component={UserInfo} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={SignIn} />
            <Stack.Screen name="forgotPass" component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
