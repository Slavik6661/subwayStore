import express from "express";
const app = express();
let path = require("path");

app.use(express.static("data.js"));
app.use("/static", express.static(path.join(__dirname, "../static")));
app.use("/dist", express.static(path.join(__dirname, "../dist/mainScript.js")));
// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/views/htmlStore/subwayStore.html");
// });

console.log(path.join(__dirname, "../dist"));

app.use("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/main.html"));
});

app.listen(3000, () => console.log("listening on localhost:3000"));
