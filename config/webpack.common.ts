import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const styledComponentsTransformer = createStyledComponentsTransformer();

const config: webpack.Configuration = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
    modules: [
      path.resolve(__dirname, '../src'),
      "node_modules",
    ],
    symlinks: false,
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

export default config;
