import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import user from "./modules/user";
import router from "./modules/router";

export default new Vuex.Store({
  modules: {
    user,
    router
  }
});
