import { db } from "@/plugins/fbase.js";
import {
	collection,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { store } from "@/store/store";

export default function useTechs() {
	let tech = {};
	let techs = store.state.techs;
	const techSchema = {
		name: "library/framework",
		image: "logo",
	};

	/* GET TECHS */
	const getTechs = async () => {
		const querySnapshot = await getDocs(collection(db, "techs"));
		let techsArray = [];
		querySnapshot.forEach((doc) =>
			techsArray.push({
				id: doc.id,
				...doc.data(),
			})
		);
		store.commit("SET_TECHS", techsArray);

		return techs.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
	};

	/* ADD TECH */
	const addTech = async (tech) => {
		try {
			const newTech = await addDoc(collection(db, "techs"), tech);
			store.commit("ADD_TECH", { id: newTech.id, ...tech });
			console.log(`Tech added: ${newTech.id}`);
		} catch (error) {
			alert(error);
		}
	};

	/* DELETE TECH */
	const deleteTech = async (tech) => {
		try {
			await deleteDoc(doc(db, "techs", tech.id));
			store.commit("DELETE_TECH", tech);
		} catch (error) {
			alert(error);
		}
	};
	return {
		tech,
		techs,
		techSchema,
		getTechs,
		addTech,
		deleteTech,
	};
}
