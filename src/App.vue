<template>
  <div class="app">
    <posts-form @create="createPost" />
    <posts-list :posts="posts" @remove="deletePost" />
  </div>
</template>

<script>
import PostsForm from '@/components/PostsForm';
import PostsList from '@/components/PostsList';
export default {
  components: {
    PostsList,
    PostsForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Description of JS' },
        { id: 2, title: 'React', body: 'Description of React' },
        { id: 3, title: 'Vue', body: 'Description of Vue' },
      ],
    };
  },
  methods: {
    createPost(post) {
      if (post.title) {
        this.posts.push(post);
      }
    },
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
  },
};
</script>

<style>
.app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 400px;
  margin: 0 auto;
}
</style>
