const { DefinePlugin } = require("webpack")
const webConfig = require("./webpack.config")

const outputPath = webConfig.output.path

module.exports = [
  {
    ...webConfig,
    plugins: [
      ...webConfig.plugins,
      new DefinePlugin({
        __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })",
      }),
    ],
  },

  {
    mode: "development",
    entry: "./src/renderer/index.ts",
    devtool: "source-map",
    target: "electron-renderer",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: outputPath,
      filename: "renderer.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
  },

  {
    mode: "development",
    entry: "./src/main/index.ts",
    devtool: "source-map",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: outputPath,
      filename: "main.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
  },
]
