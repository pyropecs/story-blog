import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { userContext } from "../context/userContext";

const ProtectedRoutes = ({ children }) => {
  const { userData, setUserData } = React.useContext(userContext);
  console.log(userData);
  const token = userData.token;

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
