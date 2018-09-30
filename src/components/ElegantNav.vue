<template>
    <div class="nav nav--elegant">
        <nav>
            <elegant-link>Music</elegant-link>
            <elegant-link>Playlists</elegant-link>
            <elegant-link>Followers</elegant-link>
            <elegant-link>Following</elegant-link>
        </nav>
    </div>
</template>

<script>
import ElegantLink from "./ElegantLink.vue";
export default {
  components: {
    ElegantLink
  }
};
</script>
<style lang="scss">
</style>
