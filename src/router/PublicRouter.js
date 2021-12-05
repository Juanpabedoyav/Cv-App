import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PublicRouter = ({ children }) => {
  const { logged } = useSelector((state) => state.login);

  console.log('is: '+logged);

  return logged  ? <Navigate to="/home" /> : children;
};

export default PublicRouter;
