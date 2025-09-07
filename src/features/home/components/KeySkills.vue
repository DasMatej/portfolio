<template>
  <div class="d-flex flex-wrap">
    <div v-for="value in info" class="mx-2 my-1">
      <div class="circle">{{ value.text }}</div>
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

<style scoped>
.circle {
  border-radius: 15px;
  background-color: #ff4d4d0d;
  padding: 7px 14px;
}
.circle:hover {
  background-color: #fc5e5e0d;
}
</style>
