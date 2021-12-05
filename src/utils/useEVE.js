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
		eves = data;
		return eves;
	};

	/* ADD EVE */
	const addEve = async (collectionName, eve) => {
		console.log("collection to add: ", collectionName);
		console.log("eve to add: ", eve);
		try {
			const newEve = await addDoc(collection(db, collectionName), eve);
			// eves.push({ id: newEve.id, ...newEve.data() });
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
