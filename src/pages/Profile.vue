<template>
   <div class="container">
    <div class="row">
        <div class="col-3">
            <div class="profile--left">
                <div class="row">
                    <div class="col">
                        <a class="btn btn--primary profile--follow-button">
                            Follow
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="profile--img">
                            <img src="~images/drake_icon.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-9">
            <div class="row">
                <div class="profile--banner">
                <div class="row">
                    <div class="profile--organization">Octobers Very Own</div>
                    </div>
                    <div class="row">
                        <div class="profile--followers">20,000 Followers</div>
                    </div>
                    <img src="~images/drake_banner.jpg">
                </div>
            </div>
            <div class="row">
                <elegant-nav></elegant-nav>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import ElegantNav from "components/ElegantNav.vue";

export default {
  components: {
    ElegantNav
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";

.profile {
  &--follow-button {
    display: block;
    width: 90%;
    margin: 10px auto;
  }

  &--left {
    background-color: $light-secondary-color;
    height: 93vh;
    text-align: center;
  }

  &--img img {
    height: 250px;
    width: 250px;
    display: block;
    margin: 0 auto;
    padding: 20px;
    border-radius: 200px;
    object-fit: cover;
  }

  &--banner {
    background-color: $light-secondary-color;
    padding: 20px;
    & img {
      height: 25vh;
      width: 100%;
      object-fit: cover;
      object-position: 0 0;
    }
  }

  &--organization {
    position: absolute;
    right: 5%;
    margin-top: 20px;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 6px;
    border-radius: 5px;
  }

  &--followers {
    position: absolute;
    left: 5%;
    margin-top: 20px;
    background-color: $secondary-color;
    color: $primary-color;
    padding: 6px;
    border-radius: 5px;
  }
}
</style>
