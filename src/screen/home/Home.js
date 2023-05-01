import {Image, ScrollView, StatusBar, StyleSheet} from "react-native";
import React from "react";
import Text from "../../components/tags/Text";
// import {scale, width} from "../../utils/funtions";
import {SafeAreaView} from "react-native-safe-area-context";
import View from "../../components/tags/View";

import CustomTouchBtn from "../../components/tags/CustomTouchBtn";

// import HeaderCard from "../../components/home/HeaderCard";

import {width} from "../../../utils/funtions";
import SingleHotelCard from "../../components/home/SingleHotelCard";
import {scale} from "../../../utils/scale";
import HeaderCard from "../../components/home/HeaderCard";
import HotelSlider from "../../components/slider/HotelSlider";
import Hotel from "../../components/Hotels/Hotel";

const Home = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#1F75EC" barStyle="light-content" />
      {/* <SafeAreaView></SafeAreaView> */}

      <View
        style={{
          width: width,
          height: scale(170),
          borderBottomLeftRadius: scale(40),
          borderBottomRightRadius: scale(40),
          backgroundColor: "#1F75EC",
        }}></View>
      <View style={{position: "relative", top: scale(-100), left: 24}}>
        <HeaderCard />
        <CustomTouchBtn
          preset={["mt_15 center"]}
          style={{
            height: scale(45),
            width: scale(310),
            borderRadius: scale(12),

            backgroundColor: "#1F75EC",
          }}>
          <Text style={styles.search}>SEARCH</Text>
        </CustomTouchBtn>
        <ScrollView horizontal={true} style={{marginTop: 29}}>
          <Image
            style={{height: scale(130), width: scale(300), borderRadius: 12}}
            source={require("../../../assets/imgs/travelBanner.png")}
          />
          <Image
            style={{
              height: scale(130),
              width: scale(300),
              marginLeft: 10,
              borderRadius: 12,
            }}
            source={require("../../../assets/imgs/travelBanner.png")}
          />
          <Image
            style={{
              height: scale(130),
              width: scale(300),
              marginLeft: 10,
              borderRadius: 12,
            }}
            source={{
              uri: "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?cs=srgb&dl=pexels-min-an-1087735.jpg&fm=jpg",
            }}
          />
        </ScrollView>
        <View preset={["mt_20 "]}>
          <View preset={["row center jc_between"]} style={{width: scale(300)}}>
            <Text preset={["fs_16 fw_600 "]}>Popular Destinations</Text>
            <Text preset={["fs_14 fw_500"]} style={{color: "#8F9CA9"}}>
              {" "}
              View all
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: scale(10)}}
            horizontal={true}>
            <SingleHotelCard />
            <SingleHotelCard />
            <View style={{width: scale(40)}}></View>
          </ScrollView>
        </View>
      </View>
      <Hotel />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  search: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: scale(12),
    lineHeight: scale(19),
    textAlign: "center",
    letterSpacing: scale(0.04),
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
});
