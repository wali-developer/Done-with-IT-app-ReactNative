import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from 'expo-notifications';
import navigation from './rootNavigation'

import colors from "../config/colors";
import LIstingEditScreen from "../screens/LIstingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import expoPushTokens from "../api/expoPushTokens";


// Tab Navigation object
const Tab = createBottomTabNavigator();

// Tab Navigation component that navigate the screens
const AppNavigator = () => {
  const registerForPushNotification = async () => {
    try {
      const permissions = await Notifications.requestPermissionsAsync();
      if (!permissions.granted) return
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(token);

    } catch (error) {
      console.log('Error to get token', error)
    }
  }

  useEffect(() => {
    registerForPushNotification();

    Notifications.addNotificationReceivedListener(notification => {
      navigation.navigate('Account');
    })
  }, [])

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        headerShown: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={LIstingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
