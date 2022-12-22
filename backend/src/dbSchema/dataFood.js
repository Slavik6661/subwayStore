const { Schema, model } = require("mongoose");

const FoodMenu = new Schema({
  menu: Array,
});

module.exports = model("dataFood", FoodMenu);
