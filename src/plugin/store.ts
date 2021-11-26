import { App, ref, reactive, Ref, UnwrapRef } from '@vue/runtime-core'

/**
 * @description 挂载全局实例属性
 * @param app
 */
const instanceStore = {}

const setupStore = (app: App) => {
  const _store = reactive(instanceStore)
  app.config.globalProperties.$store = _store
}

export default setupStore

/**
 * @description 自定义状态
 */
const requestLoading = ref(true)

export interface storeShape {
  requestLoading: Ref<UnwrapRef<boolean>>
}

export const store: storeShape = {
  requestLoading
}
