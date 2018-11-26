<template>
  <article>
    <header>
      <a href="">
        <!-- todo: dummyを動的に変更する -->
        <img src="/dummy.jpg" alt="" class="hero-img">
      </a>
      <div class="post-wrapper">
        <a href="" class="post-title">
          <h1>{{ post.title }}</h1>
        </a>
          <!-- <div class="post-body">{{ post.body }}</div> -->
          <div class="post-createdat">{{ post.created_at }}</div>
      </div>
    </header>
  </article>
</template>

<script>
export default {
    props: [ 'post' ]
}
</script>

<style scoped>
  article {
    width: 290px;
    padding: 25px;
  }

  header {
    width: 100%;
  }

  .hero-img {
    width: 100%;
    height: auto;
    margin-bottom: 25px;
    filter: grayscale(100%);
    transition: .3s ease-in-out;
  }

  .hero-img:hover {
    filter: grayscale(0);
  }

  .post-wrapper {
    padding: 0 3px;
  }

  a > h1 {
    margin-bottom: 15px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #1C1C1C;
  }

  h1:hover {
    opacity: .6;
  }

  .post-body {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: #1C1C1C;
    margin-bottom: 20px;
  }

  .post-createdat {
    text-align: left;
  }
</style>
