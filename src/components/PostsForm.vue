<template>
  <div>
    <form class="form" @submit.prevent>
      <h4>Create post</h4>
      <form-input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"
      />
      <form-input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description"
      />
      <form-button class="btn" @click="createPost">Add post</form-button>
      <!-- <button class="btn" @click="createPost">Add post</button>-->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>
<style scoped>
textarea {
  resize: none;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
