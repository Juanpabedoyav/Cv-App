import React from "react";
import { Routes, Route } from "react-router";
import InicioApp from "../components/InicioApp";
import Login from "../components/Login";
import Registro from "../components/Registro";
import UpdatePassword from "../components/UpdatePassword";

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InicioApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/actualizar-pass" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
};

export default PublicRoutes;
