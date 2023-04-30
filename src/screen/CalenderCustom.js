import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {Calendar} from "react-native-calendars";

const CalenderCustom = () => {
  const [selectedDates, setSelectedDates] = useState({});

  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          const selected = {...selectedDates};
          if (selected[day.dateString]) {
            delete selected[day.dateString];
          } else {
            selected[day.dateString] = {
              selected: true,
              marked: true,
            };
          }
          setSelectedDates(selected);
        }}
        markedDates={selectedDates}
      />

      <Calendar
        markingType={"multi-dot"}
        markedDates={{
          "2022-05-01": {
            dots: [{key: "selected", color: "blue", selectedDotColor: "white"}],
          },
          "2022-05-03": {
            dots: [{key: "selected", color: "blue", selectedDotColor: "white"}],
          },
        }}
      />
    </View>
  );
};

export default CalenderCustom;

const styles = StyleSheet.create({});
