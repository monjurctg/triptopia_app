import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => {
  return (width / guidelineBaseWidth) * size;
};
export {scale};
