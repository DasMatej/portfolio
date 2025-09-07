<template>
  <div class="row">
    <div v-for="value in info" class="col-3">
      <div class="circle">
        <div>{{ value.text }}</div>
        <div>{{ value.small }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const info = [
  { text: "Senior", small: "Professional Level" },
  { text: "500+", small: "Features & Tasks Completed" },
  { text: "5+", small: "Major Projects / Clients" },
  { text: "Mentor", small: "Team Lead & Guidance" },
];
</script>

<style scoped>
.circle {
  border-radius: 15px;
  background-color: #ff4d4d0d;
  padding: 40px;
}
.circle:hover {
  background-color: #fc5e5e0d;
}
</style>
