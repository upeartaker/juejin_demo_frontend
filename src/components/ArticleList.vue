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
  <div id="content">
    <div id="content-left">
      <div id="classification">
        <ul>
          <li>热门</li>
          <li>最新</li>
          <li>热榜</li>
          <hr />
        </ul>
      </div>
      <!-- 帖子 -->
      <div id="article">
        <!-- 帖子1 -->
        <div class="article-part" v-for="(article, index) in vueArticles" :key="index">
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
    </div>
  </div>
</template>