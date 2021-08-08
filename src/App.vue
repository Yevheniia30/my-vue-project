<template>
 <div class="wrap">
   <div class="post"><b>Title: </b>Post about JavaScript</div>
   <div class="post"><b>Title: </b>Post about React</div>
<div class="post"><b>Title: </b>Post about Vue</div>

 </div>
  
</template>


<script>

export default {
 data(){
   return{}
 }
}
</script>

<style >
#app {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 width: 400px;
 text-align: center;
margin: 0 auto;
}
.post{
  margin-bottom: 10px;
  color: rgb(50, 49, 51);
  padding: 10px;
  border: 2px solid rgba(133, 126, 126, 0.007);
  border-radius:6px;
  box-shadow: 4px 4px 10px #cecece;
  

}
.post:hover{
  transform: scale(1.03);
  font-size: 18px;
  box-shadow: 4px 4px 10px #3f3434;

}
</style>
