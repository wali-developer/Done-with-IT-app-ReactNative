import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const auth = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    console.log(result.data)
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppText style={styles.heading}>Welcome back !</AppText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Email or Password is Incorrect"
          visible={loginFailed}
        />
        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.input}
        />
        <AppFormField
          placeholder="Password"
          icon="lock"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          style={styles.input}
        />

        <SubmitButton title="Login" style={{ width: 330 }} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    marginTop: 50,
    alignSelf: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    fontSize: 18,
  },
});
