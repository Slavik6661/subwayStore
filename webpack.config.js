const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./componentss/mainScripts.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    //clean: true,
    filename: "mainScripts.js",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./componentss/main.html",
  //     filename: "main.html",
  //   }),
  // ],

  devServer: {
    static: {
      directory: path.join(__dirname, "/dist/"),
    },
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // test: /\.(jpe?g|png)$/i,
        // type: "assets/resource",
      },
    ],
  },
};
