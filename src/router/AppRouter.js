import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login';
import NavBar from "../components/NavBar";
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import RoutersApp from './RoutersApp';


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="*" element={

                        <PrivateRouter>
                            <RoutersApp />
                        </PrivateRouter>
                    }/>


                    <Route path="/login" element={

                        <PublicRouter>
                            <Login />
                        </PublicRouter>
                    }
                    />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default AppRouter
