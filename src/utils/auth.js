import { auth } from "@/plugins/fbase.js";
import { store } from "@/store/store";
import {
	// createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

export default function authService() {
	// const createUser = async (email, password) => {
	// 	console.log(auth);
	// 	try {
	// 		const user = await createUserWithEmailAndPassword(
	// 			auth,
	// 			email,
	// 			password
	// 		);
	// 		return user;
	// 	} catch (error) {
	// 		console.log(`${error.code} | ${error.message}`);
	// 	}
	// };

	const signIn = async (email, password) => {
		const loggedUser = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = loggedUser.user;
		store.commit("SET_CURRENT_USER", user);
		return user;
	};
	const authCheck = async () => {
		try {
			await auth.onAuthStateChanged((user) => {
				store.dispatch("fetchUser", user);
				return user;
			});
		} catch (error) {
			console.log(`${error.code} | ${error.message}`);
		}
	};

	const signOut = async () => {
		await auth.signOut();
	};

	return {
		// createUser,
		signIn,
		authCheck,
		signOut,
	};
}
