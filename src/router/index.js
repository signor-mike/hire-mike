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
    path: "*",
    name: "Not Found",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
