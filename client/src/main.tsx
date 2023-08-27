import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserContext } from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContext>
        <App />
      </UserContext>
    </React.StrictMode>
  </BrowserRouter>
);
