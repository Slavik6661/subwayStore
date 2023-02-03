const { Schema, model } = require("mongoose");

const ProductsMenu = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  market: String,
  type: String,
  weight: Number,
  components: {
    size: String,
    bread: String,
    vegetable: Array,
    sauce: Array,
    filling: Array,
  },
});

module.exports = model("ProductsMenu", ProductsMenu);
