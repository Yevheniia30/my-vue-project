<template>
  <div class="wrap">
    <div class="post"><b>Title: </b>Posts about JavaScript</div>
    <div class="post"><b>Title: </b>Posts about React</div>
    <div class="post"><b>Title: </b>Posts about Vue</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5
    };
  },
  methods: {
    addLikes() {
      this.likes += 1;
    },
    addDislikes() {
      this.dislikes += 1;
    }
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 400px;
  text-align: center;
  margin: 0 auto;
}
.post {
  margin-bottom: 10px;
  color: rgb(50, 49, 51);
  padding: 10px;
  border: 2px solid rgba(133, 126, 126, 0.007);
  border-radius: 6px;
  box-shadow: 4px 4px 10px #cecece;
}
.post:hover {
  transform: scale(1.03);
  font-size: 18px;
  box-shadow: 4px 4px 10px #3f3434;
}
</style>
