const path = require('path')
const webpack = require('webpack')


module.exports = (platform) => ({
    entry: platform === 'web' ? {
        main: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true&timeout=3000&noInfo=false',
        ]
    } : undefined,
    output: {
        path: path.join(__dirname, '..', 'dist', platform),
        filename: `[name]${platform === 'node' ? '' : '-[chunkhash:8]'}.js`,
        publicPath: `/`,
        libraryTarget: platform === 'node' ? 'commonjs2' : undefined,
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})