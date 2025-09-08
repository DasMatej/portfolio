<template>
  <div class="d-flex flex-wrap">
    <div v-for="value in info" class="mx-2 my-1">
      <div class="mt-circle">{{ value.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const info = [
  { text: "Vue.js" },
  {
    text: `TypeScript`,
  },
  { text: "ASP.NET" },
  { text: "C#" },
  {
    text: `SQL`,
  },
  { text: "Python" },
];
</script>

<style scoped></style>
