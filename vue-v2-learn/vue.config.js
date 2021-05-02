// vue.config.js
module.exports = {
  configureWebpack: config => ({
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    }
  })
}