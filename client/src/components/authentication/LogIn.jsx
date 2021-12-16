import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../features/user/user.thunks";
import InputText from "./InputText";

const LogIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      dispatch(signInUser(values));
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogIn;
