<template>
  <div class="wrapper">
    <div class="logo">
      <img src="/logo_transparent.png" alt="Tatsuya_Ichikawa"/>
      <transition name="fade">
      <nuxt-link to="/profile" class="profile">profile</nuxt-link>
      </transition>
    </div>
    <div class="cards-wrapper">
        <PostCard :post="post" v-for="post in posts" :key=post.id class="post-card"/>
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
        this.posts = await this.$axios.$get(`${process.env.apiBaseUrl}/v1/blogs`)
      }
    },
    mounted () {
      this.updateBlogs()
    },
  }
</script>

<style scoped>
  .wrapper {
    position: relative;
    text-align: center;
    background-color: #F9F9F9;
  }

  .profile {
    display: block;
    border: 4px solid #1F7392;
    background-color: #ffffff;
    font-size: 24px;
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    color: #1F7392;
    transition: .4s;
  }

  .profile:hover {
    background: #1F7392;
    color: white;
  }

  .profile:hover {
    opacity: .8;
  }

  .cards-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 60px;
  }

  img {
    width: 100%;
    max-width: 650px;
    height: auto;
  }

  .post-card {
    width: 25%;
    min-width: 300px;
  }

  @media screen and (max-width:680px) {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width:899px) {
    .post-card {
      width: 50%;
    }
  }

    .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }

  

</style>
