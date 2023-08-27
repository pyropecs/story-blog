import React from "react";
import { Form } from "../Form/Form";
import { useLocation } from "react-router-dom";
import { userContext } from "../../context/userContext";

const Login = () => {
  const location = useLocation();
  const { userData } = React.useContext(userContext);
  console.log(userData);
  return <Form path={location.pathname} />;
};

export default Login;
