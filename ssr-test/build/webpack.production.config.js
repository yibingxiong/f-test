const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = (platform) => ({
    output: {
        path: path.join(__dirname, '..', 'dist', platform),
        filename: `[name]${platform === 'node' ? '' : '-[chunkhash:8]'}.js`,
        publicPath: `/`,
        libraryTarget: platform === 'node' ? 'commonjs2' : undefined,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
})