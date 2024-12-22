var path = require('path');
const MyExampleWebpackPlugin = require('./myplugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackSubresourceIntegrity = require('webpack-subresource-integrity');
module.exports = {
  mode: 'development',
  entry: './test_plugin/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MyExampleWebpackPlugin()
  ]
};