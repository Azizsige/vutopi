<template>
  <div class="container-wrap bg-primary w-[390px] mx-auto min-h-screen">
    <div class="container">
      <div class="container-logo">
        <img src="/ellipse.png" alt="" srcset="" />
      </div>
      <div class="container-content w-full">
        <div class="content w-full">
          <Login />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./components/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>
<style lang=""></style>
