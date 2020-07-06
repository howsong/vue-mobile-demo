<!--
 * @Author: your name
 * @Date: 2020-06-24 19:07:52
 * @LastEditTime: 2020-06-27 10:35:01
 * @LastEditors: Please set LastEditors
 * @Description: 登录表单
 * @FilePath: /vue-ts/src/components/Login/LoginForm.vue
-->
<template>
  <div class="login_form_wrapper">
    <h3 class="login_title">{{ title }}</h3>
    <el-form label-width="100px">
      <el-form-item label="账号">
        <el-input placeholder="请填写账号" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请填写密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form, FormItem, Input, Button } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

@Component
export default class LoginForm extends Vue {
  private title = '欢迎登陆'
}
</script>

<style scoped lang="less">
.login_form_wrapper {
  width: 460px;
  background-color: #fff;
  border: 1px solid #8e8e8e;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
