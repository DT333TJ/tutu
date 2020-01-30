const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/tutu',
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
      .set('style', resolve('src/style'))
  },
  devServer: {
    port: 7552
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/style/index.scss";
        `
      }
    }
  }
}