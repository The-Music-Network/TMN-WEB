<template>
   <div class="container">
    <div class="row">
        <div class="col">
            <div class="profile--left">
                 <div class="profile--img">
                    <img src="https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png">
                 </div>
            </div>
        </div>
        <div class="col-6 text-center">
            Test
        </div>
        <div class="col">
            Test
        </div>
    </div>
   </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
@import "styles/index.scss";

.profile {
  &--left {
    background-color: $light-secondary-color;
    height: 93vh;
  }

  &--img {
    img {
        height: 150px;
        width: 150px;
        display: block;
        margin: 0 auto;
        padding: 20px;
        border-radius: 200px;
    }
  }
}
</style>
