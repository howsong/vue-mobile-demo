<!--
 * @Author: your name
 * @Date: 2020-06-23 16:00:16
 * @LastEditTime: 2020-06-27 10:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/views/Login.vue
-->
<template>
  <div class="login_page">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginForm from '@/components/Login/LoginForm.vue'

@Component({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {}
</script>

<style scoped lang="less">
.login_page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
