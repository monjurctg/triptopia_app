import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import HotelSlider from "../slider/HotelSlider";
import {scale} from "../../../utils/scale";

const Hotel = () => {
  return (
    <ScrollView horizontal style={{height: scale(400), width: scale(300)}}>
      <HotelSlider />
      <HotelSlider />
    </ScrollView>
  );
};

export default Hotel;

const styles = StyleSheet.create({});
