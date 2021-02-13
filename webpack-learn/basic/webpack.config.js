const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      //   use: ['eslint-loader'],
      // },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    runtimeChunk: true,
  },
};
