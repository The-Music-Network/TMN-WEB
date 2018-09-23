<template>
    <div class="tmn-container">
        <form @submit-prevent="submitLogin">
            <div class="row">
                <div class="tmn-col-12-m login-panel">
                    <h3>Login</h3>
                </div>
            </div>
            <div class="row">
                <div class="tmn-col-12-m">
                    <input ref="emailText" type="text" class="tmn-input" v-bind:class="[emailSuccess]" name="username" placeholder="Email/Username" @input="validateEmail" autofocus required />
                    <span><i v-bind:class="[emailIcon]"></i></span>
                </div>
            </div>
            <div class="row">
                <div class="tmn-col-12-m">
                    <input ref="passwordText" type="password" class="tmn-input" v-bind:class="[passwordSuccess]" name="password" placeholder="Password" @input="validatePassword" pattern=".{6,25}" required />
                    <span><i v-bind:class="[passwordIcon]"></i></span>
                </div>
            </div>
            <div class="row">
                <div class="tmn-col-12-m">
                    <button class="tmn-btn" >Sign In</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      emailSuccess: "",
      passwordSuccess: ""
    };
  },
  methods: {
    validateEmail: function() {
      if (this.$refs.emailText.checkValidity()) {
        this.emailSuccess = "email-success";
        this.emailIcon = "fa fa-check";
      } else {
        this.emailSuccess = "email-invalid";
        this.emailIcon = "fa fa-times";
      }
    },
    validatePassword: function() {
      if (this.$refs.passwordText.checkValidity()) {
        this.passwordSuccess = "password-success";
        this.passwordIcon = "fa fa-check";
      } else {
        this.passwordSuccess = "password-invalid";
        this.passwordIcon = "fa fa-times";
      }
    },
    submitLogin: function() {
      let email = this.$refs.emailText.value.trim();
      let password = this.$refs.passwordText.value.trim();

      this.$emit("loginCredentials", {
        email: email,
        password: password
      });
    }
  }
};
</script>

<style lang="scss">
@import "styles/font-awesome/scss/_variables.scss";
</style>
