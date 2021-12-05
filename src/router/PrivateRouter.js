import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { logged } = useSelector((state) => state.login);

  // console.log(logged);

  return logged ? children : <Navigate to="/" />;
};

export default PrivateRouter;
