import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutersApp from "./RoutersApp";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Login from "../components/Login";
import InicioApp from "../components/InicioApp";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { logged } = useSelector((state) => state.login);

  useEffect(() => {
    if (logged) {
      localStorage.setItem("logged", JSON.stringify(logged));
    }
  }, [logged]);

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRouter>
                <RoutersApp />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
