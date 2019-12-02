const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/web/index.tsx",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/web/template.html",
    }),
  ],
}
