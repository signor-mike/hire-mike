import { db } from "@/plugins/fbase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const addUser = async (first, last, born) => {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			first,
			last,
			born,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const getUsers = async () => {
	try {
		let users = [];
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach((doc) => {
			users.push(doc.data());
		});
		return users;
	} catch (error) {
		console.error(error);
	}
};
