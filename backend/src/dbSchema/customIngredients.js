const { Schema, model } = require("mongoose");

const customIngredients = new Schema({
  fillings: Object,
  volumes: Object,
  sizes: Object,
  breads: Object,
  vegetables: Object,
  sauces: Object,
});
module.exports = model("ingredients", customIngredients);
