import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Descargas from '../components/Descargas';
import FormCv1 from '../components/FormCv1';
import FormCv2 from '../components/FormCv2';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBar from "../components/NavBar";
import Perfil from '../components/Perfil';
import PlantillasCv from '../components/PlantillasCv';
import Tutoriales from '../components/Tutoriales';
import VistaPreviaCv from '../components/VistaPreviaCv';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import RoutersApp from './RoutersApp';
import InicioApp from '../components/InicioApp'


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                
                <Route path="/" element={<InicioApp/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/perfil" element={<Perfil/>} />
                <Route path="/descargas" element={<Descargas/>} />
                <Route path="/formcv1" element={<FormCv1/>} />
                <Route path="/formcv2" element={<FormCv2/>} />
                <Route path="/plantillascv" element={<PlantillasCv/>} />
                <Route path="/tutoriales" element={<Tutoriales/>} />
                <Route path="/vistaprevia" element={<VistaPreviaCv/>} />

                    {/* <Route path="*" element={

                        <PrivateRouter>
                            <RoutersApp />
                        </PrivateRouter>
                    }/>


                    <Route path="/login" element={

                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    }
                    /> */}
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default AppRouter
