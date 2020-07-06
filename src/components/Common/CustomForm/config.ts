/*
 * @Author: your name
 * @Date: 2020-06-24 15:36:27
 * @LastEditTime: 2020-06-24 18:40:21
 * @LastEditors: Please set LastEditors
 * @Description: 自定表单组件相关配置
 * @FilePath: /vue-ts/src/components/Common/CustomForm/config.ts
 */ 
import { Form } from 'element-ui'
// 自定义表单类型
export enum FIELD_TYPES {
  INPUT = '0', // 一般文本输入框
  INPUTNUMBER = '1', // 数字类型输入框
  DATE = '2', // 日期类型
  SELECT = '3', // 一般选择类组件
  CASCADER = '4' // 级联
}

export const inputMenu:string[] = [FIELD_TYPES.INPUT, FIELD_TYPES.INPUTNUMBER]
export const selectMenu:string[] = [FIELD_TYPES.DATE, FIELD_TYPES.SELECT]

export const getPlaceholderPrefix = (config:IcustomConfig) => {
  return inputMenu.includes(config.field)? '请填写' : '请选择'
}

// 选项数据类型
export interface IoptionItem {
  value: string
  label: string
  children?: IoptionItem[]
}

export type IcustomOptions = Array<IoptionItem>

export interface IfieldLimit {
  fieldMin?: number
  fieldMax?: number
}

// 表单通用配制项
export interface IcustomConfig {
  type: string // 表单类型
  field: string // 提交表单名称
  label: string // 表单label名称
  labelWidth?: number | string// 表单label宽度 默认走表单统一设置的宽度
  required: boolean// 是否必填
  inputMax: number // 输入类字数上限

  options?: IcustomOptions // 选择类选项
  mult?: boolean // 是否为多选
  multNumber?:number // 最多选择个数 默认不设限制
}

export const FORM_REGS = {
  SPECIAL: new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]"
  )
}

// 输入类校验规则
export const inputValidator = (
  rule: Form,
  value: string,
  callback: Function,
  config: IcustomConfig
) => {
  const trimValue = value ? value.trim() : ''
  // 上限值
  const maxL = config.inputMax
  const label = config.label
  if (!value && config.required) {
    callback(new Error(`${label}不能为空`))
  } else if (typeof maxL === 'number' && trimValue.length > maxL) {
    callback(new Error(`${label}限制${maxL}个字数以内`))
  } else if (FORM_REGS.SPECIAL.test(value)) {
    callback(new Error(`${label}不能有特殊字符`))
  } else {
    callback()
  }
}

// 数字类校验规则
export const inputNumberValidator = (
  rule: Form,
  value: number,
  callback: Function,
  config: IcustomConfig
) => {
  // 上限值
  const maxNumber = config.inputMax
  const label = config.label
  if (!value && config.required) {
    callback(new Error(`${label}不能为空`))
  } else if (maxNumber && value >= Number(`${[1, ...new Array(maxNumber).fill('0')].join('')}`)) {
    callback(new Error(`${label}最大${maxNumber}位数`))
  } else {
    callback()
  }
}

/**
 * @function 生成自定义字段的校验规则
 * @author xwh
 * @date 2020-6-9
 */
export const generateCustomRules = (customConfigs: IcustomConfig[]) => {
  const rules: any = {}
  if (customConfigs && customConfigs.length > 0) {
    customConfigs.map((config: IcustomConfig) => {
      let itemRules: any[] = []
      switch (config.type) {
        // 输入类
        case FIELD_TYPES.INPUT:
          itemRules = [
            {
              required: config.required,
              validator: (rule: Form, value: string, callback: Function) =>
                inputValidator(rule, value, callback, config),
              trigger: 'blur'
            }
          ]
          break
        case FIELD_TYPES.INPUTNUMBER:
          itemRules = [
            {
              required: config.required,
              validator: (rule: Form, value: number, callback: Function) =>
                inputNumberValidator(rule, value, callback, config),
              trigger: 'blur'
            }
          ]
          break
        case FIELD_TYPES.SELECT:
          itemRules = [
            {
              required: config.required,
              trigger: 'change',
              message: `${config.label}不能为空`
            }
          ]
          break
        case FIELD_TYPES.DATE:
          itemRules = [
            {
              required: config.required,
              trigger: 'change',
              message: `${config.label}不能为空`
            }
          ]
          break
        default:
          break
      }
      if (config.field) {
        rules[config.field] = itemRules
      }
    })
  }
  return rules
}
