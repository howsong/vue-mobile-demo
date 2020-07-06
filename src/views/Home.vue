<!--
 * @Author: your name
 * @Date: 2020-06-07 11:40:43
 * @LastEditTime: 2020-06-23 17:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Home.vue
-->
<template>
  <div>
    <SlotParent />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Table from '@/components/Table.vue'
import SlotParent from '@/components/SlotDemo/SlotParent.vue'

@Component({
  components: {
    Table,
    SlotParent
  }
})
export default class Home extends Vue {}
</script>

<style scoped></style>
