import { useFormik } from "formik";
import React from "react";
import InputText from "./InputText";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onsubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.displayName) errors.displayName = "Required";
      if (!values.email) errors.email = "Required";
      if (!values.password) errors.password = "Required";
      if (!values.confirmPassword) errors.confirmPassword = "Required";
      if (values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords are different";
      return errors;
    },
    validateOnChange: false,
    validateOnBlur: false
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputText
          formik={formik}
          displayText={"Display Name"}
          name={"displayName"}
        />
        <InputText formik={formik} displayText={"Email"} name={"email"} />
        <InputText
          formik={formik}
          displayText={"Password"}
          name={"password"}
          type={"password"}
        />
        <InputText
          formik={formik}
          displayText={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
