const bcrypt = require("bcrypt");
const User = require("../dbSchema/userSchema");
const { createJWT } = require("../helpers/createJWT");

async function registration(ctx) {
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
    return true;
  } catch (err) {
    ctx.body = "registration error";
    console.log(err);
    return true;
  }
}

async function login(ctx) {
  const { email, psw } = ctx.request.body;
  console.log(email, psw);
  const foundUser = await User.findOne({ email });

  if (foundUser) {
    const hashPassword = bcrypt.hashSync(psw, 5);
    const checkPassword = bcrypt.compareSync(psw, hashPassword); // true
    if (checkPassword) {
      const token = createJWT(foundUser);
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

module.exports = { registration, login };
