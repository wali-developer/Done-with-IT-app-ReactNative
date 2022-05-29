import React from "react";
import { Text } from "react-native";

import defaultStyle from "../config/style";

const AppText = ({ children, style, ...rest }) => {
  return (
    <Text style={[defaultStyle.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
