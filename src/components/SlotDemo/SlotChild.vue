<template>
  <div>
    <slot name="header" title="TEST"></slot>
    <h3>我是Slot子组件</h3>
    <slot title="TESTTTTTTTTTTTT"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class SlotChild extends Vue {
  private data = { name: 'TEST' }
}
</script>

<style scoped></style>
