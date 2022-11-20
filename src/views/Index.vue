<template>
  <div class="container-wrap bg-primary w-[390px] mx-auto min-h-screen">
    <Navbar />
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
<style></style>
