<template>
  <div class="hello">
    <p>count = {{ likes }}</p>
    <p>count = {{ dislikes}}</p>

    <button @click="addLikes" >AddLikes</button>
    <button @click="remLikes">RemLikes</button>

    <button @click="addDislikes">addDislikes</button>
    <button @click="remDislikes">RemDislikes</button>


   
  </div>
</template>

<script>
export default {
 data(){
   return{
     likes:0,
     dislikes:0
   }
 },
  methods:{
    addLikes(){
      this.likes+=1
    },
    remLikes(){
      this.likes-=1
    },
    addDislikes(){
      this.dislikes+=1
    },
    remDislikes(){
      this.dislikes-=1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
