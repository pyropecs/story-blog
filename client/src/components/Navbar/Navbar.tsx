import { useState } from "react";
import "./navbar.css";

import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [close, setClose] = useState(false);

  return (
    <>
      <header className="head">
        <div className="logo">
          <h1 className="logo-title">storyblog</h1>
        </div>
        <div className="nav-bar ">
          <ul className="nav-links hide ">
            <li className="nav-about">About</li>
            <li className="nav-home">Home</li>
            <li className="nav-contact">Contact</li>
          </ul>
        </div>
        <div className="login  ">
          <Link to="/register">
            <button className="login-btn hide  ">Sign Up</button>
          </Link>

          <div
            className="big-hide bar-icon  "
            onClick={() => setClose((prev) => !prev)}
          >
            {close ? <FaXmark size="39px" /> : <FaBars size="39px" />}
          </div>
        </div>
      </header>
      <div className={`nav-absolute big-hide ${close ? "" : "nav-hide"}`}>
        <ul className=" nav-small">
          <li className="nav-small-links">About</li>
          <li className="nav-small-links">Home</li>
          <li className="nav-small-links">Contact</li>
          <li className="nav-small-links">Login</li>
          <li className="nav-small-links">Signup</li>
        </ul>
      </div>
    </>
  );
}
