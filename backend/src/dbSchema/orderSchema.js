const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  userId: String,
  order: [Object],
  totalSum: Number,
  date: String,
});
module.exports = model("Order", orderSchema);
