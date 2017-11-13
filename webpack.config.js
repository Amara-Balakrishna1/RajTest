const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

const chooseLoader = loader => (loader);
const plugins = [];
module.exports = {
  entry: './src/index',
 module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /(\.css)$/,
          use: chooseLoader(ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }))
        },
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
      }),
      new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false
      }),
    ]),
}
// , 'eslint-loader'