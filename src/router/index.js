import Vue from "vue";
import VueRouter from "vue-router";
// import Dashboard from "../views/Dashboard.vue";
// import Projects from "../views/Projects.vue";
// import Team from "../views/Team.vue";
// import landingPage from "../views/LandingPage.vue";
// import learningVuex from "../views/Vuex-learning.vue";
import mikeCV from "../views/CvMike.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "My CV",
    component: mikeCV,
  },
  // {
  //   path: "/projects",
  //   name: "{Projects}",
  //   component: Projects,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: "/team",
  //   name: "team",
  //   component: Team,
  // },
  // {
  //   path: "/landing-page",
  //   name: "landingPage",
  //   component: landingPage,
  // },
  // {
  //   path: "/vuex-learning",
  //   name: "learningVuex",
  //   component: learningVuex,
  // },
  {
    path: "/cv-mike",
    name: "My CV",
    component: mikeCV,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
