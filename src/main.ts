import { createApp } from 'vue'
import App from './App.vue'
// css
import './assets/styles/main.scss'
// plugin
import setupUtils from './plugin/utils'
import setupAntd from './plugin/ant-design'

const app = createApp(App)

setupUtils(app)
setupAntd(app)

app.mount('#app')
