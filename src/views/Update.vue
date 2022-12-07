<template>
  <Navbar />
  <div class="wrapper bg-white">
    <div
      class="wrapper-container bg-primary mx-auto w-full sm:w-[390px] min-h-screen overflow-hidden"
    >
      <div class="content-form mx-5 min-h-screen pb-2 pt-5">
        <form @submit.prevent="update(todos.id)">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-white"
              >Name</label
            >
            <input
              type="text"
              autofocus
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your full name"
              v-model="todos.name"
              required
            />
          </div>
          <div class="form-button text-center">
            <div class="form-button text-center">
              <button
                type="button"
                @click="update(todos.id)"
                class="text-white bg-alternate hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      todos: [],
      idParams: parseInt(this.$route.params.id),
    };
  },
  methods: {
    async update(id) {
      Swal.fire({
        icon: "success",
        title: "Your todo has been update",
        showConfirmButton: false,
        timer: 1500,
      });
      await axios
        .put(`https://vutopi-db.vercel.app/nameTodo/${id}`, {
          name: this.todos.name,
          todoId: this.todos.todoId,
          isDone: this.todos.isDone,
        })
        .then((results) => {
          this.$router.push({ name: "Index" });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  async mounted() {
    await axios
      .get(`https://vutopi-db.vercel.app/nameTodo/${this.idParams}`)
      .then((results) => {
        this.todos = results.data;
        console.log(this.todos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>
<style lang=""></style>
