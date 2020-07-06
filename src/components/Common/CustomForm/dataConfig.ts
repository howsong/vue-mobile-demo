import { Form } from 'element-ui'
// 自定义表单类型
export enum FIELD_TYPES {
  INPUT = '10010001', // 文本
  INPUTNUMBER = '10010002', // 数字
  DATE = '10010003', // 日期类型
  SINGLE_SELECT = '10010004', // 单选
  MUTI_SELECT = '10010005' // 多项选择框
}

// 选项类型
export interface IoptionItem {
  dictCode: string
  codeName: string
  weight?: string
  options?: Array<IoptionItem>
}

export type IcustomOptions = Array<IoptionItem>

export interface IfieldLimit {
  fieldMin?: number
  fieldMax?: number
}

// 表单通用配制项
export interface IcustomBaseConfig {
  fieldCode?: string
  fieldType: string // 表单类型
  fieldName: string // 表单名称
  fieldRequired: boolean // 是否必填 0-否 1-是
  weight?: number
  fieldGroup?: string // '0'-默认 '1'-自定义
  options?: IcustomOptions
  rules?: Array<any>
  disabled?: boolean
  pageType: string
  propertypeName?: string
  fieldLimit?: IfieldLimit
  labelWidth?: number
  feildWidth?: number
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
  config: IcustomBaseConfig
) => {
  const trimValue = value ? value.trim() : ''
  // 上限值
  const maxL = config.fieldLimit && config.fieldLimit.fieldMax
  const label = config.fieldName
  if (!value && config.fieldRequired) {
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
  config: IcustomBaseConfig
) => {
  // 上限值
  const maxNumber = config.fieldLimit && config.fieldLimit.fieldMax
  const label = config.fieldName
  if (!value && config.fieldRequired) {
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
export const generateCustomRules = (customConfigs: IcustomBaseConfig[]) => {
  const rules: any = {}
  if (customConfigs && customConfigs.length > 0) {
    customConfigs.map((config: IcustomBaseConfig) => {
      let itemRules: any[] = []
      switch (config.fieldType) {
        // 输入类
        case FIELD_TYPES.INPUT:
          itemRules = [
            {
              required: config.fieldRequired,
              validator: (rule: Form, value: string, callback: Function) =>
                inputValidator(rule, value, callback, config),
              trigger: 'blur'
            }
          ]
          break
        case FIELD_TYPES.INPUTNUMBER:
          itemRules = [
            {
              required: config.fieldRequired,
              validator: (rule: Form, value: number, callback: Function) =>
                inputNumberValidator(rule, value, callback, config),
              trigger: 'blur'
            }
          ]
          break
        case FIELD_TYPES.SINGLE_SELECT:
          itemRules = [
            {
              required: config.fieldRequired,
              trigger: 'change',
              message: `${config.fieldName}不能为空`
            }
          ]
          break
        case FIELD_TYPES.MUTI_SELECT:
          itemRules = [
            {
              required: config.fieldRequired,
              trigger: 'change',
              message: `${config.fieldName}不能为空`
            }
          ]
          break
        case FIELD_TYPES.DATE:
          itemRules = [
            {
              required: config.fieldRequired,
              trigger: 'change',
              message: `${config.fieldName}不能为空`
            }
          ]
          break
        default:
          break
      }
      if (config.fieldCode) {
        rules[config.fieldCode] = itemRules
      }
    })
  }

  return rules
}
