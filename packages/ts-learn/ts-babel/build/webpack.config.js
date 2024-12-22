const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
const isProd = process.env.NODE_ENV === 'production';
const config = isProd ? prodConfig : devConfig;

module.exports = merge(baseConfig, config)

