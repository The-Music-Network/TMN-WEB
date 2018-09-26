<script>
import Navbar from "components/Navbar.vue";

export default {};
</script>

<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <router-view></router-view>
            <p>
                <router-link to="/">Go To Home</router-link>
                <router-link to="/profile">Go To Profile</router-link>
            </p>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/index.scss";

#app {
  display: flex;
  flex: 1;
}
</style>
