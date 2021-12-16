import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/user/user.thunks";
import InputText from "./InputText";

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      dispatch(signUpUser(values));
    },
    validate: (values) => {
      let errors = {};
      if (values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords are different";
      return errors;
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputText
          formik={formik}
          displayText={"Display Name"}
          name={"displayName"}
        />
        <InputText
          formik={formik}
          displayText={"Email"}
          name={"email"}
          type={"email"}
        />
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
};

export default SignUp;
