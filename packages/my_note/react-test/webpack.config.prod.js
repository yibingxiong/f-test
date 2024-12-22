const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: 'app.js',
    chunkFilename: '[name].app.js',
    path: path.join(__dirname, '..', 'koa-test', 'static'),
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
    new CleanWebpackPlugin(['../koa-test/static']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/index.html')
   }),
  //  new SkeletonPlugin({
  //      pathname: path.resolve(__dirname, `./shell`), // the path to store shell file
  //      staticDir: path.resolve(__dirname, './dist'), // the same as the `output.path`
  //      routes: ['/', '/about'], // Which routes you want to generate skeleton screen
  //  })
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