<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from '@vue/runtime-core'
// 引入图标库
import { QqOutlined, DownOutlined } from '@ant-design/icons-vue'
import './juejin_demo.css'
import axios from 'axios'
// 引入
// import { quillEditor } from "vue-quill-editor"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default defineComponent({
  components: {
    QqOutlined,
    DownOutlined
  },

  data() {
    return {
      login: false,
      inputShow: true,
      registerShow: false,
      userNameStr: "",
      passwordStr: "",
      registerName: "",
      registerPsd: "",
      articleName: "lalala",
      content: "",
      articleContent: "最后参与的机会，拿闯关奖励，抽终极幸运大奖!别犹豫啦，快来参加!",
      writeShow: true,

    }
  },
  computed: {

  },
  methods: {
    closeInput: function () {
      this.inputShow = !this.inputShow
    },
    lonIn() {
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
    getArticle() {
      axios.post("/api/cat/getarticle", {
        username: this.userNameStr,
        articlename: this.articleName
      },
        { headers: { "token": String(localStorage.getItem("token")) } }
      ).then((response) => {
        console.log(response.data)
        this.articleContent = response.data
      })
        .catch(function (error) {
          alert("获取文章失败")
          console.log(error)
        })
    },
    register() {
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
          this.closeregister()
          this.userNameStr = this.registerName
          this.passwordStr = this.registerPsd
          this.lonIn()
          this.closeInput()
          alert(response.data)
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    exitUse() {
      this.login = false;
      localStorage.setItem("token", "");
    },
    writeArticle() {
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
    closeWrite() {
      if (this.login) {
        this.writeShow = !this.writeShow
      }
      else {
        this.closeInput()
      }
    },
    closeregister() {
      this.registerShow = !this.registerShow
    }
  }
})
</script>

<template>
  <!-- 登录窗口 -->
  <div id="login" :class="{ inputshow: inputShow }">
    <div id="user">
      <p>用户名:</p>
      <a-auto-complete style="width: 200px" placeholder="username" v-model:value="userNameStr" />
    </div>
    <div id="password">
      <p>密码:</p>
      <a-auto-complete style="width: 200px" placeholder="password" v-model:value="passwordStr" />
    </div>
    <div id="sure">
      <a-button type="primary" @click="lonIn">确定</a-button>
    </div>
    <div id="cancel">
      <a-button @click="closeInput" type="primary">取消</a-button>
    </div>
  </div>
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
      <a-button @click="closeregister" type="primary">取消</a-button>
    </div>
  </div>
  <!-- 写作窗口 -->
  <div id="write" :class="{ inputshow: writeShow }">
    <input type="text" v-model="articleName" placeholder="输入文章标题..." />
    <textarea v-model="content"></textarea>
    <div class :class="{ 'loginshow': !login }">
      <a-button @click="writeArticle">发布</a-button>
      <a-button @click="closeWrite">关闭</a-button>
    </div>
  </div>
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
            <div>
              <a-menu-item key="1" @click="closeWrite">发布沸点</a-menu-item>
            </div>
            <a-menu-item key="2" @click="getArticle" v-if="login">获取文章</a-menu-item>
          </a-menu>
        </template>
        <a-button>
          写文章
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </span>

    <span class="top-bar-left" :class="{ 'loginshow': login }">
      <a-button @click="closeInput">登录</a-button>
      <a-button @click="closeregister" v-if="!login">注册</a-button>
    </span>
    <span class="top-bar-left" v-if="login">
      <a-button>{{ userNameStr }}</a-button>
      <a-button @click="exitUse">退出</a-button>
    </span>
    <hr />
  </nav>
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
          <hr />
        </ul>
      </div>
      <!-- 推荐帖子 -->
      <div id="article">
        <!-- 帖子1 -->
        <div class="article-part">
          <!-- 作者/时间/分类 -->
          <ul class="article-author">
            <li id="id">稀土君</li>
            <li id="time">2天前</li>
          </ul>
          <div class="article-content">
            <b>2021最后一次更文挑战，倒计时最后一周!错过这次要等明年啦</b>
            <p>{{ articleContent }}</p>
            <hr />
          </div>
        </div>
      </div>
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
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  background-color: #f4f5f5;
}
</style>
