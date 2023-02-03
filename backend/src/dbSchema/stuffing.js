const { Schema, model } = require("mongoose");

const Stuffing = new Schema({
  categoryFillings: {
    type: Object,
    enum: ["fillings", "volumes", "sizes", "breads", "vegetables", "sauces"],
  },
  productFillings: Object,
});

module.exports = model("stuffing", Stuffing);
// fillings: Object,
// volumes: Object,
// sizes: Object,
// breads: Object,
// vegetables: Object,
// sauces: Object,
