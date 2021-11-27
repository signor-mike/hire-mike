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
		// meta: {
		// 	authRequired: true,
		// },
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

export default router;
