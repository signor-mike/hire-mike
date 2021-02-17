import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import { store } from "../store/store";

Vue.config.productionTip = false;

new Vue({
  Vuex,
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
