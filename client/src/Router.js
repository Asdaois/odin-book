import React from "react";
import {Routes, Route } from "react-router-dom";
import { UserProfile } from "./pages/UserProfile";
import { UserFriendList } from "./pages/UserFriendList";
import { WelcomePage } from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";

const Router = () => {
  return (
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/user/profile/:id" element={<UserProfile />} />
        <Route exact path="/user/friends/:id" element={<UserFriendList />} />
      </Routes>
  );
};

export default Router;
