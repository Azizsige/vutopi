<template>
  <div
    class="container-wrap bg-primary w-full sm:w-[390px] mx-auto min-h-screen"
  >
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
                <div class="inputs relative">
                  <input
                    :type="
                      (passwordFieldType = showPassword ? 'text' : 'password')
                    "
                    id="Password"
                    v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Enter your password"
                  />
                  <button
                    class="toggle-show absolute top-2 right-3 hover:cursor-pointer"
                    @click.prevent="toggleShowPassword"
                  >
                    <font-awesome-icon
                      :icon="
                        (iconType = showPassword
                          ? 'fas fa-eye'
                          : 'fas fa-eye-slash')
                      "
                    />
                  </button>
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="ConfirmPassword"
                  class="block mb-2 text-sm font-medium text-white"
                  >Confirm Password
                </label>
                <div class="inputs relative">
                  <input
                    :type="
                      (passwordFieldType = showConfirm ? 'text' : 'password')
                    "
                    id="ConfirmPassword"
                    v-model="ConfirmPassword"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Confirm your password"
                  />
                  <div
                    class="toggle-show absolute top-2 right-3 hover:cursor-pointer"
                    @click.prevent="toggleShowConfirm"
                  >
                    <font-awesome-icon
                      :icon="
                        (iconType = showConfirm
                          ? 'fas fa-eye'
                          : 'fas fa-eye-slash')
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="form-button text-center">
                <div class="form-button text-center">
                  <button
                    type="button"
                    @click="checkValidation"
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

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  db,
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
} from "../firebase/index";
import Swal from "sweetalert2";

import { useToast } from "vue-toastification";

const router = useRouter();
const toast = useToast();

let name = ref("");
let email = ref("");
let password = ref("");
let ConfirmPassword = ref("");
let showPassword = ref(false);
let showConfirm = ref(false);
let iconType = ref("");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// toggle password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
const toggleShowConfirm = () => {
  showConfirm.value = !showConfirm.value;
};

const checkValidation = () => {
  if (
    name.value == "" &&
    email.value == "" &&
    password.value == "" &&
    ConfirmPassword.value == ""
  ) {
    toast.error("Form must be filled", {
      position: "top-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
  } else if (name.value == "") {
    toast.error("Name must be filled", {
      position: "top-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
  } else if (password.value != ConfirmPassword.value) {
    toast.error("Password and Confirm Password must be same", {
      position: "top-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
    console.log(`password ${password.value}, confirm ${ConfirmPassword.value}`);
  } else if (password.value.length < 8) {
    toast.error("Password must be 8 character", {
      position: "top-right",
      timeout: 2000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
  } else {
    if (emailRegex.test(email.value)) {
      signup(email.value, password.value);
    } else if (email.value == "") {
      toast.error("Email must be filled", {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    } else {
      toast.error("Email is not valid", {
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    }
  }
};

// buatkan function signup firebase
const signup = async (email, password) => {
  Swal.fire({
    title: "Loading",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.uid);
      console.log(user);
      setDoc(doc(db, "users", user.uid), {
        name: name.value,
        email: user.email,
        country: "USA",
        todos: {},
      });

      Swal.fire({
        icon: "success",
        title: "Kamu berhasil mendaftar",
        text: "Silahkan login untuk melanjutkan",
      });
      router.push({ name: "Login" });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// const signup = async () => {
//   Swal.fire({
//     title: "Loading",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   });
//   await axios
//     .post("https://vutopi-db.vercel.app/user", {
//       email: email.value,
//       password: password.value,
//       name: name.value,
//     })
//     .then(async (results) => {
//       await axios
//         .post("https://vutopi-db.vercel.app/todos", {
//           userId: results.data.id,
//         })
//         .then((results) => {
//           Swal.fire({
//             icon: "success",
//             title: "Kamu berhasil mendaftar",
//             text: "Silahkan login untuk melanjutkan",
//           });
//           router.push({ name: "Login" });
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     });
// };

onMounted(() => {
  let user = localStorage.getItem("user");
  if (user) {
    router.push({ name: "Index" });
  }
});
</script>
<style></style>
