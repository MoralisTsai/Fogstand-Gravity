import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, '../src/index.tsx'),
  ],
};

export default merge(common, config);
