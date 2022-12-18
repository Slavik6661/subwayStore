const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: path.join(__dirname, "/component/mainScripts.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    // clean: true,
    filename: "mainScripts.js",
  },
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
    ],
  },
};
