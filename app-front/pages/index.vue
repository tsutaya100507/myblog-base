<template>
  <div>
    <img src="/logo_transparent.png" alt="Tatsuya_Ichikawa">
    <div v-for="blog in blogs" :key=blog.id>
      <div>{{ blog.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blogs: []
      }
    },
    methods: {
      async updateBlogs() {
        this.blogs = await this.$axios.$get('/v1/blogs')
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
</style>
