<template>
   <div class="container">
    <div class="row">
        <div class="col">
            <div class="profile--left">
                <div class="profile--img">
                    <img src="https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png">
                </div>
                <a class="btn btn-primary">
                    Follow
                </a>
            </div>
        </div>
        <div class="col-9">
            <div class="row">
                <div class="profile--banner">
                    <img src="https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png">
                </div>
            </div>
            <div class="row">
                <div class="nav nav-elegant">
                    <nav>
                        <a>Music</a>
                        <a>Playlists</a>
                        <a>Followers</a>
                        <a>Following</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "styles/index.scss";

.profile {
  &--left {
    background-color: $light-secondary-color;
    height: 93vh;
    text-align: center;
  }

  &--img img {
    height: 200px;
    width: 200px;
    display: block;
    margin: 0 auto;
    padding: 20px;
    border-radius: 200px;
    object-fit: cover;
  }

  &--banner {
    & img {
      height: 25vh;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
