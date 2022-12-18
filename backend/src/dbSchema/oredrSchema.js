const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  amount: Number,
  date: Date,
});
module.exports = model("Order", orderSchema);
