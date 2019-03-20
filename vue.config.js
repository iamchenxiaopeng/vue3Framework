const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/web/px'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: { // inline javascript is enabled报错问题
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 666,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://39.98.74.198:8080',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/service/app'
        }
      }
    }
  }
}
