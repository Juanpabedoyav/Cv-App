import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import PublicRoutes from "./PublicRoutes";
import Login from "../components/Login";
import InicioApp from "../components/InicioApp";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoutes from "./PrivateRoutes";
import Registro from "../components/Registro";
import { logout } from "../redux/actions/loginAction";
import UpdatePassword from "../components/UpdatePassword";
import PlantillaRenderCv3 from "../components/PlantillaRenderCv3";

/* const initial= ()=>{
return{
    JSON.parse(localStorage.getItem("logged")) || { logged: false };
}
} */
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRouter>
                <PrivateRoutes />
              </PrivateRouter>
            }
          />

          <Route
            path="/"
            element={
              <PublicRouter>
                <InicioApp />
              </PublicRouter>
            }
          />

          <Route
            path="login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />

          <Route
            path="registro"
            element={
              <PublicRouter>
                <Registro />
              </PublicRouter>
            }
          />

          <Route
            path="actualizar"
            element={
              <PublicRouter>
                <UpdatePassword />
              </PublicRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
