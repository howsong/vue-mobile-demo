<template>
  <el-form-item :label="config.label" :prop="config.field" :label-width="labelWidth">
    <!-- 输入类表单 -->
    <el-input
      v-if="config.type === types.INPUT"
      :disabled="disabled"
      v-model="formData[config.field]"
      :placeholder="placeholder"
      :style="`width:${config.feildWidth ? `${config.feildWidth}px` : '100%'}`"
    />
    <!-- 数字类表单 -->
    <el-input-number
      v-else-if="config.type === types.INPUTNUMBER"
      :disabled="disabled"
      v-model="formData[config.field]"
      :placeholder="placeholder"
      controls-position="right"
      :style="`width:${config.feildWidth ? `${config.feildWidth}px` : '100%'}`"
      :min="0"
      class="custom_inputnumber"
    />

    <!-- 选择类 -->
    <el-select
      v-else-if="config.type === types.SELECT"
      :disabled="handleIsDisabled(config.fieldCode)"
      v-model="formData[config.field]"
      :placeholder="placeholder"
      :style="`width:${config.feildWidth ? `${config.feildWidth}px` : '100%'}`"
    >
      <el-option
        v-for="item in config.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>

    <!-- 级联选择器 -->
    <el-cascader
      v-else-if="config.type === types.CASCADER"
      :options="config.options"
      :show-all-levels="false"
      :props="{ label: 'label', value: 'value' }"
      v-model="formData[config.field]"
      :placeholder="holderPrefixes.select + config.fieldName"
      :style="`width:${config.feildWidth ? `${config.feildWidth}px` : '100%'}`"
    >
    </el-cascader>

    <!-- 日期类 -->
    <el-date-picker
      v-else-if="config.type === types.DATE"
      v-model="modelData[config.fieldCode]"
      :disabled="config.disabled"
      type="datetime"
      :placeholder="holderPrefixes.select + config.fieldName"
      :style="`width:${config.feildWidth ? `${config.feildWidth}px` : '100%'}`"
    />
  </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {
  IcustomConfig,
  FIELD_TYPES,
  getPlaceholderPrefix
} from '@/components/Common/CustomForm/config'
import { FormItem, DatePicker, Select, Option, Input, InputNumber, Cascader } from 'element-ui'

Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Cascader)

@Component
export default class CustomFormPart extends Vue {
  @Prop(Object) config!: IcustomConfig // 表单配置
  @Prop({ type: Array, default: [] }) disabledMenu?: string[] // 表单禁用名单
  @Prop(Object) formData!: object // 表单存储数据的对象
  // 表单类型种类
  public readonly types = FIELD_TYPES

  private holderPrefixes = { input: '请填写', select: '请选择' }
  // 表单数据
  @Prop(Object) public modelData!: object
  @Prop(Array) disabledInfo!: string[]

  handleIsDisabled(fieldCode: string) {
    if (this.disabledInfo) {
      return (this.disabledInfo as string[]).indexOf(fieldCode) > -1
    } else {
      return false
    }
  }
  // lable宽度
  get labelWidth() {
    return this.config.labelWidth ? `${this.config.labelWidth}px` : ''
  }
  // 是否禁用
  get disabled() {
    return this.disabledMenu && this.disabledMenu.includes(this.config.field) ? true : false
  }
  // placeholder
  get placeholder() {
    return getPlaceholderPrefix(this.config)
  }
}
</script>

<style lang="less">
.el-cascader-menu__list {
  height: 300px;
  overflow: auto;
}
.custom_inputnumber.el-input-number .el-input__inner {
  text-align: left;
}
</style>
