import {Dimensions, Text} from "react-native";
import {presset} from "../src/components/tags/text.preset";

//Guideline sizes are based on standard ~5" screen mobile device
export const {width, height} = Dimensions.get("window");
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// export const scale = (size) => {
//   return (width / guidelineBaseWidth) * size;
// };
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const pressetData = (data) => {
  return data.map((p) => p.split(" ").map((st) => presset[st]));
};
{
  /* <Text style={{flexWrap:"wrap"}}></Text> */
}
