<template>
  <div class="container-wrap mx-auto min-h-screen">
    <Navbar />
    <TodoItem />
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";
import TodoItem from "./../components/TodoItem.vue";
export default {
  components: {
    Navbar,
    TodoItem,
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
