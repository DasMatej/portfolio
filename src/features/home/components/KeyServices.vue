<template>
  <div v-for="value in info">
    <Icon
      :icon="value.icon"
      width="24"
      height="24"
      class="mt-ft-color-red me-2"
    />
    <span>{{ value.text }}</span>
  </div>
</template>

<script setup lang="ts">
const info = [
  {
    icon: `carbon:development`,
    text: "Full Stack Development (ASP.NET & Vue.js / React.js / jQuery)",
  },
  {
    icon: `mdi:database-cog`,
    text: "Database Design & Optimization (SQL, Microsoft SQL Server, EF Core)",
  },
  {
    icon: `pixel:open-ai`,
    text: "Intelligent Chatbot Development (AI & NLP)",
  },
  {
    icon: `material-symbols-light:web`,
    text: "Modern Web Applications & UI Design",
  },
  {
    icon: `carbon:chart-custom`,
    text: "Custom Solutions Tailored to Your Goals",
  },
  {
    icon: `ph:fediverse-logo-duotone`,
    text: "Flexible & Adaptable to Diverse Project Needs",
  },
];
</script>

<style scoped></style>
