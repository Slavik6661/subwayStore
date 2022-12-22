const ingredients = require("../dbSchema/customIngredients");
const dataFood = require("../dbSchema/dataFood");

async function modalData(ctx) {
  const modalFoods = await ingredients.find({});
  ctx.body = modalFoods;
}

async function foodsData(ctx) {
  const foodMenu = await dataFood.find({});
  ctx.body = foodMenu;
}

async function mainPage(ctx) {
  ctx.redirect("http://localhost:3000/main.html");
}
module.exports = { modalData, foodsData, mainPage };
