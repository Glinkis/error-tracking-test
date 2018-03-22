import { Configuration } from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  devtool: "source-map",
  mode: "development",
  output: { filename: "[name].[hash].js" },
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
