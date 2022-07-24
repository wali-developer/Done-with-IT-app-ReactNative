import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import usersApi from "../api/users";
import AppText from "../components/AppText";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  // User Registration
  const handleSubmit = async (userInfo) => {
    setLoading(true);
    const result = await usersApi.register(userInfo);
    setLoading(false);

    if (!result.ok) {
      if (result.data) alert(result.data.error);
      else {
        alert("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    setLoading(true);
    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    setLoading(false);
    auth.logIn(authToken);
  };

  return (
    <>
      <View style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          {/* {error && <ErrorMessage error={error} />} */}
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={colors.primary}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    justifyContent: "center",
    opacity: 0.7,
    zIndex: 1,
  },
});

export default RegisterScreen;
