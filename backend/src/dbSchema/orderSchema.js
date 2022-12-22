const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {},
  order: {},
  date: String,
});
module.exports = model("Order", orderSchema);
