import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./login.jsx";
import Registration from "./registration.jsx";
import "../../../static/style/auth.css";
import { stateLoginForm } from "../../store/store.js";

const Auth = () => {
  const dispatch = useDispatch();
  let showLoginForm = useSelector((state) => state.showLoginForm);
  let showRegForm = useSelector((state) => state.showRegForm);
  const openLoginForm = () => {
    dispatch(stateLoginForm(!showLoginForm));
  };
  return (
    <>
      {/* <p>Вход/Регистрация</p> */}
      <button
        id="auth"
        className="auth"
        onClick={() => openLoginForm()}
      ></button>
      {showLoginForm && <Login />}
      {showRegForm && <Registration />}
    </>
  );
};
export default Auth;
