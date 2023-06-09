import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from "react-native";
import useInterval from "./useInterval";

const MAX_WIDTH = Dimensions.get("screen").width;

// indicators
// automatic shuffling of images

const HotelInfoCarousel = ({ images }) => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  useInterval(() => handleAnimation(), 5000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };
  return (
    <React.Fragment>
      <View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateX: animation.current }],
            },
          ]}
        >
          {images.map((image) => (
            <Image key={image} source={{ uri: image }} style={styles.image} />
          ))}
        </Animated.View>
        <View style={styles.indicatorContainer}>
          {images.map((image, index) => (
            <View
              key={`${image}_${index}`}
              style={[
                styles.indicator,
                index === currentImage ? styles.activeIndicator : undefined,
              ]}
            />
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: 330,
    width: MAX_WIDTH,
  },
  container: {
    flexDirection: "row",
  },
  indicatorContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: MAX_WIDTH,
    bottom: 50,
    zIndex: 2,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 7.5,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  activeIndicator: {
    borderColor: "#1F75EC",
    backgroundColor: "#1F75EC",
  },
});

export default HotelInfoCarousel;
