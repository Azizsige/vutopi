<template>
  <div class="container-wrap mx-auto h-screen">
    <Navbar />
    <Suspense @pending="pending" @fallback="fallback" @resolve="resolved">
      <template #default>
        <TodoItem />
      </template>
      <template #fallback>
        <h1 class="text-red-700 text-7xl">Loading . . .</h1>
      </template>
    </Suspense>
  </div>
</template>
<script setup>
import Navbar from "./../components/Navbar.vue";
import TodoItem from "./../components/TodoItem.vue";

import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "./../store/index";

const stores = useStore();
const router = useRouter();

onMounted(() => {
  // let user = JSON.parse(localStorage.getItem("user"));
  // if (window.localStorage.length == 0) {
  //   router.push({ name: "Login" });
  // } else {
  //   router.push({ name: "Index" });
  // }
  console.log(stores.$state.isLogin.value);
});
</script>
<style></style>
