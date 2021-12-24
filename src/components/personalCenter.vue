<template>
  <div>测试组件</div>
  <hr />
  <!-- 页面中直接使用渲染时与vue2中的使用方法相同 -->
  <div>获取Store中的state、getters: {{ aaaa }}</div>
  <button @click="handleClick">点击</button>
</template>

<script>
// 按需引入useStore()方法
import { useStore } from 'vuex'

export default {
  name: 'Test',
  data () {
    return {
      aaaa: this.$store.getters.getUserName
    }
  },
  setup () {
    // this.$store.state.info
    // Vue3中store类似于Vue2中this.$store
    // useStore()方法创建store对象，相当于src/store/index.js中的store实例对象
    const store = useStore()
    console.log(store.state.info) // hello
    // 修改info的值
    const handleClick = () => {
      // 触发mutations，用于同步修改state的信息
      // store.commit('updateInfo', 'nihao')
      // 触发actions，用于异步修改state的信息
      store.dispatch('asyncUpdateInfo', 'hi')
    }
    return { handleClick }
  },
  computed: {
    // aaaa: store.getters.getUserName
  }
}
</script>