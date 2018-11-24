<template>
  <div>
    <img src="/logo_transparent.png" alt="Tatsuya_Ichikawa">
    <div v-for="post in posts" :key=post.id class="post-cards">
      <PostCard :post="post"/>
    </div>
  </div>
</template>

<script>
  import PostCard from "~/components/postCard.vue";


  export default {
    components: {
      PostCard,
    },
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async updateBlogs() {
        this.posts = await this.$axios.$get('/v1/blogs')
      }
    },
    mounted () {
      this.updateBlogs()
    }
  }
</script>

<style scoped>
  div {
    text-align: center;
  }

  img {
    margin-top: -100px;
    width: 700px;
    height: auto;
  }

  .post-cards {
    margin-top: -100px;
  }
</style>
