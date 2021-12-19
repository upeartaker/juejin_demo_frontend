<script lang="js">

import { defineComponent } from "vue";
export default defineComponent({
  components: {},

  data () {
    return {}
  },
  props: {
    vueArticles: {
      type: Array,
      required: true
    }
  }
})
</script>

<template>
  <!-- 推荐帖子 -->
  <div id="article">
    <!-- 帖子1 -->
    <div class="article-part" v-for="(article,index) in vueArticles" :key="index">
      <!-- 作者/时间/分类 -->
      <ul class="article-author">
        <li id="id">{{ article.author }}</li>
        <li id="time">{{ article.time }}</li>
      </ul>
      <div class="article-content">
        <b>{{ article.articleTitle }}</b>
        <p>{{ article.articleContent }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>