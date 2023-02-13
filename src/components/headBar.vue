<template>
  <div
    class="bg-white w-full h-20 flex items-center justify-between p-6 drop-shadow-md"
  >
    <section>
      <div>
        <button @click="nameAlt">
          <h1>Hello #{{ fullName() }}</h1>

          <!-- Event Input (show) -->
          <!-- <h1>NickName :{{ Nname }}</h1> -->
        </button>

        <!-- Event Input (write) -->
        <!-- <h2>Push Your NickName :<input type="text" v-on:input="NnamePut"></h2> -->

        <!-- evenClick -->
        <!-- <h3>{{ this.age }}</h3> -->

        <!-- Event argument -->
        <!-- <button @click="increment(10)">LeftClick add 

          <p @click.right="decrement(15)">RightClick down</p>
        </button> -->

        <!-- <button @click="decrement()"><p>dell</p></button> -->

        <!-- object -->
        <!-- <ul>
          <p>Status</p>
          <li>ເພດ :{{ status.gender }}</li>
          <li>ນໍ້າໜັກ :{{ status.weight }}</li>
          <li>ລວງສູງ :{{ status.hight }}</li>
          <li>ສຸຂະພາບ :{{ status.healty }}</li>
        </ul> -->

        <!-- Array -->
        <!-- <h2>{{ hobby[] }}</h2> -->
      </div>
    </section>

    <section class="drop-shadow-2xl bg-gray-200 w-52 h-10 rounded-full">
      <label
        for="default-search"
        class="text-sm font-medium sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="p-2 text-xs rounded-full bg- bg-gray-200 text-black m-1"
          placeholder="Search..."
        />
        <button
          type="submit"
          class="absolute p-1 m-1.5 left-40 bg-violet-500 rounded-full hover:bg-violet-400"
        >
          <svg
            class="w-5 h-5 text-gray-600"
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
      <div>
        <ul>
          <li
            class="justify-between w-full bg-white rounded-full drop-shadow-2xl flex p-2 text-sm text-gray-500 font-semibold hover:bg-violet-500 hover:text-white"
          >
            <img
              class="h-10 w-10 rounded-full cursor-pointer hover:brightness-75"
              src="../assets/img/Screenshot 2023-01-25 135650.png"
              alt="Profil"
            />

            <div class="pl-2">
              <ul>
                {{
                  fName
                }}
                {{
                  lName
                }}
              </ul>
              <p class="text-xs">{{ gMail }}</p>
            </div>

            <ul
              class="bg-gray-300 rounded-full cursor-pointer hover:bg-white h-8 w-8"
            >
              <img
                class="w-6 h-6 m-1"
                src="../assets/icon/appointment-reminders.png"
                alt=""
              />
            </ul>

            <ul
              class="bg-gray-300 rounded-full cursor-pointer hover:bg-white h-8 w-8"
            >
              <img
                class="w-6 h-6 m-1"
                src="../assets/icon/settings.png"
                alt=""
              />
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fName: "Pro",
      lName: "Include",
      Nname: "",
      age: 20,
      gMail: "ProInclude@gmail.com",

      // Array
      hobby: ["Playingame", "listenMusic"],

      // Object
      status: { gender: "ຊາຍ", weight: 70, hight: 180, healty: false },
    };
  },
  methods: {
    fullName() {
      return this.fName + this.lName;
    },

    nameAlt() {
      alert(this.fName + this.lName);
    },

    // Event argument
    increment(value) {
      this.age += value;
    },

    //Event Click
    decrement(value) {
      this.age -= value;
    },

    //Event Input
    NnamePut(event) {
      this.Nname = event.target.value;
    },
  },
};


  
</script>
