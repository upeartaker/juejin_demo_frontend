<script lang="js">

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { defineComponent } from "vue";
import { QqOutlined, DownOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    QqOutlined,
    DownOutlined
  },
  data () {
    return {
    }
  },
  props: {
    login: {
      type: Boolean,
      required: true
    },
    userNameStr: {
      type: String,
      required: true
    }
  },
  methods: {
    writeArticle () {
      // 如果登录成功则弹出写文章界面，否则弹出登录框
      if (this.login) {
        this.$emit('changeWriteShow')
      }
      else {
        this.$emit('changeLoginShow')
      }
    },
    getArticle () {
      this.$emit('getArticle')
    },
    changeLoginShow () {
      this.$emit('changeLoginShow')
    },
    changeRegisterShow () {
      this.$emit('changeRegisterShow')
    },
    exitLogin () {
      this.$emit('exitLogin')
    }
  }
})
</script>
<template>
  <nav id="top-bar">
    <QqOutlined spin />
    <a>企鹅掘金</a>
    <a>沸点</a>
    <a>咨询</a>
    <a>课程</a>
    <a>活动</a>
    <a href="https://conf.juejin.cn/xdc2021?utm_source=juejinweb">
      <img src="../../src/images/juejin_kaifazhedahui.png" alt="图片加载失败" />
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
              <a-menu-item key="1" @click="writeArticle">发布沸点</a-menu-item>
            </div>
            <a-menu-item key="2" @click="getArticle" v-if="this.login">获取文章</a-menu-item>
          </a-menu>
        </template>
        <a-button>
          写文章
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </span>

    <span class="top-bar-left">
      <a-button v-if="!this.login" @click="changeLoginShow">登录</a-button>
      <a-button v-if="this.login">
        {{
          this.userNameStr
        }}
      </a-button>

      <a-button v-if="!this.login" @click="changeRegisterShow">注册</a-button>
      <a-button v-if="this.login" @click="exitLogin">退出</a-button>
    </span>
    <hr />
  </nav>
</template>
