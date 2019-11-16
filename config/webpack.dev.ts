import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import merge from 'webpack-merge';
import common from './webpack.common';

const styledComponentsTransformer = createStyledComponentsTransformer();

const config: webpack.Configuration = {
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
            },
          },
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => (
                {
                  before: [styledComponentsTransformer],
                }
              ),
              transpileOnly: true,
              experimentalWatchApi: true,
            },
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

export default merge(common, config);
