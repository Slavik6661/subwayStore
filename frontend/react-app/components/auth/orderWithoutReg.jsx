import React from "react";

const WindowOrderWithoutReg = () => {
  return (
    <div id="loginForm-overlay">
      <dialog id="reg-form" className="login-form" open>
        <div className="order-without-registration">
          <h1>Register Order</h1>
          <label for="Phone">
            <b>Enter your Phone</b>
          </label>
          <input
            id="telNo"
            name="telNo"
            type="tel"
            sizes="12"
            maxlength="12"
            placeholder="+7(...)"
          />
          <button type="submit" className="register-btn">
            Send
          </button>
        </div>

        <div className="container-signin">
          <p>
            Already have an account? <button id="login">Sign in</button>.
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default WindowOrderWithoutReg;
