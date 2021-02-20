import Vue from "vue";
import VueI18n from "vue-i18n";
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
  VueI18n,
  render: (h) => h(App),
}).$mount("#app");
