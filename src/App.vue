<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="less">
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
