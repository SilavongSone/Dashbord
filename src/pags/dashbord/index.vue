<template>
  <div>
    <!-- section 1 -->
    <section>
      <div>
        <ul class="flex m-3 pl-1">
          <article
            class="cursor-pointer"
            v-for="(item, index) in average"
            :key="index"
          >
            <router-link :to="item.path">
              <li
                class="hover:brightness-125 w-40 h-32 flex items-center justify-center rounded-lg mr-3 ml-0 hover:font-medium"
                :class="[item.color]"
              >
                <div class="flex flex-col justify-center items-center">
                  <img class="w-14" :src="item.icon" />
                  <p>{{ item.label }}</p>
                  <p>{{ item.label1 }}</p>
                </div>
              </li>
            </router-link>
          </article>
        </ul>
      </div>
    </section>
    <!-- section 2 -->
    <!-- Statistics & Courses Activltes -->
    <section>
      <div>
        <ul class="flex m-3 p-1">
          <!-- Echarts -->
          <div
            class="rounded-lg bg-white h-60 hover:brightness-90 drop-shadow-lg"
          >
            <p class="font-medium absolute top-2 left-2">Statistics</p>
            <li class="flex h-60 w-96 py-1" id="main"></li>
          </div>
          <div
            class="rounded-lg bg-white h-60 hover:brightness-90 drop-shadow-lg ml-12"
          >
            <p class="relative top-2 left-2 font-medium">Course-Activites</p>
            <li class="w-60 h-60 flex py-1" id="Course-Activ"></li>
          </div>
        </ul>
      </div>
    </section>

    <!-- section 3 -->
    <section>
      <div>
        <ul>
          <li class="bg-pink-600 w-36 h-36">how</li>
        </ul>
        <ul>
          <li>mvvmmnmnmc</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import averageStudents from "../../assets/icon/student-male.png";
import averageTeacher from "../../assets/icon/school-director.png";
import averageCourese from "../../assets/icon/course-assign.png";
import averageRoom from "../../assets/icon/room (1).png";
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
onMounted(() => {
  var myChart = echarts.init(document.getElementById("main"));
  myChart.setOption({
    xAxis: {
      type: "category",
      data: [2022, 2023, 2024, 2025, 2026, 2027],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          {
            value: 200,
            itemStyle: {
              color: "#DB00FF",
            },
          },
          300,
          400,
          500,
          800,
          600,
        ],
        type: "bar",
      },
    ],
  });
});

onMounted(() => {
  var myChart = echarts.init(document.getElementById("Course-Activ"));
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 75,
            itemStyle: {
              color: "#0047FF",
            },
            name: "Prosess",
          },
          {
            value: 25,
            itemStyle: {
              color: "#D9D9D9",
            },
            name: "In Prosess",
          },
        ],
      },
    ],
  });
});

const average = [
  {
    label: "Total Students",
    label1: "1120",
    path: "/",
    icon: averageStudents,
    color: "bg-purple-300",
  },
  {
    label: "Total Teacher",
    label1: "50",
    path: "/",
    icon: averageTeacher,
    color: "bg-red-300",
  },
  {
    label: "TotalCourse",
    label1: "20",
    path: "/",
    icon: averageCourese,
    color: "bg-blue-300",
  },
  {
    label: "TotalRoom",
    label1: "500",
    path: "/",
    icon: averageRoom,
    color: "bg-orange-200",
  },
];


</script>
