import React from "react";
import { FacebookLogIn, GoogleLogIn, LogIn, SignUp } from "../components/authentication";

const SignInPage = () => {
  return (
    <div>
      <div className="">Log in to continue</div>
      <SignUp />
      <LogIn />
      <FacebookLogIn />
      <GoogleLogIn />
    </div>
  );
};

export default SignInPage;
