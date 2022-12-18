console.log("DB START");

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/store");
}

main()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));
