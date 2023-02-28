import Vue from "vue";
import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";

import projects from "./mock/projects.json";
import about from "./mock/about.json";
import stack from "./mock/stack.json";

// const vuexLocal = new VuexPersistence({
// 	storage: window.localStorage,
// });

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		projects: projects.data,
		projectsTitle: projects.title,
		about: about.data,
		aboutTitle: about.title,
		stack: stack.data,
		stackTitle: stack.title,
		gdpr: "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
		info: "This website is designed within mobile-first approach",
		isNavVisible: false,
		user: {
			loggedIn: false,
			data: null,
		},
		currentUser: null,
	},
	getters: {
		user(state) {
			return state.user;
		},
		isAdmin(state) {
			return (
				state.user.data.email === state.currentUser.email &&
				state.user.loggedIn
			);
		},
	},
	mutations: {
		SET_NAV_VISIBILITY(state, value) {
			state.isNavVisible = value;
		},
		/* users */
		SET_LOGGED_IN(state, value) {
			state.user.loggedIn = value;
		},
		SET_USER(state, data) {
			state.user.data = data;
		},
		SET_CURRENT_USER(state, data) {
			state.currentUser = data;
		},
	},
	actions: {
		fetchUser({ commit }, user) {
			commit("SET_LOGGED_IN", user !== null);
			if (user) {
				commit("SET_USER", {
					email: user.email,
				});
			} else {
				commit("SET_USER", null);
			}
		},
	},
	// plugins: [vuexLocal.plugin],
});

export { store };
