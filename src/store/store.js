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
		skills: [],
	},
	getters: {
		user(state) {
			return state.user;
		},
		skills(state) {
			return state.skills;
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
		SET_SKILLS(state, payload) {
			state.skills = payload;
		},
		ADD_SKILL(state, payload) {
			state.skills.push(payload);
		},
		DELETE_SKILL(state, payload) {
			state.skills = state.skills.filter(
				(skill) => skill.id !== payload.id
			);
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
	plugins: [vuexLocal.plugin],
});

export { store };

//set it up in main.js
