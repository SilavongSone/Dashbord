<template>
  <div class="bg-white w-full h-20 flex items-center justify-between p-6">
    <section>
      <div class="left-0">Hello Pro!</div>
    </section>

    <section>
      <label
        for="default-search"
        class="text-sm font-medium sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="p-2 text-sm rounded-full bg- bg-gray-200 text-black"
          placeholder="Search..."
        />
        <button
          type="submit"
          class="absolute p-2 left-36 bg-violet-500 rounded-full hover:bg-violet-400"
        >
          <svg
            class="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </section>

    <section>
      <div
        class="justify-between w-64 bg-white rounded-full shadow-lg space-y-2 flex p-2 text-sm text-gray-500 font-semibold hover:bg-violet-500 hover:text-white"
      >
        <img
          class="h-10 rounded-full cursor-pointer"
          src="../assets/img/Screenshot 2023-01-25 135650.png"
          alt="Profil"
        />
        <p class="p-0">#IncludePro</p>
        <ul
          class="bg-gray-300 rounded-full w-8 h-8 cursor-pointer hover:bg-violet-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 m-1 hover:brightness-200"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clip-rule="evenodd"
            />
          </svg>
        </ul>
        <ul
          class="bg-gray-300 rounded-full w-8 h-8 cursor-pointer hover:bg-violet-300"
        >
          <img
            class="w-6 h-6 m-1 hover:brightness-200"
            src="../assets/icon/cogwheel.png"
            alt=""
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script></script>
