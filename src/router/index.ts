/*
 * @Author: your name
 * @Date: 2020-06-07 11:40:43
 * @LastEditTime: 2020-06-24 19:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/router/index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PATHS from '@/router/routePath'

const _import_ = (file: string) => () => import(`@/views/${file}.vue`)

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: PATHS.ROOT,
    name: 'Login',
    component: _import_('Login')
  },
  {
    path: PATHS.LOGIN,
    name: 'Login',
    component: _import_('Login')
  },
  {
    path: PATHS.HOME,
    name: 'Home',
    component: _import_('Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
