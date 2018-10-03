import Vue from "vue";
import Router from "vue-router";
import Profile from "pages/Profile.vue";
import Landing from "pages/Landing.vue";

Vue.use(Router);

export default function buildRouter() {
  return new Router({
    mode: "history",
    routes: [
      { path: "/", component: Landing },
      { path: "/profile", component: Profile }
    ]
  });
}
