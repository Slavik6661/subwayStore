const Koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const cookie = require("cca-koa-cookie");
const router = require("./routs/routs");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { verify } = require("crypto");
// const mongoose = require("mongoose");
// const User = require("./dbSchema/userSchema");
// const dataFood = require("./dbSchema/dataFood");
// const Order = require("./dbSchema/orderSchema");
// const ingredients = require("./dbSchema/customIngredients");
const json = require("../../frontend/dist/server/data.json");
require("./dbConnection/dbConnect");
require("dotenv").config({ path: "../.env" });

const PORT = 3000;
const app = new Koa();
const pathStatic = path.join(__dirname, "../../frontend/dist");
console.log(json);
app.use(bodyParser());
app.use(koaStatic(pathStatic));
app.use(cookie);

app.use(router.routes());
app.listen(PORT, () => {
  console.log("server starting ");
  console.log(process.env.PORT);
  console.log(process.env.SECRET_KEY);
});
