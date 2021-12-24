<script>

import { defineComponent } from "vue";
import axios from "axios";
import { useStore } from 'vuex'

export default defineComponent({

  setup () {
    const store = useStore()

    const changeLoginState = (newState) => {
      store.dispatch('asyncChangeLoginState', newState)
    }

    const changeUserName = (newName) => {
      store.dispatch('asyncChangeUserNameInfo', newName)
    }

    return { changeLoginState, changeUserName }
  },
  computed: {
  },
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
    }
  },
  methods: {
    logging () {
      axios
        .post('/api/auth/login', {
          username: this.userNameStr,
          password: this.passwordStr
        }).then((response) => {
          alert("登陆成功")
          // 改变登录状态和用户名
          this.changeLoginState(true)
          this.changeUserName(this.userNameStr)

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