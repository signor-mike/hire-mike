import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import printing from "../views/Print.vue";
import feedback from "../views/Feedback.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/cv-mike",
		name: "My CV",
		component: () => import("../views/MikeCV.vue"),
	},
	{
		path: "/portfolio",
		name: "Portfolio",
		component: () => import("../views/Portfolio.vue"),
	},
	{
		path: "/print",
		name: "print",
		component: printing,
	},
	{
		path: "/contact",
		name: "contact me",
		component: feedback,
	},
	{
		path: "/db",
		name: "db",
		component: () => import("../views/db.vue"),
		meta: {
			authRequired: true,
		},
	},
	{
		path: "/auth",
		name: "auth",
		component: () => import("../views/Authorization.vue"),
	},
	{
		path: "*",
		name: "Not Found",
		component: NotFound,
	},
];
const router = new VueRouter({
	mode: "history",
	routes,
});

// import { auth } from "@/plugins/fbase.js";
// router.beforeEach(async (to, from, next) => {
// 	if (to.matched.some((record) => record.meta.authRequired)) {
// 		const status = await auth.currentUser;
// 		console.log("status in router: ", status);
// 		if (status) {
// 			next();
// 		} else {
// 			alert("You must be logged in to see this page");
// 			next({
// 				path: "/auth",
// 			});
// 		}
// 	} else {
// 		next();
// 	}
// });

// import authService from "@/utils/auth.js";
// const { authCheck } = authService();

// // import { store } from "@/store/store";

// router.beforeEach(async (to, from, next) => {
// 	if (to.matched.some(async (record) => record.meta.authRequired)) {
// 		const currentUser = await authCheck();
// 		if (currentUser) {
// 			console.log("currentUser in middleware: ", currentUser);
// 			next();
// 		} else {
// 			console.log("You must be logged in to see this page", currentUser);
// 			router.push("/auth");
// 		}
// 		// await authCheck()
// 		// 	.then((currentUser) => {
// 		// 		if (currentUser) {
// 		// 			console.log("currentUser: ", currentUser);
// 		// 			next();
// 		// 		} else {
// 		// 			console.log(
// 		// 				"You must be logged in to see this page",
// 		// 				currentUser
// 		// 			);
// 		// 			next({
// 		// 				path: "/auth",
// 		// 			});
// 		// 		}
// 		// 	})
// 		// 	.catch((error) => {
// 		// 		console.log(`${error.code} | ${error.message}`);
// 		// 	});
// 		// console.log(currentUser);
// 	} else {
// 		next();
// 	}
// });

export default router;
