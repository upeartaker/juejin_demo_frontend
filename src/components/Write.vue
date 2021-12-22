<script>

import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data () {
    return {
      content: "",
      userNameStr: "",
      articleName: ""
    }
  },
  props: {
    writeShow: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    writing () {
      axios.post("/api/cat/addarticle", {
        content: this.content,
        username: this.userNameStr,
        articlename: this.articleName
      }, {
        headers: { "token": String(localStorage.getItem("token")) }
      }).then(function (response) {
        console.log(localStorage.getItem("token"))
        alert("发布成功")
        console.log(response)
      })
        .catch(function (error) {
          console.log(error)
        })
      this.changeWriteShow()
    },
    changeWriteShow () {
      this.$emit('changeWriteShow')
    }
  }
})
</script>

<template>
  <div id="write" v-if="writeShow">
    <input type="text" v-model="articleName" placeholder="输入文章标题..." />
    <textarea v-model="writeContent"></textarea>
    <div>
      <a-button @click="writing">发布</a-button>
      <a-button @click="changeWriteShow">关闭</a-button>
    </div>
  </div>
</template>