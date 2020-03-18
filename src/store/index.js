import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
import photos from "./modules/photos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    photos
  }
});
