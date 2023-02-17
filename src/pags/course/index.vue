<template>
  <div>

    <section class="flex justify-between">
      <div class="flex bg-white w-full fixed shadow-md overflow-hidden">
        <ul
          class="flex p-4 ml-4 mt-3 items-center text-sm rounded-xl h-10 bg-white shadow-md text-violet-500 hover:text-white hover:bg-violet-500 hover:cursor-pointer overflow-hidden"
          v-for="(item, index) in moreCorses"
          :key="index"
        >
          <img class="w-8 mr-2" :src="item.icon" />
          {{
            item.moreCorse
          }}
        </ul>

        <ul
          class="flex bg-white shadow-md m-3 mr-10 rounded-lg h-10 w-24 items-center justify-center hover:bg-violet-500 cursor-pointer hover:text-white overflow-hidden text-violet-500 ml-96"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <p>Record</p>
        </ul>
      </div>
      <div></div>
    </section>

    <!-- body -->
    <section class="box-border h-full p-4">
      <br /><br />
      <div class="bg-white w-full h-full flex">
        <ul class="overflow-auto flex flex-col">
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/7MeQxBqchNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>

          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/61mkx_OV61s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/juKd26qkNAw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
        </ul>
        <ul class="overflow-auto flex flex-col">
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/7MeQxBqchNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/61mkx_OV61s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/juKd26qkNAw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
        </ul>
        <ul class="overflow-auto flex flex-col">
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/7MeQxBqchNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/61mkx_OV61s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/juKd26qkNAw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
        </ul>
        <ul class="overflow-auto flex flex-col">
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/7MeQxBqchNU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/61mkx_OV61s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
          <li
            class="m-4 bg-white overflow-hidden w-72 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer"
          >
            <iframe
              width="300"
              height="150"
              src="https://www.youtube.com/embed/juKd26qkNAw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import adobePR from "../../assets/icon/PR.png";
import adobePS from "../../assets/icon/PS.png";
import eN from "../../assets/icon/english.png";
import html from "../../assets/icon/HTML.png";
import more from "../../assets/icon/More.png";

const moreCorses = [
  {
    icon: adobePR,
    moreCorse: "AdoboPR",
  },
  {
    icon: adobePS,
    moreCorse: "AdoboPS",
  },
  {
    icon: eN,
    moreCorse: "English",
  },
  {
    icon: html,
    moreCorse: "Basic HTML",
  },
  {
    icon: more,
    moreCorse: "More",
  },
];
</script>
