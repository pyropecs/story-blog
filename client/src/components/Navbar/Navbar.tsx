import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className="head">
        <div className="logo">
          <h1 className="logo-title">storyblog</h1>
        </div>
        <div className="nav-bar">
          <ul className="nav-links">
            <li className="nav-about">About</li>
            <li className="nav-home">Home</li>
            <li className="nav-contact">Contact</li>
          </ul>
        </div>
        <div className="login">
          <button className="login-btn">Log in</button>
        </div>
      </header>
    </>
  );
}
