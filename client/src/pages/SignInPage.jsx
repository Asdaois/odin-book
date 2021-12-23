import React from "react";
import { LogIn, SignUp } from "../components/authentication";

const SignInPage = () => {
  return (
    <div className="flex justify-center w-2/3 m-auto ">
      <div className="flex-1 h-[404px]">
        <LogIn />
      </div>
      <div className="flex-1 h-[404px]">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInPage;
