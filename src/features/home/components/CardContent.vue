<template>
  <div class="card-content">
    <div>
      <div>{{ job.year }}</div>
      <div>{{ job.workingTime }}</div>
    </div>
    <div>
      <div>{{ job.title }}</div>
    </div>
    <div>
      <div>
        <div>{{ job.subTitle }}</div>
        <div>dot</div>
        <div>{{ job.location }}</div>
      </div>
    </div>
    <div>
      <div>{{ job.details }}</div>
    </div>
    <div>
      <div v-for="point in job.points">
        <div>{{ point.img }}</div>
        <div>{{ point.details }}</div>
      </div>
    </div>
    <div>
      <div v-for="tech in job.techs">
        {{ tech }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WorkingExperience } from "../types/WorkingExperience";
const props = defineProps<{
  job: Partial<WorkingExperience>;
}>();
</script>
<style scoped>
.card-content h3 {
  font-size: 1.3rem;
  font-weight: bold;
}

.card-content p {
  margin-top: 5px;
}

.card-content span {
  font-size: 0.85rem;
  opacity: 0.7;
}
</style>
