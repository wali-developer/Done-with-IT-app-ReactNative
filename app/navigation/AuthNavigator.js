import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Welcome"
        component={WelcomeScreen}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
