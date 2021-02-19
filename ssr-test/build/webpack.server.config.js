const path = require('path')

module.exports =
{
  entry: `./server/index.ts`,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'node',
  output: {
    path: path.join(__dirname, '..', 'server', 'out'),
    filename: `server.js`,
    publicPath: `/`,
    libraryTarget: 'commonjs2',
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
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
