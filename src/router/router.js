import { createRouter, createWebHashHistory } from "vue-router";
import Conten from "../components/conten.vue";
import Dashbord from "../pags/dashbord/index.vue";
import Course from "../pags/course/index.vue";
import Teacher from "../pags/teacher/index.vue";

const routes = [
  { path: "/", component: Dashbord },
  { path: "/course", component: Course },
  { path: "/teacher", component: Teacher },
];

const router =createRouter({

  history:createWebHashHistory(),
  routes,
});

export default router;
