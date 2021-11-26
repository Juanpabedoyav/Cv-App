import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../components/Home'
import Perfil from '../components/Perfil'
import Descargas from '../components/Descargas'
import FormCv1 from '../components/FormCv1'
import FormCv2 from '../components/FormCv2'
import Tutoriales from '../components/Tutoriales'
import VistaPreviaCv from '../components/VistaPreviaCv'

const RoutersApp = () => {
    return (
        <div>
            <Routes>
            <Route to="/" element={<Home/>} />
                <Route to="/home" element={<Home/>} />
                <Route to="/perfil" element={<Perfil/>} />
                <Route to="/descargas" element={<Descargas/>} />
                <Route to="/formcv1" element={<FormCv1/>} />
                <Route to="/formcv2" element={<FormCv2/>} />
                <Route to="/plantillascv" element={<PlantillasCv/>} />
                <Route to="/tutoriales" element={<Tutoriales/>} />
                <Route to="/vistaprevia" element={<VistaPreviaCv/>} />

            </Routes>
        </div>
    )
}

export default RoutersApp
