import Vue from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  requestInterceptor,
  responseInterceptor,
} from "./helpers/interceptors";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);

requestInterceptor();
responseInterceptor();
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

export { router };
