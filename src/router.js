import Index from "./views/Index.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Index",
    component: Index,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
