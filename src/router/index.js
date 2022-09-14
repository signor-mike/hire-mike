import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainView from "../views/MainView.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/view",
		name: "main view",
		component: MainView,
	},
	{
		path: "/export",
		name: "exportPdf",
		component: () => import("../views/ExportPdf.vue"),
	},
	{
		path: "/auth",
		name: "auth",
		component: () => import("../views/Authorization.vue"),
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
		path: "*",
		name: "Not Found",
		component: NotFound,
	},
];
const router = new VueRouter({
	mode: "history",
	routes,
});
import { store } from "@/store/store";

router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => record.meta.authRequired)) {
		const { user } = store.state;
		const { currentUser } = store.state;
		const status =
			user.data && currentUser
				? user.data.email === currentUser.email
				: false;
		if (status) {
			next();
		} else {
			alert("You must be logged in to see this page");
			next({
				path: "/auth",
			});
		}
	} else {
		next();
	}
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
