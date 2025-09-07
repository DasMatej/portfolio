<template>
  <div v-for="value in info">
    <Icon :icon="value.icon" width="24" height="24" />
    <span>{{ value.text }}</span>
  </div>
</template>

<script setup lang="ts">
const BIRTHDAY = new Date(1998, 11, 22);
const YEARS_OF_WORK = new Date(2021, 9, 1);

const calculateYear = (date: Date) => {
  const currDate = new Date();
  const age = currDate.getFullYear() - date.getFullYear();
  const hasBirthdayPassed =
    currDate.getMonth() > date.getMonth() ||
    (currDate.getMonth() === date.getMonth() &&
      currDate.getDate() >= date.getDate());
  return hasBirthdayPassed ? age : age - 1;
};

const info = [
  { icon: "mi:location", text: "Based in Macedonia, Skopje" },
  {
    icon: "healthicons:old-man-outline",
    text: `${calculateYear(BIRTHDAY)} Years Old`,
  },
  { icon: "nimbus:code", text: "Senior Software Engineer / Team Lead" },
  {
    icon: "solar:medal-ribbons-star-broken",
    text: `${calculateYear(YEARS_OF_WORK) + 1}+ Years of experience`,
  },
];
</script>

<style scoped></style>
