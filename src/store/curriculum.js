/* eslint-disable no-unused-vars */
import { db } from "@/plugins/fbase.js";
import isEqual from "lodash.isequal";
import { store } from "@/store/store";
import {
	collection,
	getDocs,
	getDoc,
	setDoc,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

const about = ["professional", "personal"];

export const state = {
	about: {
		personal: {
			title: "",
			text: "",
		},
		professional: {
			title: "",
			text: "",
		},
	},
	projects: [],
	stack: [],
};

export const mutations = {
	setBio(state, value) {
		const key = Object.keys(value)[0];
		value = value[key];
		state.about[key] = value;
	},

	setProjects(state, value) {
		if (value.length)
			state.projects = value.sort((a, b) => {
				switch (true) {
					case a.year > b.year:
						return -1;
					case a.year < b.year:
						return 1;
					default:
						return 0;
				}
			});
		else state.projects = { ...state.projects, value };
	},

	setStack(state, value) {
		state.stack = value;
	},
};

export const actions = {
	/* ~~~~~~~~~~~~~~~~ BIO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	async fetchBio({ commit }) {
		about.forEach((d, i) =>
			getDoc(doc(db, "about", d))
				.then((doc) => doc.data())
				.then((data) => commit("setBio", { [about[i]]: data }))
				.catch((err) => console.log(err))
		);
	},
	async updateBio({ dispatch }, payload) {
		try {
			const { collection, document, field, value } = payload;
			await updateDoc(doc(db, collection, document), {
				[field]: value,
			}).then(() => dispatch("fetchBio"));
		} catch (error) {
			console.log(error);
		}
	},
	/* ~~~~~~~~~~~~~~~~~ PROJECTS ~~~~~~~~~~~~~~~~~~~~~~ */
	async fetchProjects({ commit }) {
		try {
			const querySnapshot = await getDocs(collection(db, "work"));
			let docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({
					id: doc.id,
					...doc.data(),
				});
			});
			commit("setProjects", docs);
		} catch (error) {
			console.log(error);
		}
	},
	async addProject({ commit, dispatch }, payload) {
		try {
			await setDoc(
				doc(db, "work", payload.company.replace(" ", ".")),
				payload
			);
			commit("setProjects", payload);
			dispatch("fetchProjects");
		} catch (error) {
			console.log(error);
		}
	},
	async deleteProject({ dispatch }, payload) {
		try {
			await deleteDoc(doc(db, "work", payload.id));
			dispatch("fetchProjects");
		} catch (error) {
			console.log(error);
		}
	},
	async updateProject({ dispatch }, payload) {
		try {
			await updateDoc(doc(db, "work", payload.id), payload);
			dispatch("fetchProjects");
		} catch (error) {
			console.log(error);
		}
	},
	/* ~~~~~~~~~~~~~~~~~~ STACK ~~~~~~~~~~~~~~~~~~~~~~~ */
	async fetchStack({ commit }) {
		try {
			const querySnapshot = await getDocs(collection(db, "stack"));
			let docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({
					id: doc.id,
					...doc.data(),
				});
			});
			commit("setStack", docs);
		} catch (error) {
			console.log(error);
		}
	},

	async updateStack({ dispatch }, payload) {
		try {
			const { id, type, newValue } = payload;
			await updateDoc(doc(db, "stack", id), { [type]: newValue });
			await dispatch("fetchStack");
		} catch (error) {
			console.log(error);
		}
	},

	async getAll({ dispatch }) {
		await dispatch("fetchBio");
		await dispatch("fetchProjects");
		await dispatch("fetchStack");
	},
};
