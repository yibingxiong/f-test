
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader']
      }
    ]
  },
  optimization: {
    concatenateModules: false
  }
}