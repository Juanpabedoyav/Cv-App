import React from 'react'
import { Routes, Route } from "react-router";
import InicioApp from "../components/InicioApp"

const PublicRoutes = () => {
    return (
        <div>
            <Routes>
              <Route path="/" element={<InicioApp />} />          
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro/>} />      
            </Routes>
        </div>
    )
}

export default PublicRoutes
