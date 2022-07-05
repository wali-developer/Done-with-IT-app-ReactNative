import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Tweets screen
const Tweets = ({ navigation }) => {
  return (
    <View>
      <Text>Tweets</Text>
      <Button
        title="See Tweet details"
        onPress={() =>
          navigation.navigate("TweetDetails", { id: 1, params: "Parameter" })
        }
      />
    </View>
  );
};

// Tweet details screen
const TweetDetails = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        Tweet Details with id {route.params.id} {route.params.params}
      </Text>
      <Button
        title="Go back to tweet screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

// Stack that contains object of Navigation and screen components
const Stack = createNativeStackNavigator();

// Stack Navigation
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: "dodgerblue" },
          headerTintColor: "orange",
        }}
      />
    </Stack.Navigator>
  );
};

// Account Screen
const Account = () => {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
};

// Tab Navigation object
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="News Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
