import { App } from '@vue/runtime-core'

export interface UtilsShape {
  calNum: (val?: string | number) => string
}

const utils: UtilsShape = {
  calNum(val) {
    if (!val) return ''
    val = parseInt(val as string)
    if (val < 10000) {
      return val.toString()
    } else if (val >= 10000 && val < 100000) {
      return (val / 10000).toFixed(1) + '万'
    } else if (val >= 100000 && val < 1000000) {
      return Math.floor(val / 10000) + '万'
    } else if (val >= 1000000) {
      return '100万+'
    } else {
      return ''
    }
  }
}

// instance
const setupUtils = (app: App) => {
  app.config.globalProperties.$utils = utils
}

// function
export { utils }

export default setupUtils
