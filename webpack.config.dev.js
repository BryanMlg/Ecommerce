const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnv = require("dotenv-webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode:"development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@scripts": path.resolve(__dirname, "./src/scripts"),
      
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        },
      },
      {
        test:/\.html$/,
        use:[{loader: "html-loader"}]
      },
      {
        test: /\.css|.sass|.scss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.png|.jpg|.svg|.gif/,
        type: "asset/resource",
      },
    ],
  },

  plugins:[
    new HtmlWebpackPlugin({
        template:"./public/index.html",
        filename:"index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new DotEnv(),
  ],

  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    open: true,
  },
};
