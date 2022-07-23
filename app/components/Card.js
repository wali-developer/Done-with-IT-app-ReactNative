import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function Card({ title, price, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{price}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    paddingVertical: 10,
  },
});

export default Card;
