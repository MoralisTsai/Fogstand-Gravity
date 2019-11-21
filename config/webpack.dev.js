/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');

const webpackCommon = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.tsx'),
  ],
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    modules: [
      path.join(__dirname, '../src'),
      "node_modules",
    ],
  },
};

module.exports = merge(webpackCommon, config);
