/* eslint-disable @typescript-eslint/explicit-function-return-type */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const styledComponentsTransformer = createStyledComponentsTransformer();

const config: webpack.Configuration = {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true,
    clientLogLevel: 'none',
  },
  entry: ['react-hot-loader/patch', './src/root.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
  ],
};

export default config;
