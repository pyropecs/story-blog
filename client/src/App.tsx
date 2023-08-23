import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
