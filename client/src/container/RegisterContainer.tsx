import { Form } from "../components/Form/Form";
import { useLocation } from "react-router-dom";

const registerContainer = () => {
  const location = useLocation();
  return <Form path={location.pathname} />;
};

export default registerContainer;
