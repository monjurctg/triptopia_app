import {Image, StyleSheet} from "react-native";
import React from "react";
import View from "../tags/View";
import Text from "../tags/Text";
// import {scale, width} from "../../../utils/funtions";
import {Ionicons} from "@expo/vector-icons";
import {scale} from "../../../utils/scale";
import {width} from "../../../utils/funtions";

const HeaderCard = () => {
  return (
    <View
      style={{
        width: width - 48,
        minHeight: scale(200),

        // right: 10,
        padding: 10,

        backgroundColor: "#FFFFFF",
        shadowColor: "#000000",

        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        borderRadius: 16,
        shadowRadius: 3.84,
        elevation: 2,
      }}>
      <View preset={["row jc_between "]}>
        <View style={styles.headerLogoContainer}>
          <View
            preset={["center"]}
            style={[styles.headerLogo, {backgroundColor: "#E8F1FF"}]}>
            <Image source={require("../../../assets/imgs/icons/hotel.png")} />
          </View>
          <Text preset={["fs_12 fw_600"]} style={{textAlign: "center"}}>
            Hotel
          </Text>
        </View>
        <View preset={[""]} style={styles.headerLogoContainer}>
          <View
            preset={["center"]}
            style={[styles.headerLogo, {backgroundColor: "#FEF0DE"}]}>
            <Image source={require("../../../assets/imgs/icons/villa.png")} />
          </View>
          <Text preset={["fs_12 fw_600"]} style={{textAlign: "center"}}>
            Apartment
          </Text>
        </View>

        <View style={styles.headerLogoContainer}>
          <View
            preset={["center"]}
            style={[styles.headerLogo, {backgroundColor: "#DBEFEE"}]}>
            <Image source={require("../../../assets/imgs/icons/beach.png")} />
          </View>
          <Text preset={["fs_12 fw_600"]} style={{textAlign: "center"}}>
            Tour
          </Text>
        </View>
      </View>
      <View>
        <Text style={{color: "#8F9CA9"}} preset={["fs_12 fw_400 lh_16"]}>
          Area, Landmark or Property Name
        </Text>
        <Text preset={["fs_16 fw_600 lh_24"]} style={{color: "#272D37"}}>
          Where are you staying?
        </Text>
        <View
          style={{
            width: scale(300),
            height: 1,
            backgroundColor: "#E7ECF2",
            marginTop: 15,
          }}></View>
        <View preset={["row jc_between pt_10 "]}>
          <View style={styles.checkin}>
            <View>
              <Text preset={["fs_12 fw_400 lh_16"]} style={{color: "#8F9CA9"}}>
                Check In
              </Text>
              <Text preset={["fs_14 mt_10 fw_500 lh_20"]}>Mon,10 Oct 22.</Text>
            </View>
          </View>
          <View style={styles.checkin}>
            <View>
              <Ionicons name="moon-sharp" size={24} color="#8F9CA9" />
              <Text
                preset={["fs_12 mt_10 fw_400 lh_16"]}
                style={{color: "#8F9CA9"}}>
                2 Nights
              </Text>
            </View>
          </View>
          <View>
            <Text preset={["fs_12 fw_400 lh_16"]} style={{color: "#8F9CA9"}}>
              Check Out
            </Text>
            <Text preset={["fs_14 fw_500 mt_10 lh_20"]}>Wed,12 Oct 22</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  headerLogoContainer: {
    position: "relative",
    top: -scale(40),
    alignSelf: "center",
  },
  headerLogo: {
    position: "relative",
    width: scale(60),
    height: scale(60),

    // backgroundColor: "#DBEFEE",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: scale(40),
    boxSizing: "border-box",
    display: "flex",
  },
});
