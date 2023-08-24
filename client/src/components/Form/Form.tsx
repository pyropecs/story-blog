import "./form.css";
import { useReducer, useState } from "react";
import reducer from "../../reducers/formreducer";
import postData from "./handlers";
import { Link } from "react-router-dom";

export const Form = ({ path }) => {
  const [Formstate, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });

  const newPath = path === "/login" ? "Log in" : "Sign Up";
  async function onClickButtonSubmitHandler(e) {
    e.preventDefault();
    const data = await postData(Formstate, path);
    console.log(data);
  }
  return (
    <div className="form-container">
      <div className="logo-form">
        <img src="/moonlogo.png" alt="" />
      </div>
      <form className="form" onSubmit={onClickButtonSubmitHandler}>
        <h1 className="form-title">{newPath}</h1>
        {newPath === "Log in" ? (
          ""
        ) : (
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "text change",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            className="email"
            name="username"
            placeholder="Username"
            value={Formstate.username}
          />
        )}
        <input
          type="email"
          name="email"
          onChange={(e) =>
            dispatch({
              type: "text change",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          value={Formstate.email}
          className="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          name="password"
          onChange={(e) =>
            dispatch({
              type: "text change",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          value={Formstate.password}
          className="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      {path === "/login" ? (
        <p className="login-redirect">
          Don't have an account <Link to="/register">Sign Up</Link>
        </p>
      ) : (
        <p className="login-redirect">
          Already have an account <Link to="/login">Log in</Link>
        </p>
      )}
    </div>
  );
};
