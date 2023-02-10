<template>
  <div>
    <head class="grid grid-cols-2">
      <div>
        <!-- Total -->
        <section class="flex m-3 w-full pl-1">
          <article
            class="cursor-pointer"
            v-for="(item, index) in average"
            :key="index"
          >
            <router-link :to="item.path">
              <li
                class="hover:brightness-125 md:w-14 md:h-32 2xl:w-36 xl:w-28 xl:h-28 lg:w-20 flex items-center justify-center rounded-lg mr-6 hover:font-medium sm:w-12"
                :class="[item.color]"
              >
                <div class="flex flex-col justify-center items-center text-sm">
                  <img class="lg:w-14 sm:w-10" :src="item.icon" />
                  <p class="text-center">{{ item.label }}</p>
                  <p class="text-center">{{ item.label1 }}</p>
                </div>
              </li>
            </router-link>
          </article>
        </section>

        <!-- Echarts -->
        <section>
          <ul class="m-3 p-1 flex">
            <div
              class="rounded-lg bg-white h-52 hover:brightness-90 drop-shadow-lg"
            >
              <p
                class="font-medium absolute top-2 left-2 md:text-base hidden md:block"
              >
                Statistics
              </p>
              <li
                class="lg:h-52 lg:w-96 hidden md:w-80 md:h-52 md:block py-1"
                id="chartBar"
              ></li>
            </div>

            <div
              class="rounded-lg bg-white xl:h-52 xl:w-52 xl:block md:w-0 hidden hover:brightness-90 drop-shadow-lg ml-10"
            >
              <p class="font-medium absolute xl:block hidden">course</p>
              <li
                class="xl:h-52 xl:w-full lg:h-52 lg:w-full xl:block hidden mt-7 md:w-0 md:h-0"
                id="chartPie"
              ></li>
            </div>
          </ul>
        </section>

        <!-- TableDatabase -->
        <section>
          <div class="bg-white drop-shadow-xl ml-4 p-2 md:w-80 lg:w-full">
            <ul class="flex justify-between">
              <li class="font-semibold">Database</li>
              <li>
                <button>Teacher</button>
                <button>Students</button>
                <button>Staff</button>
              </li>
            </ul>

            <table class="table-auto mt-1">
              <thead>
                <tr class="border-b-2 sm:text-sm lg:text-sm">
                  <th></th>
                  <th>Students Name</th>
                  <th class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1">
                    Score
                  </th>
                  <th class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1">
                    Summitted
                  </th>
                  <th class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1">
                    Grad
                  </th>
                  <th class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1">
                    Pass/Fail
                  </th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                <tr
                  v-for="(item, index) in Students"
                  :key="index"
                  class="border-b-2 text-sm"
                >
                  <td><img class="w-10 rounded-full" :src="item.icon" /></td>
                  <td class="text-xs">{{ item.fname }} {{ item.lname }}</td>
                  <td class="xl:pl-7 2xl:pl-10 lg:pl-2 text-xs md:pl-1">
                    {{ item.Score }}
                  </td>
                  <td class="xl:pl-7 2xl:pl-10 lg:pl-2 text-xs md:pl-1">
                    {{ item.Summit }}
                  </td>
                  <td class="xl:pl-7 2xl:pl-10 lg:pl-2 text-xs md:pl-1">
                    {{ item.Grad }}
                  </td>
                  <td class="xl:pl-7 2xl:pl-10 lg:pl-2 text-xs md:pl-1">
                    {{ item.Pass }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- Calendar -->
      <div class="ml-10 relative w-full">
        <ul>
          <li
            class="bg-white h-full rounded-lg drop-shadow-lg mt-3 pb-2 w-full"
          >
            <main>
              <div class="calendar pl-4 pt-1 ">
                <div class="month-indicator justify-center flex">
                  <ul>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-10 bg-fuchsia-500 rounded-full text-white cursor-pointer hover:bg-white hover:text-fuchsia-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </ul>
                  <time datetime="2019-02" class="ml-10 mr-10 rounded-full"> February 2023 </time>
                  <ul>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 bg-fuchsia-500 rounded-full text-white cursor-pointer hover:bg-white hover:text-fuchsia-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </ul>
                </div>
                <div class="day-of-week">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>
                <div class="date-grid">
                  <li>
                    <time datetime="2019-02-01"></time>
                  </li>
                  <li>
                    <time datetime="2019-02-01"></time>
                  </li>
                  <li>
                    <time datetime="2019-02-01">1</time>
                  </li>
                  <li>
                    <time datetime="2019-02-02">2</time>
                  </li>
                  <li>
                    <time datetime="2019-02-03">3</time>
                  </li>
                  <li>
                    <time datetime="2019-02-04">4</time>
                  </li>
                  <li>
                    <time datetime="2019-02-05">5</time>
                  </li>
                  <li>
                    <time datetime="2019-02-06">6</time>
                  </li>
                  <li>
                    <time datetime="2019-02-07">7</time>
                  </li>
                  <li>
                    <time datetime="2019-02-08">8</time>
                  </li>
                  <li>
                    <time datetime="2019-02-09">9</time>
                  </li>
                  <li>
                    <time datetime="2019-02-10">10</time>
                  </li>
                  <li>
                    <time datetime="2019-02-11">11</time>
                  </li>
                  <li>
                    <time datetime="2019-02-12">12</time>
                  </li>
                  <li>
                    <time datetime="2019-02-13">13</time>
                  </li>
                  <li>
                    <time datetime="2019-02-14">14</time>
                  </li>
                  <li>
                    <time datetime="2019-02-15">15</time>
                  </li>
                  <li>
                    <time datetime="2019-02-16">16</time>
                  </li>
                  <li>
                    <time datetime="2019-02-17">17</time>
                  </li>
                  <li>
                    <time datetime="2019-02-18">18</time>
                  </li>
                  <li>
                    <time datetime="2019-02-19">19</time>
                  </li>
                  <li>
                    <time datetime="2019-02-20">20</time>
                  </li>
                  <li>
                    <time datetime="2019-02-21">21</time>
                  </li>
                  <li>
                    <time datetime="2019-02-22">22</time>
                  </li>
                  <li>
                    <time datetime="2019-02-23">23</time>
                  </li>
                  <li>
                    <time datetime="2019-02-24">24</time>
                  </li>
                  <li>
                    <time datetime="2019-02-25">25</time>
                  </li>
                  <li>
                    <time datetime="2019-02-26">26</time>
                  </li>
                  <li>
                    <time datetime="2019-02-27">27</time>
                  </li>
                  <li>
                    <time datetime="2019-02-28">28</time>
                  </li>
                </div>
              </div>
            </main>
          </li>
        </ul>
      </div>
    </head>
  </div>
</template>

<script setup>
//std
import Anousone from "../../assets/img/Anousone.jpg";
import Owen from "../../assets/img/IMG_2586.jpg";
import Noel from "../../assets/img/nut.png";
import Pin from "../../assets/img/Untitled-1.png";

//totalAverage
import averageStudents from "../../assets/icon/student-male.png";
import averageTeacher from "../../assets/icon/school-director.png";
import averageCourese from "../../assets/icon/course-assign.png";
import averageRoom from "../../assets/icon/room (1).png";
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";
onMounted(() => {
  var myChart = echarts.init(document.getElementById("chartPie"));
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
        name: "",
        fontSize: "10",
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
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 75, name: "In Prosess" },
          { value: 25, name: "Prosess" },
        ],
        color: ["#0047FF", "#E9E7F8"],
      },
    ],
  });
});
onMounted(() => {
  var myChart = echarts.init(document.getElementById("chartBar"));
  myChart.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "40%",
        data: [
          100,
          200,
          300,
          {
            value: 800,
            itemStyle: {
              color: "#DB00FF",
            },
          },
          400,
          500,
          600,
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
    label: "Total Course",
    label1: "20",
    path: "/",
    icon: averageCourese,
    color: "bg-blue-300",
  },
  {
    label: "Total Room",
    label1: "200",
    path: "/",
    icon: averageRoom,
    color: "bg-orange-200",
  },
];
const Students = [
  {
    icon: Anousone,
    fname: "Anousone",
    lname: "Silavong",
    Score: "100/100",
    Summit: "25/12/2022-8AM",
    Grad: "S",
    Pass: "Pass",
  },
  {
    icon: Owen,
    fname: "Owen",
    lname: "MaoLaoo",
    Score: "10/100",
    Summit: "25/12/2022-8AM",
    Grad: "F",
    Pass: "Fail",
  },
  {
    icon: Noel,
    fname: "Noel",
    lname: "Wasun",
    Score: "60/100",
    Summit: "25/12/2022-8AM",
    Grad: "C",
    Pass: "Pass",
  },
  {
    icon: Pin,
    fname: "Pin ",
    lname: "Varorant",
    Score: "50/100",
    Summit: "25/12/2022-8AM",
    Grad: "C",
    Pass: "Pass",
  },
];

//calendar
</script>

<style scoped>
button {
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid rgb(139 92 246);
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: rgb(139 92 246);
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
}

button:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: rgb(139 92 246);
  z-index: -1;
}

button:hover,
button:focus {
  color: white;
}

button:hover:before,
button:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

button:active {
  transform: scale(0.9);
}

.day-of-week,
.date-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
