const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');
const ROOT = path.join(__dirname, '..')
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.join(ROOT, 'dist'),
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
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 9090
    }
}