import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const token = true;
const ProtectedRoutes = ({ children }) => {
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
