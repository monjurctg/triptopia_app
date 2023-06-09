import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {scale} from "../../utils/scale";
import {AntDesign} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

const MainLayout = ({
  children,
  isHeader,
  isSkip,
  isMiddle,
  middleText,
  isBack,
  isLeft,
  leftIcon,
  handleLeftBtn,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isHeader && (
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back_btn}>
              <AntDesign name="left" size={18} color="#272D37" />
            </TouchableOpacity>
            {isMiddle && <Text> {middleText}</Text>}
            {isLeft && (
              <TouchableOpacity onPress={{handleLeftBtn}}>
                <Text>{leftIcon}</Text>
              </TouchableOpacity>
            )}
            {isSkip && (
              <TouchableOpacity>
                <Text style={styles.skip}>skip</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: scale(30),
    marginTop: scale(10),
  },
  back_btn: {
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 16,
    justifyContent: "center",
    height: scale(40),
    width: scale(40),
    alignItems: "center",
  },
  skip: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: "#1F75EC",
  },
});
