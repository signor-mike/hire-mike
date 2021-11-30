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

export default function useSkills() {
	let skill = {};
	let skills = store.state.skills;
	const skillSchema = {
		title: "skill itself",
		type: "hard/soft",
		mastery: "a-high/b-medium/c-medium/d-medium/f-low",
	};

	/* GET SKILLS */
	const getSkills = async () => {
		const querySnapshot = await getDocs(collection(db, "skills"));
		let skillsArray = [];
		querySnapshot.forEach((doc) =>
			skillsArray.push({
				id: doc.id,
				...doc.data(),
			})
		);
		store.commit("SET_SKILLS", skillsArray);

		return skills.sort((a, b) => {
			if (a.mastery < b.mastery) return -1;
			if (a.mastery > b.mastery) return 1;
			return 0;
		});
	};

	/* ADD SKILL */
	const addSkill = async (skill) => {
		try {
			const newSkill = await addDoc(collection(db, "skills"), skill);
			store.commit("ADD_SKILL", { id: newSkill.id, ...skill });
			console.log(`Skill added: ${newSkill.id}`);
			// console.log(skills);
		} catch (error) {
			alert(error);
		}
	};

	/* UPDATE SKILL */
	const editSkill = async (skill) => {
		await updateDoc(doc(db, "skills", skill.id), skill);
		console.log("updated skill: ", skill.id);
	};

	/* DELETE SKILL */
	const deleteSkill = async (skill) => {
		try {
			await deleteDoc(doc(db, "skills", skill.id));
			store.commit("DELETE_SKILL", skill);
		} catch (error) {
			alert(error);
		}
	};
	return {
		skill,
		skills,
		skillSchema,
		getSkills,
		addSkill,
		editSkill,
		deleteSkill,
	};
}
