<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="container-input__add pt-10 px-10">
        <div class="relative z-0 mb-6 w-full mx-auto group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 w-full text-sm text-secondary px-3 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            autocomplete="off"
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 left-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3 peer-focus:text-secondary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >Email address</label
          >
        </div>
      </div>
      <div class="container-input__item px-10">
        <div
          v-for="name in nameTodo"
          :key="name.id"
          class="max-w-sm p-6 bg-cardTodo flex justify-between mb-5 rounded-lg shadow-md"
        >
          <div class="item--name flex items-center">
            <input
              checked
              id="item"
              type="checkbox"
              v-model="nameTodo"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="item" class="font-normal px-3 text-white">
              {{ name.name }}
            </label>
          </div>
          <div class="item--options flex items-center">
            <div class="edit text-blue-400 mr-2">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <div class="delete text-red-600">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TodoItem",
  data() {
    return {
      nameTodo: [],
    };
  },
  methods: {
    loadTodoItem() {
      let user = JSON.parse(localStorage.getItem("user"));
      // let resulst = await axios.get(
      //   "https://vutopi-db.herokuapp.com/user?_embed=todos"
      // );
      this.nameTodo = user[0].todos[0].nameTodo;
      console.log(this.nameTodo);
    },
  },

  mounted() {
    this.loadTodoItem();
  },
};
</script>
<style></style>
