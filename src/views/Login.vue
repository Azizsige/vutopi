<template>
  <div class="wrapper bg-white">
    <div class="container-wrap bg-primary w-full sm:w-[390px] mx-auto">
      <div class="container flex flex-col space-y-[2rem] xl:space-y-[10rem]">
        <div class="container-logo">
          <img src="/ellipse.png" alt="" srcset="" />
        </div>
        <div class="container-content w-full">
          <div class="content w-full">
            <div class="content-logo flex justify-center flex-col items-center">
              <img src="/logo.png" alt="" srcset="" />
              <h1 class="text-white pt-5 font-primary">Sign In</h1>
            </div>
            <div class="content-form mx-5 pb-2">
              <form>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Enter your password"
                  />
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-white"
                    >Remember me</label
                  >
                </div>
                <div class="form-button text-center">
                  <button
                    type="button"
                    @click="login"
                    class="text-white bg-alternate hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  <p class="text-secondary">
                    Don't have an account?
                    <router-link to="/sign-up" class="text-white font-bold"
                      >Sign Up</router-link
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import Swal from "sweetalert2";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// import store pinia from
import { useStore } from "./../store/index";

const router = useRouter();
const store = useStore();

let email = ref("");
let password = ref("");

const login = async () => {
  Swal.fire({
    title: "Loading",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  let results = await axios.get(
    `https://vutopi-db.vercel.app/user?email=${email.value}&password=${password.value}`
  );
  if (results.status == 200 && results.data.length > 0) {
    store.$state.id = results.data[0].id;
    store.$state.name = results.data[0].name;
    store.$state.email = results.data[0].email;
    store.$state.isLogin = true;
    localStorage.setItem(
      "user",
      JSON.stringify({
        isLogin: store.$state.isLogin,
      })
    );
    router.push({ name: "Index" });
    // location.reload();
    Swal.close();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

onMounted(() => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (window.localStorage.length > 0 && user.isLogin == true) {
    router.push({ name: "Index" });
  } else {
    router.push({ name: "Login" });
  }
});
</script>
<style></style>
