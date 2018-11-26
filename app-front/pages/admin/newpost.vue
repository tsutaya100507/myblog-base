<template>
  <div class="wrapper">
    <SideBar :links="links"/>
    <div class="content-wrapper">
      <AdminHeader />
      <div class="post-form">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="slug"
            :rules="slugRules"
            :counter="10"
            label="Slug"
            required
          ></v-text-field>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :counter="10"
            label="Title"
            required
          ></v-text-field>
          <!-- todo: markdownエディタに書き換え -->
          <v-text-field
            v-model="body"
            label="Body"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
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
        valid: true,
        slug: '',
        slugRules: [
          v => !!v || 'slug is required',
          v => (v && v.length <= 10) || 'slug must be less than 10 characters'
        ],
        title: '',
        titleRules: [
          v => !!v || 'title is required',
          v => (v && v.length <= 10) || 'title must be less than 10 characters'
        ],
        body: '',
        bodyRules: [
          v => !!v || 'body is required',
        ],
      }
    },
    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          await this.$axios.$post('/v1/blogs', {
            slug: this.slug,
            title: this.title,
            body: this.body,
          })
          window.location.href = '/admin/allposts'
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    display: flex;
  }

  .content-wrapper {
    width: 100%;
  }

  .post-form {
    margin-top: 50px;
    margin-left: 200px;
    padding: 20px;
  }
</style>
