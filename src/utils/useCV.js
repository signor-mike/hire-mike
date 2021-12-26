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

const useCV = () => {
	const cvData = {};
	const collections = [
		"bio",
		"backend",
		"frontend",
		"general-skills",
		"bootcamp",
		"projects",
		"experience",
	];

	/* GET DATA */
	const getData = async () => {
		try {
			for (let i = 0; i < collections.length; i++) {
				const docSnap = await getDoc(
					doc(db, "cv-data", collections[i])
				);
				const data = docSnap.data();
				cvData[collections[i]] = data;
			}
			// store.commit("SET_CV_DATA", cvData);
			return cvData;
		} catch (error) {
			console.log(error);
		}
	};

	/* UPDATE DATA */
	const updateData = async (data) => {
		try {
			for (let i = 0; i < collections.length; i++) {
				const docSnap = await getDoc(
					doc(db, "cv-data", collections[i])
				);
				const tempObj = docSnap.data();
				const checker = isEqual(tempObj, data[collections[i]]);
				if (!checker) {
					console.log(`updating ${collections[i]}`);
					await updateDoc(
						doc(db, "cv-data", collections[i]),
						data[collections[i]]
					);
				} else {
					console.log(`no changes for ${collections[i]}`);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
	return {
		cvData,
		collections,
		getData,
		updateData,
	};
};

export default useCV;
