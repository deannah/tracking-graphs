// Set up the build
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "bundle.js": path.resolve(__dirname, "../src/client/scripts/client.js"),
    "styles.css": path.join(__dirname, "../src/client/styles/main.scss")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]"
  },

  module: {
    loaders: [
      {
        // package .js files into bundle.js
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // compile scss into css and combine in styles.css
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },

  plugins: [new ExtractTextPlugin("styles.css")]
};
