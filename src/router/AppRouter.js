import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutersApp from "./RoutersApp";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Login from "../components/Login";

const AppRouter = () => {
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
            path="/login"
            element={
              <PublicRouter>
                {/* <InicioApp /> */}
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
