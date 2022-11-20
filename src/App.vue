<template>
  <div class="container-wrap bg-primary w-[390px] mx-auto min-h-screen">
    <div class="container">
      <div class="container-logo">
        <img src="/ellipse.png" alt="" srcset="" />
      </div>
      <div class="container-content w-full">
        <div class="content w-full">
          <SignUp />
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
export default {
  components: {
    Login,
    SignUp,
  },
};
</script>
<style lang=""></style>
