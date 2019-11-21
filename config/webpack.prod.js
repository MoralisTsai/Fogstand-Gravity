/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');

const webpackCommon = require('./webpack.common');

const config = {
  mode: 'production',
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
};

module.exports = merge(webpackCommon, config);
