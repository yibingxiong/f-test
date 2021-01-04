const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /tsx?$/i,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: 'vendor-[chunkhash:8].js',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  }
}