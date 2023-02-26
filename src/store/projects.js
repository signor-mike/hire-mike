/* eslint-disable no-unused-vars */
import { db } from "@/plugins/fbase.js";
import {
	collection,
	getDocs,
	getDoc,
	setDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

export const PROJECTS_STATE = {
	projectsTitle: "",
	projects: [],
};

export const PROJECTS_MUTATIONS = {
	SET_PROJECTS_TITLE(state, value) {
		state.projectsTitle = value;
	},
};

export const PROJECTS_ACTIONS = {
	async GET_PROJECTS_TITLE({ commit }) {
		try {
			await getDoc(doc(db, "v2/projects"))
				.then((doc) => doc.data())
				.then((data) => commit("SET_PROJECTS_TITLE", data.title));
		} catch (error) {
			console.error(error);
		}
	},

	async UPDATE_PROJECTS_TITLE({ dispatch }, payload) {
		try {
			await updateDoc(doc(db, "v2/projects"), { title: payload });
			dispatch("GET_PROJECTS_TITLE");
		} catch (error) {
			console.error(error);
		} finally {
			alert("title updated");
		}
	},

	async ADD_PROJECT({ commit, dispatch }, payload) {
		try {
			await setDoc(doc(db, "v2/projects", doc(db, "data", "/")), payload);
		} catch (error) {
			console.error(error);
		}
	},
};
