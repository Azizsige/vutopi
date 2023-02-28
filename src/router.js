import Index from "./views/Index.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Update from "./views/Update.vue";

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
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (
    to.name !== "Login" &&
    to.name !== "SignUp" &&
    window.localStorage.length == 0
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
