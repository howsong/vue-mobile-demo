/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
//当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
const Timestamp = new Date().getTime()
module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://crm-dev.wusong.com',
  //       changeOrigin: true,
  //       ws: true
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'vue-mobile-demo'
      return args
    })
  },
  configureWebpack: {
    output: {
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`
    }
  }
}
