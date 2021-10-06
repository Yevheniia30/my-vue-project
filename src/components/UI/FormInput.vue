<template>
  <input :value="modelValue" @input="updateInput" type="text" />
</template>
<script>
export default {
  name: 'form-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>
<style>
.input {
  width: 80%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid rgba(133, 126, 126, 0.007);
  box-shadow: 4px 4px 10px #cecece;
}
</style>
