import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../components/Home";
import Perfil from "../components/Perfil";
import Descargas from "../components/Descargas";
import FormCv1 from "../components/FormCv1";
import FormCv2 from "../components/FormCv2";
import Tutoriales from "../components/Tutoriales";
import VistaPreviaCv from "../components/VistaPreviaCv";
import PlantillasCv from "../components/PlantillasCv";

const RoutersApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/formcv1" element={<FormCv1 />} />
        <Route path="/formcv2" element={<FormCv2 />} />
        <Route path="/plantillascv" element={<PlantillasCv />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/vistaprevia" element={<VistaPreviaCv />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutersApp;
