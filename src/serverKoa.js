const Koa = require("koa");
const Router = require("koa-router");
const koaStatic = require("koa-static");
const htmlRender = require("koa-html-render");
const path = require("path");
const axios = require("axios");
const collection = require("./dbConnect");

const PORT = 3000;
const app = new Koa();
const router = new Router();
const pathStatic = path.join(__dirname, "../dist");

app.use(koaStatic(pathStatic));

router.get("/data", async (ctx, next) => {
  const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);
  ctx.body = findResult;
});

app.use(router.routes());
app.listen(PORT, () => {
  console.log("server starting ");
});
