const mongoose = require("mongoose");
const Order = require("../dbSchema/orderSchema");

async function addOrder(ctx) {
  const userId = ctx.request.userid;
  if (userId) {
    const data = ctx.request.body;
    console.log(userId);
    console.log(data);
    let date = new Date();
    date = `Date:${date.getDate()}:${date.getHours()}:${date.getFullYear()} Time:${date.getHours()}:${date.getMinutes()}`;
    console.log(date);
    const order = new Order({
      _id: new mongoose.Types.ObjectId(),
      userId,
      order: data,
      date,
    });
    await order.save();
  } else {
    console.log("error 400");
    ctx.status = 400;
  }
}
module.exports = addOrder;
