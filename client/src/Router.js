import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { UserProfile } from "./pages/UserProfile";
import { UserFriendList } from "./pages/UserFriendList";
import { WelcomePage } from "./pages/WelcomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route exact path="/" element={<App />} />
        {/* Ruta de la pagina de bienvenida */}
        <Route exact path="/welcome" element={<WelcomePage />} />
        {/* Ruta del perfil de usuario */}
        <Route exact path="/user/profile/:id" element={<UserProfile />} />
        {/* Ruta de la lista de amigos de un usuario */}
        <Route exact path="/user/friends/:id" element={<UserFriendList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
