<template>
  <div class="container-wrap bg-primary w-[390px] mx-auto min-h-screen">
    <div class="container">
      <div class="container-logo">
        <img src="/ellipse.png" alt="" srcset="" />
      </div>
      <div class="container-content w-full">
        <div class="content w-full">
          <div class="content-logo flex justify-center flex-col items-center">
            <h1 class="text-white">Welcome Onboard!</h1>
            <p class="text-secondary">
              Let's help you keep up with your tasks.
            </p>
          </div>
          <div class="content-form mx-5 pb-2 pt-5">
            <form>
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
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
                  required
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="ConfirmPassword"
                  class="block mb-2 text-sm font-medium text-white"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  id="ConfirmPassword"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="re-enter your password"
                />
              </div>
              <div class="form-button text-center">
                <div class="form-button text-center">
                  <button
                    type="button"
                    @click="signup"
                    class="text-white bg-alternate hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                  <p class="text-secondary">
                    have an account?
                    <router-link to="/login" class="text-white font-bold"
                      >Sign In</router-link
                    >
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let name = ref("");
let email = ref("");
let password = ref("");

const signup = async () => {
  await axios
    .post("https://vutopi-db.vercel.app/user", {
      email: email.value,
      password: password.value,
      name: name.value,
    })
    .then(async (results) => {
      await axios
        .post("https://vutopi-db.vercel.app/todos", {
          userId: results.data.id,
        })
        .then((results) => {
          router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
};

// return {
//   name,
//   email,
//   password,
// };

// export default {
//   name: "Login",
//   data() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     async signup() {
//       let results = await axios.post(
//         "https://vutopi-db.vercel.app/user",
//         {
//           email: this.email,
//           password: this.password,
//           name: this.name,
//         }
//       );
//       if (results.status == 201) {
//         await axios
//           .post(
//             "https://vutopi-db.vercel.app/todos",
//             {
//               userId: results.data.id,
//             }
//           )
//           .then((results) => {
//             this.$router.push({ name: "Login" });
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       }
//     },
//   },
// };
</script>
<style></style>
