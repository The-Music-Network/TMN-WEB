<template>
    <a @click="setActive"><slot></slot></a>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    setActive() {
      this.$store.commit("changeTab", this.$slots.default[0].text);
      console.log(this.$store.state.profile.currentTab);
    }
  }
};
</script>
