import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingsScreen({ navigation: { navigate } }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  // function to load listings data
  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrive listings</AppText>
          <AppButton title="Try again" onPress={loadListings} />
        </>
      )}
      <View style={styles.loadingIndicator}>
        <ActivityIndicator
          animating={loading}
          size="large"
          color={colors.primary}
        />
      </View>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigate(routes.LISTING_DETAILS, item)}
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
  loadingIndicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingsScreen;
