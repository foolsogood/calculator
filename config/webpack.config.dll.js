const path = require("path");
const webpack = require("webpack");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  mode: "production",
  entry: {
    react: ["react", "react-dom"]
  },
  output: {
    filename: "_dll_[name].js",
    path: resolve("temp"),
    library: "_dll_[name]" // 给打包后的结果赋到一个值上
  },
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]", // name == library,二者要同名，不然找不到对应关系
      path: resolve("temp/dll.json")
    })
    // new CleanWebpackPlugin()
  ]
};
