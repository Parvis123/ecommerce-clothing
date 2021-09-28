import React from "react";

import "./signinsignup.scss";

import SignIn from "../signin/SignIn";
import SignUp from "../sign-up/SignUp";

const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
