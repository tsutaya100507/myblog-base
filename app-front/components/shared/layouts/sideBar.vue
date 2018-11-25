<template>
  <div class="wrapper">
    <div v-for="link in links" :key=link.name>
    <nuxt-link to=link.path class="panel">{{link.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
      props: [ 'links' ],
  // data() {
  //   return {
  //     links: [
  //       { name: "Dashbord", path: "/admin/index" },
  //       { name: "Dashbord", path: "/admin/newpost" },
  //       { name: "Dashbord", path: "/admin/allposts" },
  //     ]
  //   }
  // }
}
</script>

<style>
  .wrapper {
    width: 200px;
    height: 100vh;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
  }

  .panel {
    display: block;
    width: 100%;
    height: 50px;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    margin-bottom: 1px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 300;
    color: #424242;
  }

  .panel:hover {
    background-color: rgb(102, 101, 101, .2);
  }
</style>
