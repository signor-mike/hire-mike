import Vue from "vue";
import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";
import { state, mutations, actions } from "./curriculum";
// import { PROJECTS_ACTIONS, PROJECTS_MUTATIONS } from "./projects";

import projects from "@/../public/data/projects.json";
import about from "@/../public/data/about.json";

// const vuexLocal = new VuexPersistence({
// 	storage: window.localStorage,
// });

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		...state,
		projects: [...projects],
		projectsTitle:
			"I've either built from ground-zero or actively participated in the following projects:",
		...about,
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
		...mutations,
		// ...PROJECTS_MUTATIONS,
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
		...actions,
		// ...PROJECTS_ACTIONS,
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
		async getAll({ dispatch }) {
			await dispatch("fetchBio");
			// await dispatch("fetchProjects");
			await dispatch("fetchStack");
			// await dispatch("GET_PROJECTS_TITLE");
		},
	},
	// plugins: [vuexLocal.plugin],
});

export { store };
