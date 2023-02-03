import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AlertReg from "./alertsAuth/registerAlerts.jsx";
import "../../../static/style/auth.css";
import { stateLoginForm, stateRegForm, isAuth } from "../../store/store.js";

const Login = () => {
  const dispatch = useDispatch();
  let showLoginForm = useSelector((state) => state.showLoginForm);
  let showRegForm = useSelector((state) => state.showRegForm);
  let isAuthReg = useSelector((state) => state.isAuth);
  const openRegForm = () => {
    dispatch(stateLoginForm(!showLoginForm));
    dispatch(stateRegForm(!showRegForm));
  };
  const [statusCode, setStatusCode] = useState("");
  const [textMessage, setTextMessage] = useState("");
  let login = "";
  let password = "";
  const sendRegistrationData = () => {
    axios
      .post("/login", {
        email: login,
        psw: password,
      })
      .then((response) => {
        setStatusCode(response.status);
        setTextMessage(response.data.message);
        dispatch(isAuth(!isAuthReg));
        setTimeout(() => {
          dispatch(isAuth(false));
          dispatch(stateLoginForm(!showLoginForm));
        }, 3000);
      })
      .catch((err) => {
        setStatusCode(err.response.status);
        setTextMessage(err.response.data.message);
        dispatch(isAuth(!isAuthReg));
        setTimeout(() => {
          dispatch(isAuth(false));
        }, 3000);
      });
  };
  return (
    <div
      id="loginForm-overlay"
      onClick={() => {
        dispatch(stateLoginForm(!showLoginForm));
      }}
    >
      <dialog
        id="login-form"
        className="login-form"
        onClick={(e) => {
          e.stopPropagation();
        }}
        open
      >
        <div className="form-auth">
          <h1>Login</h1>
          {isAuthReg && <AlertReg status={statusCode} textRes={textMessage} />}
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            onChange={(e) => {
              login = e.target.value;
            }}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="psw"
            id="psw"
            required
            onChange={(e) => {
              password = e.target.value;
            }}
          />
          <button
            type="submit"
            className="register-btn"
            onClick={() => sendRegistrationData()}
          >
            Sign in
          </button>
        </div>

        <div className="container-signin">
          <p>
            Already have an account?{" "}
            <button id="reg-in" onClick={() => openRegForm()}>
              Reg in
            </button>
            .
          </p>
        </div>
      </dialog>
    </div>
  );
};
export default Login;
