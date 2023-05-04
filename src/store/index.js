import { defineStore } from "pinia";
// import vueuse
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";

const login = JSON.parse(localStorage.getItem("user"));
const router = useRouter();

export const useStore = defineStore({
  id: "store",
  state: () => ({
    isLogin: false,
    id: null,
    name: null,
    email: null,
  }),
  actions: {
    // async name and email data from local storage
    async login() {
      const { name, email } = useLocalStorage("store", login);
      this.name = name;
      this.email = email;
      this.isLogin = true;
      router.push({ name: "Index" });
    },

    // since we rely on `this`, we cannot use an arrow function
  },
  persist: {
    paths: ["name", "email", "isLogin"],
  },
});
