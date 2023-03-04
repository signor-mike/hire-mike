import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIRESTORE,
	authDomain: "hire-mike.firebaseapp.com",
	databaseURL:
		"https://hire-mike-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "hire-mike",
	storageBucket: "hire-mike.appspot.com",
	messagingSenderId: "312088735594",
	appId: "1:312088735594:web:3e8a41b0a41ca8c67e7f13",
	measurementId: "G-0KLBPTLTW8",
};

const app = initializeApp(firebaseConfig);

const {
	initializeAppCheck,
	ReCaptchaV3Provider,
} = require("firebase/app-check");
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
export const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider(process.env.VUE_APP_CAPTCHA),

	// Optional argument. If true, the SDK automatically refreshes App Check
	// tokens as needed.
	isTokenAutoRefreshEnabled: true,
});
