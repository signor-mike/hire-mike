import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		contacts: [
			{
				id: "1",
				title: "email me",
				link: "mailto:mikelitoris34@icloud.com",
				icon: "alternate_email",
			},
			{
				id: "2",
				title: "GitHub",
				link: "https://github.com/Mike-OxHuge",
				icon: "mdi-github",
			},
			{
				id: "3",
				title: "Telegram",
				link: "https://t.me/miketnf",
				icon: "mdi-telegram",
			},
			{
				id: "4",
				title: "Linkedin",
				link: "https://www.linkedin.com/in/mike-litoris/",
				icon: "mdi-linkedin",
			},
		],
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
					displayName: user.displayName,
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
