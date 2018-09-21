import Vue from "vue";
import Router from "vue-router";
import Home from "pages/Home.vue";

Vue.use(Router);

export default function router() {
  return new Router({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      }
    ]
  });
}
