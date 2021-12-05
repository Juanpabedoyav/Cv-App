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

/* const initial= ()=>{
return{
    JSON.parse(localStorage.getItem("logged")) || { logged: false };
}
} */
const AppRouter = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.login);

  useEffect(() => {
    //console.log(localStorage.getItem("logged"));
    // console.log(data)
    if (localStorage.getItem("logged") == null) {
      console.log("no esta logeado");
      dispatch(logout());
    }

    //console.log(localStorage.getItem("logged"));
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("logged"));
    if (state.logged) {
      localStorage.setItem("logged", JSON.stringify(state.logged));
    }
  }, [state]);

  //console.log("esta logueado");

  // useEffect(() => {
  //   if (logged === undefined) {
  //     /* return JSON.parse(localStorage.getItem("logged")) || { logged: false }; */
  //     console.log("cogio");
  //     return (
  //       localStorage.setItem("logged", true) ||
  //       localStorage.setItem("logged", false)
  //     );
  //   }
  // }, []);

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

          {/* <Route
            path="*"
            element={
              <PublicRouter>
                <PublicRoutes />
              </PublicRouter>
            }
          /> */}

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
