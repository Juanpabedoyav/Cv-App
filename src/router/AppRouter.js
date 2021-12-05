import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import PublicRoutes from "./PublicRoutes";
import Login from "../components/Login";
import InicioApp from "../components/InicioApp";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoutes from "./PrivateRoutes";
import Registro from "../components/Registro"
import { logout } from '../redux/actions/loginAction'

// const initial= ()=>{
// return{
//     // JSON.parse(localStorage.getItem("logged")) || { logged: false };
// }
// } 
const AppRouter = () => {

  const dispatch = useDispatch()

  const { logged } = useSelector(state => state.login)

  useEffect(() => {
    //localStorage.setItem("logged", logged);

    if (localStorage.getItem("logged") === undefined) {
      console.log("logout")

      // localStorage.setItem('logged', JSON.stringify(logged));

    } else {
      console.log("else")
      dispatch(logout());
      //localStorage.setItem('logged', JSON.stringify(logged));

    }
    // console.log(data)
  }, []);

  useEffect(() => {

    if (logged == false) {

      console.log("hola")
      localStorage.setItem('logged', JSON.stringify(logged));

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
            } />

          <Route
            path="login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            } />

          <Route
            path="registro"
            element={
              <PublicRouter>
                <Registro />
              </PublicRouter>
            } />





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
