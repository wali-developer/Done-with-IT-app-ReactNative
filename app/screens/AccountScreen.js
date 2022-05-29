import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";

// List item array
const listingsData = [
  {
    id: 1,
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Wali Ullah"
          subTitle="waliullah0540@gmail.com"
          image={require("../assets/myPic.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={listingsData}
          keyExtractor={(listingItem) => listingItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title={"Log Out"}
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});
