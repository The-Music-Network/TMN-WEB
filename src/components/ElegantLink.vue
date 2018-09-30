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
      this.isActive = !this.isActive;
    }
  }
};
</script>
