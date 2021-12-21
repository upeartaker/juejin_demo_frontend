<script lang="js">
import { defineComponent } from '@vue/runtime-core'
// 引入图标库
import { QqOutlined, DownOutlined } from '@ant-design/icons-vue'
import '../juejin_demo.css'
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ArticleListVue from '../components/ArticleList.vue'
import NavBarVue from '../components/NavBar.vue'
import ViceNavBarVue from '../components/ViceNavBar.vue'
import LoginVue from '../components/Login.vue'

export default defineComponent({
  components: {
    QqOutlined,
    DownOutlined,
    ArticleListVue,
    NavBarVue,
    ViceNavBarVue,
    LoginVue
  },

  data () {
    return {
      login: false,
      loginShow: false,
      inputShow: true,
      registerShow: false,
      userNameStr: "",
      passwordStr: "",
      registerName: "",
      registerPsd: "",
      articleName: "",
      content: "",
      writeShow: true,
      articles: [],
      rootNavBar: {
        login: false,
        userNameStr: ""
      }
    }
  },
  computed: {

  },
  methods: {
    closeInput: function () {
      this.inputShow = !this.inputShow
    },
    logging () {
      axios
        .post('/api/auth/login', {
          username: this.userNameStr,
          password: this.passwordStr
        }).then((response) => {
          alert("登陆成功")
          this.login = true
          this.closeInput()
          localStorage.setItem("token", response.data.token)
        })
        .catch(function (error) {
          alert("登录失败,请检查用户名和密码")
          console.log(error)
        })
    },
    getArticle () {
      axios.post("/api/cat/getarticle", {
        username: this.userNameStr,
      },
        { headers: { "token": String(localStorage.getItem("token")) } }
      ).then((response) => {
        if (response.data.length === 0) {
          alert("无文章")
        }
        this.articles.length = 0
        for (let i = 0; i < response.data.length; i++) {
          const one = {
            author: response.data[i].userName,
            articleTitle: response.data[i].articleName,
            articleContent: response.data[i].content,
            time: response.data[i].updateAt
          }
          this.articles.push(one)

        }
      })
        .catch(function (error) {
          alert("获取文章失败")
          console.log(error)
        })
    },
    register () {
      if (this.registerName === "" || this.registerPsd === "") {
        alert("用户名或密码为空")
        return
      }
      axios
        .post('/api/cat/addone', {
          registerstr: this.registerName,
          registerpsd: this.registerPsd
        })
        .then((response) => {
          this.changeRegisterShow()
          this.userNameStr = this.registerName
          this.passwordStr = this.registerPsd
          this.logging()
          this.closeInput()
          alert(response.data)
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    exitUse () {
      this.login = false;
      localStorage.setItem("token", "");
      this.articles.length = 0
    },
    writeArticle () {
      axios.post("/api/cat/addarticle", {
        content: this.content,
        username: this.userNameStr,
        articlename: this.articleName
      }, {
        headers: { "token": String(localStorage.getItem("token")) }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })

      this.writeShow = true
    },
    changeWriteShow () {
      this.writeShow = !this.writeShow
    },
    changeLoginShow () {
      console.log(this.loginShow)
      this.loginShow = !this.loginShow
      console.log(this.loginShow)
    },
    changeRegisterShow () {
      this.registerShow = !this.registerShow
    },
    exitLogin () {
      localStorage.setItem("token", "")
      this.login = false
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
  <div id="login" v-if="registerShow">
    <div id="user">
      <p>用户名:</p>
      <a-auto-complete style="width: 200px" placeholder="username" v-model:value="registerName" />
    </div>
    <div id="password">
      <p>密码:</p>
      <a-auto-complete style="width: 200px" placeholder="password" v-model:value="registerPsd" />
    </div>
    <div id="sure">
      <a-button type="primary" @click="register">注册</a-button>
    </div>
    <div id="cancel">
      <a-button @click="changeRegisterShow" type="primary">取消</a-button>
    </div>
  </div>
  <!-- 写作窗口 -->
  <div id="write" :class="{ inputshow: writeShow }">
    <input type="text" v-model="articleName" placeholder="输入文章标题..." />
    <textarea v-model="content"></textarea>
    <div class :class="{ 'loginshow': !login }">
      <a-button @click="writeArticle">发布</a-button>
      <a-button @click="changeWriteShow">关闭</a-button>
    </div>
  </div>
  <!-- 个人中心 -->
  <!-- 导航栏 -->
  <NavBarVue
    :login="login"
    :userNameStr="userNameStr"
    @changeWriteShow="changeWriteShow"
    @changeLoginShow="changeLoginShow"
    @changeRegisterShow="changeRegisterShow"
    @exitLogin="exitLogin"
  ></NavBarVue>
  <!-- 副导航栏 -->
  <ViceNavBarVue></ViceNavBarVue>
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
          <hr />
        </ul>
      </div>
      <!-- 推荐帖子 -->
      <ArticleListVue :vueArticles="articles"></ArticleListVue>
    </div>
  </div>
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
