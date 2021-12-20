<template>
  <div>
    <h1 @click="lalaal">page1</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "我是page1组件"
    }
  },
  methods: {
    lalaal () {
      this.$router.push("/")
    }
  }
}
</script>