import { db } from "@/plugins/fbase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function useSkills() {
	let skill = {};
	let skills = [];
	const skillSchema = {
		title: "skill itself",
		type: "hard/soft",
		mastery: "a-high/b-medium/c-medium/d-medium/f-low",
	};

	/* GET SKILLS */
	const getSkills = async () => {
		const querySnapshot = await getDocs(collection(db, "skills"));
		querySnapshot.forEach((doc) => skills.push(doc.data()));

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
			alert(`Skill added: ${newSkill.id}`);
		} catch (error) {
			alert(error);
		}
	};
	return {
		skill,
		skills,
		getSkills,
		addSkill,
		skillSchema,
	};
}
