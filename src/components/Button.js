import Vue from "vue";

const Button = Vue.createApp("Btn", {
  render(createElement) {
    return createElement("button", this.$slots.default);
  },
});

export default Button;
