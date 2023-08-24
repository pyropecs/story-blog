import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />

        <Route
          element={
            <ProtectedRoutes>
              <div style={{color:"white"}} >ddsds</div>
            </ProtectedRoutes>
          }
          path="/protect"
        />
      </Routes>
    </>
  );
}

export default App;
