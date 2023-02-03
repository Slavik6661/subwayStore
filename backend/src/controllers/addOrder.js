const Order = require("../dbSchema/orderSchema");

async function addOrder(ctx) {
  const userId = ctx.request.userid;
  if (userId) {
    const { data, sum } = ctx.request.body;
    let date = new Date();
    date = `Date:${date.getDate()}:${date.getHours()}:${date.getFullYear()} Time:${date.getHours()}:${date.getMinutes()}`;
    const order = new Order({
      userId,
      order: data,
      totalSum: sum,
      date,
    });

    order.save();

    ctx.response.body = {
      message: "Ваш заказ оформлен!",
    };
    ctx.status = 200;
    return true;
  }
  ctx.status = 400;
  return false;
}
module.exports = addOrder;
