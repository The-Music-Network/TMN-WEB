<template>
    <div>
        <Login :errorMessage="errorMessage" v-on:loginCredentials="checkCredentials"></Login>
    </div>
</template>

<script>
import Login from "../../Components/Login/Login.vue";
export default {
  name: "Landing",
  components: {
    Login: Login
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  methods: {
    checkCredentials: function(payload) {
      console.log("email: ", payload.email, "\npassword: ", payload.password);
    }
  }
};
</script>


<style lang="scss">
</style>
