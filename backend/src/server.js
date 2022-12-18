const Koa = require("koa");
const Router = require("koa-router");
const koaStatic = require("koa-static");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const User = require("./dbSchema/userSchema");
const dataFood = require("./dbSchema/dataFood");
const ingredients = require("./dbSchema/customIngredients");
const json = require("../../frontend/dist/server/data.json");
require("./dbConnection/dbConnect");

const PORT = 3000;
const app = new Koa();
const router = new Router();
const pathStatic = path.join(__dirname, "../../frontend/dist");
console.log(json);
app.use(bodyParser());

app.use(koaStatic(pathStatic));
router.get("/data", async (ctx) => {
  // const modalIngredients = await ingredients.create({});
  const foodMenu = await dataFood.find({});
  ctx.body = json;

  const arr = [
    "fillings",
    "volumes",
    "sizes",
    "breads",
    "vegetables",
    "sauces",
  ];
  for (i of arr) {
    let value = {};
    value = json.i;
    console.log(value);
  }
  console.log(json.fillings);
  // let fillings = {};
  // fillings = foodMenu[0].fillings;
  // fillings = foodMenu[0].volumes;
  // fillings = foodMenu[0].sizes;
  // fillings = foodMenu[0].breads;
  // fillings = foodMenu[0].vegetables;
  // fillings = foodMenu[0].sauces;

  // const record = new ingredients({
  //   fillings,
  // });
  // record.save();
});

router.post("/registration", async (ctx) => {
  const { email, psw } = ctx.request.body;
  console.log(email, psw);
  const findUser = await User.findOne({ email });

  if (findUser) {
    // return ctx.response
    //   .status(400)
    //   .json({ message: "такой пользователь уже есть " });
  }
  const user = new User({
    email,
    psw,
  });
  await user.save();
});

app.use(router.routes());
app.listen(PORT, () => {
  console.log("server starting ");
});
