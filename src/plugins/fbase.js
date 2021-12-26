import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIRESTORE,
	authDomain: "hire-mike.firebaseapp.com",
	// databaseURL: "https://hire-mike.firebaseio.com",
	projectId: "hire-mike",
	storageBucket: "hire-mike.appspot.com",
	// messagingSenderId: "312088735594",
	appId: "1:312088735594:web:3e8a41b0a41ca8c67e7f13",
	measurementId: "G-0KLBPTLTW8",
};

const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";
export const db = getFirestore();

import { getAuth } from "firebase/auth";
export const auth = getAuth();

import { store } from "@/store/store";
auth.onAuthStateChanged((user) => {
	store.dispatch("fetchUser", user);
});

import { getStorage, ref } from "firebase/storage";
export const storage = getStorage();
export const sRef = ref(storage);

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

import Vue from "vue";
import { getAnalytics, logEvent } from "firebase/analytics";
Vue.prototype.$anal = getAnalytics();
Vue.prototype.$anaLogger = logEvent;
