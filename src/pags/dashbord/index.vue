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
                class="hover:brightness-95 md:w-14 md:h-32 2xl:w-36 xl:w-28 xl:h-28 lg:w-20 flex items-center justify-center rounded-lg mr-6 sm:w-12"
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
              class="rounded-lg bg-white h-52 hover:brightness-95 drop-shadow-lg"
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
            class="bg-white drop-shadow-xl ml-4 mr-4 p-2 md:w-80 lg:w-auto rounded-lg overflow-hidden"
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
                  class="border-b-2 text-sm hover:brightness-95 bg-white"
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
      <body class="ml-5 p-2 relative overflow-hidden">
        <div class="wrapper mt-3 ml-10">
          <header class="">
            <p class="current-date">February 2022</p>
            <div class="icons">
              <span id="prev" class="material-symbols-rounded"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span id="next" class="material-symbols-rounded"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </header>
          <div class="calendar">
            <ul class="weeks">
              <li class="px-4">Sun</li>
              <li class="px-4">Mon</li>
              <li class="px-4">Tue</li>
              <li class="px-4">Wed</li>
              <li class="px-4">Thu</li>
              <li class="px-4">Fri</li>
              <li class="px-4">Sat</li>
            </ul>
            <ul class="day text-xs">
              <li class="inactive">29</li>
              <li class="inactive">30</li>
              <li class="inactive">31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li class="active">15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li class="inactive">1</li>
              <li class="inactive">2</li>
              <li class="inactive">3</li>
              <li class="inactive">4</li>
              <li class="inactive">5</li>
              <li class="inactive">6</li>
              <li class="inactive">7</li>
              <li class="inactive">8</li>
              <li class="inactive">9</li>
              <li class="inactive">10</li>
              <li class="inactive">11</li>
            </ul>
          </div>
          <div>
            <ul class="bg-white drop-shadow-lg mt-4 rounded-md h-28 w-full">
              <li class="pl-2 pt- font-bold">Notice Board</li>

              <li>
                <div
                  class="p-2 max-w-xl ml-4 bg-white rounded-xl shadow-xl flex items-center space-x-4 hover:brightness-95"
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
            </ul>
          </div>
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
import { render } from "@vue/runtime-dom";

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
        color: ["#0047FF", "#D9D9D9"],
      },
    ],
  });

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

onMounted(() => {
  // renderCalendar();
  //calendar dynamic
  const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

  // getting new date, current year and month
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

  // storing full name of all months in array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      // creating li of previous month last days
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      // creating li of all days of current month
      // adding active class to li if the current day, month, and year matched
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      // creating li of next month first days
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
  };

  prevNextIcon.forEach((icon) => {
    // getting prev and next icons
    icon.addEventListener("click", () => {
      // adding click event on both icons
      // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      if (currMonth < 0 || currMonth > 11) {
        // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear(); // updating current year with new date year
        currMonth = date.getMonth(); // updating current month with new date month
      } else {
        date = new Date(); // pass the current date as date value
      }
      renderCalendar(); // calling renderCalendar function
    });
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

/* calendar Dynamic */

.wrapper {
  width: 600px;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
.wrapper header {
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
}
header .icons {
  display: flex;
}
header .icons span {
  height: 38px;
  width: 38px;
  margin: 0 1px;
  cursor: pointer;
  color: #878787;
  text-align: center;
  line-height: 38px;
  font-size: 1.9rem;
  user-select: none;
  border-radius: 50%;
}
.icons span:last-child {
  margin-right: -10px;
}
header .icons span:hover {
  background: #f2f2f2;
}
header .current-date {
  font-size: 1.45rem;
  font-weight: 500;
}
.calendar {
  padding: 20px;
}
.calendar ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}
.calendar .day {
  margin-bottom: 20px;
}
.calendar li {
  color: #333;
  width: calc(100% / 7);
  font-size: 1.07rem;
}
.calendar .weeks li {
  font-weight: 500;
  cursor: default;
}
.calendar .day li {
  z-index: 1;
  cursor: pointer;
  position: relative;
  margin-top: 30px;
}
.day li.inactive {
  color: #aaa;
}
.day li.active {
  color: #fff;
}
.day li::before {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 40px;
  width: 40px;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.day li.active::before {
  background: #9b59b6;
}
.day li:not(.active):hover::before {
  background: #f2f2f2;
}
</style>
