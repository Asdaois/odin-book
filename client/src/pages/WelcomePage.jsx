import React from "react";
import Layout from "../components/layout";
import Post from "../components/post";
import SearchBar from "../components/search";

export const WelcomePage = () => {
  return (
    <Layout>
      <SearchBar />
      <div>
        <h1>Welcome to facebook, we own you</h1>
        <p>
          There's no escape, no recall or intervention can work in this place
        </p>
        <p>Surrender now</p>
      </div>
      <Post />
    </Layout>
  );
};
