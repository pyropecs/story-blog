import React from "react";
import LoginPage from "../components/Login/Login";
import { userContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { userData, setUserData } = React.useContext(userContext);
  console.log(userData);
  return userData.token ? <Navigate to="/protect" /> : <LoginPage />;
};

export default Login;
