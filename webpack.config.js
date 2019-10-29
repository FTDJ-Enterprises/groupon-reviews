const path = require("path");

module.exports = {
  entry: {
    main: "./client/index.js",
    vendor: ["styled-components"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    runtimeChunk: {
      name: "vendor"
    }
  }
};
