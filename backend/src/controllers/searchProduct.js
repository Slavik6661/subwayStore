const dataFood = require("../dbSchema/product");

async function searchProduct(ctx) {
  const products = ctx.request.query;
  console.log("query", products.searchProduct);
  console.log(dataFood);
  const foodMenu = await dataFood.find({
    name: `/${products.searchProduct}/`,
  });
  ctx.body = foodMenu;
  ctx.status = 200;
}
module.exports = searchProduct;
