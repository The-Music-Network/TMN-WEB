const merge = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  //     devServer: {
  //         // contentBase: path.join(__dirname, "../dist"),
  //         // color: true,
  //         // compress: true,
  //         // port: 8080
  //   },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.dev.html"
    })
  ]
});
