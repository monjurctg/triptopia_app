import {Dimensions, Text} from "react-native";
import {presset} from "../src/components/tags/text.preset";
const {width, height} = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const pressetData = (data) => {
  return data.map((p) => p.split(" ").map((st) => presset[st]));
};
{
  /* <Text style={{flexWrap:"wrap"}}></Text> */
}
