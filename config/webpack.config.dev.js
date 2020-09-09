const { merge } = require("webpack-merge");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.config.base");
const path = require("path");
module.exports = merge(baseWebpackConfig, {
  output: {
    filename: "js/[name].js"
  },
  plugins: [
    // 打印更新的模块路径
    new webpack.NamedModulesPlugin(),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": (NODE_ENV = "development")
    })
  ],
  devtool: "inline-source-map"
  // devServer: {
  //   open: true
  // }
});
