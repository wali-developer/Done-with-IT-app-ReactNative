import { StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import ListingDetailsScreen from "./ListingDetailsScreen";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "400",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation: { navigate } }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={"$" + item.price}
            image={item.image}
            onPress={() => navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
