import { createApp } from "vue";
import "./style.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
// import pinia
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router.js";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
  .use(router)
  .use(VueSweetalert2)
  .use(autoAnimatePlugin)
  .use(createPinia())
  .mount("#app");
