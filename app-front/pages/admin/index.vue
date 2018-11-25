<template>
  <div>
    <SideBar :links="links"/>
  </div>
</template>

<script>
  import SideBar from "~/components/shared/layouts/sideBar.vue";

  export default {
    components: {
      SideBar,
    },
    data() {
      return {
        links: [
          { name: "Dashbord", path: "/admin/index" },
          { name: "NewPost", path: "/admin/newpost" },
          { name: "AllPosts", path: "/admin/allposts" },
        ]
      }
    }
  }

</script>
