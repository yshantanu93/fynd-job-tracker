import Vue from "vue";
import Vuex from "vuex";
import alert from "./modules/alert";
import register from "./modules/register";
import dashboard from "./modules/dashboard";
import jobs from "./modules/jobs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert,
    register,
    dashboard,
    jobs,
  },
});
