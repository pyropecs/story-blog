import React from "react";
import { Form } from "../Form/Form";
import { useParams, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();

  return <Form path={location.pathname} />;
};

export default Login;
