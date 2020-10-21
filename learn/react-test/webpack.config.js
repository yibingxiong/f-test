const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: 'app.js',
    chunkFilename: '[name].app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' 
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }]
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
    host: 'localhost',
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};