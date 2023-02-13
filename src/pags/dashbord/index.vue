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
                class="hover:brightness-125 md:w-14 md:h-32 2xl:w-36 xl:w-28 xl:h-28 lg:w-20 flex items-center justify-center rounded-lg mr-6 hover:font-bold sm:w-12"
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
              <p class="font-medium absolute xl:block hidden p-2">course</p>
              <li
                class="xl:h-52 xl:w-full lg:h-52 lg:w-full xl:block hidden mt-7 md:w-0 md:h-0"
                id="chartPie"
              ></li>
            </div>
          </ul>
        </section>

        <!-- TableDatabase -->
        <section>
          <div
            class="bg-white drop-shadow-xl ml-4 mr-4 p-2 md:w-80 lg:w-auto rounded-lg"
          >
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
                <tr class="border-b-2 sm:text-sm lg:text-sm 2xl:text-base">
                  <th></th>
                  <th>Students Name</th>
                  <th
                    class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1 2xl:text-base"
                  >
                    Score
                  </th>
                  <th
                    class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1 2xl:text-base"
                  >
                    Summitted
                  </th>
                  <th
                    class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1 2xl:text-base"
                  >
                    Grad
                  </th>
                  <th
                    class="xl:pl-7 2xl:pl-10 lg:pl-2 lg:text-sm md:pl-1 2xl:text-base"
                  >
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
                  <td>
                    <img class="w-10 rounded-full p-1" :src="item.icon" />
                  </td>
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
      <body class="ml-5 p-2 flex flex-col">
        <div class="container mx-auto mt-3">
          <div
            class="wrapper bg-white rounded-lg shadow w-full p-2 drop-shadow-lg"
          >
            <div class="header flex justify-between border-b">
              <span class="text-lg font-bold"> 2020 July </span>
              <div class="buttons">
                <button class="p-1 m-2">
                  <svg
                    width="20px"
                    fill="gray"
                    height="15px"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-left-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                </button>
                <button class="p-1">
                  <svg
                    width="20px"
                    fill="gray"
                    height="15px"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-right-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <table class="w-full">
              <thead>
                <tr>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Mon</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Tue</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Wed</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Thu</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Fri</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Sat</span
                    >
                  </th>
                  <th class="p-2 border-r xl:text-sm text-xs w-28 bg-red-500">
                    <span class="xl:block lg:block md:block sm:block hidden"
                      >Sun</span
                    >
                  </th>
                </tr>
              </thead>

              <!-- edit -->
              <tbody>
                <tr class="text-center">
                  <td
                    class="text-gray-500 border-b-2"
                    v-for="(item, index) in calendar"
                    :key="index"
                  >
                    <div class="flex flex-col">
                      <div
                        class="rounded-full p-2 py-4 w-20 hover:text-white hover:bg-fuchsia-400"
                      >
                        <span>{{ item.numCol1 }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-center">
                  <td
                    class="text-gray-500 border-b-2"
                    v-for="(item, index) in calendar"
                    :key="index"
                  >
                    <div class="flex flex-col">
                      <div
                        class="rounded-full p-2 py-4 w-20 hover:text-white hover:bg-fuchsia-400"
                      >
                        <span>{{ item.numCol2 }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-center">
                  <td
                    class="text-gray-500 border-b-2"
                    v-for="(item, index) in calendar"
                    :key="index"
                  >
                    <div class="flex flex-col">
                      <div
                        class="rounded-full p-2 py-4 w-20 hover:text-white hover:bg-fuchsia-400"
                      >
                        <span>{{ item.numCol3 }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-center">
                  <td
                    class="text-gray-500 border-b-2"
                    v-for="(item, index) in calendar"
                    :key="index"
                  >
                    <div class="flex flex-col">
                      <div
                        class="rounded-full p-2 py-4 w-20 hover:text-white hover:bg-fuchsia-400"
                      >
                        <span>{{ item.numCol4 }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="text-center">
                  <td
                    class="text-gray-500"
                    v-for="(item, index) in calendar"
                    :key="index"
                  >
                    <div class="flex flex-col">
                      <div
                        class="rounded-full p-2 py-4 w-20 hover:text-white hover:bg-fuchsia-400"
                        :class="[item.color]"
                      >
                        <span>{{ item.numCol5 }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <ul class="bg-white drop-shadow-lg mt-2 rounded-md h-full">
            <li class="pl-2 pt-1 font-bold">Notice Board</li>

            <li>
              <div
                class="p-2 max-w-xl ml-4 bg-white rounded-xl shadow-xl flex items-center space-x-4"
              >
                <div class="shrink-0">
                  <img
                    class="h-14 w-14 rounded-xl"
                    src="../../assets/img/green1 (1).jpg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div class="text-base font-medium text-black">
                    Time Extension Notice of Semester Admission
                  </div>
                  <p class="text-slate-500 text-sm">By - Justin bever</p>
                </div>
              </div>
            </li>
            <li>
              <div
                class="p-2 max-w-xl ml-4 bg-white rounded-xl shadow-xl flex items-center space-x-4 mt-2 mb-2"
              >
                <div class="shrink-0">
                  <img
                    class="h-14 w-14 rounded-xl"
                    src="../../assets/img/green1 (1).jpg"
                    alt="ChitChat Logo"
                  />
                </div>
                <div>
                  <div class="text-base font-medium text-black">
                    Notice of special Examinatios of Semester Spring 2021
                  </div>
                  <p class="text-slate-500 text-sm">By - My Friend You</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </body>
    </head>
  </div>
</template>

<script setup>
//std img
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

//total averg
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

//student
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
const calendar = [
  {
    numCol1: 1,
    numCol2: 8,
    numCol3: 15,
    numCol4: 22,
    numCol5: 29,
  },
  {
    numCol1: 2,
    numCol2: 9,
    numCol3: 16,
    numCol4: 23,
    numCol5: 30,
  },
  {
    numCol1: 3,
    numCol2: 10,
    numCol3: 17,
    numCol4: 24,
    numCol5: 1,
    color: ["text-gray-300"],
  },
  {
    numCol1: 4,
    numCol2: 11,
    numCol3: 18,
    numCol4: 25,
    numCol5: 2,
    color: ["text-gray-300"],
  },
  {
    numCol1: 5,
    numCol2: 12,
    numCol3: 19,
    numCol4: 26,
    numCol5: 3,
    color: ["text-gray-300"],
  },
  {
    numCol1: 6,
    numCol2: 13,
    numCol3: 20,
    numCol4: 27,
    numCol5: 4,
    color: ["text-gray-300"],
  },
  {
    numCol1: 7,
    numCol2: 14,
    numCol3: 21,
    numCol4: 28,
    numCol5: 5,
    color: ["text-gray-300"],
  },
];

//hooper
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
