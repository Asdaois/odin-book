import React from "react";
import Layout from "../components/layout";
import { signOutUSer } from "../firebase/firebase.utils";

export const WelcomePage = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to facebook, we own you</h1>
        <p>
          There's no escape, no recall or intervention can work in this place
        </p>
        <p>Surrender now</p>
      </div>
    </Layout>
  );
};
