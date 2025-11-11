/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';

  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      clean: true,
    },

    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
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
