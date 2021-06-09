import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/busines",
    name: "busines",
    component: () => import("@/views/BusinesProfile.vue"),
    meta: {
      layout: "busines",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
