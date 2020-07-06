/*
 * @Author: your name
 * @Date: 2020-06-24 19:06:03
 * @LastEditTime: 2020-06-24 19:07:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/vue.config.js
 */
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
