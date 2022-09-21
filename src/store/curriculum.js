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
};

export const actions = {
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

	async getAll({ dispatch }) {
		await dispatch("fetchBio");
		await dispatch("fetchProjects");
	},
};
