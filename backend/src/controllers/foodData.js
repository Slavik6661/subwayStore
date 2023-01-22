const ingredients = require("../dbSchema/customIngredients");
const dataFood = require("../dbSchema/dataFood");

async function modalData(ctx) {
  const modalFoods = await ingredients.find({});
  modalFoods.forEach((food) => {
    ctx.body = food;
  });
  // ctx.body = modalFoods;
}

async function foodsData(ctx) {
  const foodMenu = await dataFood.find();
  // eslint-disable-next-line prefer-destructuring
  ctx.body = foodMenu[0].menu;
}

async function mainPage(ctx) {
  ctx.redirect("http://localhost:3000/main.html");
}
module.exports = { modalData, foodsData, mainPage };
