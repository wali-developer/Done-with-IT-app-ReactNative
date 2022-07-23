import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  image,
  title,
  subTitle,
  IconComponent,
  renderRightActions,
  onPress,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.listItemContainer}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={1}>
                  {subTitle}
                </AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.black,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "300",
  },
});

export default ListItem;
