<template>
  <div class="login_page">
    LOGIN
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {}
</script>

<style scoped lang="less">
.login_page {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
}
</style>
