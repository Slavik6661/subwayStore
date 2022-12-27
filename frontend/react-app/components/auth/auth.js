import EventBus from "../../../component/pubSub";

class Auth {
  html = "";

  constructor() {}

  stateLoginForm = true;

  render() {
    // eslint-disable-next-line operator-linebreak
    if (this.stateLoginForm) {
      this.html =
        /* html */
        `
    <div id ='loginForm-overlay'>
        <dialog id='reg-form' class="login-form" open>
            <form method='POST' action='/registration'>
            <div class='form-auth'>
            <h1>Register</h1>
            <label for="email"><b>Email</b></label>
            <input type='text' placeholder='Enter Email' name='email' id='email' required />

            <label for="psw"><b>Password</b></label>
            <input type='password' placeholder='Enter password' name='psw' id='psw' required/>
            
            <button type="submit" class="register-btn">Register</button>
            </div>

            </form>
            <div class="container-signin">
                <p>Already have an account? <button id='login'>Sign in</button>.</p>
            </div>
        </dialog>
    </div>
    
      `;
    } else {
      this.html =
        /* html */
        `
   <div id ='loginForm-overlay'>
       <dialog id='login-form'class="login-form" open>
           <form method='POST' action='/login'>
           <div class='form-auth'>
            <h1>Login</h1>
           <label for="email"><b>Email</b></label>
           <input type='text' placeholder='Enter Email' name='email' id='email' required />

           <label for="psw"><b>Password</b></label>
           <input type='password' placeholder='Enter password' name='psw' id='psw' required/>
           
           <button type="submit" class="register-btn">Sign in</button>
           </div>

          
           </form>
           <div class="container-signin">
           <p>Already have an account? <button id='reg-in'>Reg in</button>.</p>
       </div>
       </dialog>
   </div>
   
     `;
    }
    return this.html;
  }

  // loginRender() {
  //   // eslint-disable-next-line operator-linebreak
  //   this.html =
  //     /* html */
  //     `
  //  <div id ='loginForm-overlay'>
  //      <dialog id='login-form' open>
  //          <form method='POST' action='/login'>
  //          <div class='form-auth'>
  //           <h1>Login</h1>
  //          <label for="email"><b>Email</b></label>
  //          <input type='text' placeholder='Enter Email' name='email' id='email' required />

  //          <label for="psw"><b>Password</b></label>
  //          <input type='password' placeholder='Enter password' name='psw' id='psw' required/>

  //          <button type="submit" class="register-btn">Sign in</button>
  //          </div>

  //          </form>
  //          <div class="container-signin">
  //          <p>Already have an account? <button id='reg-in'>Reg in</button>.</p>
  //      </div>
  //      </dialog>
  //  </div>

  //    `;
  //   return this.html;
  // }

  eventListeners() {
    const auth = document.querySelector("#auth");
    const contentFoods = document.querySelector("#contentFoods");
    auth.addEventListener("click", (e) => {
      const html = this.render();
      contentFoods.insertAdjacentHTML("afterbegin", html);
      this.regForm();
      // this.loginForm();
    });
  }

  closeFormLogin(loginForm, loginFormOverlay) {
    loginFormOverlay.addEventListener("click", (e) => {
      console.log(e.target.id);
      if (e.target.id === "loginForm-overlay") {
        loginForm.remove();
        loginFormOverlay.remove();
      }
    });
  }

  regForm() {
    const contentFoods = document.querySelector("#contentFoods");
    const btnLogin = document.querySelector("#login");
    const loginFormOverlay = document.querySelector("#loginForm-overlay");
    const loginForm = document.querySelector("#reg-form");
    this.closeFormLogin(loginForm, loginFormOverlay);
    btnLogin.addEventListener("click", () => {
      this.stateLoginForm = false;
      loginForm.remove();
      loginFormOverlay.remove();
      contentFoods.insertAdjacentHTML("afterbegin", this.render());
      this.loginForm();
    });
  }

  loginForm() {
    const contentFoods = document.querySelector("#contentFoods");
    const btnReg = document.querySelector("#reg-in");
    const loginFormOverlay = document.querySelector("#loginForm-overlay");
    const loginForm = document.querySelector("#login-form");
    this.closeFormLogin(loginForm, loginFormOverlay);
    if (btnReg) {
      btnReg.addEventListener("click", () => {
        this.stateLoginForm = true;
        loginForm.remove();
        loginFormOverlay.remove();
        contentFoods.insertAdjacentHTML("afterbegin", this.render());
        this.regForm();
      });
    }
  }
}

export default Auth;
