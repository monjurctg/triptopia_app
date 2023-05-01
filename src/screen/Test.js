import React, {useState, useRef} from "react";
import {View, Animated, Text, Button} from "react-native";

export const AnimatedViewExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  console.log(fadeAnim, "clg");

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 6000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View style={{opacity: fadeAnim}}>
        <Text>This is a fading view</Text>
      </Animated.View>
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};
