<template>
  <section class="inline-block bg-fuchsia-100 h-screen w-screen">
    <div class="h-screen w-full flex fixed top-0">
      <section class="h-full w-48">
        <div class="h-full">
          <iconNavbar> </iconNavbar>
        </div>
      </section>

      <section class="h-full w-screen left-44">
        <div>
          <profile></profile>
        </div>
      </section>
      <section class="relative left-80 top-80">helllo</section>
    </div>

    <div>
      <section>
        <div class="pl-28 pt-4 m-20 w-fit h-full">
          <conten></conten>
        </div>
      </section>
    </div>
  </section>

</template>

<script setup>
import iconNavbar from "./components/iconNavbar.vue";
import profile from "./components/profile.vue";
import conten from "./components/conten.vue";
</script>

<style scoped></style>
