<template>
  <div>
    HOME
    <TabBar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TabBar from '@/components/TabBar.vue'

@Component({ components: { TabBar } })
export default class Home extends Vue {}
</script>

<style scoped></style>
