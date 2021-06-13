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
  {
    path: "/busines-setings",
    name: "busines-setings",
    component: () => import("@/views/BusinesSetings.vue"),
    meta: {
      layout: "busines-setings",
    },
    redirect: "/busines-setings/main-info",
    children: [
      {
        path: "main-info",
        component: () => import("@/components/businesSetings/Main.vue"),
        meta: {
          layout: "main",
        },
      },
      {
        path: "contact-info",
        component: () => import("@/components/businesSetings/Contact.vue"),
        meta: {
          layout: "main",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
