const bcrypt = require("bcrypt");
const User = require("../dbSchema/userSchema");
const { createJWT } = require("../helpers/createJWT");

async function registration(ctx) {
  try {
    const { email, psw } = ctx.request.body;
    console.log("!!", email, psw);
    const findUser = await User.findOne({ email });
    if (findUser) {
      ctx.response.body = {
        message: "Такой пользователь уже есть !",
      };
      ctx.status = 400;
      return false;
    }
    const hashPassword = bcrypt.hashSync(psw, 5);
    const user = new User({
      email,
      password: hashPassword,
    });
    await user.save();
    ctx.response.body = {
      message: "Регистрация прошла успешно!",
    };
    ctx.status = 200;
  } catch (err) {
    console.log(err);
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
      ctx.response.body = { message: "Авторизация прошла успошно !" };
      ctx.status = 200;
      return true;
    }
    ctx.response.body = { message: "Неверный пароль !" };
    ctx.status = 400;
    return false;
  }
  ctx.response.body = { message: "Неверный логин !" };
  ctx.status = 400;
  return false;
}

module.exports = { registration, login };
