import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		gdpr: "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
		appInfo:
			"Skilled frontend developer with expertise in JavaScript, TypeScript, and modern reactive libraries like React.js and Vue.js. Experience building mobile applications with React Native and Ionic. Utilizes Tailwind CSS, plain CSS (including preprocessors), and component libraries to optimize development. Backend proficiency in Node.js and Express.js. Maintains version control with Git (Github/Gitlab) and implements automated testing with Cypress, Detox, and Vitest. Works effectively on Ubuntu Linux, leveraging GCP and Firebase for cloud-based solutions.",
		isNavVisible: false,
	},
	mutations: {
		SET_NAV_VISIBILITY(state, value) {
			state.isNavVisible = value;
		},
	},
});

export { store };
