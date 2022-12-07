<template>
  <div class="wrapper bg-white">
    <div
      class="wrapper-container bg-primary mx-auto w-full sm:w-[390px] max-h-screen overflow-hidden"
    >
      <div class="container-input__add pt-10 px-10">
        <div class="relative z-0 mb-6 w-full mx-auto group">
          <input
            type="text"
            name="floating_email"
            v-model="name"
            @keyup.enter.prevent="addTodo"
            id="floating_email"
            class="block py-2.5 w-full text-sm text-secondary px-3 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            autocomplete="off"
            required
            autofocus
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 left-3 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-3 peer-focus:text-secondary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >Todo</label
          >
        </div>
      </div>
      <div class="container-input__item px-10 h-screen overflow-y-scroll">
        <div
          v-for="name in nameTodo"
          :key="name.id"
          class="max-w-sm p-6 bg-cardTodo flex justify-between mb-5 rounded-lg shadow-md"
        >
          <div class="item--name flex items-center">
            <input
              :id="name.id"
              type="checkbox"
              class="w-4 h-4 hover:cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              :for="name.id"
              class="font-normal hover:cursor-pointer px-3 text-white"
            >
              {{ name.name }}
            </label>
          </div>
          <div class="item--options flex items-center">
            <router-link :to="`/update/${name.id}`">
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
            </router-link>
            <div class="deletes text-red-600 hover:cursor-pointer">
              <button @click="remove(name.id)" type="button">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "TodoItem",
  data() {
    return {
      nameTodo: [],
      name: "",
      id: "",
    };
  },
  methods: {
    async remove(id) {
      Swal.fire({
        icon: "success",
        title: "Your todo has been delete",
        showConfirmButton: false,
        timer: 1500,
      });
      axios
        .delete(`https://vutopi-db.vercel.app/nameTodo/${id}`)
        .then((results) => {
          location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async getItem() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.id = user.id;
      await axios
        .get(`https://vutopi-db.vercel.app/nameTodo?todoId=${user.id}`)
        .then((results) => {
          this.nameTodo = results.data;
          console.log(this.nameTodo);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    async addTodo() {
      Swal.fire({
        icon: "success",
        title: "Your todo has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      await axios
        .post(`https://vutopi-db.vercel.app/nameTodo`, {
          name: this.name,
          isDone: false,
          todoId: this.id,
        })
        .then((results) => {
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
      // location.reload();
    },
  },

  async mounted() {
    this.getItem();
    console.log(this.nameTodo.id);
  },
};
</script>
<style></style>
