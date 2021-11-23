/* CORE */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { store } from "./store/store";

/* plugins */
import vuetify from "./plugins/vuetify";
import "./plugins/type"; // typing animation

/* 3rd party */
import FlagIcon from "vue-flag-icon";
import jsPDF from "jspdf";
import html2PDF from "jspdf-html2canvas";

Vue.config.productionTip = false;

Vue.use(FlagIcon);

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
