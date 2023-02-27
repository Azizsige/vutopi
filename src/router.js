import Index from "./views/Index.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Update from "./views/Update.vue";
import { useStore } from "./store";

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

// make middleware
router.beforeEach((to, from, next) => {
  const store = useStore();
  const user = JSON.parse(localStorage.getItem("user"));

  // if (
  //   window.localStorage.length > 0 &&
  //   user.isLogin == true &&
  //   to.name == "Login" &&
  //   to.name == "SignUp"
  // ) {
  //   next({ name: "Index" });
  // } else {
  //   next();
  //   // router.push({ name: "Login" });
  // }

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

// router.beforeEach((to, from, next) => {
//   const store = useStore();
//   if (to.name !== "Login" && to.name !== "SignUp" && !store.state.user) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router;
