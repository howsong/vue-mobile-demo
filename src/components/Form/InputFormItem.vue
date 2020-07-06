<template>
  <el-form-item :label="$attrs.label" :prop="prop">
    <el-input v-model="formData[prop]" />
  </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { FormItem, Input } from 'element-ui'
import { IFormData } from '@/components/Form/dataConfig'

Vue.use(FormItem)
Vue.use(Input)

@Component
export default class InputFormItem extends Vue {
  @Prop(Object) formData!: IFormData
  @Prop(String) prop!: string

  private created() {
    console.log(this.$props, '$props---------------')
    console.log(this.$attrs, '$attrs---------------')
    console.log(this.$listeners, '$listeners---------------')
  }
}
</script>

<style scoped></style>
