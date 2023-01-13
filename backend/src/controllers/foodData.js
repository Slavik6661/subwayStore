const ingredients = require("../dbSchema/customIngredients");
const dataFood = require("../dbSchema/dataFood");

async function modalData(ctx) {
  const modalFoods = await ingredients.find({});
  const modalData = [];
  modalFoods.forEach((food) => {
    modalData.push(food);
  });
  ctx.body = modalData;
}

async function foodsData(ctx) {
  const foodMenu = await dataFood.find({});
  ctx.body = foodMenu;
}

async function mainPage(ctx) {
  ctx.redirect("http://localhost:3000/main.html");
}
module.exports = { modalData, foodsData, mainPage };
