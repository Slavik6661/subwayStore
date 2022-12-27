const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  // entry: path.join(__dirname, "/component/mainScripts.js"),
  entry: path.join(__dirname, "/react-app/index.jsx"),
  // entry: ["@babel/polyfill", "./frontend/react-app/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    // clean: true,
    // filename: "mainScripts.js",
    filename: "react-app.js",
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
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-react", "@babel/preset-env"],
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
