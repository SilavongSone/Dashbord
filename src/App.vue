<template>
  <div class="h-screen w-full flex relative">
    <!-- Navbar -->
    <section class="h-full w-52 bg-slate-200">
      <div>
        <iconNavbar> </iconNavbar>
      </div>
    </section>
    <!-- View -->
    <section class="h-full w-full bg-gray-50 flex flex-col">
      <!-- App bar -->
      <nav class="h-20 w-full bg-white">
        <div>
          <headBar></headBar>
        </div>
      </nav>
      <!-- Router view -->
      <div class="h-full overflow-auto">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script setup>
import iconNavbar from "./components/iconNavbar.vue";
import headBar from "./components/headBar.vue";
</script>

<style scoped></style>
