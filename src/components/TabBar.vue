<!--
* @description 底部导航
* @fileName TabBar.vue
* @author howsong
* @date 2020/07/07 11:28:09
!-->
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)

@Component
export default class TabBar extends Vue {
  private active = 0
}
</script>

<style scoped lang="less"></style>
