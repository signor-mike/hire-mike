/* eslint-disable no-unused-vars */
import { db } from "@/plugins/fbase.js";
import isEqual from "lodash.isequal";
import { store } from "@/store/store";
import {
	collection,
	getDocs,
	getDoc,
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
		state.projects = value;
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
			let array = [];
			querySnapshot.forEach((doc) => {
				array.push({
					id: doc.id,
					...doc.data(),
				});
			});
			array.sort((a, b) => {
				switch (true) {
					case a.year > b.year:
						return -1;
					case a.year < b.year:
						return 1;
					default:
						return 0;
				}
			});
			commit("setProjects", array);
		} catch (error) {
			console.log(error);
		}
	},

	async getAll({ dispatch }) {
		await dispatch("fetchBio");
	},
};
