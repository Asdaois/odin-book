import React from "react";
import { LogIn, SignUp } from "../components/authentication";

const SignInPage = () => {
  return (
    <div>
      <div className="">Log in to continue</div>
      <SignUp />
      <LogIn />
    </div>
  );
};

export default SignInPage;
