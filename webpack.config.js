const path = require("path");

module.exports = {
  // Define entry point
  entry: "./src/script1.js",

  // Define output point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  mode: "development", // or "production"

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Uncomment if using SCSS
      // {
      //   test: /\.scss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },
};
