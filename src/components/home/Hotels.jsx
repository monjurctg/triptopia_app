import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {scale} from "../../../utils/scale";
import {Image} from "react-native";

import {MaterialIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {FontAwesome5} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Test from "../Test";
import HotelSlider from "../slider/HotelSlider";

const Hotels = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* slider */}
        {/* <Image
          style={{
            height: scale(140),
            width: scale(265),
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            resizeMode: "cover",
          }}
          source={require("../../../assets/imgs/hotel.png")}
        /> */}
        <View style={{width: scale(235)}}>
          <HotelSlider />
        </View>

        {/* ino */}

        <Text
          style={{
            fontSize: scale(14),
            paddingLeft: scale(10),
            marginTop: scale(10),
            fontWeight: "600",
          }}>
          Hotel Cox Today, Cox’s Bazar
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: scale(10),
          }}>
          <Ionicons
            name="ios-location-sharp"
            size={scale(18)}
            color="#1F75EC"
          />
          <Text
            style={{
              marginLeft: scale(10),
              fontSize: scale(12),
              fontWeight: "400",
              color: "#1F75EC",
            }}>
            Kolatoli, Cox’s Bazar
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: scale(10),
          }}>
          <Ionicons
            name="ios-location-sharp"
            size={scale(18)}
            color="#8F9CA9"
          />
          <Text
            style={{
              marginLeft: scale(10),
              fontSize: scale(12),
              fontWeight: "400",
              color: "#8F9CA9",
            }}>
            0.44 km from Kolatoli beach
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(15),
          }}>
          <View style={{alignItems: "center"}}>
            <Ionicons name="wifi" size={scale(18)} color="#8F9CA9" />
          </View>
          <View style={{alignItems: "center"}}>
            <MaterialCommunityIcons
              name="room-service"
              size={24}
              color="#8F9CA9"
            />
          </View>

          <View style={{alignItems: "center"}}>
            <Ionicons
              name="ios-snow-outline"
              size={scale(18)}
              color="#8F9CA9"
            />
          </View>
          <View style={{alignItems: "center"}}>
            <MaterialIcons
              name="local-parking"
              size={scale(18)}
              color="#8F9CA9"
            />
          </View>
          <View style={{alignItems: "center"}}>
            <Text style={{color: "#8F9CA9"}}>See all</Text>
          </View>
        </View>
        {/*  */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(15),
            paddingLeft: 10,
          }}>
          <View style={{alignItems: "center", flexDirection: "row"}}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(10),
              }}>
              5 Hotels
            </Text>
          </View>
          <View style={{alignItems: "center", flexDirection: "row"}}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(10),
              }}>
              3 Resorts
            </Text>
          </View>

          <View style={{alignItems: "center", flexDirection: "row"}}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(10),
              }}>
              2 Apt.
            </Text>
          </View>
        </View> */}
        {/*  */}
        <View
          style={{
            paddingLeft: 10,
            width: scale(235),
            height: scale(1.4),
            backgroundColor: "#E7ECF2",
            marginTop: scale(10),
          }}></View>
        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLet: 10,
            marginTop: scale(10),
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: scale(13),
              color: "#8F9CA9",
              fontWeight: "400",
              fontFamily: "Gilroy",
            }}>
            Starting at
          </Text>
          <Text
            style={{
              color: "#1F75EC",
              fontSize: scale(14),
              flexDirection: "row",
            }}>
            BDT{" "}
            <Text style={{fontWeight: "600", fontSize: scale(18)}}>600</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container: {
    height: scale(340),
    width: scale(250),
    marginRight: scale(15),
    backgroundColor: "#FFFFFF",
    shadowColor: "#8F9CA9",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderRadius: 16,
    elevation: 4,
    padding: 8,

    borderWidth: 1,
    borderColor: "#E7ECF2",
  },
});
