/* CORE */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { store } from "./store/store";

/* plugins */
import vuetify from "./plugins/vuetify";
import "./plugins/type"; // typing animation

/* 3rd party packages */
import jsPDF from "jspdf";
import html2PDF from "jspdf-html2canvas";

Vue.config.productionTip = false;

new Vue({
	Vuex,
	store,
	router,
	vuetify,
	jsPDF,
	html2PDF,

	render: (h) => h(App),
}).$mount("#app");
