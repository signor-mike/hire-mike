import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";
import FlagIcon from "vue-flag-icon";
import jsPDF from "jspdf";
import html2PDF from "jspdf-html2canvas";
import VueTypedJs from "vue-typed-js";

Vue.config.productionTip = false;

Vue.use(FlagIcon, VueTypedJs);

new Vue({
  Vuex,
  store,
  router,
  vuetify,
  FlagIcon,
  jsPDF,
  html2PDF,
  render: (h) => h(App),
}).$mount("#app");
