import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
