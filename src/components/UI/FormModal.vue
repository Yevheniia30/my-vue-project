<template>
  <div class="modal" v-if="show" @click.stop="closeModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal__content {
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  min-width: 300px;
  min-height: 50px;
  padding: 10px 20px;
}
</style>
