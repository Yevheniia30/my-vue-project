<template>
  <div class="app">
    <form-button class="btn" @click="showModal">Create post</form-button>
    <form-modal v-model:show="modalVisible">
      <posts-form @create="createPost" />
    </form-modal>
    <posts-list :posts="posts" @remove="deletePost" />
  </div>
</template>

<script>
import PostsForm from '@/components/PostsForm';
import PostsList from '@/components/PostsList';
// import FormModal from './components/UI/FormModal.vue';
export default {
  components: {
    PostsList,
    PostsForm,
    // FormModal,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'Description of JS' },
        { id: 2, title: 'React', body: 'Description of React' },
        { id: 3, title: 'Vue', body: 'Description of Vue' },
      ],
      modalVisible: false,
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
