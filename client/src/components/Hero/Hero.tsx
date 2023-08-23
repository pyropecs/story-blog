import { Link } from "react-router-dom";
import "./hero.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const str = "More we nurture,more we care...";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < str.length) {
      const timeOut = setTimeout(() => {
        setText((prev) => prev + str[index]);
        setIndex((prev) => prev + 1);
      }, 200);

      return () => clearTimeout(timeOut);
    }
  }, [index, str]);

  return (
    <div className="hero">
      <div className="hero-name">
        <h1 className="hero-title">{text}</h1>
        <Link to="/register">
          <button className="register">Sign up</button>
        </Link>
        <p className="alt-login">already have an account ?</p>
      </div>
    </div>
  );
}
