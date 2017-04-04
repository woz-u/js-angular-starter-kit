var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  plugins:[
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
  entry: [
    path.resolve(__dirname, 'ngApp/app.js')
  ],
  output: { path: __dirname + '/ngApp', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
};
