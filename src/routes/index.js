import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";


const routes = [
  { path: "/", component: Register },
  { path: "/login", component: () => import('../views/Login.vue') },
  //   lase louding
  { path: "/docs", component: () => import("../views/Docs.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
