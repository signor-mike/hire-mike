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
		techs: [],
		projects: [],
	},
	getters: {
		user(state) {
			return state.user;
		},
		skills(state) {
			return state.skills;
		},
		techs(state) {
			return state.techs;
		},
		projects(state) {
			return state.projects;
		},
	},
	mutations: {
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

		/* skills */
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

		/* techs */
		SET_TECHS(state, payload) {
			state.techs = payload;
		},
		ADD_TECH(state, payload) {
			state.techs.push(payload);
		},
		DELETE_TECH(state, payload) {
			state.techs = state.techs.filter((tech) => tech.id !== payload.id);
		},

		/* projects */
		SET_PROJECTS(state, payload) {
			state.projects = payload;
		},
		ADD_PROJECT(state, payload) {
			state.projects.push(payload);
		},
		DELETE_PROJECT(state, payload) {
			state.projects = state.projects.filter(
				(project) => project.id !== payload.id
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
