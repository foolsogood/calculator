const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  entry: {
    index: resolve("src/index.tsx")
  },
  output: {
    path: resolve("dist"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[name].[chunkhash:8].chunk.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css", ".scss"],

    alias: {}
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: resolve("index.html"),
      chunks: ["index"],
      title: "首页"
    }),

    new MiniCssExtractPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};
