const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseWebpackConfig = require("./webpack.config.base");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = merge(baseWebpackConfig, {
  optimization: {
    minimize: true
  },
  externals: {},
  mode: "production",
  devtool: false,
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: resolve("temp/dll.json")
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve("temp/_dll_react.js")
    }),
    new webpack.DefinePlugin({
      "process.env": (NODE_ENV = "production")
    }),
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin()
    // new CopyWebpackPlugin([
    //   {

    //   }
    // ])
  ]
});
