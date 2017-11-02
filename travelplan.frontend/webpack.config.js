const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const plugins = [];
module.exports = {
  entry: './src/index',
 module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }
    ]
  },        
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: plugins.concat([
      new webpack.LoaderOptionsPlugin({
        options: {
          eslint: {
            configFile: resolve(__dirname, '.eslintrc')
          }
        }
      })
    ]),
}