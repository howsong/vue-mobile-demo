<template>
  <el-form
    :model="formData"
    ref="demoForm"
    label-position="right"
    label-width="120px"
    :rules="rules"
  >
    <InputFormItem label="合同名称" :formData="formData" prop="contractName" />
    <el-form-item>
      <el-button type="primary" @click="submit('demoForm')">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form, Button } from 'element-ui'
import InputFormItem from '@/components/Form/InputFormItem.vue'

Vue.use(Form)
Vue.use(Button)

@Component({
  components: { InputFormItem }
})
export default class FormDemo extends Vue {
  private formData = {
    contractName: ''
  }

  private rules = {
    contractName: [{ required: true, message: '合同名称不能为空' }]
  }

  private submit() {
    console.log(this.formData, '提交数据')
  }

  private created() {
    this.formData.contractName = 'YYYYYYYYYYYYYYYYY'
  }
}
</script>

<style scoped></style>
