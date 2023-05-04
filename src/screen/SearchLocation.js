import {View, Text} from "react-native";
import React, {useState} from "react";
import MainLayout from "../components/MainLayout";
import TextInputCustom from "../components/tags/TextInputCustom";
import {MaterialIcons, FontAwesome5} from "@expo/vector-icons";
import {scale} from "../../utils/scale";
import SubmitBtn from "../components/buttons/SubmitBtn";

const SearchLocation = () => {
  const [search, setSearch] = useState("");
  return (
    <MainLayout
      isHeader={true}
      isLeft={true}
      leftIcon="hello"
      isMiddle={true}
      handleLeftBtn={() => console.log("hello")}
      middleText={"Middle"}>
      <TextInputCustom
        label={"SEARCH"}
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
            borderBottomWidth: 1.5,
            borderBottomColor: "#ADB9C7",
            paddingBottom: 10,
          }}>
          <Text style={{paddingTop: 3, marginRight: 12, width: 26}}>
            <MaterialIcons name="my-location" size={26} color="#66737F" />{" "}
          </Text>
          <Text
            style={{
              color: "#0F182E",
              paddingBottom: 2,
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: 16,
              lineHeight: 30,
            }}>
            Find Nearby Properties
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 15,
            paddingBottom: 10,
          }}>
          <Text
            style={{
              paddingTop: 3,
              marginRight: 12,
              width: 26,
              textAlign: "center",
            }}>
            <FontAwesome5 name="map-pin" size={26} color="black" />{" "}
          </Text>
          <Text
            style={{
              color: "#0F182E",
              paddingBottom: 2,
              fontFamily: "Gilroy",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: 16,
              lineHeight: 30,
            }}>
            Choose on map
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: "#8C949C"}}>Suggestions</Text>
        <View style={{marginBottom: 40}}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingBottom: 10,
            }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Text style={{paddingTop: 3, marginRight: 10, width: 16}}>
                <FontAwesome5 name="map-marker-alt" size={15} color="#1F75EC" />{" "}
              </Text>
              <View style={{width: 168}}>
                <Text
                  style={{
                    color: "#0F182E",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: 16,
                  }}>
                  Taj Mahal
                </Text>
                <Text
                  style={{
                    color: "#ADB3B8",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: 14,
                  }}>
                  Jampur, Sonargoan, Narayanganj.
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#8C949C",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 14,
              }}>
              Landmark
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              paddingBottom: 10,
            }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Text style={{paddingTop: 3, marginRight: 10, width: 16}}>
                <MaterialIcons name="hotel" size={15} color="#1F75EC" />{" "}
              </Text>
              <View style={{width: 168}}>
                <Text
                  style={{
                    color: "#0F182E",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: 16,
                  }}>
                  Hotel Royal Taj
                </Text>
                <Text
                  style={{
                    color: "#ADB3B8",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: 14,
                  }}>
                  Jampur, Sonargoan, Narayanganj.
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#8C949C",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 14,
              }}>
              Property
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingBottom: 10,
            }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Text style={{paddingTop: 3, marginRight: 10, width: 16}}>
                <FontAwesome5 name="map-marker-alt" size={15} color="#1F75EC" />{" "}
              </Text>
              <View style={{width: 168}}>
                <Text
                  style={{
                    color: "#0F182E",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: 16,
                  }}>
                  Jaflong
                </Text>
                <Text
                  style={{
                    color: "#ADB3B8",
                    fontFamily: "Gilroy",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: 14,
                  }}>
                  Jaflong, Sylhet
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: "#8C949C",
                fontFamily: "Gilroy",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 14,
              }}>
              Location
            </Text>
          </View>
        </View>
        <SubmitBtn title={"DONE"} />
      </View>
    </MainLayout>
  );
};

export default SearchLocation;
