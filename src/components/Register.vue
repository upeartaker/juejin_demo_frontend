<script>

import { defineComponent } from "vue";
import axios from 'axios'

export default defineComponent({
  data () {
    return {
      registerName: "",
      registerPsd: ""
    }
  },
  props: {
    registerShow: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    registering () {
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
          alert(response.data)
          if ((response.data === "用户名已注册")) { return }
          else {
            this.changeRegisterShow()
          }
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    changeRegisterShow () {
      this.$emit('changeRegisterShow')
    },
  }
})

</script>

<template>
  <div id="login" v-if="registerShow">
    <div id="user">
      <p>用户名:</p>
      <a-auto-complete
        style="width: 200px"
        placeholder="username"
        v-model:value="registerName"
        @change="registerNameChange"
      />
    </div>
    <div id="password">
      <p>密码:</p>
      <a-auto-complete
        style="width: 200px"
        placeholder="password"
        v-model:value="registerPsd"
        @change="registerPsdChange"
      />
    </div>
    <div id="sure">
      <a-button type="primary" @click="registering">注册</a-button>
    </div>
    <div id="cancel">
      <a-button @click="changeRegisterShow" type="primary">取消</a-button>
    </div>
  </div>
</template>