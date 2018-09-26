<script>
import Navbar from "components/Navbar.vue";

export default {};
</script>

<template>
  <div id="app">
        <p>
            <router-link to="/">Go To Home</router-link>
            <router-link to="/profile">Go To Profile</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "styles/index.scss";
</style>
