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
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
      path.join(__dirname, 'src'),
      "node_modules",
    ],
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
      {
        test: /\.(png|jpg|gif)$/,
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
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
    }),
  ],
};

export default config;
