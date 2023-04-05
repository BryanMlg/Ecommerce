const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DotEnv = require("dotenv-webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[name][ext][query]",
    clean:true,
  },
  mode:"production",
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
      "@context": path.resolve(__dirname, "./src/context"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      
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
        test: /\.png|.jpg|.svg|.gif$/,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizer()
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
};
