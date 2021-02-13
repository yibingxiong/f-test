const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
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
