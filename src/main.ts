import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/router'

const app = createApp(App).use(Antd)
app.use(router)
app.mount('#app')
