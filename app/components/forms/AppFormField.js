import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextinput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...rest }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
