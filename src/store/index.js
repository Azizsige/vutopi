import { defineStore } from "pinia";

const login = JSON.parse(localStorage.getItem("user"));

export const useStore = defineStore({
  id: "store",
  state: () => ({
    isLogin: false,
    id: null,
    name: null,
    email: null,
  }),
});
