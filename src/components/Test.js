import React, {useState, useRef, useEffect} from "react";
import {View, Image, ScrollView, Dimensions, StyleSheet} from "react-native";
import {scale} from "../../utils/scale";
// import {scale} from "../../utils/functions";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = scale(260);
const CARD_HEIGHT = scale(150);

const AUTO_SWIPE_INTERVAL = 4000; // Change slides every 3 seconds

const Test = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Auto change slides every AUTO_SWIPE_INTERVAL
    const intervalId = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % 3);
      scrollViewRef.current.scrollTo({
        x: selectedIndex * SCREEN_WIDTH,
        animated: true,
      });
    }, AUTO_SWIPE_INTERVAL);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  const renderSlides = () => {
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
    ];
    return slides.map((slide, index) => (
      <View key={index} style={styles.slide}>
        <Image source={slide.image} style={styles.image} />
      </View>
    ));
  };

  const onScroll = (event) => {
    const {contentOffset} = event.nativeEvent;
    const selectedIndex = Math.round(contentOffset.x / SCREEN_WIDTH);
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#007aff",
  },
});

export default Test;
