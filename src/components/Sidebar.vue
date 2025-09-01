<template>
  <div>
    <RouterLink to="/">Me</RouterLink>
    <RouterLink to="/about">Skills</RouterLink>
    <RouterLink to="/contact">Projects</RouterLink>
    <RouterLink to="/Projects">Work Experience</RouterLink>
    <RouterLink to="/Projects">Contact Me</RouterLink>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
