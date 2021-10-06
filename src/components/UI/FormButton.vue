<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "form-button"
};
</script>
<style scoped>
.btn {
  align-self: flex-end;
  background-color: #cecece;
  border-radius: 4px;
  padding: 5px 10px;
  border: 2px solid rgba(133, 126, 126, 0.007);
  box-shadow: 4px 4px 10px #cecece;
}
.btn:hover {
  transform: scale(1.01);
  font-size: 14px;
  box-shadow: 4px 4px 10px #3f3434;
}
.post__btn {
  background-color: #f3f6f4;
  padding: 3px 6px;
}
</style>
