const { Schema, model } = require("mongoose");
const User = require("./userSchema");

const orderSchema = new Schema({
  id: Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: User },
  Name: String,
  amount: Number,
  date: Date,
});
module.exports = model("Order", orderSchema);
