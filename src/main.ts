import { createApp } from 'vue'
import App from './App.vue'
// import setup from "./plugin/antd"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/router'

import ElementPlus from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css'
// import { QqOutlined, DownOutlined } from "@ant-design/icons-vue";

const app = createApp(App).use(Antd).use(ElementPlus)
//  setup(app)
app.use(router)
app.mount('#app')
