import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import HotelInfoCarousel from "./HotelInfoCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const HotelInfoLayout = ({ children }) => {
  const images = [
    "https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/09/20/56/zanzibar-2130811_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_960_720.jpg",
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ marginHorizontal: 10, borderRadius: 12, overflow: "hidden" }}
        >
          <HotelInfoCarousel images={images} />
          <View style={styles.header}>
            <TouchableOpacity style={styles.back_btn}>
              <AntDesign name="left" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.back_btn}>
              <Feather name="upload" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: -75,
            }}
          >
            <View
              style={{
                width: 311,
                paddingHorizontal: 18,
                paddingVertical: 10,
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                shadowColor: "#9da3a41a",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: "GilroyBold",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 30,
                }}
              >
                Hotel Cox Today, Cox's Bazar
              </Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 6,
                }}
              >
                <Text
                  style={{
                    // paddingTop: 3,
                    marginRight: 5,
                    width: 16,
                    textAlign: "center",
                  }}
                >
                  <FontAwesome5
                    name="map-marker-alt"
                    size={12}
                    color="#1F75EC"
                  />{" "}
                </Text>
                <Text
                  style={{
                    color: "#8F9CA9",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: 12,
                    lineHeight: 16,
                  }}
                >
                  Dillir Akhra, Kathkhal, Mithamoin, Kishoganj.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 8,
                  paddingBottom: 5,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      // paddingTop: 3,
                      marginRight: 5,
                      width: 16,
                      textAlign: "center",
                    }}
                  >
                    <FontAwesome name="calendar" size={12} color="#1F75EC" />{" "}
                  </Text>
                  <Text
                    style={{
                      color: "#8F9CA9",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: 12,
                      lineHeight: 16,
                    }}
                  >
                    28 Sep 2022 - 29 Sep 2022
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#1F75EC",
                    fontFamily: "GilroyBold",
                    fontStyle: "normal",
                    fontWeight: "100",
                    fontSize: 14,
                  }}
                >
                  Modify
                </Text>
              </View>
            </View>
          </View>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
  },
  header: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: scale(30),
    marginTop: scale(30),
    paddingHorizontal: 14,
  },
  back_btn: {
    // borderWidth: 1,
    // borderColor: "#DEDEDE",
    borderRadius: 16,
    justifyContent: "center",
    height: scale(40),
    width: scale(40),
    alignItems: "center",
    backgroundColor: "#f4ffff66",
    backdropFilter: "blur(2)",
  },
});

export default HotelInfoLayout;
