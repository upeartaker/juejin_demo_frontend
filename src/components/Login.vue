<script>

import { defineComponent } from "vue";

export default defineComponent({
  data () {
    return {

    }
  },
  props: {
    loginShow: {
      type: Boolean,
      required: true
    },
    userNameStr: {
      type: String,
      required: true
    },
    loginShow: {
      type: String,
      passwordStr: true
    }
  },
  methods: {
    logging () {
      this.$emit('logging')
    },
    changeLoginShow () {
      this.$emit('changeLoginShow')
    }
  }
})

</script>

<template>
  <div id="login" v-if="this.loginShow">
    <div id="user">
      <p>用户名:</p>
      <a-auto-complete
        style="width: 200px"
        placeholder="username"
        v-model:value="this.userNameStr"
      />
    </div>
    <div id="password">
      <p>密码:</p>
      <a-auto-complete
        style="width: 200px"
        placeholder="password"
        v-model:value="this.passwordStr"
      />
    </div>
    <div id="sure">
      <a-button type="primary" @click="logging">确定</a-button>
    </div>
    <div id="cancel">
      <a-button @click="changeLoginShow" type="primary">取消</a-button>
    </div>
  </div>
</template>