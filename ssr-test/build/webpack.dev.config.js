const path  = require('path')

module.exports = () => ({
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist', 'web'),
        compress: true,
        port: 9000
      }
})