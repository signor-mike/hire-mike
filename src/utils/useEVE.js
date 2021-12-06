import { db } from "@/plugins/fbase.js";
import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { dateConverter } from "@/utils/dateConverter";

export default function useEVE() {
	let eve = {};
	let eves = [];
	const eveSchema = {
		name: "",
		date: [],
		url: "",
		role: "",
		things: [],
	};

	/* GET EVES */
	const getEves = async (collectionName) => {
		const querySnapshot = await getDocs(collection(db, collectionName));
		const data = [];
		querySnapshot.forEach((doc) => {
			data.push({ id: doc.id, ...doc.data() });
		});
		data.sort((a, b) => {
			return dateConverter(b.date[1]) - dateConverter(a.date[1]);
		});
		eves = data;
		return eves;
	};

	/* ADD EVE */
	const addEve = async (collectionName, eve) => {
		console.log("collection to add: ", collectionName);
		console.log("eve to add: ", eve);
		try {
			const newEve = await addDoc(collection(db, collectionName), eve);
			return newEve;
		} catch (error) {
			console.log(error);
		}
	};

	/* UPDATE EVE */
	const editEve = async (collectionName, eve) => {
		try {
			await updateDoc(doc(db, collectionName, eve.id), eve);
			console.log(`updated ${collectionName}: ${eve.id}`);
		} catch (error) {
			console.log(error);
		}
	};

	/* DELETE EVE */
	const deleteEve = async (collectionName, eve) => {
		try {
			await deleteDoc(doc(db, collectionName, eve.id));
			console.log(`deleted ${collectionName}: ${eve.id}`);
		} catch (error) {
			console.log(error);
		}
	};
	return {
		eve,
		eves,
		eveSchema,
		getEves,
		addEve,
		editEve,
		deleteEve,
	};
}
