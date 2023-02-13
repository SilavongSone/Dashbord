<template>
  <div>
    <section class="bg-white w-full h-screen text-xs drop-shadow-2xl">
      <div class="flex items-center justify-center">
        <router-link to="/"
          ><img class="p-2 w-20" src="../assets/logo/logo.png" alt="logo"
        /></router-link>
      </div>
      <ul class="w-36 text-gray-500 p-2">
        <div v-for="(item, index) in navBarItem" :key="index">
          <router-link :to="item.path"
            ><li
              class="w-40 items-center flex before:hover:bg-black cursor-pointer hover:bg-violet-600 hover:text-white rounded-md"
            >
              <img class="w-12 p-2" :src="item.icon" />
              {{ item.label }}
            </li></router-link
          >
        </div>
      </ul>
    </section>
  </div>
</template>

<script setup>
import dashboardIcon from "../assets/icon/dashboard.png";
import CourseIcon from "../assets/icon/online-course.png";
import TeacherIcon from "../assets/icon/teacher.png";
import TimeTableIcon from "../assets/icon/timetable.png";
import ExamIcon from "../assets/icon/exam.png";
import MessageIcon from "../assets/icon/messenger.png";
import FriendsIcon from "../assets/icon/friendship.png";
import Students from "../assets/icon/student.png";

const navBarItem = [
  {
    label: "Dashboard",
    path: "/",
    icon: dashboardIcon,
  },
  {
    label: "Course",
    path: "/course",
    icon: CourseIcon,
  },
  {
    label: "Students",
    path: "/course",
    icon: Students,
  },
  {
    label: "Teacher",
    path: "/teacher",
    icon: TeacherIcon,
  },
  {
    label: "TimeTable",
    path: "/course",
    icon: TimeTableIcon,
  },
  {
    label: "Exam",
    path: "/course",
    icon: ExamIcon,
  },
  {
    label: "Message",
    path: "/course",
    icon: MessageIcon,
  },
  {
    label: "Friends",
    path: "/course",
    icon: FriendsIcon,
  },
];
</script>

<style scoped>
/* === removing default button style ===*/
.button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
}

/* button styling */
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37ff8b;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color));
}
</style>
