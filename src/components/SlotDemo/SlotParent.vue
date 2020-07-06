<template>
  <div>
    <h3>我是Slot父组件</h3>
    <SlotChild>
      <template #default="data">我是默认的插槽 {{ data.title }}</template>
      <template #header="data">我是header的插槽 {{ data.title }}</template>
    </SlotChild>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SlotChild from './SlotChild.vue'
@Component({
  components: {
    SlotChild
  }
})
export default class SlotParent extends Vue {}
</script>

<style scoped></style>
