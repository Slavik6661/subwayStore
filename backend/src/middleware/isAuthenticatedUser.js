const jwt = require("jsonwebtoken");
const { verify } = require("crypto");

const isAuthenticatedUser = (ctx, next) => {
  try {
    const token = ctx.request.cookie.get("token");
    const checkToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log("data", checkToken.data);
    if (checkToken) {
      ctx.body = "OK";
      ctx.request.userid = checkToken.data;
      next();
    } else {
      console.log("checkToken error");
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = "token error";
    console.log("error invalid token");
  }
};
module.exports = isAuthenticatedUser;
