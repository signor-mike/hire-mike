import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { state, mutations, actions } from "./curriculum";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

Vue.use(Vuex);
// create new file, export default and import here
const store = new Vuex.Store({
	state: {
		...state,
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
	},
	mutations: {
		...mutations,
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
	plugins: [vuexLocal.plugin],
});

export { store };

//set it up in main.js
