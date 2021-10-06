<template>
  <div class="post">
    <div><b>Title:</b>{{ post.title }}</div>
    <div class="description">
      <b>Description:</b>{{ post.body || 'New post' }}
    </div>
    <div class="post__btns">
      <form-button class="btn post__btn">Edit</form-button>
      <form-button @click="deletePost" class="btn post__btn"
        >Delete</form-button
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost() {
      this.$emit('remove', this.post);
    },
  },
};
</script>
<style scoped>
.post {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid rgba(133, 126, 126, 0.007);
  box-shadow: 4px 4px 10px #cecece;
}

.post__btns * {
  padding: 3px 5px;
  border: 1px solid rgba(133, 126, 126, 0.007);
  margin: 5px 5px 0 0;
}
</style>
