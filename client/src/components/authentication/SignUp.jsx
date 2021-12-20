import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/user/user.thunks";
import Form from "./Form";
import FormTitle from "./FormTitle";
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
    <div
      className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 
      space-y-10"
    >
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle title="Sign-up" />
        <InputText
          formik={formik}
          displayText="Display Name"
          name="displayName"
        />
        <InputText
          formik={formik}
          displayText="Email"
          name="email"
          type="email"
        />
        <InputText
          formik={formik}
          displayText="Password"
          name="password"
          type="password"
        />
        <InputText
          formik={formik}
          displayText="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
};

export default SignUp;
