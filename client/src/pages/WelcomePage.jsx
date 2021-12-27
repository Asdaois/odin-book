import React from "react";
import Layout from "../components/layout";
import Post from "../components/post";
import Posts from "../components/posts";
import SearchBar from "../components/search";

export const WelcomePage = () => {
  return (
    <Layout>
      {/* TODO: Crear un estilo para el search bar */}
      <SearchBar />
      <Post />
      <Posts /> 
    </Layout>
  );
};
