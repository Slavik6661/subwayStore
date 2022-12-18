class Auth {
  html = "";

  render() {
    // eslint-disable-next-line operator-linebreak
    this.html =
      /* html */
      `
    <div id ='loginForm-overlay'>
        <dialog id='login-form' open>
            <form method='POST' action='/registration'>
            <div class='form-auth'>

            <label for="email"><b>Email</b></label>
            <input type='text' placeholder='Enter Email' name='email' id='email' required />

            <label for="psw"><b>Password</b></label>
            <input type='password' placeholder='Enter password' name='psw' id='psw' required/>
            
            <button type="submit" class="register-btn">Register</button>
            </div>

            <div class="container-signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
            </form>
        </dialog>
    </div>
    
      `;

    return this.html;
  }

  eventListeners() {
    const auth = document.querySelector("#auth");
    const contentFoods = document.querySelector("#contentFoods");
    auth.addEventListener("click", (event) => {
      const html = this.render();
      contentFoods.insertAdjacentHTML("afterbegin", html);
      const loginForm = document.querySelector("#login-form");
      const loginFormOverlay = document.querySelector("#loginForm-overlay");
      this.closeFormLogin(loginForm, loginFormOverlay);
      console.log(event.target.id);
      console.log("click");
    });
  }

  closeFormLogin(loginForm, loginFormOverlay) {
    loginFormOverlay.addEventListener("click", (event) => {
      console.log(event.target.id);
      if (event.target.id === "loginForm-overlay") {
        loginForm.remove();
        loginFormOverlay.remove();
        console.log("true");
      }
    });
  }
}

export default Auth;
