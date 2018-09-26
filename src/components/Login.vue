<template>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <form @submit-prevent="submitLogin">
            <div class="row">
                <div class="col-12">
                    <div class="login-panel">
                      <h3>Login</h3>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-12-m">
                    <input ref="emailText" type="text" class="input" v-bind:class="[emailSuccess]" name="username" placeholder="Email/Username" @input="validateEmail" autofocus required />
                    <span><i v-bind:class="[emailIcon]"></i></span>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <input ref="passwordText" type="password" class="input" v-bind:class="[passwordSuccess]" name="password" placeholder="Password" @input="validatePassword" pattern=".{6,25}" required />
                    <span><i v-bind:class="[passwordIcon]"></i></span>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <span class="error" v-if="errorMessage">{{errorMessage}}</span>
                    <button class="btn" :disabled="submitDisabled">Sign In</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      emailSuccess: "",
      passwordSuccess: "",
      emailIcon: "",
      passwordIcon: "",
      submitDisabled: true
    };
  },
  methods: {
    validateEmail: function() {
      if (this.$refs.emailText.checkValidity()) {
        this.emailSuccess = "email-success";
        this.emailIcon = "fa fa-check";
        if (this.$refs.passwordText.checkValidity())
          this.submitDisabled = false;
      } else {
        this.emailSuccess = "email-invalid";
        this.emailIcon = "fa fa-times";
        this.submitDisabled = true;
      }
    },
    validatePassword: function() {
      if (this.$refs.passwordText.checkValidity()) {
        this.passwordSuccess = "password-success";
        this.passwordIcon = "fa fa-check";
        if (this.$refs.emailText.checkValidity()) this.submitDisabled = false;
      } else {
        this.passwordSuccess = "password-invalid";
        this.passwordIcon = "fa fa-times";
        this.submitDisabled = true;
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
.login-panel {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.error {
  color: "#b60505";
}
</style>
