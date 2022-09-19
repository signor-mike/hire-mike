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
};

export const mutations = {
	setBio(state, value) {
		const key = Object.keys(value)[0];
		value = value[key];
		state.about[key] = value;
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
};
