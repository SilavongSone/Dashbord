<template>
  <div>
    <section class="bg-white w-full h-screen text-xs drop-shadow-2xl">
      <div class="flex items-center justify-center">
        <img class="p-2 w-20" src="../assets/logo/logo.png" alt="logo" />
      </div>
      <ul class="w-36 text-gray-500 p-2">
        <div v-for="(item, index) in navBarItem" :key="index">
          <router-link :to="item.path"
            ><li
              class="w-40 items-center flex cursor-pointer hover:bg-violet-600 hover:text-white rounded-md"
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
