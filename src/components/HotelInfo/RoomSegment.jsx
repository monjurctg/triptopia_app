import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";

const RoomSegment = () => {
  return (
    <View style={{ marginTop: 21 }}>
      <View>
        <View
          style={{
            borderRadius: 20,
            borderColor: "EFF8FF",
            borderWidth: 1.5,
            padding: 8,
            display: "flex",
            shadowColor: "red",
            flexDirection: "row",
          }}
        >
          <View style={{ width: "25%" }}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg",
              }}
            />
          </View>
          <View style={{ width: "75%" }}>
            <Text
              style={{
                fontFamily: "GilroyBold",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 30,
              }}
            >
              Double Deluxe Room
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  marginRight: 4,
                  width: 16,
                  textAlign: "center",
                }}
              >
                <FontAwesome5 name="map-marker-alt" size={12} color="#8F9CA9" />{" "}
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
                Kolatoli, Cox’s Bazar
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 8,
              }}
            >
              <Text style={styles.tag}>Save 30%</Text>
              <Text style={styles.tag}>Luxury</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 16,
                  color: "#1F75EC",
                  marginTop: 9,
                }}
              >
                Show details
              </Text>
              <View>
                <Text>৳9,000</Text>
                <Text>
                  <Text>৳7,000/</Text>night
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 97,
    borderRadius: 12,
    marginRight: 14,
  },
  tag: {
    backgroundColor: "#FFF6ED",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 2,
    color: "#FFAB4D",
    fontFamily: "GilroyBold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 10,
  },
});

export default RoomSegment;
