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
              v-if="todos.length != 0"
              type="text"
              autofocus
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your full name"
              v-model="todos.name"
              required
            />
            <input
              v-else
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
<script setup>
import Navbar from "./../components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";

import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

let idParams = ref(parseInt(route.params.id));
let todos = reactive({
  id: ref(),
  name: ref(),
  todoId: ref(),
  isDone: ref(),
});

const update = async (id) => {
  Swal.fire({
    icon: "success",
    title: "Your todo has been update",
    showConfirmButton: false,
    timer: 1500,
  });
  await axios
    .put(`https://vutopi-db.vercel.app/nameTodo/${id}`, {
      name: todos.name,
      todoId: todos.todoId,
      isDone: todos.isDone,
    })
    .then((results) => {
      console.log(results);
      router.push({ name: "Index" });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

onMounted(async () => {
  await axios
    .get(`https://vutopi-db.vercel.app/nameTodo/${idParams.value}`)
    .then((results) => {
      todos.id = results.data.id;
      todos.name = results.data.name;
      todos.todoId = results.data.todoId;
      todos.isDone = results.data.isDone;
      console.log(todos.name);
    })
    .catch((err) => {
      console.log(err.message);
    });
});
</script>
<style lang=""></style>
