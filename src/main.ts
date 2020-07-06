/*
 * @Author: your name
 * @Date: 2020-06-07 11:40:43
 * @LastEditTime: 2020-06-23 14:50:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/main.ts
 */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../element-variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
