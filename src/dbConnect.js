const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbName = "store";
let collection = {};
// const findResult = [];
function main() {
  client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  collection = db.collection("dataFood");
  // findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);
  return "done";
}
main();
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());
module.exports = collection;
