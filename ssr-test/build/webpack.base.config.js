const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')


function registerPlugins(platform) {
  const plugins = [
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    })
  ];
  return plugins;
}

module.exports = (platform) => {
  return {
    entry: `./src/App-${platform}.tsx`,
    mode: 'development',
    target: platform,
    output: {
      path: path.join(__dirname, '..', 'dist', platform),
      filename: `[name]${platform === 'node' ? '' : '-[chunkhash:8]'}.js`,
      publicPath: `/dist/${platform}/`,
      libraryTarget: platform === 'node' ? 'commonjs2' : undefined,
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
    plugins: registerPlugins(platform),
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            filename: `vendor${platform === 'node' ? '' : '-[chunkhash:8]'}.js`,
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all'
          }
        }
      }
    }
  }
}