const stuffingJSON = require("./stuffing.json");
const ProductMenu = require("../dbSchema/product");
const Stuffing = require("../dbSchema/stuffing");

async function modalData(ctx) {
  const obj = {};

  const modalFoods = await Stuffing.find({});

  // img - alt
  // title

  // for (const [key, value] of Object.entries(stuffingJSON[0])) {
  //   obj[key] = arr;
  //   const stuffing = new Stuffing({
  //     categoryFillings: key,
  //     productFillings: value,
  //   });
  //   stuffing.save();
  // }
  ctx.body = modalFoods;
}

async function foodsData(ctx) {
  // filter by category, pagination
  const dataQuery = ctx.request.query;
  const productLimit = 3;
  console.log(dataQuery);
  const { menuCategory } = dataQuery;
  const { skipPage } = dataQuery;
  console.log("----", menuCategory);

  const totalCount = await ProductMenu.countDocuments({ category: menuCategory });
  const totalPageCount = Math.ceil(totalCount / productLimit);
  const productMenu = await ProductMenu.find({ category: menuCategory })
    .skip(skipPage ?? 0)
    .limit(productLimit);
  ctx.body = { productMenu, totalPageCount };
  ctx.status = 200;
  // foodMenu[0].menu.forEach((el, index) => {
  //   if (el.category === "sandwiches") {
  //     // eslint-disable-next-line no-const-assign
  //     object[index] = {
  //       name: el.name,
  //       description: el.description,
  //       image: el.image,
  //       price: el.price,
  //       category: el.category,
  //       market: el.market,
  //       type: el.type,
  //       weight: el.weight,
  //       components: {
  //         size: "1x",
  //         bread: "whit-italian",
  //         vegetable: [],
  //         sauce: [],
  //         filling: [],
  //       },
  //     };

  // const productMenu = new ProductMenu({
  //   name: el.name,
  //   description: el.description,
  //   image: el.image,
  //   price: el.price,
  //   category: el.category,
  //   market: el.market,
  //   type: el.type,
  //   weight: el.weight,
  //   components: {
  //     size: "1x",
  //     bread: "whit-italian",
  //     vegetable: [],
  //     sauce: [],
  //     filling: [],
  //   },
  // });
  // productMenu.save();
  // } else {
  //   object[index] = {
  //     name: el.name,
  //     description: el.description,
  //     image: el.image,
  //     price: el.price,
  //     category: el.category,
  //     market: el.market,
  //     type: el.type,
  //     weight: el.weight,
  //   };
  //   ctx.body = object;
  // const productMenu = new ProductMenu({
  //   name: el.name,
  //   description: el.description,
  //   image: el.image,
  //   price: el.price,
  //   category: el.category,
  //   market: el.market,
  //   type: el.type,
  //   weight: el.weight,
  // });
  // productMenu.save();

  // }
  // });
}

async function mainPage(ctx) {
  ctx.redirect("http://localhost:3000/main.html");
}
module.exports = { modalData, foodsData, mainPage };
