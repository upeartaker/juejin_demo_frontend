import { createApp } from 'vue'
import App from './App.vue'
import setup from "./plugin/antd"
import Antd from 'ant-design-vue';

 const app =createApp(App).use(Antd)
 setup(app)

 app.mount('#app')
