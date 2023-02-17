import { createRouter, createWebHashHistory } from "vue-router";
import Dashbord from "../pags/dashbord/index.vue";
import Course from "../pags/course/index.vue";
import Teacher from "../pags/teacher/index.vue";
import Students from "../pags/students/index.vue";
import TimeTable from "../pags/timeTable/index.vue";

const routes = [
  { path: "/", component: Dashbord },
  { path: "/course", component: Course },
  { path: "/teacher", component: Teacher },
  { path: "/students", component: Students },
  { path: "/timeTable", component: TimeTable },
];

const router =createRouter({

  history:createWebHashHistory(),
  routes,
});

export default router;
