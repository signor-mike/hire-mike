import Vue from "vue";
import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";
import { state, mutations, actions } from "./curriculum";
// import { PROJECTS_ACTIONS, PROJECTS_MUTATIONS } from "./projects";

import projects from "@/../public/data/projects.json";

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
