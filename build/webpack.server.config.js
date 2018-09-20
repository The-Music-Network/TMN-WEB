const merge = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.config");

module.exports = merge(base, {
    target: "node",
    entry: "../src/server.js",
    devtool: false,
    externals: Object.keys(require("../package.json").dependencies)
})