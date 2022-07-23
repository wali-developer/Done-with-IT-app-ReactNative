import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import { FlatList } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";
import defaultStyles from "../config/style";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
}) => {
  const [modelVisible, setModelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={20}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModelVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModelVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: colors.light,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

export default AppPicker;
