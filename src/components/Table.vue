<!--
 * @Author: your name
 * @Date: 2020-06-23 17:15:37
 * @LastEditTime: 2020-06-23 17:21:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/components/Table.vue
-->
<template>
  <el-table :data="tableData" style="width: 100%" :size="tableSize">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Table, TableColumn } from 'element-ui'

Vue.use(Table)
Vue.use(TableColumn)

@Component
export default class TableDemo extends Vue {
  @Prop(String) size?: string
  get tableSize() {
    return this.size || ''
  }
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
