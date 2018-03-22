import { Configuration } from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  devtool: "source-map",
  mode: "production",
  output: { filename: "[name].[hash].js" },
  devServer: {
    host: "0.0.0.0"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { compilerOptions: { module: "esnext" } }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "error-tracking-test"
    })
  ]
} as Configuration;
