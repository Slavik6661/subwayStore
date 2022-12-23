async function withoutReg(ctx) {
  ctx.status = 200;
  const { data, value } = ctx.request.body;
  console.log(data);
  console.log(value);
}
module.exports = { withoutReg };
