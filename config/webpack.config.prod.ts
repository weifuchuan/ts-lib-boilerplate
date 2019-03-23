import { Configuration } from 'webpack'; 
import { resolveApp } from './kit';
const packageJson = require('../package.json');

export default {
  entry: resolveApp('src/index.ts'),
  output: {
    path: resolveApp(''),
    filename: packageJson.name + '.umd.js',
    libraryTarget: 'umd',
    library: packageJson.name
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
    // plugins: [ new TsconfigPathsPlugin() ]
  }
} as Configuration;
