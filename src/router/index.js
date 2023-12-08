import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

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
        component: () => import("@/views/MainView"),
    },
    {
        path: "*",
        name: "Not Found",
        component: () => import("@/views/NotFound"),
    },
];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
