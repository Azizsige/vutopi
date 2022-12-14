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

const router = useRouter();

const pending = () => {
  console.log("pending");
};
const fallback = () => {
  console.log("fallback");
};
const resolved = () => {
  console.log("resolve");
};

onMounted(() => {
  let user = localStorage.getItem("user");
  if (!user) {
    router.push({ name: "Login" });
  }
});
</script>
<style></style>
