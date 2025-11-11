import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";

export default (env) => {
  const isDev = env.mode === "development";

  return {
    mode: env.mode ?? "development",
    // eslint-disable-next-line no-undef
    entry: resolve(__dirname, "src", "index.js"),
    output: {
      // eslint-disable-next-line no-undef
      path: resolve(__dirname, "dist"),
      filename: isDev ? "[name].js" : "[name].[contenthash].js",
      clean: true,
    },

    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        // eslint-disable-next-line no-undef
        template: resolve(__dirname, "src", "index.html"),
      }),
      new ESLintPlugin({
        emitWarning: isDev,
        failOnError: !isDev,
      }),
    ],
    devServer: {
      port: 5000,
      open: true,
    },
  };
};
