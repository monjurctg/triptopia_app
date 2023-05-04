import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Svg, Path, Circle } from "react-native-svg";

import Profile from "../svg/Profile";
import MessageSvg from "../svg/MessageSvg";
import Reservation from "../svg/Reservation";
import Notification from "../svg/Notofication";
import HomeSvg from "../svg/HomeSvg";

const SingleHotelCard = () => {
  return (
    <View
      style={{
        height: scale(350),
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
      }}
    >
      <View>
        <Image
          style={{
            height: scale(140),
            width: scale(235),
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            resizeMode: "cover",
          }}
          source={require("../../../assets/imgs/hotel.png")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(15),
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <HomeSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <MessageSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Reservation />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Notification />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: scale(14),
            paddingLeft: scale(10),
            marginTop: scale(10),
            fontWeight: "600",
          }}
        >
          Dhaka
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: scale(10),
            marginLeft: scale(5),
          }}
        >
          <Ionicons
            name="ios-location-sharp"
            size={scale(18)}
            color="#1F75EC"
          />
          <Text
            style={{
              // marginLeft: scale(10),
              fontSize: scale(12),
              fontWeight: "400",
              color: "#8F9CA9",
            }}
          >
            Mithamoin Haor
          </Text>
        </View>

        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(15),
            paddingLeft: 8,
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(2),
              }}
            >
              5 Hotels
            </Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(2),
              }}
            >
              3 Resorts
            </Text>
          </View>

          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Ionicons name="ios-flag" size={scale(18)} color="#6E7491" />
            <Text
              style={{
                color: "#272D37",
                fontSize: scale(11),
                fontWeight: "500",
                lineHeight: 16,
                marginLeft: scale(2),
              }}
            >
              2 Apt.
            </Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            paddingLeft: 10,
            width: scale(220),
            height: scale(1.4),
            backgroundColor: "#E7ECF2",
            marginTop: scale(10),
          }}
        ></View>
        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLet: 10,
            marginTop: scale(10),
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: scale(12), color: "#8F9CA9", fontWeight: "400" }}
          >
            Starting at
          </Text>
          <Text
            style={{
              color: "#1F75EC",
              fontSize: scale(14),
              flexDirection: "row",
            }}
          >
            BDT{" "}
            <Text style={{ fontWeight: "600", fontSize: scale(18) }}>600</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SingleHotelCard;

const styles = StyleSheet.create({});
