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

const Hotels = ({isSave, isImage, sliderImages, imagePath, isSlide}) => {
  return (
    <View style={styles.container}>
      <View>
        {/* slider */}
        {isImage && (
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
            <View style={styles.topRight}>
              <Text style={{color: "#FFFFFF", fontSize: 12}}>
                4h : 28m : 48s
              </Text>
            </View>
            <View style={styles.topLeft}>
              <Text style={{color: "#FFFFFF", fontSize: 12}}>
                Last Min Deal
              </Text>
            </View>
            <View style={styles.bottomLeft}>
              <Text style={{color: "#FFFFFF", fontSize: 12}}>Save 30%</Text>
            </View>
          </View>
        )}

        {isSlide && (
          <View style={{width: scale(235)}}>
            <HotelSlider isSave={isSave} />
          </View>
        )}

        {/* ino */}

        <Text
          style={{
            fontSize: 14,
            paddingLeft: scale(6),
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
          <Ionicons name="ios-location-sharp" size={18} color="#1F75EC" />
          <Text
            style={{
              marginLeft: scale(5),
              fontSize: 12,
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
          <Ionicons name="ios-location-sharp" size={18} color="#8F9CA9" />
          <Text
            style={{
              marginLeft: scale(5),
              fontSize: 12,
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
          <View style={styles.iconStyle}>
            <Ionicons name="wifi" size={18} color="#8F9CA9" />
          </View>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons
              name="room-service"
              size={24}
              color="#8F9CA9"
            />
          </View>

          <View style={styles.iconStyle}>
            <Ionicons name="ios-snow-outline" size={18} color="#8F9CA9" />
          </View>
          <View style={styles.iconStyle}>
            <MaterialIcons name="local-parking" size={18} color="#8F9CA9" />
          </View>
          <View style={styles.iconStyle}>
            <Text style={{color: "#8F9CA9", fontSize: 9, alignSelf: "center"}}>
              See all
            </Text>
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
          <View>
            {isImage && (
              <Text
                style={{
                  textAlign: "right",
                  textDecorationLine: "line-through",
                  color: "#ADB9C7",
                  fontSize: 12,
                }}>
                ৳9,000
              </Text>
            )}
            <Text
              style={{
                color: "#1F75EC",
                fontSize: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}>
              BDT <Text style={{fontWeight: "600", fontSize: 18}}>600</Text>
              <Text style={{fontWeight: "400", fontSize: 12, color: "#8F9CA9"}}>
                /Night
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container: {
    height: scale(365),
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
  topRight: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FE5050",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  topLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FE5050",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  bottomLeft: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#1F75EC",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  iconStyle: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F5F5F5",
    borderRadius: 4,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
