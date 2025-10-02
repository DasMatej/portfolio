<template>
  <div class="d-flex flex-wrap">
    <div v-for="skill in displayedSkills" :key="skill.title" class="me-2 my-1">
      <div
        class="mt-circle skill-color"
        :style="{ '--bubble-hover-color': skill.color }"
      >
        {{ skill.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillBubble } from "../types/SkillBubble";
import { computed } from "vue";

const props = defineProps<{
  skills: Partial<SkillBubble>[];
  limit?: number;
}>();

const displayedSkills = computed(() =>
  props.limit ? props.skills.slice(0, props.limit) : props.skills
);
</script>

<style scoped></style>
