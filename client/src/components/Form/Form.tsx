import "./form.css";
import { useReducer } from "react";
import reducer from "../../reducers/formreducer";
import postData from "./handlers";
export const Form = ({ path }) => {
  const [Formstate, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });
  const newPath = path === "/login" ? "Log in" : "Sign Up";
  async function onClickButtonSubmitHandler(e) {
    e.preventDefault();
    const data = await postData(Formstate);
    console.log(data);
  }
  return (
    <div className="form-container">
      <div className="logo-form">
        <img src="/moonlogo.png" alt="" />
      </div>
      <form className="form" onSubmit={onClickButtonSubmitHandler}>
        <h1 className="form-title">{newPath}</h1>
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
    </div>
  );
};
