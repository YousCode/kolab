import Vue from "vue";
import Router from "vue-router";
import Main from "../pages/Main.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Preloader", component: Preloader },
    { path: "/Main", name: "Main", component: Main },
   
    
  ]
});
