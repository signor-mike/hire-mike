/* eslint-disable no-unused-vars */
import { db } from "@/plugins/fbase.js";
import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { store } from "@/store/store";

export default function useProjects() {
	let project = {};
	let projects = store.state.projects;
	const projectSchema = {
		name: "project name",
		date: null,
		url: "url to access the project",
		// preview separator
		image: "",
		description: "about the project",
		specification: "the purpose of the project",
		techs: [], // IDs
	};

	/* GET PROJECTS */
	const getProjects = async () => {
		const querySnapshot = await getDocs(collection(db, "projects"));
		let projectsArray = [];
		querySnapshot.forEach((doc) =>
			projectsArray.push({
				id: doc.id,
				...doc.data(),
			})
		);
		store.commit("SET_PROJECTS", projectsArray);

		return projects.sort((a, b) => {
			if (a.mastery < b.mastery) return -1;
			if (a.mastery > b.mastery) return 1;
			return 0;
		});
	};

	/* ADD PROJECT */
	const addProject = async (project) => {
		try {
			const newproject = await addDoc(
				collection(db, "projects"),
				project
			);
			store.commit("ADD_PROJECT", { id: newproject.id, ...project });
			console.log(`project added: ${newproject.id}`);
			// console.log(projects);
		} catch (error) {
			alert(error);
		}
	};

	/* UPDATE PROJECT */
	const editProject = async (project) => {
		await updateDoc(doc(db, "projects", project.id), project);
		console.log("updated project: ", project.id);
	};

	/* DELETE PROJECT */
	const deleteProject = async (project) => {
		try {
			await deleteDoc(doc(db, "projects", project.id));
			store.commit("DELETE_PROJECT", project);
		} catch (error) {
			alert(error);
		}
	};
	return {
		project,
		projects,
		projectSchema,
		getProjects,
		addProject,
		editProject,
		deleteProject,
	};
}
