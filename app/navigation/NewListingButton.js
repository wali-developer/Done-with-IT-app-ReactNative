import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 40,
    bottom: 15,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
