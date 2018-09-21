<script>
import Navbar from "components/Navbar.vue";

export default {
  data: {
    title: "The Music Network",
    meta: `
                <meta charset="UTF-8">
            `
  }
};
</script>

<template>
  <div id="app">
        <p>
            <router-link to="/">Go To Home</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
