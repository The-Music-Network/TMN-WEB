const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

require("dotenv").config();
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  node: {
    fs: "empty",
    child_process: "empty"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./dist/index.html"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   hot: true,
  //   warnings: true,
  //   errors: true,
  //   compress: true,
  //   port: 8080
  // }
};
