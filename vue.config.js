/* eslint-disable @typescript-eslint/no-var-requires */
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
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 100
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
