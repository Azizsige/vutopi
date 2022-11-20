import Index from "./components/Index.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

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
