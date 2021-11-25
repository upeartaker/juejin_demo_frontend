import { DatePicker,Button,Input } from "ant-design-vue";
import {App}from "vue"

// 引入样式
import "ant-design-vue/dist/antd.css";

export default function (app:App){
  app.use(DatePicker).use(Button).use(Input);
}
