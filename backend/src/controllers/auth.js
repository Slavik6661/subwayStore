const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cca-koa-cookie");
const User = require("../dbSchema/userSchema");

class Auth {
  async registration(ctx) {
    try {
      const { email, psw } = ctx.request.body;
      console.log(email, psw);
      const findUser = await User.findOne({ email });
      if (findUser) {
        ctx.body = "такой пользователь уже есть ";
        return console.error("error");
      }
      const hashPassword = bcrypt.hashSync(psw, 5);
      const user = new User({
        email,
        password: hashPassword,
      });
      await user.save();
      ctx.body = "Регистрация прошла успешно!";
    } catch (err) {
      ctx.body = "registration error";
      console.log(err);
    }
  }

  createJWT(foundUser) {
    const jwtToken = jwt.sign(
      {
        data: foundUser.id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 }
    );
    console.log(jwtToken);
    return jwtToken;
  }

  async login(ctx) {
    const { email, psw } = ctx.request.body;
    console.log(email, psw);
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      const hashPassword = bcrypt.hashSync(psw, 5);
      const checkPassword = bcrypt.compareSync(psw, hashPassword); // true
      if (checkPassword) {
        const createJWT = () => {
          const jwtToken = jwt.sign(
            {
              data: foundUser.id,
            },
            process.env.SECRET_KEY,
            { expiresIn: 60 }
          );
          return jwtToken;
        };
        const token = createJWT();
        console.log(token);
        ctx.request.cookie.set({
          key: "token",
          value: token,
        });
        ctx.body = "Авторизация прошла успошно ";
        ctx.redirect("http://localhost:3000/main.html");
      } else {
        ctx.body = "password error";
      }
    } else {
      ctx.body = "login error";
    }
  }
}

module.exports = Auth;
