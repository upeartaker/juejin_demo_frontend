<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from "@vue/runtime-core";

// 引入图标库
import { QqOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    QqOutlined,
  },
});
</script>

<template><QqOutlined />企鹅掘金</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
