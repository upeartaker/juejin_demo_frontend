import { App } from '@vue/runtime-core'
import { Button } from 'ant-design-vue'

const setup = (app: App) => {
  app.use(Button)
}

export default setup
