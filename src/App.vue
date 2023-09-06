<script setup>
import Navbar from "./components/Navbar.vue";

window.addEventListener("load", () => {
  
});
</script>

<template>
  <Navbar />
  <div class="m-auto max-w-3xl w-full">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
