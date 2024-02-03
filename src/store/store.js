import Vue from "vue";
import Vuex from "vuex";

import projects from "./mock/projects.json";
import about from "./mock/about.json";
import stack from "./mock/stack.json";
import contact from "./mock/contact.json";

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		projects: projects.data,
		"projects-title": projects.title,
		about: about.data,
		"about-title": about.title,
		stack: stack.data,
		"stack-title": stack.title,
		contacts: contact.data,
		"contact-title": contact.title,
		gdpr: "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
		appInfo:
			"Delve into the world of my professional endeavors, where you'll discover a tapestry of accomplishments, skills, and expertise woven together to create a compelling narrative of my journey. My app serves as a gateway to my professional universe, inviting you to explore my portfolio, engage with me directly, and embark on a path of collaboration that elevates your aspirations.",
		isNavVisible: false,
		navLinks: [
			{ query: "about", id: "About", slug: "about" },
			{ query: "projects", id: "MyWork", slug: "specialty" },
			{ query: "stack", id: "MyStack", slug: "tools" },
			{ query: "contact", id: "Contacts", slug: "contact" },
		],
	},
	mutations: {
		SET_NAV_VISIBILITY(state, value) {
			state.isNavVisible = value;
		},
	},
});

export { store };
