import Vue from "vue";
import Vuex from "vuex";

import crud from "./module/crud.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    crud,
  },
});
