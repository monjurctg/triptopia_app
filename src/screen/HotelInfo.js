import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HotelInfoLayout from "../components/HotelInfo/HotelInfoLayout";
import RoomSegment from "../components/HotelInfo/RoomSegment";

const HotelInfo = () => {
  const [segment, setSegment] = useState("ROOMS");
  return (
    <HotelInfoLayout>
      <View style={styles.segmentNav}>
        <TouchableOpacity onPress={() => setSegment("ROOMS")}>
          <Text
            style={[
              segment === "ROOMS" ? styles.activeSegment : styles.segment,
            ]}
          >
            ROOMS
          </Text>
          <View
            style={[
              segment === "ROOMS" ? styles.hairline : { display: "none" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSegment("DETAILS")}>
          <Text
            style={[
              segment === "DETAILS" ? styles.activeSegment : styles.segment,
            ]}
          >
            DETAILS
          </Text>
          <View
            style={[
              segment === "DETAILS" ? styles.hairline : { display: "none" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSegment("REVIEWS")}>
          <Text
            style={[
              segment === "REVIEWS" ? styles.activeSegment : styles.segment,
            ]}
          >
            REVIEWS
          </Text>
          <View
            style={[
              segment === "REVIEWS" ? styles.hairline : { display: "none" },
            ]}
          />
        </TouchableOpacity>
      </View>
      {segment === "ROOMS" && <RoomSegment />}
    </HotelInfoLayout>
  );
};

const styles = StyleSheet.create({
  segmentNav: {
    paddingTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
    paddingBottom: 10,
  },
  segment: {
    fontFamily: "Gilroy",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 30,
    marginRight: 30,
    color: "#8F9CA9",
  },
  activeSegment: {
    fontFamily: "GilroyBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 30,
    marginRight: 30,
    color: "#1F75EC",
  },
  hairline: {
    backgroundColor: "#1F75EC",
    height: 2,
    width: 28,
    marginTop: -3,
  },
});

export default HotelInfo;
