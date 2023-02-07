const dataFood = require("../dbSchema/product");

async function searchProduct(ctx) {
  const products = ctx.request.query;
  console.log("query", products.searchProduct);
  const { searchProduct } = products;
  const { menuCategory } = products;
  console.log(searchProduct, menuCategory);
  const foodMenu = await dataFood.find({
    name: { $regex: new RegExp(searchProduct, "i") },
    category: menuCategory,
  });
  ctx.body = foodMenu;
  ctx.status = 200;
}
module.exports = searchProduct;
