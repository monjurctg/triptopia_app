import React, {useState, useRef, useEffect} from "react";
import {View, Image, ScrollView, Dimensions, StyleSheet} from "react-native";
import {scale} from "../../../utils/scale";
import Text from "../tags/Text";
// import {width} from "../../utils/funtions";
// import {scale} from "../../utils/scale";
// import Text from "./tags/Text";
// import {scale} from "../../utils/functions";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = scale(235);
const CARD_HEIGHT = scale(150);

const AUTO_SWIPE_INTERVAL = 3000; // Change slides every 3 seconds

const HotelSlider = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const slides = [
    {
      image: {
        uri: "https://thumbs.dreamstime.com/b/kerala-india-such-beautiful-place-mind-blowing-very-adventurous-trip-superb-feeling-natural-vibe-place-nice-hill-178263178.jpg",
      },
    },
    {
      image: {
        uri: "https://thumbs.dreamstime.com/b/nice-quiet-place-hill-side-cloudy-sky-nice-quiet-place-hill-side-cloudy-sky-106329372.jpg",
      },
    },
    {
      image: {
        uri: "https://images.thrillophilia.com/image/upload/s--l23psbvn--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/143/631/original/1553666153_ooty-ooty-lake-1493546280-orijgp.jpg.jpg?1553666153",
      },
    },
    {
      image: {
        uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      },
    },
    {
      image: {
        uri: "https://thumbs.dreamstime.com/b/kerala-india-such-beautiful-place-mind-blowing-very-adventurous-trip-superb-feeling-natural-vibe-place-nice-hill-178263178.jpg",
      },
    },

    {
      image: {
        uri: "https://images.thrillophilia.com/image/upload/s--l23psbvn--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/143/631/original/1553666153_ooty-ooty-lake-1493546280-orijgp.jpg.jpg?1553666153",
      },
    },
  ];

  useEffect(() => {
    // Auto change slides every AUTO_SWIPE_INTERVAL
    const intervalId = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % slides.length);
      scrollViewRef.current.scrollTo({
        x: selectedIndex * CARD_WIDTH,
        animated: true,
      });
    }, AUTO_SWIPE_INTERVAL);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <View key={index} style={styles.slide}>
        <View style={styles.save}></View>
        <Image source={slide.image} style={styles.image} />
        <View style={styles.save}>
          <Text preset={["fs_12  center"]} style={{color: "#FFFFFF"}}>
            Save 30%
          </Text>
        </View>
        <View style={styles.rating}>
          <Text preset={["fs_12  center"]} style={{color: "#FFFFFF"}}>
            4.3/5
          </Text>
        </View>
      </View>
    ));
  };

  const onScroll = (event) => {
    const {contentOffset} = event.nativeEvent;
    const selectedIndex = Math.round(contentOffset.x / CARD_WIDTH);
    setSelectedIndex(selectedIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}>
        {renderSlides()}
      </ScrollView>

      <View style={styles.dotContainer}>
        {renderSlides().map((slide, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === selectedIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    // borderRadius: 12,
  },
  slide: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: CARD_WIDTH,
    height: "100%",
    borderRadius: 12,
  },
  save: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 8,
    gap: 8,
    position: "absolute",
    width: scale(100),
    top: 12,
    right: 15,
    height: scale(20),
    backgroundColor: "#1F75EC",
    borderRadius: 6,
  },

  rating: {
    position: "absolute",
    width: scale(60),
    height: scale(20),
    left: 16,
    bottom: 16,
    backgroundColor: "#FFAB4D",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 12,
    // gap: 8,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    left: 30,
    right: 0,
    height: 16,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#007aff",
  },
});

export default HotelSlider;
