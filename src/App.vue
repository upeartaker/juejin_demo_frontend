<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from "@vue/runtime-core";
// 引入图标库
import { QqOutlined, DownOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    QqOutlined,
    DownOutlined,
  },
});
</script>

<template>
  <!-- 导航栏 -->
  <nav id="top-bar">
    <QqOutlined spin />
    <a>企鹅掘金</a>
    <a href="#">沸点</a>
    <a href="#">咨询</a>
    <a href="#">课程</a>
    <a href="#">活动</a>
    <a href="https://conf.juejin.cn/xdc2021?utm_source=juejinweb">
      <img src="./images/juejin_kaifazhedahui.png" alt="图片加载失败" />
    </a>
    <span class="top-bar-left">
      <a-input-search placeholder="探索稀土掘金" style="width: 200px" />
    </span>
    <span class="top-bar-left">
      <a-button type="primary">创作者中心</a-button>
    </span>
    <span class="top-bar-left">
      <a-dropdown>
        <template #overlay>
          <a-menu>
            <a-menu-item key="1">发布沸点</a-menu-item>
          </a-menu>
        </template>
        <a-button>
          写文章
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </span>

    <span class="top-bar-left">
      <a-button type="dashed">登录</a-button>
    </span>
  </nav>
  <hr />
  <!-- 副导航栏 -->
  <nav id="top-vice-bar">
    <ul>
      <li>推荐</li>
      <li>后端</li>
      <li>前端</li>
      <li>Android</li>
      <li>iOS</li>
      <li>人工智能</li>
      <li>开发工具</li>
      <li>代码人生</li>
      <li>阅读</li>
    </ul>
  </nav>
  <!-- 内容 -->
  <div id="content">
    <!-- 左侧 -->
    <div id="content-left">
      <!-- 分类 -->
      <div id="classification">
        <ul>
          <li>热门</li>
          <li>最新</li>
          <li>热榜</li>
        </ul>
      </div>
      <!-- 推荐帖子 -->
      <div></div>
    </div>
  </div>
</template>

<style>
p {
  display: inline-block;
}
li {
  list-style: none;
  display: inline-block;
}
li:hover {
  color: #007fff;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1%;
  width: 1500px;
  background-color: #f4f5f5;
}
#top-bar {
  margin: 0, auto;
  background-color: white;
}
#top-bar a {
  font-size: 16px;
  text-decoration: none;
  color: rgb(134, 144, 156);
  margin-left: 40px;
}
#top-bar a img {
  margin-bottom: 5px;
}
#top-bar a:hover {
  color: rgb(30, 128, 255);
}
.top-bar-left {
  margin-left: 40px;
}
#top-vice-bar {
  background-color: white;
  margin-top: 2%;
}
#top-vice-bar ul li {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
#classification ul {
  padding: 1%;
}
#classification ul li {
  display: inline-block;
  font-size: 14px;
  color: rgb(113, 119, 124);
  padding-left: 20px;
}
#classification li:hover {
  color: #007fff;
  cursor: pointer;
}
#content {
  width: 1060px;
  margin: auto;
  background-color: #f4f5f5;
  border: 1px solid #f4f5f5;
}
#classification {
  text-align: left;
}
#content-left {
  background-color: white;
}
</style>
