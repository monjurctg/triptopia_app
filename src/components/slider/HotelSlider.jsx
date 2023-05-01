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

const CARD_WIDTH = scale(360);
const CARD_HEIGHT = scale(150);
const HotelSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderSlides = () => {
    const slides = [
      {
        image: require("../../../assets/imgs/hotel.png"),
      },
      {
        image: require("../../../assets/imgs/travelBanner.png"),
      },
      {
        image: require("../../../assets/imgs/hotel.png"),
      },
    ];
    return slides.map((slide, index) => (
      <View key={index} style={styles.slide}>
        <View style={{height: scale(150), width: "100%"}}>
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
        </View>
      </View>
    </View>
  );
};

export default HotelSlider;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    // height: CARD_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "white",
    borderTopEndRadius: 42,
    borderTopStartRadius: 42,

    position: "relative",
    // bottom: scale(33),
  },

  slide: {
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    // borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: scale(30),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    // borderRadius: 12,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: scale(130),
    left: scale(0),
    right: scale(20),
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
