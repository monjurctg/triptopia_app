import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Text from "../../components/tags/Text";
// import {scale, width} from "../../utils/funtions";
import {SafeAreaView} from "react-native-safe-area-context";
import View from "../../components/tags/View";

import CustomTouchBtn from "../../components/tags/CustomTouchBtn";

import {width} from "../../../utils/funtions";
import SingleHotelCard from "../../components/home/SingleHotelCard";
import {scale} from "../../../utils/scale";
import HeaderCard from "../../components/home/HeaderCard";
import Hotels from "../../components/home/Hotels";
import Test from "../../components/Test";

const Home = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#1F75EC" barStyle="light-content" />
      {/* <SafeAreaView></SafeAreaView> */}

      <View
        style={{
          width: width,
          height: scale(160),
          borderBottomLeftRadius: scale(24),
          borderBottomRightRadius: scale(24),
          backgroundColor: "#1F75EC",
        }}></View>
      <View style={{position: "relative", top: scale(-100), left: 24}}>
        <HeaderCard />
        <CustomTouchBtn
          preset={["mt_15 center"]}
          style={{
            height: scale(45),
            width: scale(300),
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

        <View preset={["mt_20  "]}>
          <View
            preset={["row center pl_5 jc_between"]}
            style={{width: scale(315)}}>
            <Text preset={["fs_16 fw_600 "]}>Popular Destinations</Text>
            <Text preset={["fs_12 fw_500"]} style={{color: "#8F9CA9"}}>
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

        {/* img background */}
        <View
          style={{marginTop: 40, paddingRight: scale(30)}}
          preset={["row jc_between "]}>
          {/* <ImageBackground
            source={require("../../../assets/imgs/hotel.png")}
            style={styles.background}>
            <Text>Hello</Text>
          </ImageBackground> */}
          <ImageBackground
            source={require("../../../assets/imgs/hotel.png")}
            style={styles.background}>
            <View style={styles.overlay} />
            {/* Your content here */}
            <View style={{padding: 10}}>
              <Text preset={["fs_14 fw_600"]} style={{color: "#ffffff"}}>
                Travel a lot?
              </Text>
              <Text preset={["fs_12 fw_400"]} style={{color: "#FFFFFF"}}>
                Add an unlisted Property and earn 100tk for each verified listed
                property!
              </Text>
              <TouchableOpacity
                style={{
                  height: scale(24),
                  backgroundColor: "#1F75EC",
                  width: scale(64),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                  marginTop: 10,
                }}>
                <Text style={{color: "#FFFFFF", fontSize: 12}}>Apply</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          {/* another */}
          <ImageBackground
            source={require("../../../assets/imgs/hotel.png")}
            style={styles.background}>
            <View style={styles.overlay} />
            {/* Your content here */}
            <View style={{padding: 10}}>
              <Text preset={["fs_14 fw_600"]} style={{color: "#ffffff"}}>
                Travel a lot?
              </Text>
              <Text preset={["fs_12 fw_400"]} style={{color: "#FFFFFF"}}>
                Add an unlisted Property and earn 100tk for each verified listed
                property!
              </Text>
              <TouchableOpacity
                style={{
                  height: scale(24),
                  backgroundColor: "#1F75EC",
                  width: scale(64),
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                  marginTop: 10,
                }}>
                <Text style={{color: "#FFFFFF", fontSize: scale(12)}}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View preset={["mt_20 "]}>
          <View
            preset={["row center pl_5 jc_between"]}
            style={{width: scale(315)}}>
            <Text preset={["fs_16 fw_600 "]}>Popular Hotels</Text>
            <Text preset={["fs_12 fw_500"]} style={{color: "#8F9CA9"}}>
              View all
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: scale(10)}}
            horizontal={true}>
            <Hotels isSave={true} isSlide={true} />
            <Hotels isSave={true} isSlide={true} />

            <View style={{width: scale(40)}}></View>
          </ScrollView>
        </View>

        <View preset={["mt_20 "]}>
          <View
            preset={["row center pl_5 jc_between"]}
            style={{width: scale(315)}}>
            <Text preset={["fs_16 fw_600 "]}>Nearby Hotels</Text>
            <Text preset={["fs_12 fw_500"]} style={{color: "#8F9CA9"}}>
              View all
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: scale(10)}}
            horizontal={true}>
            <Hotels isSlide={true} />
            <Hotels isSlide={true} />

            <View style={{width: scale(40)}}></View>
          </ScrollView>
        </View>

        <View preset={["mt_20 "]}>
          <View
            preset={["row center pl_5 jc_between"]}
            style={{width: scale(315)}}>
            <Text preset={["fs_16 fw_600 "]}>Nearby Hotels</Text>
            <Text preset={["fs_12 fw_500"]} style={{color: "#8F9CA9"}}>
              View all
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{marginTop: scale(10)}}
            horizontal={true}>
            <Hotels isImage={true} />
            <Hotels isImage={true} />

            <View style={{width: scale(40)}}></View>
          </ScrollView>
        </View>
      </View>
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
  // background: {
  //   // flex: 1,

  //   resizeMode: "cover",
  //   justifyContent: "center",
  //   borderRadius: 16,
  //   backgroundColor: "transparent",
  // },
  background: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: scale(170),
    width: scale(155),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(11, 11, 11, 0.78)",
    borderRadius: 16,
  },
});
