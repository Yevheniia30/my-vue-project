<template>
  <div class="app">
    <form-button class="btn" @click="showModal">Create post</form-button>
    <form-modal v-model:show="modalVisible">
      <posts-form @create="createPost" />
    </form-modal>
    <posts-list :posts="posts" @remove="deletePost" v-if="!isLoading" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import PostsForm from '@/components/PostsForm';
import PostsList from '@/components/PostsList';
import axios from 'axios';
// import FormModal from './components/UI/FormModal.vue';
export default {
  components: {
    PostsList,
    PostsForm,
    // FormModal,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isLoading: false,
    };
  },
  methods: {
    createPost(post) {
      if (post.title) {
        this.posts.push(post);
        this.modalVisible = false;
      }
    },
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );
        console.log(response);
        this.posts = response.data;
      } catch (err) {
        alert('Error!');
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
