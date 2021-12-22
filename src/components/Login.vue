<script>

import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data () {
    return {
      userNameStr: "",
      passwordStr: "",
    }
  },
  props: {
    loginShow: {
      type: Boolean,
      required: true
    },
    loginInfo: {
      type: Boolean,
      required: true
    },
    userNameInfo: {
      type: String,
      required: true
    },
  },
  methods: {
    logging () {
      axios
        .post('/api/auth/login', {
          username: this.userNameStr,
          password: this.passwordStr
        }).then((response) => {
          alert("登陆成功")
          // 发送登录信息给父组件
          this.$emit('update:loginInfo', true)
          this.$emit('update:userNameInfo', this.userNameStr)

          this.changeLoginShow()
          localStorage.setItem("token", response.data.token)
        })
        .catch(function (error) {
          alert("登录失败,请检查用户名和密码")
          console.log(error)
        })
    },
    changeLoginShow () {
      this.$emit('changeLoginShow')
    }
  }
})

</script>

<template>
  <div id="login" v-if="loginShow">
    <div id="user">
      <p>用户名:</p>
      <a-auto-complete style="width: 200px" placeholder="username" v-model:value="userNameStr" />
    </div>
    <div id="password">
      <p>密码:</p>
      <a-auto-complete style="width: 200px" placeholder="password" v-model:value="passwordStr" />
    </div>
    <div id="sure">
      <a-button type="primary" @click="logging">确定</a-button>
    </div>
    <div id="cancel">
      <a-button @click="changeLoginShow" type="primary">取消</a-button>
    </div>
  </div>
</template>