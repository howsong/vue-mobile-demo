<!--
 * @Author: your name
 * @Date: 2020-06-24 15:35:34
 * @LastEditTime: 2020-06-24 17:22:43
 * @LastEditors: Please set LastEditors
 * @Description: 自定义表单组件
 * @FilePath: /vue-ts/src/components/Common/CustomForm/CustomForm.vue
-->
<template>
  <el-form :ref="refName" :rules="rules">
    <CustomFormItem v-for="(config, index) in configs" :key="index" :config="config" />
    <el-form-item>
      <el-button @click="onCancle">取消</el-button>
      <el-button type="primary" @click="onSure">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Form, FormItem, Button } from 'element-ui'
import CustomFormItem from '@/components/Common/CustomForm/CustomFormItem.vue'
import { IcustomConfig, generateCustomRules } from '@/components/Common/CustomForm/config'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)

@Component({
  components: {
    CustomFormItem
  }
})
export default class CustomForm extends Vue {
  @Prop({ type: Boolean, default: false }) isTrim?: boolean // 输入类提交的时候是否需要去掉首尾空格
  @Prop({ type: Array, default: [] }) configs!: IcustomConfig[] // 自定义配置
  @Prop(String) refName!: string // 表单ref
  private formData = {}

  // 生成表单校验规则
  get rules() {
    return generateCustomRules(this.configs)
  }

  // 表单提交
  @Emit()
  private onSure() {
    ;(this.$refs[this.refName] as Form).validate(valid => {
      if (valid) {
        this.$emit('submit', this.formData)
      }
    })
  }
  // 取消
  @Emit()
  private onCancle() {
    this.$emit('cancle')
  }
}
</script>

<style scoped></style>
