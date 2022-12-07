<template>
  <div
    class="navbar py-1 bg-alternate sm:w-[390px] mx-auto w-full flex justify-end relative z-10"
  >
    <div class="avatar flex justify-center items-center">
      <div class="avatar-name text-white mr-3">Welcome Back, {{ name }} !</div>
      <div class="avatar-logo">
        <div
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          class="inline-flex cursor-pointer overflow-hidden relative mr-5 justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600"
        >
          <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
        </div>
      </div>
    </div>

    <!-- Dropdown menu -->
    <div
      id="userDropdown"
      class="hidden z-[0] mt-[4rem] mr-[10px] mb-0 ml-auto w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>{{ name }}</div>
        <div class="font-medium truncate">{{ email }}</div>
      </div>
      <div class="py-1">
        <a
          href="#"
          @click="logout"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Sign out</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    logout() {
      Swal.fire({
        title: "Are you sure to Logout ?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Cancel`,
        allowOutsideClick: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          localStorage.clear();
          this.$router.push({ name: "Login" });
        } else if (result.isDenied) {
          Swal.close();
        }
      });
    },

    capitalizedFirstLetter(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },

  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.name = this.capitalizedFirstLetter(user.name);
    this.email = user.email;
  },
};
</script>
<style></style>
