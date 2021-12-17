import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../components/Home";
import Perfil from "../components/Perfil";
import Descargas from "../components/Descargas";
import FormCv1 from "../components/FormCv1";
import FormCv2 from "../components/FormCv2";
import Tutoriales from "../components/Tutoriales";
import PlantillasCv from "../components/PlantillasCv";
import Polity from "../components/Polity";
import PlantillaRenderCv1 from "../components/PlantillaRenderCv1";
import PlantillaRenderCv2 from "../components/PlantillaRenderCv2";
import PlantillaRenderCv3 from "../components/PlantillaRenderCv3";
import PlantillaRenderCv4 from "../components/PlantillaRenderCv4";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/formcv1" element={<FormCv1 />} />
        <Route path="/formcv2" element={<FormCv2 />} />
        <Route path="/plantillascv" element={<PlantillasCv />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/politica" element={<Polity />} />
        <Route path="/plantilla1" element={<PlantillaRenderCv1 />} />
        <Route path="/plantilla2" element={<PlantillaRenderCv2 />} />
        <Route path="/plantilla3" element={<PlantillaRenderCv3 />} />
        <Route path="/plantilla4" element={<PlantillaRenderCv4 />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
