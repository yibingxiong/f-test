const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

let config = () => ({});

try {
    config = require(`./webpack.${process.env.NODE_ENV}.config`)
} catch(e) {
    config = () => ({});
    console.error(e);
}

const NODE = 'node'
const WEB = 'web'

const mergeWithPlatform = (platform) => {
    return merge(baseConfig(platform), config(platform))
}
module.exports = [mergeWithPlatform(NODE), mergeWithPlatform(WEB)]

