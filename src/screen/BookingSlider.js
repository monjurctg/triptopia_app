import React, {useState} from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

const CARD_WIDTH = 378;
const CARD_HEIGHT = scale(450);
const BookingSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderSlides = () => {
    const slides = [
      {
        image: require("../../assets/imgs/Illustration1.png"),
      },
      {
        image: require("../../assets/imgs/Illustration.png"),
      },
      {
        image: require("../../assets/imgs/Illustration1.png"),
      },
    ];
    return slides.map((slide, index) => (
      <View key={index} style={styles.slide}>
        <View style={{height: scale(250), width: scale(289)}}>
          <Image source={slide.image} style={styles.image} />
        </View>
      </View>
    ));
  };

  const onScroll = (event) => {
    const {contentOffset} = event.nativeEvent;
    console.log(contentOffset, "content");
    const selectedIndex = Math.round(contentOffset.x / SCREEN_WIDTH);
    setSelectedIndex(selectedIndex);
  };

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: SCREEN_WIDTH,
        }}>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: scale(300),
            borderTopLeftRadius: scale(40),
            borderTopRightRadius: scale(40),
            backgroundColor: "#1F75EC",
            paddingTop: scale(40),
            paddingLeft: scale(20),
            paddingRight: scale(20),
          }}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            {selectedIndex > 0 ? (
              <TouchableOpacity>
                <Text style={{color: "white"}}>Back</Text>
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}

            <TouchableOpacity>
              <Text style={{color: "white"}}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: scale(50),
              justifyContent: "center",
            }}>
            <Text style={styles.title}>Choose your </Text>
            <Text style={[styles.title, {fontWeight: "500"}]}>booking</Text>
          </View>
          <Text style={[styles.text, {marginTop: 15}]}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking.
          </Text>
        </View>

        <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}>
            {renderSlides()}
          </ScrollView>
          <View style={styles.dotContainer}>
            {renderSlides().map((slide, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === selectedIndex && styles.activeDot,
                ]}
              />
            ))}
          </View>
          <View
            style={{
              backgroundColor: "#1F75EC",
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingSlider;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    height: CARD_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "white",
    borderTopEndRadius: 42,
    borderTopStartRadius: 42,

    position: "relative",
    bottom: scale(33),
  },

  slide: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    // borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(30),
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 12,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 0,
    right: 0,
    height: 16,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#007aff",
    width: 15,
  },
  title: {
    fontWeight: "400",
    fontSize: 28,
    lineHeight: 28,
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  text: {
    fontWeight: "400",

    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
