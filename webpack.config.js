const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Critters = require("critters-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./_indexSrc/scripts.js",
  output: {
    path: path.resolve(__dirname),
    filename: "[hash].bundle.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./_indexSrc/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].bundle.css",
    }),
    new CleanWebpackPlugin(["./*.bundle.js", "./*.bundle.css", "./index.html"]),
    new Critters({}),
  ],
};
