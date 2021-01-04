const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
const isProd = process.env.NODE_ENV === 'production'
const config = isProd ? prodConfig : devConfig

const NODE = 'node'
const WEB = 'web'

const mergeWithPlatform = (platform) => {
    return merge(baseConfig(platform), config(platform))
}
module.exports = [mergeWithPlatform(NODE), mergeWithPlatform(WEB)]

