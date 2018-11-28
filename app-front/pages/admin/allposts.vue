<template>
  <div class="wrapper">
    <SideBar :links="links"/>
    <div class="content-wrapper">
      <AdminHeader />
      <div class="posts">
        <table>
          <thead>
          <tr>
            <th>Post</th>
            <th class="table-title">Title</th>
            <!-- <th class="table-body">Text</th> -->
            <th class="table-category">Category</th>
            <th class="table-published">Published</th>
            <th class="table-published">Data</th>
            <th class="table-action">delete</th>
          </tr>
          </thead>
        <!-- <div :post="post" v-for="post in posts" :key=post.name class="post"> -->
          <tbody>
          <tr :post="post" v-for="post in posts" :key=post.id class="post">
          <!-- <nuxt-link to="/"> -->
            <td>image</td>
            <td class="table-title">{{ post.title }}</td>
            <!-- <td class="table-body">{{ post.body }}</td> -->
            <td class="table-category">category</td>
            <td class="table-published">pablished</td>
            <td class="table-data">{{ post.created_at }}</td>
            <td class="table-action" @click="deletePost(post.id)">delete</td>
          <!-- </nuxt-link> -->
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminHeader from "~/components/shared/layouts/adminHeader.vue";
  import SideBar from "~/components/shared/layouts/sideBar.vue";

  export default {
    components: {
      SideBar,
      AdminHeader,
    },
    data() {
      return {
        links: [
          { name: "Dashbord", path: "/admin" },
          { name: "NewPost", path: "/admin/newpost" },
          { name: "AllPosts", path: "/admin/allposts" },
        ],
        posts: [],
      }
    },
    methods: {
      async updateBlogs() {
        this.posts = await this.$axios.$get(`${process.env.apiBaseUrl}/v1/blogs`)
      },
      async deletePost(id) {
        if(window.confirm('本当に削除しますか？')) {
          await this.$axios.$delete(`${process.env.apiBaseUrl}/v1/blogs/${id}`)
          this.updateBlogs()
        }
        else {
          window.alert('キャンセルしました。')
        }
      }
    },
    mounted () {
      this.updateBlogs()
    },
  }

</script>

<style scoped>
  .wrapper {
    display: flex;
  }

  .content-wrapper {
    width: 100%;
  }

  .posts {
    padding: 15px;
    margin-top: 50px;
    margin-left: 200px;
  }

  table {
    width: 100%;
    /* table-layout:fixed; */
  }

  /* a{
    display: block;
    width: 100%;
  } */

  th {
    width: 10%;
    border-bottom: 1px solid gray;
    text-align: left;
    padding: 10px;
  }

  td {
    height: 40px;
    width: 10%;
    border-bottom: 1px solid gray;
    padding: 10px;
    vertical-align: middle;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    max-width: 0;

  }

  .table-title {
    width: 20%;
  }

  .table-body {
    width: 25%;
    padding-right: 30px;
  }

  .table-category {
    width: 10%;
  }
</style>