import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { FacebookLogIn, GoogleLogIn } from ".";
import { signInUser } from "../../features/user/user.thunks";
import Form from "./Form";
import FormTitle from "./FormTitle";
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
    <div className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 
      space-y-10 h-full">
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle title="Log-in" />
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
        <button type="submit">Log in</button>
      </Form>
      <div className="flex flex-col gap-2">
        <div className="w-full relative mb-2">
          <hr />
          <div className="text-center -translate-y-3 w-6 bg-white mx-auto">
            OR
          </div>
        </div>
        <GoogleLogIn />
        <FacebookLogIn />
      </div>
    </div>
  );
};

export default LogIn;
