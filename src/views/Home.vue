<script lang="js">
import { defineComponent } from '@vue/runtime-core'
// 引入图标库
import '../juejin_demo.css'
import ArticleListVue from '../components/ArticleList.vue'
import NavBarVue from '../components/NavBar.vue'
import ViceNavBarVue from '../components/ViceNavBar.vue'
import LoginVue from '../components/Login.vue'
import RegisterVue from '../components/Register.vue'
import WriteVue from '../components/Write.vue'

export default defineComponent({
  components: {
    ArticleListVue,
    NavBarVue,
    ViceNavBarVue,
    LoginVue,
    RegisterVue,
    WriteVue
  },

  data () {
    return {
      loginShow: false,
      registerShow: false,
      writeShow: false,
      articles: [],
    }
  },
  computed: {
  },
  methods: {
    changeWriteShow () {
      this.writeShow = !this.writeShow
    },
    changeLoginShow () {
      this.loginShow = !this.loginShow
    },
    changeRegisterShow () {
      this.registerShow = !this.registerShow
    },
    personalCenter () {
      console.log(this.$route)
      this.$router.push({ name: "personal" })
      console.log(this.$route)
    }
  },
})
</script>

<template>
  <!-- 登录窗口 -->
  <LoginVue :loginShow="loginShow" @changeLoginShow="changeLoginShow"></LoginVue>
  <!-- 注册窗口 -->
  <RegisterVue :registerShow="registerShow" @changeRegisterShow="changeRegisterShow"></RegisterVue>
  <!-- 写作窗口 -->
  <WriteVue :writeShow="writeShow" @changeWriteShow="changeWriteShow"></WriteVue>
  <!-- 导航栏 -->
  <NavBarVue
    v-model:articlesInfo="articles"
    @changeWriteShow="changeWriteShow"
    @changeLoginShow="changeLoginShow"
    @changeRegisterShow="changeRegisterShow"
  ></NavBarVue>
  <!-- 副导航栏 -->
  <ViceNavBarVue></ViceNavBarVue>
  <!-- 帖子 -->
  <ArticleListVue :vueArticles="articles"></ArticleListVue>
</template>

<style>
li {
  list-style: none;
  display: inline-block;
}
li:hover {
  color: #007fff;
  cursor: pointer;
}
hr {
  margin: 0;
  background-color: #c8cece;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background-color: #f4f5f5;
}
</style>
