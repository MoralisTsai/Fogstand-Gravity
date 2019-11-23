/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const styledComponentsTransformer = createStyledComponentsTransformer();

const config = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => (
                {
                  before: [styledComponentsTransformer],
                }
              ),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
  ],
};

module.exports = config;
