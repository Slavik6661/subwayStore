import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../static/style/auth.css";
import axios from "axios";
import { stateLoginForm, stateRegForm, isAuth } from "../../store/store.js";
import AlertReg from "./alertsAuth/registerAlerts.jsx";

const Registration = () => {
  const dispatch = useDispatch();
  let showLoginForm = useSelector((state) => state.showLoginForm);
  let showRegForm = useSelector((state) => state.showRegForm);
  let isAuthReg = useSelector((state) => state.isAuth);
  const openLoginForm = () => {
    dispatch(stateRegForm(!showRegForm));
  };
  let login = "";
  let password = "";
  const [statusCode, setStatusCode] = useState("");
  const [textMessage, setTextMessage] = useState("");

  const sendRegistrationData = () => {
    axios
      .post("/registration", {
        email: login,
        psw: password,
      })
      .then((response) => {
        console.log(response);
        setStatusCode(response.status);
        setTextMessage(response.data.message);
        dispatch(isAuth(!isAuthReg));
        setTimeout(() => {
          dispatch(showRegForm(!showRegForm));
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setStatusCode(err.response.status);
        setTextMessage(err.response.data.message);
        // dispatch(isAuth(!isAuthReg));
        setTimeout(() => {
          dispatch(isAuth(false));
        }, 3000);
      });
  };
  return (
    <div id="loginForm-overlay" onClick={() => dispatch(stateRegForm(!showRegForm))}>
      <dialog id="reg-form" className="login-form" onClick={(e) => e.stopPropagation()} open>
        <div className="form-auth">
          <h1>Register</h1>
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
            onClick={() => {
              sendRegistrationData();
            }}
          >
            Register
          </button>
        </div>

        <div className="container-signin">
          <p>
            Already have an account?{" "}
            <button id="login" onClick={() => openLoginForm()}>
              Sign in
            </button>
            .
          </p>
        </div>
      </dialog>
    </div>
  );
};
export default Registration;
