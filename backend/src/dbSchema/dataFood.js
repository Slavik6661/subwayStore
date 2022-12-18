const { Schema, model } = require("mongoose");

const FoodMenu = new Schema({
  menu: Array,
  fillings: Object,
  volumes: Object,
  sizes: Object,
  breads: Object,
  vegetables: Object,
  sauces: Object,
});

module.exports = model("dataFood", FoodMenu);
