<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from "@vue/runtime-core";
import imgUrl from './images/juejin_kaifazhedahui.png'
// 引入图标库
import { QqOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    QqOutlined,
    Input,
  },
});
</script>

<template>
  <nav id="top-bar">
    <QqOutlined spin />
    <a>企鹅掘金</a>
    <a href="#">首页</a>
    <a href="#">沸点</a>
    <a href="#">咨询</a>
    <a href="#">课程</a>
    <a href="#">活动</a>
    <a href="https://conf.juejin.cn/xdc2021?utm_source=juejinweb">
      <img src="imgUrl" alt="图片加载失败" />
    </a>
  </nav>
</template>

<style>
p {
  display: inline-block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1%;
}
#top-bar a {
  font-size: 16px;
  text-decoration: none;
  color: rgb(134, 144, 156);
  margin-left: 20px;
}
#top-bar a:hover {
  color: rgb(30, 128, 255);
}
</style>
