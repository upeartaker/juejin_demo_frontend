import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Router from './router/router'
import Vuex from './store/index'

const app = createApp(App).use(Antd)
app.use(Router).use(Vuex)
app.mount('#app')
