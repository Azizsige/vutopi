<template>
  <div>
    <h1 class="text-center">Hello Index</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
<style></style>
